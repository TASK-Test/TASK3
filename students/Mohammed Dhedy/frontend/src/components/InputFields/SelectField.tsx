import type { Status } from "../../types/task";
import styles from "./InputFields.module.css";

type FieldsProps = {
  fieldValue: string;
  setFieldValue: (value: string) => void;
  optionsList: Status[] | string[];
  label: string;
};
const SelectField = ({
  fieldValue,
  setFieldValue,
  optionsList,
  label,
}: FieldsProps) => {
  return (
    <div className={styles.fieldParent}>
      <label htmlFor="label" >{label}</label>
      <select
        id="label"
        className={styles.inputField}
        value={fieldValue}
        onChange={(e) => {
          setFieldValue(e.target.value);
        }}
      >
        {optionsList.map((o, index) => (
          <option key={index} value={typeof o === "string" ? o : o.id}>
            {typeof o === "string" ? o : o.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectField;
