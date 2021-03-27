import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserMenu from "./UserMenu";
import routes from "../../routes";
import { useSelector } from "react-redux";
import { getStatusLogOn } from "../../redux/status/statusSelectors";
import PublicMenu from "./PublicMenu";

export default function Navigation() {
  const logOn = useSelector(getStatusLogOn);

  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        className="justify-content-between"
      >
        <Nav.Item>
          <Link to={routes.home} className="nav-link">
            Главная
          </Link>
        </Nav.Item>
        {logOn ? <UserMenu /> : <PublicMenu />}
      </Nav>
    </>
  );
}
