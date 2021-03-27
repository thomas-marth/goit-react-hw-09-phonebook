import React from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/contacts/contactsOperations";

export default function LogOut() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(logoutUser());
    history.push("/");
  };

  const handleCencel = () => {
    history.push("/contacts");
  };

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Подтверждение выхода</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Вы уверены, что хотите выйти?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" type="button" onClick={handleCencel}>
          Отмена
        </Button>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Выход
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
