import { useEffect } from "react";

const useVisible = (elId) => {
  useEffect(() => {
    document.getElementById(elId).style.visibility = "visible";

    return () => {
      document.getElementById(elId).style.visibility = "hidden";
    };
  }, [elId]);
};

export default useVisible;
