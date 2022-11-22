import ReactDom from "react-dom";
import useVisible from "@hooks/useVisible";
const Portal = ({ children }) => {
  useVisible("root-portal");

  return ReactDom.createPortal(
    children,
    document.getElementById("root-portal")
  );
};

export default Portal;
