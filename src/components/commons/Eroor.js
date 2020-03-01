import React from "react";
import { Alert } from "reactstrap";

const ErrorMsg = () => {
  return (
    <div>
      <Alert color="warning">
        <h4 className="alert-heading">Oop! something happen</h4>
        <p>
          kindly refresh the browser. 
        </p>
      </Alert>
    </div>
  );
};

export default ErrorMsg;
