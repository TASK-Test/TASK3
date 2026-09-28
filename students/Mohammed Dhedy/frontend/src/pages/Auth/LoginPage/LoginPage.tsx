import { useState } from "react";
import ActionButton from "../../../components/ActionButton/ActionButton";
import styles from "../forms.module.css";
import TextField from "../../../components/InputFields/TextField";
import QuickMessage from "../../../components/QuickMessage/QuickMessage";
import { loginRequest } from "../../../api/client";
import type { LoginRequest, LoginResponse } from "../../../types/authTypes";
import useAuth from "../../../hooks/useAuth";
import { ApiError } from "../../../api/ApiError";
import { Link, useNavigate } from "react-router-dom";
type formFieldsType = {
  username: string;
  password: string;
};
type formFieldsErrors = {
  username: string | null;
  password: string | null;
};
const LoginPage = () => {
  const auth = useAuth();
  const { login } = auth;
  const navigate = useNavigate();
  const [formFeilds, setFormFeilds] = useState<formFieldsType>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<formFieldsErrors>({
    username: null,
    password: null,
  });
  const validateFields = (): formFieldsErrors => {
    const errors = {
      username:
        formFeilds.username.trim() === "" ? "username cant be empty" : null,
      password:
        formFeilds.password.trim() === "" ? "password cant be empty" : null,
    };
    setFieldErrors(errors);
    return errors;
  };
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setFieldErrors({ username: null, password: null });
    const errors = validateFields();
    if (errors.password || errors.username) return;
    try {
      const payload: LoginRequest = {
        password: formFeilds.password,
        username: formFeilds.username,
      };
      const loginResponse: LoginResponse = await loginRequest(payload);
      login(loginResponse.token);
      navigate("/tasks", { replace: true });
    } catch (error) {
      setError(error instanceof Error ? error.message : "something went wrong");
      if (error instanceof ApiError && error.fieldErrors) {
        setFieldErrors({
          username: error.fieldErrors.username ?? null,
          password: error.fieldErrors.password ?? null,
        });
      }
    }
  };
  return (
    <>
      <h2 className={styles.pageHeader}>Login To your Account</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.form}
      >
        {error && <QuickMessage type="error" message={error} />}
        <TextField
          fieldValue={formFeilds.username}
          label="Username"
          placeHolder="Enter your username"
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
          fieldValue={formFeilds.password}
          label="Password"
          placeHolder="Enter your password"
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
        <ActionButton title="Login" />
        <p className={styles.register}>
          dont have account? <Link to="/register">register</Link>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
