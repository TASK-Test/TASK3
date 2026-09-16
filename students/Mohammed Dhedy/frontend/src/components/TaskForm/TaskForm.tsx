import styles from "./TaskForm.module.css";

import { useEffect, useState } from "react";
import type { Priority, Status, TaskRequest } from "../../types/task";
import SelectField from "../InputFields/SelectField";
import TextField from "../InputFields/TextField";
import { createTask, getStatuses } from "../../api/client";
import ActionButton from "../ActionButton/ActionButton";
import QuickMessage from "../QuickMessaage/QuickMessage";
import { useNavigate } from "react-router-dom";
type fieldsType = {
  title: string;
  description: string;
  priority: Priority;
  targetDate: string;
  statusId: number;
};
const TaskForm = () => {
  const navigate = useNavigate();
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [error, setError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [validateError, setValidateError] = useState<{
    title?: string;
    targetDate?: string;
  }>({});
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
        const response: Status[] = await getStatuses();
        const firstStatus = response[0];
        if (!firstStatus) {
          throw new Error(
            "No statuses available. Add a status before creating a task.",
          );
        }
        setStatuses(response);
        setFormFields((prev) => ({ ...prev, statusId: firstStatus.id }));
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "could not fetch statuses!",
        );
      } finally {
        setLoading(false);
      }
    };
    getRes();
  }, []);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    const errors = { title: "", targetDate: "" };
    e.preventDefault();
    setSubmitError("");
    const payload: TaskRequest = {
      ...formFields,
      createdById: 1,
      title: formFields.title.trim(),
      description: formFields.description.trim(),
    };
    if (payload.title.trim() === "") {
      errors.title = "title cant be empty !";
    }
    if (payload.targetDate.trim() === "") {
      errors.targetDate = "target date cant be empty !";
    } else {
      const date = new Date(payload.targetDate);
      if (
        Number.isNaN(date.getTime()) ||
        date.toISOString().slice(0, 10) !== payload.targetDate
      ) {
        errors.targetDate = "Enter a valid date";
      }
    }
    setValidateError(errors);
    if (errors.title.length > 0 || errors.targetDate.length > 0) {
      return;
    }
    try {
      const response = await createTask(payload);
      console.log(response);
      navigate("/tasks");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "something went wrong !",
      );
    }
  };
  return (
    <>
      {loading ? (
        <QuickMessage message="loading ..." />
      ) : error ? (
        <QuickMessage message={error} />
      ) : (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h2>Create New Task</h2>
          <p style={{ color: "red" }}>{submitError}</p>
          <TextField
            label="Title"
            type="text"
            placeHolder="enter task title"
            fieldValue={formFields.title}
            setFieldValue={(value: string) =>
              setFormFields((prev) => ({ ...prev, title: value }))
            }
          />
          <p style={{ color: "red" }}>{validateError.title}</p>
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
            setFieldValue={(value: string) =>
              setFormFields((prev) => ({ ...prev, targetDate: value }))
            }
          />
          <p style={{ color: "red" }}>{validateError.targetDate}</p>
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
          <ActionButton title="Submit" />
        </form>
      )}
    </>
  );
};
export default TaskForm;
