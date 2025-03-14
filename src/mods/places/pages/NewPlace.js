import React from 'react';
import {Input} from "../../../components/Form/Input/Input";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../../util/validators";
import {Button} from "../../../components/Form/Button/Button";
import { useForm } from "../../../hooks/form-hook";

import './PlaceForm.css';

const NewPlace = () => {
  const [formState, handleInput] = useForm({
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

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
