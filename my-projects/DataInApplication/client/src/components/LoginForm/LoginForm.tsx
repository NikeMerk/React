import "./LoginForm.css";
import {FormField} from "../FormField/FormField";
import {Button} from "../Button/Button";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {apiLogin} from "../../api/api";
import {queryClient} from "../../App";

const inputEmailErrorMessage = "Поле с именем должно содержать минимум 5 символов!"
const inputPasswordErrorMessage = "Поле с паролем должно содержать минимум 8 символов!"


export const LoginForm = () => {

  const [valueMail, setValueMail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const loginMutation = useMutation({
    mutationFn: () => apiLogin(valueMail, valuePassword),
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ["user", "me"]})
    }
  }, queryClient)

  const handleFormLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (valueMail.length < 5 || valuePassword.length < 8) {
      valueMail.length < 5 && setEmailError(inputEmailErrorMessage)
      valuePassword.length < 8 && setPasswordError(inputPasswordErrorMessage)
    } else {
      loginMutation.mutate();
    }
  }

  return (
      <form className="login-form" onSubmit={handleFormLogin}>
        <FormField label="Email">
          <input onChange={(e) => {
            setValueMail(e.target.value);
            setEmailError(undefined)
          }} type="email"/>
          {emailError && <span className="span-error">{emailError}</span>}
        </FormField>
        <FormField label="Пароль">
          <input onChange={(e) => {
            setValuePassword(e.target.value);
            setPasswordError(undefined)
          }} type="password"/>
          {passwordError && <span className="span-error">{passwordError}</span>}
        </FormField>
        <Button type="submit">Войти</Button>
      </form>
  );
};
