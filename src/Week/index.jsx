import React, { Component } from 'react';
import { parse, addDays, addWeeks } from 'date-fns';
import { getWeeksInMonth } from 'date-fns';
import CurrentDay from '../CurrentDay';
import Day from './Day';

const Week = (props) => {
  const { year, week } = props;
  const startOfWeek = parse('2021 8', 'Y w', new Date());
  const dayArray = [];
  for (let i = 0; i < 7; i++) {
    dayArray.push(
      <Day key={`${i}-${year}-${week}`} day={addDays(startOfWeek, i)} />
    );
  }
  return <tr></tr>;
};

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date(),
    };
  }

  render() {
    const { day } = this.state;
    return (
      <div>
        <div>{day.toString()}</div>
        {/* <div>amount of weeks in month{getWeeksInMonth(day)}</div>
        <button
          onClick="{()=>{
            const {day} = this.state;

            const newDay = addDays(day, 1);

            this.setState({
                day:newDay
            })
        }}"
        >
          add day
        </button>
        <button
          onClick="{()=>{
            const {week} = this.state;

            const newWeek = addWeeks(day, 1);

            this.setState({
                day:newWeek
            })
        }}"
        >
          add weeks
        </button>
        <div>format</div> */}
        <CurrentDay CurrentDay={this.state.CurrentDay} />
        <CalendarBody CurrentDay={this.state.CurrentDay} />
      </div>
    );
  }
}

export default Calendar;
