import React, { Component } from 'react';
import Slider from './Slider'

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
                <section 
                    className='box-style' 
                    style={{ backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)` }}>
                </section>
                <section className='hsl-sliders'>
                    <Slider caption='Hue:' max='360' value={this.state.hue} update={this.updateHue}/>
                    <Slider caption='Saturation:' max='100' value={this.state.saturation} update={this.updateSaturation}/>
                    <Slider caption='Lightness:' max='100' value={this.state.lightness} update={this.updateLightness}/>
                </section>
            </section>
        );
    }
}

export default ColorPicker;
