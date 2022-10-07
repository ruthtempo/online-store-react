import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { NewUser as User } from "../pages/Register";

export const LoginForm = () => {
  const { setUser } = useUser();
  const { register, handleSubmit } = useForm<User>();

  const logIn = (data: User) => {
    const users = localStorage.getItem("users") ?? "[]";
    console.log(users);
    const usersArray: User[] = JSON.parse(users);
    const matchingUser = usersArray.find(
      (user) => data.email === user.email && data.password === user.password
    );
    console.log("matchin", matchingUser);
    setUser(matchingUser);
  };

  return (
    <Form onSubmit={handleSubmit(logIn)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("email")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <p className="mt-2">
        Don't have an account?{" "}
        <Link className="text-decoration-none" to="/register">
          Register
        </Link>
      </p>
    </Form>
  );
};
