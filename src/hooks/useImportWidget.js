import { useEffect } from "react";

const useImportWidget = ({ html, elId }) => {
  useEffect(() => {
    if (html) {
      let widget = document.createElement("div");

      widget.innerHTML = html;
      document.getElementById(elId)?.appendChild(widget);

      return () => {
        document.getElementById(elId)?.removeChild(widget);
      };
    }
  }, [html, elId]);
};

export default useImportWidget;
