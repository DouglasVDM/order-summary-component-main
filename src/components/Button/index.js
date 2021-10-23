import React from 'react'
import { Wrapper } from './Button.styles';

const Button = ({text}) => {
  return (
    <Wrapper type='button'>
      {text}
    </Wrapper>
  )
}

export default Button;
