import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/contacts/contactsOperations";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    ({ target }) => {
      setInputValues({ ...inputValues, [target.name]: target.value });
    },
    [inputValues]
  );

  // const [checked, setChecked] = useState();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(loginUser(inputValues));

      setInputValues({ name: "", password: "" });
    },
    [dispatch, inputValues]
  );

  // handleCheked = (e) => {
  //   const { statusRemember } = this.props;
  //   const check = e.target.checked;
  //   statusRemember(check);
  // };

  return (
    <Container>
      <br />
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <h2>Вход</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                suggested="email"
                name="email"
                value={inputValues.email}
                autoComplete="email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Мы никому не передаем адрес вашей электронной почты.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                suggested="password"
                name="password"
                value={inputValues.password}
                autoComplete="password"
                onChange={handleChange}
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Запомнить меня"
                checked={checked}
                onChange={setChecked}
              />
            </Form.Group> */}
            <Button variant="primary" type="button" onClick={handleSubmit}>
              Войти
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
