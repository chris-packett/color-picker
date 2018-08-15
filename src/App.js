import React, { Component } from 'react';
import ColorPicker from './ColorPicker';

class App extends Component {
  render() {
    return (
      <section>
        <h1 className='color-picker-header'>Color Picker!</h1>
        <ColorPicker />
      </section>
    );
  }
}

export default App;

