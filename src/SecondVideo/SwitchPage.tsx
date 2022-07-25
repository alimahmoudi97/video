import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// -------CSS Definition------- //

const PageContainer: React.CSSProperties = {
  // Display: 'flex',
  position: 'absolute',
  top: 0,
  bottom:0,
  height: '100%',
  width:'100%',
}

// -------Component Definition------- //


export const SwitchPage: React.FC = () => {

  const frame = useCurrentFrame();

  const transPage = interpolate(
    frame,
    [0, 50],
    [0,-1000],
  )
  return (
    <AbsoluteFill>
      <div style={{
        ...PageContainer,
        background: 'black',
        transform: `translateX(${transPage/6}%)`,
        zIndex:5
      }} />
      <div style={{
        ...PageContainer,
        background: 'white',
        // Transform: `translateX(${transPage}%)`,
        zIndex:0
      }}/>
    </AbsoluteFill>
  )
}