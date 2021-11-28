import React from 'react'
import Slider from '../slider/Slider';
import SliderPhone from '../SliderPhone/SliderPhone';
const Choice = ({phone}) => {
    if (phone) {
        return <SliderPhone />;
      }
      return <Slider />;
    }


export default Choice

    