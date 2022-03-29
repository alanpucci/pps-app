import React, { FC } from 'react'
import Button from 'react-native-really-awesome-button/src/themes/blue';
import { AwesomeButtonProps } from 'react-native-really-awesome-button';

interface ButtonProps extends AwesomeButtonProps{
    title:string;
    onPress:()=>void;
    width?:number;
    height?:number;
    textSize?:number;
    rounded?:boolean;
    progress?:boolean;
}

const AwesomeButton:FC<ButtonProps> = (props) => {
  return (
      <Button 
        width={props.width} borderRadius={props.rounded?40:0}
        textSize={props.textSize} height={props.height} progress={props.progress}
        onPress={next => {
          setTimeout(() => {
            props.onPress()
            next();
          }, props.progress ? 1000 : 0);
        }}
      >
        {props.title}
      </Button>
  )
}

AwesomeButton.defaultProps={
  width:300,
  height:80,
  textSize:23,
  rounded:false,
  progress:false
}

export default AwesomeButton