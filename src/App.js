import React from 'react';
import Nav from './comprnents/Nav';
import Button from './comprnents/Button';
import MainVideo from './comprnents/MainVideo';
import SubVideo from './comprnents/SubVideo';

function App() {
  return (
    <>
      <Nav />
      <MainVideo />
      {/* <Button size="large" color="gray" outline>Button</Button>
      <Button>Button</Button>
      <Button size="small" color="pink" fullWidth={false}>Button</Button> */}
      <SubVideo />
    </>
  );
}

export default App;
