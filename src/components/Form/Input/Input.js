import React, { useReducer } from 'react';
import {validate} from "../../../util/validators";

import './Input.css';

const inputReducer = (state, action) => {
  if (action.type === 'change') {
    return {
      ...state,
      value: action.value,
      isValid: validate(action.value, action.validators),
    };
  } else if (action.type === 'touch') {
    return {
      ...state,
      isTouched: true,
    };
  }

  return state;
};

export const Input = props => {
  const [inputState, dispatch]
    = useReducer(inputReducer, { value: '', isValid: false });

  const handleOnChange = event => {
    dispatch({
      type: 'change',
      value: event.target.value,
      validators: props.validators,
    });
  };

  const handleTouch = () => {
    dispatch({ type: 'touch' });
  }

  const element = props.element === 'input' ? (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={handleOnChange}
      onBlur={handleTouch}
      value={inputState.value}
    />
  ) : (
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={handleOnChange}
      value={inputState.value}
    />
  );

  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}
