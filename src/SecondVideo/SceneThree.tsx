import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { ScaleUpText } from "./ScaleUpText";
import { TextToUp } from "./TextToUp";
import { TextToUpShow } from "./TextToUpShow";

export const SceneThree: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={50}>
        <TextToUpShow
          scable
          TextInput="With the-Fastest-Internet-in America"
          backgroundColor="white"
          color='black'
        />
      </Sequence>
      <Sequence from={50} durationInFrames={20}>
        <TextToUpShow
          TextInput="on the"
          backgroundColor="white"
          color='black'
        />
      </Sequence>
      <Sequence from={70} durationInFrames={50}>
        <ScaleUpText
          TextInput="100%-fiber optic-network"
        />
      </Sequence>
    </AbsoluteFill>
  )
}