import { useEffect, useState } from 'react';
import { workoutProgram as training_plan } from '../utils/index';
import WorkoutCard from './WorkoutCard';

export default function Grid() {
  //* MARK: State
  const [savedWorkouts, setSavedWorkouts] = useState(null);
  // const selectedWorkout = 5;
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const completedWorkouts = Object.keys(savedWorkouts || {}).filter((item) => {
    const entry = savedWorkouts[item];
    return entry.isComplete;
  });
  //* the "completedWorkouts" variable results in an array of the indexes that we have completed [true, true ] completed workouts indexes.

  //* MARK: Functions
  function handleSave(index, data) {
    //* save to local storage and modify the saved workout state
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete,
        // * !! coerces the value to be a boolean true or false instead of undefined
        //* ?. optional chaining incase the value does not exist.
      },
    };

    setSavedWorkouts(newObj);
    localStorage.setItem('brogram', JSON.stringify(newObj));

    setSelectedWorkout(null);
  }

  function handleComplete(index, data) {
    //* complete a workout
    const newObj = { ...data };
    newObj.isComplete = true;
    handleSave(index, newObj);
  }
  //* MARK: Effect
  useEffect(() => {
    if (!localStorage) return; // Guard clause
    let savedData = {};
    if (localStorage.getItem('brogram')) {
      savedData = JSON.parse(localStorage.getItem('brogram'));
    }
    setSavedWorkouts(savedData);
  }, []);
  //* will run on page reload

  return (
    <div className="training-plan-grid">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        const isLocked =
          workoutIndex === 0
            ? false
            : !completedWorkouts.includes(`${workoutIndex - 1}`);


        const type =
          workoutIndex % 3 === 0
            ? 'Push'
            : workoutIndex % 3 === 1
            ? 'Pull'
            : 'Legs';

        const trainingPlan = training_plan[workoutIndex];
        const dayNum =
          workoutIndex / 8 <= 1 ? '0' + (workoutIndex + 1) : workoutIndex + 1;

        const icon =
          workoutIndex % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell"></i>
          ) : workoutIndex % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging"></i>
          ) : (
            <i className="fa-solid fa-bolt"></i>
          );

        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              savedWeights={savedWorkouts?.[workoutIndex]?.weights}
              key={workoutIndex}
              trainingPlan={trainingPlan}
              type={type}
              workoutIndex={workoutIndex}
              icon={icon}
              dayNum={dayNum}
              handleComplete={handleComplete}
              handleSave={handleSave}
            />
          );
        }

        return (
          <button
            onClick={() => {
              if (isLocked) return;
              setSelectedWorkout(workoutIndex);
            }}
            className={'card plan-card ' + (isLocked ? 'inactive' : '')}
            key={workoutIndex}
          >
            <div className="plan-card-header">
              <p>Day{dayNum}</p>
            </div>
            {isLocked ? <i className="fa-solid fa-lock"></i> : icon}
            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}
