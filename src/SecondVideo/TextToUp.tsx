import {useState} from 'react'
import {useVideoConfig} from 'remotion'
import React,{useEffect} from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";


// -------CSS Definition------- //


const TextContainerBox: React.CSSProperties = {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  // FlexDirection: 'row',
  background: "green",
  zIndex: -1,
}

const TextContainer: React.CSSProperties = {
  color: 'white',
  width: '50%',
  height:'100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}
const TextStyle: React.CSSProperties = {
  
  width: '100%',
  height: 150,
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
}
const TextP: React.CSSProperties = {
  fontSize: 100,
  textAlign: 'center',
}


// -------Component Definition------- //

export const TextToUp: React.FC<{
  backgroundColor: string,
  color:string,
}> = ({backgroundColor,color}) => {

  const frame = useCurrentFrame();

  const transInterpolate = interpolate(
    frame*6,
    [5, 60],
    [100, 0],
    {
      extrapolateRight: 'clamp'
    }
  )

  return (
    <AbsoluteFill style={{
      ...TextContainerBox,
      background: `${backgroundColor}`,
    }}>
      <div style={TextContainer}>
        <div style={{
          ...TextStyle,
          background: `${backgroundColor}`,
          zIndex: 7,
          flex:2
        }} />
        <div style={{
          ...TextStyle,
          background: `${backgroundColor}`,
          zIndex:5
        }}>
          <p style={{
            ...TextP,
            transform:`translateY(${transInterpolate}%)`
          }}>Fios home</p>
        </div>
        <div style={{
          ...TextStyle,
          background: `${backgroundColor}`,
          zIndex:6
        }}>
          <p style={{
            ...TextP,
            transform: `translateY(${transInterpolate * 1.5}%)`,
            color:`${color}`
          }}>Internet</p>
        </div>
        <div style={{
          ...TextStyle,
          background: `${backgroundColor}`,
          zIndex:7
        }}>
          <p style={{
            ...TextP,
            transform: `translateY(${transInterpolate * 2}%)`,
            color:`${color}`
          }}>Starting at</p>
        </div>
         <div style={{
          ...TextStyle,
          background: `${backgroundColor}`,
          zIndex:8
        }}>
          <p style={{
            ...TextP,
            transform: `translateY(${transInterpolate * 2.5}%)`,
            color:`${color}`
          }}>$39.99/mon</p>
        </div>
        <div style={{
          ...TextStyle,
          background: `${backgroundColor}`,
          zIndex:9
        }}>
          <p style={{
            ...TextP,
            fontSize:40,
            transform: `translateY(${transInterpolate * 2.5}%)`,
            color:`${color}`
          }}>W/AutoPay + taxes & equip.charges.For 200/200</p>
        </div>
        <div style={{
          ...TextStyle,
          background: `${backgroundColor}`,
          zIndex: 10,
          flex:2
        }} />
      </div>
    </AbsoluteFill>
  )
}