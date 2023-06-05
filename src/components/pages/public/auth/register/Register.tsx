import { RegisterForm } from "../../../../forms/RegisterForm";
import "./register.css";

export const Register = () => {
  return (
    <div className="--register__container">
      <div className="--register__form">
        <RegisterForm />
      </div>
    </div>
  );
};
