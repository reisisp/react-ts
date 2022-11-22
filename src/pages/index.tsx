import { Route, Routes, Navigate } from "react-router";
import { lazy } from "react";

const TestPage = lazy(() => import("./test"));
const TodoAppPage = lazy(() => import("./todo-app"));
const NotFoundPage = lazy(() => import("./not-found"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/todo" element={<TodoAppPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};
