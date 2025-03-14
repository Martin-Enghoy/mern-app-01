import { useCallback, useReducer } from 'react';

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

export const useForm = ({inputs, isValid}) => {
  const [formState, dispatch]
    = useReducer(formReducer, {
    inputs,
    isValid,
  });

  const handleInput = useCallback((id, value, isValid) => {
    dispatch({ type: 'input_change', inputId: id, value, isValid });
  }, []);

  return [formState, handleInput];
};
