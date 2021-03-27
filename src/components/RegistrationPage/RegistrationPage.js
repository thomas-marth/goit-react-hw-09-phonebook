import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { registrationUser } from "../../redux/contacts/contactsOperations";
import { registrationError } from "../../redux/contacts/contactsActions";

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      if (inputValues.password === inputValues.confirmPassword) {
        dispatch(registrationUser(inputValues));
      } else {
        dispatch(registrationError("password dismach"));
      }

      setInputValues({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    },

    [dispatch, inputValues]
  );

  return (
    <Container>
      <br />
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h2>Регистрация</h2>
          <Form type="form">
            <Form.Group controlId="firstName">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="name"
                name="name"
                value={inputValues.name}
                placeholder="Имя"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                suggested="email"
                autoComplete="email"
                type="email"
                name="email"
                value={inputValues.email}
                placeholder="Введите email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Мы никому не передаем адрес вашей электронной почты.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                suggested="password"
                autoComplete="new-password"
                type="password"
                name="password"
                value={inputValues.password}
                placeholder="Ведите пароль"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Подтверждение пароля</Form.Label>
              <Form.Control
                suggested="confirmPassword"
                autoComplete="confirmPassword"
                type="password"
                name="confirmPassword"
                value={inputValues.confirmPassword}
                placeholder="Подтвердите пароль"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit}>
              Регистрация
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
