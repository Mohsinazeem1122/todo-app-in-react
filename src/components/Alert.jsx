import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 1000);
    () => clearTimeout(timeOut);
  });

  return <div className={type}>{msg}</div>;
};

export default Alert;
