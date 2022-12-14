import { useState } from "react";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { User } from "../context/UserContext";

export const LoginForm = () => {
  const { setUser } = useUser();
  const { register, handleSubmit } = useForm<User>();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const logIn = (data: User) => {
    const users = localStorage.getItem("users") ?? "[]";
    const usersArray: User[] = JSON.parse(users);
    const matchingUser = usersArray.find(
      (user) => data.email === user.email && data.password === user.password
    );
    if (matchingUser) {
      setUser(matchingUser);
      localStorage.setItem("currentUser", JSON.stringify(matchingUser));
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Alert variant="danger" show={error}>
        User and password do not match
      </Alert>
      <Form onSubmit={handleSubmit(logIn)}>
        <FloatingLabel label="Enter email" className="mb-3">
          <Form.Control type="email" {...register("email")} required />
        </FloatingLabel>
        <FloatingLabel label="Enter Password" className="mb-3">
          <Form.Control type="password" {...register("password")} required />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </>
  );
};
