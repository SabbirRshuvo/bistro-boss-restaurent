import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routes from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-7xl mx-auto ">
        <RouterProvider router={routes} />
      </div>
    </AuthProvider>
  </StrictMode>
);
