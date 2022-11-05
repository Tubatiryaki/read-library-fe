import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { HiUserGroup } from "react-icons/hi";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { getUser, login } from "../../../../../api/user-service";
import { useFormik } from "formik";
import secureLocalStorage from "react-secure-storage";
import { loginFailed, loginSuccess } from "../../../../../store/slices/AuthSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const initialValues={
    email:"",
    password:"",
  };
  const validationSchema = Yup.object({
    email:Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("1Please enter your password",)
  });
  const onSubmit= async (values)=>{
    setLoading(true);
 
  try {
    const respAuth= await login(values);
    secureLocalStorage.setItem("token", respAuth.data.token);

    const respUser = await getUser();
    dispatchEvent(loginSuccess(respUser.data));

    navigate("/");

  } catch (err) {
    dispatch(loginFailed());
    Toast(err.response.data.message, "error");
  }finally{
    setLoading(false);
  }
  }
  const formik =useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
 

  

  return (
    <Container className="account">
      <Row className="row">
        <Col className="bcg">
          <HiUserGroup />

          <Form noValidate onSubmit={formik.handleSubmit }className="account-login">
            <div className="link">
              <Link as={Link} to="/">
                Login
              </Link>
              <Link as={Link} to="/register">
                Register
              </Link>
            </div>
            <div className="mail">
              <Form.Group className="mb-3">
                <Form.Control type="email" 
                placeholder="Email"{...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
                />

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button className="mb-3" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
