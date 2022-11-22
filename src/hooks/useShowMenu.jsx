import { useEffect, useState } from "react";

const useShowMenu = (showMenu, cb) => {
  useEffect(() => {
    const checkIsClickOutside = () => {
      if (showMenu) cb();
    };
    document.addEventListener("click", checkIsClickOutside);
    return () => {
      document.removeEventListener("click", checkIsClickOutside);
    };
  }, [showMenu, cb]);
};

export default useShowMenu;
