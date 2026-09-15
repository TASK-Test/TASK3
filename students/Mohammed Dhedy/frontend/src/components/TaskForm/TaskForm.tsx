import styles from "./TaskForm.module.css";

import { useEffect, useState } from "react";
import type { Priority, Status } from "../../types/task";
import SelectField from "../InputFields/SelectField";
import TextField from "../InputFields/TextField";
import { getStatuses } from "../../api/client";
import ActionButton from "../ActionButton/ActionButton";
import QuickMessage from "../QuickMessaage/QuickMessage";
type fieldsType = {
  title: string;
  description: string;
  priority: Priority;
  targetDate: string;
  statusId: number;
};
const TaskForm = () => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [formFields, setFormFields] = useState<fieldsType>(
    {
      title: "",
      description: "",
      priority: "LOW",
      targetDate: "",
      statusId: 0,
    },
  );

  useEffect(() => {
    const getRes = async () => {
      try {
        const response: Status[] = await getStatuses();
        const firstStatus = response[0];
        if (!firstStatus) {
          throw new Error("No statuses available. Add a status before creating a task.");
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
  },[]);
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ ...formFields, createdById: 1 });
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
          <TextField
            label="Title"
            type="text"
            placeHolder="enter task title"
            fieldValue={formFields.title}
            setFieldValue={(value: string) =>
              setFormFields((prev) => ({ ...prev, title: value }))
            }
          />
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
            optionsList={["LOW", "MEDIUM", "HIGH"]}
          />
          <ActionButton title="Submit" />
        </form>
      )}
    </>
  );
};
export default TaskForm;
