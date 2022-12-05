import { Route, Routes, Navigate } from "react-router";
import { lazy } from "react";

const TodoAppPage = lazy(() => import("./todo-app"));
const NotFoundPage = lazy(() => import("./not-found"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoAppPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};
