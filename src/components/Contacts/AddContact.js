import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { addUserContact } from "../../redux/contacts/contactsOperations";

export default function AddContact() {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    name: "",
    lastName: "",
    number: "",
  });

  const handleChange = useCallback(
    ({ target }) => {
      setInputValues({ ...inputValues, [target.name]: target.value });
    },
    [inputValues]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(addUserContact(inputValues));
    },
    [dispatch, inputValues]
  );

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h2 className="row row-cols-md-5 justify-content-center">
            Добавить контакт
          </h2>
          {/* <Form> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="FirstName">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="name"
                placeholder="Имя"
                name="firstName"
                value={inputValues.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="SecondName">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="name"
                placeholder="Фамилия"
                name="secondName"
                value={inputValues.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Номер</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Введите номер"
                name="number"
                value={inputValues.number}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Добавить контакт
            </Button>
          </Form>
          {/* </Form> */}
        </Col>
      </Row>
    </Container>
  );
}
