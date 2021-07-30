import React from 'react';
import Nav from './comprnents/Nav';
import Button from './comprnents/Button';
import MainVideo from './comprnents/MainVideo';
import SubVideo from './comprnents/SubVideo';
import SubTitle from './comprnents/SubTitle';

function App() {
  return (
    <>
      <Nav />
      <MainVideo />
      {/* <Button size="large" color="gray" outline>Button</Button>
      <Button>Button</Button>
      <Button size="small" color="pink" fullWidth={false}>Button</Button> */}
      <SubTitle />
      <SubVideo />
      <SubVideo />
      <SubVideo />
    </>
  );
}

export default App;
