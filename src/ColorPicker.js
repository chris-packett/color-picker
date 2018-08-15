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
    
    updateHue = (event) => {
        let updatedHue = event.target.value
        this.setState({
            hue: updatedHue
        }) 
    }

    updateSaturation = (event) => {
        let updatedSaturation = event.target.value
        this.setState({
            saturation: updatedSaturation
        }) 
    }

    updateLightness = (event) => {
        let updatedLightness = event.target.value
        this.setState({
            lightness: updatedLightness
        }) 
    }

    render() {
        return (
            <section className='color-palette'>
                <section className='box-style' style={{ backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)` }}>
                </section>
                <section className='hsl-sliders'>
                    <input type='range' min='0' max='360' value={this.state.hue} onChange={this.updateHue}/>
                    <input type='range' min='0' max='100' value={this.state.saturation} onChange={this.updateSaturation}/>
                    <input type='range' min='0' max='100' value={this.state.lightness} onChange={this.updateLightness}/>
                </section>
            </section>
        );
    }
}

export default ColorPicker;
