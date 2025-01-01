import React, { useState } from 'react';

import './Goal.css';
import PropTypes from "prop-types";

const GoalForm = ({ onAddGoal }) => {
  const [inputGoal, setInputGoal] = useState('');

  const handleAddGoal = (event) => {
    event.preventDefault();

    if (inputGoal) {
      const newGoal = {
        id: Math.random().toString(),
        text: inputGoal,
      };

      setInputGoal('');

      onAddGoal(newGoal);
    }
  };

  const handleTextChange = (event) => {
    setInputGoal(event.target.value);
  }

  return (
    <form action="" className="new-goal" onSubmit={handleAddGoal}>
      <input type="text" value={inputGoal} onChange={handleTextChange}  />
      <button type="submit">Add Goal</button>
    </form>
  )
};

GoalForm.propTypes = {
  onAddGoal: PropTypes.func,
}

export default GoalForm;