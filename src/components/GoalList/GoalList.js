import React from 'react';
import PropTypes from 'prop-types';

const GoalList = ({goals}) => {
    return (
        <ul className="goal-list">
            {goals.map(goal => (
                <li key={goal.id}>{goal.text}</li>
            ))}
        </ul>
    );
};

GoalList.propTypes = {
    goals: PropTypes.array,
}

export default GoalList;