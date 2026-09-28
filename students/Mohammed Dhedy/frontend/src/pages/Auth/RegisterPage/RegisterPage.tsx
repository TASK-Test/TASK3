import { useState } from "react";
import styles from "../forms.module.css";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../../components/ActionButton/ActionButton";
import TextField from "../../../components/InputFields/TextField";
import QuickMessage from "../../../components/QuickMessage/QuickMessage";
import { Register } from "../../../api/client";
import { ApiError } from "../../../api/ApiError";
import type { RegisterRequest } from "../../../types/authTypes";
type formFieldsType = {
  username: string;
  password: string;
  displayName: string;
  email: string;
};
type formFieldsErrors = {
  password: string | null;
  email: string | null;
  username: string | null;
};
const RegisterPage = () => {
  const navigate = useNavigate();
  const [formFeilds, setFormFeilds] = useState<formFieldsType>({
    username: "",
    email: "",
    password: "",
    displayName: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<formFieldsErrors>({
    username: null,
    password: null,
    email: null,
  });
  const validateFormFields = (): formFieldsErrors => {
    const errors = {
      email: formFeilds.email.trim() === "" ? "email cant be empty" : null,
      password:
        formFeilds.password.trim() === "" ? "password cant be empty" : null,
      username:
        formFeilds.username.trim() === "" ? "username cant be empty" : null,
    };

    setFieldErrors(errors);
    return errors;
  };
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({
      username: null,
      password: null,
      email: null,
    });
    const errors: formFieldsErrors = validateFormFields();
    if (errors.email || errors.password || errors.username) return;
    try {
      const payload: RegisterRequest = {
        displayName: formFeilds.displayName,
        email: formFeilds.email,
        password: formFeilds.password,
        username: formFeilds.username,
      };
      await Register(payload);
      navigate("/login", { replace: true });
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "something went wrong!",
      );
      if (error instanceof ApiError && error.fieldErrors) {
        setFieldErrors({
          username: error.fieldErrors.username ?? null,
          password: error.fieldErrors.password ?? null,
          email: error.fieldErrors.email ?? null,
        });
      }
    }
  };
  return (
    <>
      <h2 className={styles.pageHeader}>Create New Account</h2>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        {error && <QuickMessage type="error" message={error} />}
        <TextField
          fieldValue={formFeilds.username}
          label="Username"
          placeHolder="enter your username"
          type="text"
          setFieldValue={(value: string) => {
            setFormFeilds((prev) => ({ ...prev, username: value }));
            if (value.trim().length > 0)
              setFieldErrors((prev) => ({ ...prev, username: null }));
          }}
        />
        {fieldErrors.username && (
          <QuickMessage type="error" message={fieldErrors.username} />
        )}
        <TextField
          fieldValue={formFeilds.email}
          label="Email"
          placeHolder="enter your Email"
          type="email"
          setFieldValue={(value: string) => {
            setFormFeilds((prev) => ({ ...prev, email: value }));
            if (value.trim().length > 0)
              setFieldErrors((prev) => ({ ...prev, email: null }));
          }}
        />
        {fieldErrors.email && (
          <QuickMessage type="error" message={fieldErrors.email} />
        )}
        <TextField
          fieldValue={formFeilds.displayName}
          label="Display Name"
          placeHolder="enter your display name"
          type="text"
          setFieldValue={(value: string) => {
            setFormFeilds((prev) => ({ ...prev, displayName: value }));
          }}
        />
        <TextField
          fieldValue={formFeilds.password}
          label="Password"
          placeHolder="enter your Password"
          type="password"
          setFieldValue={(value: string) => {
            setFormFeilds((prev) => ({ ...prev, password: value }));
            if (value.trim().length > 0)
              setFieldErrors((prev) => ({ ...prev, password: null }));
          }}
        />
        {fieldErrors.password && (
          <QuickMessage type="error" message={fieldErrors.password} />
        )}
        <ActionButton title="Register" />
        <p className={styles.login}>
          already have account? <Link to="/login">login</Link>
        </p>
      </form>
    </>
  );
};
export default RegisterPage;
