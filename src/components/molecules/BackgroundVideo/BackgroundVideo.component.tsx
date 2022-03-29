import React from 'react'
import { StyledVideo } from './BackgroundVideo.styled'

const BackgroundVideo = () => {
  return (
    <StyledVideo
        source={require("../../../../assets/tunnel.mp4")}
        rate={1}
        shouldPlay
        isLooping
        isMuted
        resizeMode="cover"
    />
  )
}

export default BackgroundVideo