import React, {useState} from 'react';
import GoalList from './components/GoalList/GoalList';
import GoalForm from './components/Goal/GoalForm';

import './App.css';

const courseGoals = [
  { id: 'cg1', text: 'Finish the Course' },
  { id: 'cg2', text: 'Learn all about the Course Main Topic' },
  { id: 'cg3', text: 'Help other students in the Course Q&A' },
];

const App = () => {
  const [currentGoals, setCurrentGoals] = useState(courseGoals);

  const handleAddNewGoal = (newGoal) => {
    setCurrentGoals([...currentGoals, newGoal]);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalForm onAddGoal={handleAddNewGoal} />
      <GoalList goals={currentGoals} />
    </div>
  );
};

export default App;
