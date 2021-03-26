import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { getUserInfo } from "../../redux/contacts/contactsSelectors";

function UserMenu({ user }) {
  return (
    <>
      {!user ? (
        <Spinner animation="border" />
      ) : (
        <Nav
          variant="tabs"
          defaultActiveKey="/home"
          className="justify-content-center"
        >
          <Nav.Link eventKey="disabled" disabled>
            Привет {user.name}
          </Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Email: {user.email}
          </Nav.Link>
          <Nav.Item>
            <Link to={routes.contacts} className="nav-link">
              Мои контакты
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={routes.logout} className="nav-link">
              Выйти
            </Link>
          </Nav.Item>
        </Nav>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: getUserInfo(state),
  };
};

export default connect(mapStateToProps, null)(UserMenu);
