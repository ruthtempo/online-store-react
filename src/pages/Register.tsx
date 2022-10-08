import { watch } from "fs";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type NewUser = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NewUser>();

  const onSubmit = (data: NewUser) => {
    let existingUsers = localStorage.getItem("users");
    const userArr: NewUser[] = existingUsers ? JSON.parse(existingUsers) : [];
    localStorage.setItem("users", JSON.stringify(userArr.concat(data)));
    navigate("/");
  };

  return (
    <Row>
      <Col
        xs={{ span: 12 }}
        sm={{ span: 8, offset: 2 }}
        md={{ span: 6, offset: 3 }}
        lg={{ span: 4, offset: 4 }}
        xxl={{ span: 4, offset: 4 }}
      >
        <Card className="text-center mt-4">
          <Card.Body>
            <Card.Title>Create an account</Card.Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FloatingLabel label="Full Name" className="mb-3">
                <Form.Control
                  type="text"
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
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Confirm password" className="mt-3">
                <Form.Control
                  {...register("confirmPassword", {
                    required: true,
                    validate: {
                      isPasswordMatch: (v) => {
                        if (v !== watch("password")) {
                          return "Your passwords do not match";
                        }
                      },
                    },
                  })}
                  type="password"
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword?.message}
                </Form.Control.Feedback>
              </FloatingLabel>
              <Button className="mt-3" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
