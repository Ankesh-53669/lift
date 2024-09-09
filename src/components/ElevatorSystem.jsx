import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveToFloor } from '../store/elevatorSlice';
import './ElevatorSystem.css';

const ElevatorSystem = () => {
  const dispatch = useDispatch();
  const currentFloor = useSelector((state) => state.elevator.currentFloor);
  const totalFloors = 7;

  const handleMoveToFloor = (targetFloor) => {
    if (targetFloor !== currentFloor) {
      dispatch(moveToFloor(targetFloor));
    }
  };

  const calculateElevatorPosition = () => {
    return (currentFloor - 1) * (100 / totalFloors);
  };

  return (
    <div className="elevator-system">
      <div className="elevator-shaft">
        <div className="elevator" style={{ bottom: `${calculateElevatorPosition()}%` }}></div>
      </div>
      <div className="floors">
        {Array.from({ length: totalFloors }, (_, i) => totalFloors - i).map((floor) => (
          <div className="floor" key={floor}>
            <div className="controls">
              {floor !== currentFloor && (
                <button onClick={() => handleMoveToFloor(floor)}>
                  Move to Floor {floor} ({floor > currentFloor ? 'Up' : 'Down'})
                </button>
              )}
            </div>
            <div className="floor-number">Floor - {floor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElevatorSystem;
