import styles from "./InputFields.module.css";
type FieldsProps = {
  fieldValue: string;
  setFieldValue: (value: string) => void;
  placeHolder: string;
  type: string;
  label: string;
};
const TextField = ({
  fieldValue,
  setFieldValue,
  placeHolder,
  type,
  label,
}: FieldsProps) => {
  const fieldId = `${label}-${type}`.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.fieldParent}>
      <label htmlFor={fieldId}>{label}</label>
      <input
        id={fieldId}
        className={styles.inputField}
        type={type}
        value={fieldValue}
        placeholder={placeHolder}
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </div>
  );
};
export default TextField;
