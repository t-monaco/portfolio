import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Error404 } from "./components/index.ts";
import { GlobalStyles } from "./styles.ts";
import { Analytics } from "@vercel/analytics/react";

// TODO: Move routes to separate file?
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyles />
        <RouterProvider router={router} />
        <Analytics />
    </React.StrictMode>
);
