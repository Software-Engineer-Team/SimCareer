import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@routes/index";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";

function App() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setIsPageLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {isPageLoading && <LoadingAnimation />}
      <Routes>
        {routes.map(({ path, element: Page, type }, idx) => {
          if (path === "/") {
            return (
              <Route
                key={idx}
                path={path}
                element={<Navigate to={"/login"} />}
              />
            );
          }
          return (
            <Route
              key={idx}
              path={path}
              element={<Page isPageLoading={isPageLoading} type={type} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
