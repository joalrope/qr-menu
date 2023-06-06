// import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, Col, Form, Input, Modal, Row, Typography } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
// import { startRegister } from '../../../../../actions/auth';
// import history from '../../../../../helpers/history/history';
import "./register.css";

const { Title } = Typography;

interface IRegister {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export const RegisterForm = () => {
  //   const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleShowLogin = () => {
    // history.push('/login');
  };

  const onFinish = ({ name, email, password, confirm }: IRegister) => {
    if (password !== confirm) {
      Modal.error({
        title: "Datos no validos",
        content: [
          <>
            <span>{`Las contraseñas no coinciden.`}</span>
            <br />
            <span>{"Por Favor, introduzcalas nuevamente"}</span>
          </>,
        ],
        autoFocusButton: null,
        okText: "Entendido",
      });
      return;
    }
    console.log({ name, email, password });
    // dispatch(startRegister(name, email, password));
    //history.push('/home');
    form.resetFields();
  };

  return (
    <Row justify="center">
      <Col>
        <Form
          name="register"
          className="--form__container --register__form"
          onFinish={onFinish}
        >
          <Title level={4}>Registrarse</Title>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Por Favor ingrese el nombre de usuario!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nombre"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Debe introducir una dirección de correo válida!",
              },
              {
                required: true,
                message: "Por Favor ingrese una dirección de correo!",
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

          <Form.Item
            name="confirm"
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
              placeholder="Confirmar contraseña"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="--register-form__button"
            >
              Registrame
            </Button>
            <div className="--register-goto__text" onClick={handleShowLogin}>
              Ya tienes cuenta?
              <Link className="--register-goto__link" to="/login">
                Inicia sesión!
              </Link>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
