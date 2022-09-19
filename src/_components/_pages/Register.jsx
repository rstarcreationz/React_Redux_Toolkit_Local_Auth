import React, { useState, useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  registerSuccess,
  savedSuccess,
} from "../../_reduxToolkit/_slice/authSlice";
import SimpleReactValidator from "simple-react-validator";
import { helperFunction } from "../_helpers/helperFunction";
import { toast } from "react-toastify";

export default function Register() {
  const [, forceUpdate] = useState("");
  const simpleValidator = useRef(
    new SimpleReactValidator({ autoForceUpdate: { forceUpdate: forceUpdate } })
  );

  const user = useSelector((state) => state);

  const [userDetails, setUserDetails] = useState({
    full_name: "",
    contact: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValid = simpleValidator.current.allValid();

    if (formValid) {
      let result = await helperFunction.isUserAlreadyExist(
        userDetails,
        user?.savedInfo
      );
      if (!result) {
        const array = [...user?.savedInfo];
        array.push(userDetails);
        dispatch(savedSuccess(array));
        navigate("/dashboard");
        toast.success(
          "You are sign up successfully ! Please login to continue"
        );
      } else {
        toast.error("Email or Contact is already exists");
      }
    } else {
      simpleValidator.current.showMessages();
    }
  };

  return (
    <React.Fragment>
      <section className="_login_section h-100">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl={5}>
              <Card>
                <Card.Header className="text-center bg-primary border-none">
                  <h5 className="text-white">Register</h5>
                </Card.Header>
                <Card.Body className="text-start">
                  <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="my-3">
                      <Form.Label>Your Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Full Name"
                        name="full_name"
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <div className="my-2">
                      {simpleValidator.current.message(
                        "FullName",
                        userDetails.full_name,
                        "required|text",
                        { className: "text-danger mb-2" }
                      )}
                    </div>

                    <Form.Group className="my-3">
                      <Form.Label>Your Contact</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Contact Number"
                        name="contact"
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <div className="my-2">
                      {simpleValidator.current.message(
                        "Contact",
                        userDetails.contact,
                        "required",
                        { className: "text-danger mb-2" }
                      )}
                    </div>

                    <Form.Group className="my-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <div className="my-2">
                      {simpleValidator.current.message(
                        "Email",
                        userDetails.email,
                        "required|email",
                        { className: "text-danger mb-2" }
                      )}
                    </div>

                    <Form.Group className="my-3">
                      <Form.Label>Your Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Password"
                      />
                    </Form.Group>
                    <div className="my-2">
                      {simpleValidator.current.message(
                        "Password",
                        userDetails.password,
                        "required",
                        { className: "text-danger mb-2" }
                      )}
                    </div>

                    <Form.Group className="my-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password Again"
                        name="confirm_password"
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <div className="my-2">
                      {simpleValidator.current.message(
                        "Confirm Password",
                        userDetails.confirm_password,
                        `required|in:${userDetails.password}`,
                        { className: "text-danger mb-2" }
                      )}
                    </div>

                    <center>
                      <Button type="submit" className="mb-2">
                        Sign Up
                      </Button>
                    </center>
                  </Form>

                  <center>
                    {" "}
                    <h6>Already have an account</h6>
                    <Link to="/"> Login Now </Link>
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
