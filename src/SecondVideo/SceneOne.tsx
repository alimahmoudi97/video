import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { ScaleUpText } from "./ScaleUpText";
import { SwitchPage } from "./SwitchPage";
import { TextToUp } from "./TextToUp";
import { TextToUpShow } from "./TextToUpShow";

// -------Component Definition------- //

export const SceneOne: React.FC = () => {
  const value = "SETUP-YOUR-DEVICE-FOR";
  console.log(typeof (value));
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={100}>
        <TextToUpShow
          scable
          scaleAtEnd
          TextInput={value}
          direction="row"
          backgroundColor="white"
          color="black" />
      </Sequence>
      <Sequence from={100} durationInFrames={40}>
        <ScaleUpText
          Extend={false}
          TextInput="faster"
          direction='row' />
      </Sequence>
      <Sequence from={140} durationInFrames={20}>
        <SwitchPage/>
      </Sequence>
      <Sequence from={160} durationInFrames={40}>
        <TextToUpShow
          TextInput="When-You-Switch-to-Fibos."
          backgroundColor="white"
          color="black"
          direction="row" />
      </Sequence>
      <Sequence from={200} durationInFrames={40}>
        <ScaleUpText
          Extend
          TextInput="When You Switch to Fibos."
          direction='row' />
      </Sequence>
      <Sequence from={240} durationInFrames={40}>
        <TextToUp  backgroundColor="black" color="white"/>
      </Sequence>
    </AbsoluteFill>
  )
}