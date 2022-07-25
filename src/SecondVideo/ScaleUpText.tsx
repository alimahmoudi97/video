import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// -------CSS Definition------- //


const TextContainerBox: React.CSSProperties = {
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
}
const TextContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const TextP: React.CSSProperties = {
  fontSize: 100,
  fontWeight:'bold',
  color: 'black',
  margin: 40,
  textTransform:'uppercase',
}

// -------Component Definition------- //


export const ScaleUpText: React.FC<{
  TextInput: string,
  Extend: boolean,
  direction:string,
}> = ({TextInput,Extend,direction}) => {
  
  const frame = useCurrentFrame();

  const ScaleUp = interpolate(
    frame*2,
    [0, 25],
    [0, 1], {
      extrapolateRight:`${(Extend===true)?'extend':'clamp'}`
    }
  )
  const dataArray = TextInput.split('-');
  return(
    <AbsoluteFill
      style={TextContainerBox}
    >
      <div
        style={{
          ...TextContainer,
          transform: `scale(${ScaleUp})`,
          flexDirection:`${(direction==='row')?'row':'column'}`
        }}
      >
        {dataArray.map((value) => {
          return (
            <p
              style={{
                ...TextP,
                
              }}
            >{value}</p> 
        )
        })}
      </div>
    </AbsoluteFill>
  )
}