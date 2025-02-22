import React, { useState } from 'react';
import Modal from './Modal';
import { exerciseDescriptions } from '../utils';

//* MARK: Component
export default function WorkoutCard(props) {
  // eslint-disable-next-line react/prop-types
  const { trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete } =
    props;

  // if there is no training plan an empty object is returned to warmup and workout
  const { warmup, workout } = trainingPlan || {};

  const [showExerciseDescription, setShowExerciseDescription] = useState(null);
  // const showExerciseDescription = { name: 'unicorn', description: 'pizza' };

  //* this will allow us to save the weights that we are on, key and associated value
  const [weights, setWeights] = useState(savedWeights || {});

  function handleAddWeight(title, weight) {
    const newObj = {
      ...weights,
      [title]: weight,
      //* [dynamic key]: weight
    };

    setWeights(newObj);
  }

  return (
    <div className="workout-container">
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => {
            setShowExerciseDescription(null);
          }}
        />
      )}
      <div className="workout-card card">
        <div className="plan-card-header">
          <p>Day {dayNum} </p>
          {icon}
        </div>
        <div className="plan-card-header">
          <h2>
            <b>{type} </b>Workout
          </h2>
        </div>
      </div>
      {/* MARK: Warmup */}
      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Warmup</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weight</h6>
        {warmup.map((warmupExercise, warmupIndex) => {
          return (
            //* Note: to add an attribute or key to a React fragment, <React.Fragment></React.Fragment> needs to be explicitly used, <></> will not work
            <React.Fragment key={warmupIndex}>
              <div className="exercise-name">
                <p>
                  {warmupIndex + 1}. {warmupExercise.name}
                </p>
                <button
                  onClick={() => {
                    setShowExerciseDescription({
                      name: warmupExercise.name,
                      description: exerciseDescriptions[warmupExercise.name],
                    });
                  }}
                  className="help-icon"
                >
                  <i className="fa-regular fa-circle-question"></i>
                </button>
              </div>
              <p className="exercise-info">{warmupExercise.sets}</p>
              <p className="exercise-info">{warmupExercise.reps}</p>
              <input
                type="text"
                className="weight-input"
                placeholder="N/A"
                disabled
              />
            </React.Fragment>
          );
        })}
      </div>
      {/* MARK: Workout */}
      <div className="workout-grid">
        <div className="exercise-name">
          <h4>Workout</h4>
        </div>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6 className="weight-input">Max Weight</h6>
        {workout.map((workoutExercise, wIndex) => {
          return (
            //* Note: to add an attribute or key to a React fragment, <React.Fragment></React.Fragment> needs to be explicitly used, <></> will not work
            <React.Fragment key={wIndex}>
              <div className="exercise-name">
                <p>
                  {wIndex + 1}. {workoutExercise.name}
                </p>
                <button
                  className="help-icon"
                  onClick={() => {
                    setShowExerciseDescription({
                      name: workoutExercise.name,
                      description: exerciseDescriptions[workoutExercise.name],
                    });
                  }}
                >
                  <i className="fa-regular fa-circle-question"></i>
                </button>
              </div>
              <p className="exercise-info">{workoutExercise.sets}</p>
              <p className="exercise-info">{workoutExercise.reps}</p>
              <input
                value={weights[workoutExercise.name] || ''}
                onChange={(e) => {
                  handleAddWeight(workoutExercise.name, e.target.value);
                }}
                type="text"
                className="weight-input"
                placeholder="14"
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className="workout-buttons">
        <button
          onClick={() => {
            handleSave(workoutIndex, { weights });
          }}
        >
          Save and Exit
        </button>
        <button
          onClick={() => {
            handleComplete(workoutIndex, { weights });
          }}
          disabled={Object.keys(weights).length !== workout.length}
        >
          Complete
        </button>
      </div>
    </div>
  );
}
