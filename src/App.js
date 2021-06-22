import React, { useState, useEffect, useCallback } from 'react';
import Form from './form/form';
import Calendar from './calander/calendar';

import './App.css';

import { Events } from './mockdate';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [sortedEvents, setSortedEvents] = useState([]);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = date.getMonth();
    setSelectedDate({
      year,
      month,
    });
  };

  const sortEventsByDate = useCallback((year, month) => {
    const sortedList = Events.filter((evt) => {
      return (
        new Date(evt.date).getFullYear() === +year &&
        new Date(evt.date).getMonth() === +month
      );
    });
    setSortedEvents(sortedList);
  }, []);

  useEffect(() => {
    getCurrentDate();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      sortEventsByDate(selectedDate.year, selectedDate.month);
    }
  }, [selectedDate, sortEventsByDate]);

  const handleSubmit = (data) => {
    setSelectedDate(data);
  };

  if (!selectedDate) {
    return 'Loading';
  }
  return (
    <div className='ui container fluid'>
      <Form handleSubmit={handleSubmit} date={selectedDate} />
      <Calendar date={selectedDate} data={sortedEvents} />
    </div>
  );
};
export default App;
