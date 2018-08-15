import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hue: 180,
            saturation: 50,
            lightness: 50
        }
    }
    
    render() {
        return (
            <section className='color-palette'>
                <section className='box-style'>
                </section>
                <section className='hsl-sliders'>
                    <input type='range' min='0' max='360' value={this.state.hue}/>
                    <input type='range' min='0' max='100' value={this.state.saturation}/>
                    <input type='range' min='0' max='100' value={this.state.lightness}/>
                </section>
            </section>
        );
    }
}

export default ColorPicker;
