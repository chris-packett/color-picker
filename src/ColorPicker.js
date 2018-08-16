import React, { Component } from 'react';
import Slider from './Slider'

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hue: 180,
            saturation: 50,
            lightness: 50,
            alpha: 100
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

    updateAlpha = (event) => {
        let updatedAlpha = event.target.value / 100
        this.setState({
            alpha: updatedAlpha
        })
    }

    render() {
        return (
            <section className='color-palette'>
                <section 
                    className='box-style' 
                    style={{ backgroundColor: `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})` }}>
                </section>
                <section className='hsl-sliders'>
                    <Slider caption='Hue:' max='360' value={this.state.hue} update={this.updateHue}/>
                    <Slider caption='Saturation:' max='100' value={this.state.saturation} update={this.updateSaturation}/>
                    <Slider caption='Lightness:' max='100' value={this.state.lightness} update={this.updateLightness}/>
                    <Slider caption='Alpha:' max='100' value={this.state.alpha * 100} update={this.updateAlpha}/>
                </section>
            </section>
        );
    }
}

export default ColorPicker;
