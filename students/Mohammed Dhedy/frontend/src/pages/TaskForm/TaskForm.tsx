import styles from "./TaskForm.module.css";

import { useEffect, useState } from "react";
import type { Priority, Status, Task, TaskRequest } from "../../types/task";
import SelectField from "../../components/InputFields/SelectField";
import TextField from "../../components/InputFields/TextField";
import { createTask, getStatuses, getTask, updateTask } from "../../api/client";
import ActionButton from "../../components/ActionButton/ActionButton";
import QuickMessage from "../../components/QuickMessage/QuickMessage";
import { useNavigate, useParams } from "react-router-dom";
import { ApiError } from "../../api/ApiError";
type fieldsType = {
  title: string;
  description: string;
  priority: Priority;
  targetDate: string;
  statusId: number;
};
const TaskForm = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const isEdit: boolean = taskId !== undefined;
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [error, setError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [validateError, setValidateError] = useState<{
    title: string;
    targetDate: string;
  }>({ title: "", targetDate: "" });
  const [formFields, setFormFields] = useState<fieldsType>({
    title: "",
    description: "",
    priority: "LOW",
    targetDate: "",
    statusId: 0,
  });

  useEffect(() => {
    const getRes = async () => {
      try {
        if (isEdit) {
          const taskRes: Task = await getTask(Number(taskId));
          setFormFields({
            title: taskRes.title,
            description: taskRes.description || "",
            priority: taskRes.priority,
            targetDate: taskRes.targetDate,
            statusId: taskRes.status.id,
          });
        }
        const response: Status[] = await getStatuses();
        const firstStatus = response[0];
        if (!firstStatus) {
          throw new Error(
            "No statuses available. Add a status before creating a task.",
          );
        }
        setStatuses(response);
        if (!isEdit)
          setFormFields((prev) => ({ ...prev, statusId: firstStatus.id }));
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else if (isEdit) {
          setError("could not fetch task!");
        } else {
          setError("could not fetch statuses!");
        }
      } finally {
        setLoading(false);
      }
    };
    getRes();
  }, [isEdit, taskId]);

  const validateDate = (targetDate: string): string => {
    if (targetDate === "") {
      return "target date cant be empty !";
    } else {
      const date = new Date(targetDate);
      if (Number.isNaN(date.getTime())) {
        return "Enter a valid date";
      }
    }
    return "";
  };

  const validateFields = (payload: TaskRequest) => {
    const errors = { title: "", targetDate: "" };
    if (payload.title === "") {
      errors.title = "title cant be empty !";
    }
    errors.targetDate = validateDate(payload.targetDate);
    setValidateError(errors);
    return errors;
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    const payload: TaskRequest = {
      ...formFields,
      createdById: 1,
      title: formFields.title.trim(),
      description: formFields.description.trim(),
    };
    const errors = validateFields(payload);

    if (errors.title.length > 0 || errors.targetDate.length > 0) {
      return;
    }
    try {
      let response: Task;
      if (isEdit) {
        response = await updateTask(Number(taskId), payload);
      } else {
        response = await createTask(payload);
      }
      navigate("/tasks");
      console.log(response);
    } catch (error) {
      if (error instanceof ApiError && error.fieldErrors) {
        setValidateError({
          title: error.fieldErrors.title ?? "",
          targetDate: error.fieldErrors.targetDate ?? "",
        });
        return;
      }
      setSubmitError(
        error instanceof Error ? error.message : "something went wrong !",
      );
    }
  };
  return (
    <>
      {loading ? (
        <QuickMessage type="loading" message="loading statuses" />
      ) : error ? (
        <QuickMessage type="error" message={error} />
      ) : (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h2>{isEdit ? `Update Task #${taskId}` : "Create New Task"}</h2>
          {submitError.length > 0 && (
            <QuickMessage type="error" message={submitError} />
          )}
          <TextField
            label="Title"
            type="text"
            placeHolder="enter task title"
            fieldValue={formFields.title}
            setFieldValue={(value: string) => {
              setFormFields((prev) => ({ ...prev, title: value }));
              if (value.trim() !== "")
                setValidateError((prev) => ({ ...prev, title: "" }));
            }}
          />
          {validateError.title.length > 0 && (
            <QuickMessage type="error" message={validateError.title} />
          )}
          <TextField
            label="Description"
            type="text"
            placeHolder="enter task description"
            fieldValue={formFields.description}
            setFieldValue={(value: string) =>
              setFormFields((prev) => ({ ...prev, description: value }))
            }
          />
          <TextField
            label="Target Date"
            type="date"
            placeHolder="enter task target data"
            fieldValue={formFields.targetDate}
            setFieldValue={(value: string) => {
              setFormFields((prev) => ({ ...prev, targetDate: value }));
              if (validateDate(value) === "")
                setValidateError((prev) => ({ ...prev, targetDate: "" }));
            }}
          />
          {validateError.targetDate.length > 0 && (
            <QuickMessage type="error" message={validateError.targetDate} />
          )}
          <SelectField
            label="Status"
            fieldValue={String(formFields.statusId)}
            setFieldValue={(value) =>
              setFormFields((prev) => ({ ...prev, statusId: Number(value) }))
            }
            optionsList={statuses}
          />
          <SelectField
            label="Priority"
            fieldValue={formFields.priority}
            setFieldValue={(value) =>
              setFormFields((prev) => ({
                ...prev,
                priority: value as Priority,
              }))
            }
            optionsList={["LOW", "MEDIUM", "HIGH"] as Priority[]}
          />
          <ActionButton title={isEdit ? "Update" : "Submit"} />
        </form>
      )}
    </>
  );
};
export default TaskForm;
