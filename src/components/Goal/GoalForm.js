import React from 'react';

import './Goal.css';
import PropTypes from "prop-types";

const GoalForm = ({ onAddGoal }) => {
  const handleAddGoal = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: 'My New Goal',
    };

    onAddGoal(newGoal);
  };

  return (
    <form action="" className="new-goal" onSubmit={handleAddGoal}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  )
};

GoalForm.propTypes = {
  onAddGoal: PropTypes.func,
}

export default GoalForm;