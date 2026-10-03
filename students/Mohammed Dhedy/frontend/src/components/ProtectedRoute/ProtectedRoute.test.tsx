import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { expect, test } from "vitest";
import { AuthContext } from "../../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const renderProtectedRoute = (isAuthenticated: boolean) => {
  render(
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser: null,
        login: () => {},
        logout: () => {},
      }}
    >
      <MemoryRouter initialEntries={["/tasks"]}>
        <Routes>
          <Route path="/login" element={<h1>login page</h1>} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <h1>tasks page</h1>
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>,
  );
};

test("redirect logged-out users to login", () => {
  renderProtectedRoute(false);
  expect(
    screen.getByRole("heading", { name: "login page" }),
  ).toBeInTheDocument();
});

test("renders protected content for loggen-in users", () => {
  renderProtectedRoute(true);
  expect(
    screen.getByRole("heading", { name: "tasks page" }),
  ).toBeInTheDocument();
});
