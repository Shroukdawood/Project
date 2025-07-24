import { useFormik } from "formik";
import React from "react";
import { Breadcrumb, Button, Container, Form, InputGroup } from "react-bootstrap";
import { bool, mixed, number, object, ref, string } from "yup";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { registration } = useAuthContext();
  const countries = ["England", "France", "USA"];
  const staties = [
    {
      name: "London",
      country: "England",
    },
    {
      name: "Manchester",
      country: "England",
    },
    {
      name: "Parice",
      country: "France",
    },
    {
      name: "Bondy",
      country: "France",
    },
    {
      name: "New Yourk",
      country: "USA",
    },
    {
      name: "Chucago",
      country: "USA",
    },
  ];
  const navigate = useNavigate();
  const registerForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      country: "",
      state: "",
      email: "",
      password: "",
      confirmPassword: "",
      sign: "",
    },
    onSubmit: (values) => {
      console.log(values);

      registration(values, (res) => {
        if (res.status == 201) {
          navigate("/home");
        } else {
          alert("not valid");
        }
      });
    },
    validationSchema: object({
      firstName: string().min(3).required(),
      lastName: string().min(3).required(),
      age: number().min(18).max(50).required(),
      gender: mixed().oneOf(["male", "female"]).required(),
      country: mixed().oneOf(countries).required(),
      state: mixed()
        .oneOf(staties.map((state) => state.name))
        .required(),
      email: string().email().required(),
      password: string()
        .required("Password is Required")
        .min(8)
        .max(20)
        .matches(/[A-Z]/, "capital letter")
        .matches(/[a-z]/, "lower letter")
        .matches(/[0-9]/, "number from 0 to 9")
        .matches(/[@$!%?&]/, "must inclusing any of @$!%?&")
        .matches(/^\S*$/, "no space"),
      confirmPassword: string()
        .oneOf([ref("password"), null])
        .required(),
      sign: bool().required(),
    }),
  });

  return (
    <>
    <Container style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'flex-end' }}>
      <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Register Page</div>
      <Breadcrumb>
        <Link to='/' className="me-4" style={{ textDecoration: 'none', color: "black" }}>Home/</Link>
        <Link to='/' className="me-4" style={{ textDecoration: 'none', color: "black" }}>Pages/</Link>
        <Breadcrumb.Item active>register</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
    <div className="container" style={{ textAlign: "start" }}>
        <div className='" row justify-content-center '>
          <div className="col-md-6">
            <h2>Registertion</h2>
            <Form onSubmit={registerForm.handleSubmit}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    {...registerForm.getFieldProps("firstName")}
                    placeholder="Enter First Name"
                    isInvalid={registerForm.errors.firstName} />
                  <Form.Control.Feedback type="invalid">
                    {registerForm.errors.firstName &&
                      registerForm.touched.firstName}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    {...registerForm.getFieldProps("lastName")}
                    placeholder="Enter Last Name"
                    isInvalid={registerForm.errors.lastName} />
                  <Form.Control.Feedback type="invalid">
                    {registerForm.errors.lastName &&
                      registerForm.touched.lastName}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    {...registerForm.getFieldProps("email")}
                    placeholder="Enter Email"
                    isInvalid={registerForm.errors.email} />
                  <Form.Control.Feedback type="invalid">
                    {registerForm.errors.email && registerForm.touched.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="age">
                <Form.Label>Age</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    {...registerForm.getFieldProps("age")}
                    type="number"
                    placeholder="Enter Age"
                    isInvalid={registerForm.errors.age && registerForm.touched.age} />
                  <Form.Control.Feedback type="invalid">
                    {registerForm.errors.age}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <InputGroup hasValidation>
                  <Form.Check
                    className="me-2"
                    {...registerForm.getFieldProps("gender")}
                    type="radio"
                    value="male"
                    label="Male"
                    isInvalid={registerForm.errors.gender && registerForm.touched.gender}
                    id="male" />
                  <Form.Check
                    className="me-2"
                    {...registerForm.getFieldProps("gender")}
                    type="radio"
                    value="female"
                    label="Female"
                    isInvalid={registerForm.errors.gender && registerForm.touched.gender}
                    id="female" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    {...registerForm.getFieldProps("country")}
                    isInvalid={registerForm.errors.country && registerForm.touched.country}
                  >
                    <option>Select Country</option>
                    {countries &&
                      countries.map((country, i) => (
                        <option key={i} value={country}>
                          {country}
                        </option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {registerForm.errors.country}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="state">
                <Form.Label>State</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select
                    {...registerForm.getFieldProps("state")}
                    isInvalid={registerForm.errors.state && registerForm.touched.state}
                  >
                    <option>Select State</option>
                    {staties &&
                      staties
                        .filter(
                          (state) => state.country == registerForm.values.country
                        )
                        .map((state, i) => (
                          <option key={i} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {registerForm.errors.country}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...registerForm.getFieldProps("password")}
                  type="password"
                  placeholder="Password" />
                <Form.Control.Feedback type="invalid">
                  {registerForm.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  {...registerForm.getFieldProps("confirmPassword")}
                  type="password"
                  placeholder="Password" />
                <Form.Control.Feedback type="invalid">
                  {registerForm.errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="sign">
                <InputGroup hasValidation>
                  <Form.Check
                    className="me-2"
                    {...registerForm.getFieldProps("sign")}
                    type="checkbox"
                    label="I confirm"
                    isInvalid={registerForm.errors.sign && registerForm.touched.sign} />
                  <Form.Control.Feedback type="invalid">
                    {registerForm.errors.sign}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Button variant="light" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div></>
  );
}
