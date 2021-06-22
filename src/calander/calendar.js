import React from 'react';

import CalendarItem from './calendar-item';

import './calendar.css';

const Calendar = ({ date, data }) => {
  const daysInMonth = new Date(date.year, date.month + 1, 0).getDate();

  const mapDays = () => {
    const cells = [];
    for (let i = 1; i <= daysInMonth; i++) {
      cells.push(
        <CalendarItem key={i} id={i} month={date.month + 1} data={data} />
      );
    }
    return cells;
  };

  return (
    <>
      {data.length <= 0 && <p>There are no appoitments this month</p>}
      <div className='calendar'>{mapDays()}</div>
    </>
  );
};

export default Calendar;
