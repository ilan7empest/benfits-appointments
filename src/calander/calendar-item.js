import React from 'react';

const CalendarItem = ({ id, month, data }) => {
  const tasksByDay = data
    .filter((evt) => new Date(evt.date).getDate() === id)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const populateDays = () => {
    return tasksByDay.map((evt, i) => {
      const time = new Date(evt.date).toLocaleTimeString('he-IL', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      return (
        <li key={i}>
          <span className='day-item__time_event'>{time}</span>
          <span className='day-item__title_event'>{evt.title}</span>
        </li>
      );
    });
  };

  return (
    <div className='day-item ' key={id}>
      <div className='day-item__header'>
        <div>{`${id}/${month}`}</div>
        <p>
          <b>{tasksByDay.length}</b> appoitment
          {tasksByDay.length === 0 || tasksByDay.length > 1 ? 's' : ''}
        </p>
      </div>
      {tasksByDay.length > 0 && <ul>{populateDays()}</ul>}
    </div>
  );
};

export default CalendarItem;
