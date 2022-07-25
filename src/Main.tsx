import React from "react";
import { AbsoluteFill, Audio, Sequence } from "remotion";
import { SceneOne } from "./SecondVideo/SceneOne";
import { SceneThree } from "./SecondVideo/SceneThree";
import { SceneTwo } from "./SecondVideo/SceneTwo";
import music from './../public/Music_5.mp3'


// -------Component Definition------- //


export const Main: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={music}/>
      <Sequence from={0} durationInFrames={280}>
        <SceneOne/>
      </Sequence>
      <Sequence from={280} durationInFrames={60}>
        <SceneTwo/>
      </Sequence>
      <Sequence from={340} durationInFrames={120}>
        <SceneThree/>
      </Sequence>
    </AbsoluteFill>
  )
}