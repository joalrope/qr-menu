import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import {} from "antd";

// import { startLogin } from '../../../../../actions/auth';
// import history from '../../../../../helpers/history/history';
import "./login.css";

const { Title } = Typography;

export const LoginForm = () => {
  // const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [remember, setRemember] = useState(false);

  const onFinish = (/* { email, password } */) => {
    // dispatch(startLogin(email, password));

    form.resetFields();
  };

  const onChangeRemember = () => {
    setRemember(!remember);
  };

  const handleShowRegister = () => {
    // history.push('/register');
  };

  const handleShowPasswordForgot = () => {
    // history.push('/forgot');
  };

  return (
    <Row justify="center">
      <Col>
        <Form
          name="login"
          form={form}
          className="--form__container login__form"
          onFinish={onFinish}
          initialValues={{ remember: { remember } }}
          autoComplete="true"
        >
          <Title level={4}>Iniciar Sesión</Title>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Debe introducir una dirección de correo válida!",
              },
              {
                required: true,
                message: "Por Favor ingrese su dirección de correo!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Correo"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Por Favor ingrese la contraseña!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item>
            <Col style={{ width: "100%" }}>
              <Form.Item
                name="remember"
                valuePropName={remember ? "checked" : "unChecked"}
                style={{ width: "100%" }}
              >
                <Checkbox
                  className="--remember-check"
                  onChange={onChangeRemember}
                >
                  Recordarme
                </Checkbox>
              </Form.Item>

              <a
                className="--login-form__forgot"
                onClick={handleShowPasswordForgot}
              >
                Olvidé mi Contraseña
              </a>
            </Col>
          </Form.Item>

          <Form.Item>
            <Col className="--login-goto__text" onClick={handleShowRegister}>
              <Button
                type="primary"
                htmlType="submit"
                className="--login-form__button"
              >
                Ingresar
              </Button>
              No tiene cuenta?
              <Link className="--login-goto__link" to="/register">
                Registrese!
              </Link>
            </Col>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
