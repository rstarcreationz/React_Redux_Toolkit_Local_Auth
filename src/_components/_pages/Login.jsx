import React, { useState, useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  loginSuccess,
  registerSuccess,
} from "../../_reduxToolkit/_slice/authSlice";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { helperFunction } from "../_helpers/helperFunction";

export default function Login() {
  const [, forceUpdate] = useState("");
  const simpleValidator = useRef(
    new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } })
  );
  const navigate = useNavigate();
  const user = useSelector((state) => state);

  const dispatch = useDispatch();
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginDetail({ ...loginDetail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formvalid = simpleValidator.current.allValid();

    if (formvalid) {
      let result = await helperFunction.isLoggedInUserExist(
        loginDetail,
        user?.savedInfo
      );
      if (result?.isUserExist) {
        dispatch(loginSuccess(result?.userInfo));
        toast.success("welcome ! You are logged in successfully");
        navigate("/dashboard");
      } else {
        toast.error("Invalid login credential");
      }
    } else {
      simpleValidator.current.showMessages();
    }
  };

  return (
    <React.Fragment>
      <section className="_login_section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl={5}>
              <Card>
                <Card.Header className="text-center bg-primary border-none">
                  <h5 className="text-white">Login</h5>
                </Card.Header>
                <Card.Body className="text-start">
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="my-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <div className="mb-2">
                      {simpleValidator.current.message(
                        "Email",
                        loginDetail.email,
                        "required|email",
                        { className: "text-danger mb-2" }
                      )}
                    </div>

                    <Form.Group className="my-3">
                      <Form.Label>Your Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <div className="mb-2">
                      {simpleValidator.current.message(
                        "Password",
                        loginDetail.password,
                        "required",
                        { className: "text-danger mb-2" }
                      )}
                    </div>
                    <center>
                      <Button type="submit" className="mb-2">
                        Login
                      </Button>
                    </center>
                  </Form>

                  <center>
                    <h6>Don't have an account</h6>
                    <Link to="/register"> Sign Up Now </Link>
                  </center>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
