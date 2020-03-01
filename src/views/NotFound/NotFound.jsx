import React from "react";
import { Alert } from "reactstrap";

const NotFound = () => {
  return (
    <div>
      <Alert color="success">
        <h4 className="alert-heading">Oop! page Not found</h4>
        <p>
          kindly check URL address. you may mistype it.
        </p>
      </Alert>
    </div>
  );
};

export default NotFound;
