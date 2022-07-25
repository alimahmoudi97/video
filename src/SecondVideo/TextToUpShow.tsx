import React, { useEffect, useState } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";


// -------CSS Definition------- //


const TextContainerBox: React.CSSProperties = {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  background:'white',
  zIndex: -1,
}

const TextContainer: React.CSSProperties = {
  color: 'white',
  width: '50%',
  height:'100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}
const TextStyle: React.CSSProperties = {
  fontSize: 100,
  width: '100%',
  height:150,
  textAlign: 'center',
  marginRight: 40,
  scale: 5,
  background:'white'
}
const TextP: React.CSSProperties = {
  opacity: 0,
  color: 'black',
  fontWeight:'bold',
}


// -------Component Definition------- //


export const TextToUpShow: React.FC<{
  TextInput: string,
  direction: string,
  scable?: boolean,
  backgroundColor?: string,
  color?: string,
  transparent?: boolean,
  scaleAtEnd?:boolean
}> = ({ TextInput,direction,scable,backgroundColor,color,transparent,scaleAtEnd=false }) => {

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [indexPos, setIndexPos] = useState(0);
  const [preFrame, SetPreFrame] = useState(0);
  const durationFrame = 10;
  const transInterpolate = interpolate(
    frame,
    [preFrame, frame + 1],
    [500, -100],
    {
      extrapolateRight: 'clamp'
    }
  )
  const scaleDown = interpolate(
    frame,
    [0, 10],
    [5,1]
  )
  const opacityBG = interpolate(
    frame,
    [preFrame, frame + 1],
    [0,1]
  )
  const scaleEnd = interpolate(
    frame,
    [50, 100],
    [1,4]
  )
  useEffect(() => {
    if (frame === 0) {
      SetPreFrame(0);
      setIndexPos(0);
    }
    if (frame - preFrame === 10) {
      setIndexPos(indexPos + 1);
      // Console.log(`frame:${frame} PreFrame:${preFrame}`);
      SetPreFrame(frame);
    }
    if (frame === 50) {
      SetPreFrame(0);
    }
  }, [frame, indexPos, preFrame]);
  
  const arrayText:(string)[] = TextInput.split('-');
  // Console.log(arrayText);
  // Const arrayText = ["SETUP"];
  return (
    <AbsoluteFill style={{
      ...TextContainerBox,
      background:`${backgroundColor}`
    }}>
      <div style={{
        ...TextContainer,
        flexDirection: `${(direction === 'row') ? 'row' : 'column'}`,
        transform:`scale(${(frame>=50)&&scaleEnd})`,
      }}>
        {
          arrayText.map((value,index) => {
            return (
              <div style={{
                  ...TextStyle,
                // Background: (index % 2 === 0) ? 'blue' : 'red',
                  background: `${backgroundColor}`,
                  zIndex:5
                }}>
                <p style={{
                  ...TextP,
                  // Transform:`scale(${(indexPos===0)&&scaleDown})`,
                  transform: `scale(${(indexPos===0 && scable)?scaleDown:1}) translateY(${(indexPos === index) && transInterpolate}%)`,
                  opacity: (frame >= (2 * index + 1) * 5) ? 1 : 0,
                  color:`${color}`
                }}>{value}</p>
              </div>
            )
          })
        }
      </div>
    </AbsoluteFill>
  )
}