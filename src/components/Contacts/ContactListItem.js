import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsOperations";

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch(removeContact);
  return (
    <Card
      className="col mb-5"
      border="primary"
      style={{ width: "18rem", margin: "10px", flex: "0 0 80%" }}
    >
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>Номер: {contact.number}</Card.Text>
        <Button
          variant="primary"
          type="button"
          id={contact.id}
          onClick={(e) => dispatch(removeContact(e.target.id))}
        >
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}
