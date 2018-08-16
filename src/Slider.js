import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <section>
                <section className='caption-style'>{this.props.caption}</section>
                <input type='range' min='0' max={this.props.max} value={this.props.value} onChange={this.props.update}/>
            </section>
        );
    }
}

export default Slider;
