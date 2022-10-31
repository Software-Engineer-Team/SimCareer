import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@routes/index";

function App() {
  return (
    <Routes>
      {routes.map(({ path, element: Page }, idx) => {
        if (path === "/") {
          return (
            <Route key={idx} path={path} element={<Navigate to={"/login"} />} />
          );
        }
        return <Route key={idx} path={path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default App;
