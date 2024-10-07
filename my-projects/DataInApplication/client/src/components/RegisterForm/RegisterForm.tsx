import {FC, FormEventHandler, useEffect, useRef, useState} from "react";
import {FormField} from "../FormField/FormField";
import {Button} from "../Button/Button";
import "./RegisterForm.css";
import {apiRegisterUser} from "../../api/api";
import {useMutation} from "@tanstack/react-query";
import {queryClient} from "../../App";
import {eventBus} from "../../App";

const inputNameErrorMessage = "Поле с именем должно содержать минимум 5 символов!"
const inputPasswordErrorMessage = "Поле с паролем должно содержать минимум 8 символов!"
const inputEmailErrorMessage = "Поле с почтой должно содержать минимум 5 символов!"

export const RegisterForm: FC = () => {

  const [valueName, setValueName] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueMail, setValueMail] = useState("")

  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')

  const inputFocus = useRef(null);
  useEffect(() => {inputFocus.current.focus()}, []);

  const registerMutation = useMutation({
    mutationFn: () => apiRegisterUser(valueName, valuePassword, valueMail),
  }, queryClient);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (valueName.length < 5 || valuePassword.length < 8 || valueMail.length < 5) {
      valueName.length < 5 && setNameError(inputNameErrorMessage)
      valuePassword.length < 8 && setPasswordError(inputPasswordErrorMessage)
      valueMail.length < 5 && setEmailError(inputEmailErrorMessage)
    } else {
      registerMutation.mutate()
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <FormField label="Имя">
        <input
          onChange={(e) => {
            setValueName(e.target.value);
            setNameError(undefined);
          }}
          ref={inputFocus}/>
        {nameError && <span className="span-error">{nameError}</span>}
      </FormField>

      <FormField label="Email">
        <input type={"email"} onChange={(e) => {
          setValueMail(e.target.value);
          setEmailError(undefined);
        }}/>
        {emailError && <span className="span-error">{emailError}</span>}
      </FormField>

      <FormField label="Пароль">
        <input onChange={(e) => {
          setValuePassword(e.target.value)
          setEmailError(undefined);
        }} type="password"/>
        {passwordError && <span className="span-error">{passwordError}</span>}
      </FormField>
      <Button type="submit" isLoading={registerMutation.isPending}>Зарегистрироваться</Button>
    </form>
  );
};
