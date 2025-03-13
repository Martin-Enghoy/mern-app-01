import React, { useCallback, useReducer } from 'react';
import {Input} from "../../../components/Form/Input/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../../util/validators";
import {Button} from "../../../components/Form/Button/Button";

import './NewPlace.css';

const formReducer = (state, action) => {
  if (action.type === 'input_change') {
    let formIsValid = true;

    for (const inputId in state.inputs) {
      if (inputId === action.inputId) {
        formIsValid = formIsValid && action.isValid;
      } else {
        formIsValid = formIsValid && state.inputs[inputId].isValid;
      }
    }

    return {
      ...state,
      inputs: {
        ...state.inputs,
        [action.inputId]: {
          value: action.value,
          isValid: action.isValid,
        },
      },
      isValid: formIsValid,
    };
  }

  return state;
}

const NewPlace = () => {
  const [formState, dispatch]
    = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const handleInput = useCallback((id, value, isValid) => {
    dispatch({ type: 'input_change', inputId: id, value, isValid });
  }, []);

  const handleSubmitPlace = event => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={handleSubmitPlace}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onChange={() => {}}
        onInput={handleInput}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 characters."
        onChange={() => {}}
        onInput={handleInput}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter an address."
        onChange={() => {}}
        onInput={handleInput}
      />
      <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
    </form>
  )
};

export default NewPlace;
