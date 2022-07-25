import React from "react";
import { AbsoluteFill, Img, Sequence } from "remotion";
import InstallTV from './../../public/InstallTV.jpg';
import { TextToUpShow } from "./TextToUpShow";
import Weekend from './../../public/Weekend.jpg';

// -------Component Definition------- //

export const SceneTwo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={30}>
        <Img src={InstallTV} style={{
          width: '100%',
          height: '100%',
          backgroundSize:'cover'
        }} />
        <div style={{zIndex:2}}>

          <TextToUpShow
            TextInput="Install on-Your Time"
            direction="column"
          />
        </div>
      </Sequence> 
      <Sequence from={30} durationInFrames={30}>
        <Img src={Weekend} style={{
          width: '100%',
          height: '100%',
          backgroundSize:'cover'
        }} />
        <div style={{zIndex:2}}>

          <TextToUpShow
            TextInput="Even on-Weekend"
            direction="column"
          />
        </div>
      </Sequence> 
    </AbsoluteFill>
  )
}