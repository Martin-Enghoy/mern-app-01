import React, {useState} from 'react';
import {useForm} from "../../../hooks/form-hook";
import './AuthForm.css';
import {Input} from "../../../components/Form/Input/Input";
import {VALIDATOR_EMAIL, VALIDATOR_REQUIRE} from "../../../util/validators";
import {Button} from "../../../components/Form/Button/Button";

export const AuthForm = props => {
  const [authState, setAuthState] = useState('LOGIN');

  const [formState, handleInput, setFormData] = useForm({
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

  const handleSwitchFormData = () => {
    if (authState === 'REGISTER') {
      setFormData({
        inputs: {
          ...formState.inputs,
          name: undefined,
        },
        isValid: formState.inputs.email.isValid && formState.inputs.password.isValid
      });
    } else {
      setFormData({
        inputs: {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        isValid: false,
      });
    }
  }

  return (
    <div className="auth-form">
      <form onSubmit={props.onSubmit}>
        <h2 className="center">USER {authState}</h2>
        {authState === 'REGISTER' && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name."
            onChange={() => {}}
            onInput={handleInput}
          />
        )}
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
          errorText="Please enter a password."
          onChange={() => {}}
          onInput={handleInput}
        />
        <Button
          type="submit"
          className="center"
          disabled={!formState.isValid}
        >
          {authState === 'LOGIN' ? 'Login' : 'Register'}
        </Button>
      </form>
      {authState === 'LOGIN' ? (
        <div className="mx-4 flex flex-row gap-2">Not registered yet? <div className="link-text hover:link-text cursor-pointer" onClick={() => {
          setAuthState('REGISTER')
          handleSwitchFormData()
        }}>Register.</div></div>
      ) : (
        <div className="mx-4 flex flex-row gap-2">Already registered? <div className="link-text hover:link-text cursor-pointer" onClick={() => {
          setAuthState('LOGIN')
          handleSwitchFormData()
        }}>Login.</div></div>
      )}
    </div>
  );
};
