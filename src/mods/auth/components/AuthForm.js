import React from 'react';
import {useForm} from "../../../hooks/form-hook";
import './AuthForm.css';
import {Input} from "../../../components/Form/Input/Input";
import {VALIDATOR_EMAIL, VALIDATOR_REQUIRE} from "../../../util/validators";
import {Button} from "../../../components/Form/Button/Button";

export const AuthForm = props => {
  const [formState, handleInput] = useForm({
    inputs: {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  })

  return (
    <form className="auth-form" onSubmit={props.onSubmit}>
      <h2 className="center">USER LOGIN</h2>
      <Input
        id="email"
        element="input"
        type="email"
        label="Email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email."
        onChange={() => {}}
        onInput={handleInput}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter at least 10 characters."
        onChange={() => {}}
        onInput={handleInput}
      />
      <Button
        type="submit"
        className="center"
        disabled={!formState.isValid}
      >
        Login
      </Button>
    </form>
  );
};
