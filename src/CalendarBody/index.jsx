import React from 'react';

const WeekDays = () => {
  return (
    <div>
      <tr>
        <td>Day</td>
        <td>Day</td>
        <td>Day</td>
        <td>Day</td>
        <td>Day</td>
        <td>Day</td>
        <td>Day</td>
      </tr>
    </div>
  );
};

export default WeekDays;

const CalendarBody = (props) => {
  const { currentDay } = props;
  return (
    <div>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          <Week year={2021} week={8} />
          <Week year={2021} week={9} />
          <Week year={2021} week={10} />
          <Week year={2021} week={11} />
          <Week year={2021} week={12} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
