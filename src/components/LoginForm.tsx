import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { NewUser as User } from "../pages/Register";

export const LoginForm = () => {
  const { setUser } = useUser();
  const { register, handleSubmit } = useForm<User>();

  const logIn = (data: User) => {
    const users = localStorage.getItem("users") ?? "[]";
    const usersArray: User[] = JSON.parse(users);
    const matchingUser = usersArray.find(
      (user) => data.email === user.email && data.password === user.password
    );
    setUser(matchingUser);
    localStorage.setItem("currentUser", JSON.stringify(matchingUser));
  };

  return (
    <Form onSubmit={handleSubmit(logIn)}>
      <FloatingLabel label="Enter email" className="mb-3">
        <Form.Control type="email" {...register("email")} />
      </FloatingLabel>
      <FloatingLabel label="Enter Password" className="mb-3">
        <Form.Control type="password" {...register("password")} />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};
