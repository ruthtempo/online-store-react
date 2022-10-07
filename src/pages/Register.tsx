import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

type NewUser = {
  name: string;
  email: string;
  password: string;
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUser>();

  const onSubmit = (data: NewUser) => {
    localStorage.setItem(data.email, JSON.stringify(data));
  };

  return (
    <Card
      style={{ maxWidth: 500 }}
      className="mt=4 d-flex position-relative top-50 start-50 translate-middle"
    >
      <Card.Body>
        <Card.Title>Registration</Card.Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel label="Full Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "This field is required" })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              {...register("email", { required: "an email is required" })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel label="Password">
            <Form.Control
              {...register("password", {
                required: "a password is required",
                minLength: {
                  value: 8,
                  message: "password length must be at least 8 characters",
                },
              })}
              type="password"
              placeholder="Password"
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </FloatingLabel>
          <Button className="mt-3" type="submit">
            Sign me in
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
