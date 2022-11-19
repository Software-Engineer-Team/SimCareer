import ReactDom from "react-dom";
const Portal = ({ children }) => {
  return ReactDom.createPortal(
    children,
    document.getElementById("root-portal")
  );
};

export default Portal;
