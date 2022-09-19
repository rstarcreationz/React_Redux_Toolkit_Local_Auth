import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function MyProfile() {
  const user = useSelector((state) => state.loginInfo);

  return (
    <React.Fragment>
      <Row className="justify-content-center align-items-center">
        <Col xl={6}>
          <Card>
            <Card.Header className="text-center bg-primary border-none">
              <h5 className="text-white text-start">Profile Detail</h5>
            </Card.Header>

            <Card.Body className="p-0 text-start">
              <Table striped>
                <tbody>
                  <tr>
                    <td>FullName</td>
                    <td>{user.full_name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>{user.contact}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
