import React from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ErrorMessage({ error }) {
  return (
    <Alert variant="danger">
      <Alert.Heading>Упс, что-то сломалось!</Alert.Heading>
      <p>{error}</p>
    </Alert>
  );
}

export default ErrorMessage;
