import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      if (state.isAdd) {
        const newCount = state.count + props.step;
        return {
          count: newCount,
        };
      } else {
        const newCount = state.count - props.step;
        return {
          count: newCount,
        };
      }
    });
  };
  handleStep = () => {
    this.setStep((state, props) => {
      if (props.isAdd) {
        const newStep = props.step + props.step;
        return {
          step: newStep,
        };
      } else {
        const newStep = state.step - props.step;
        return {
          step: newStep,
        };
      }
    });
  };
  changeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  };

  render() {
    const { count, isAdd, setStep } = this.state;
    const { step } = this.props;
    return (
      <div>
        <div>текущий счёт: {count}</div>
        <div>шаг: {step}</div>
        <button onClick={this.handleClick}>
          {setStep ? 'добавить шаг' : 'отнять шаг'}
        </button>
        <button onClick={this.handleClick}>
          {isAdd ? 'добавить' : 'отнять'}
        </button>
        <button onClick={this.changeMode}>изменить режим</button>
      </div>
    );
  }
}

export default Counter;
