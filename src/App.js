import React from 'react';
import Counter from './Counter/index.jsx';
import Calendar from './Calendar/index.jsx';
import Content from './Wrappers/index';
import FlexContainer from '../src/Wrappers/index';

const App = () => {
  //const step = 1;
  //передай в <Counter step={step}>
  //можешь вызвать Calendar

  return (
    <div>
      <FlexContainer jc='center' ai='center' />
    </div>
  );
};

export default App;
