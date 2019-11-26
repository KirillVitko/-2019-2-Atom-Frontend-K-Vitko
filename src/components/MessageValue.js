import React from 'react';
import styled from '@emotion/styled'

const Text = styled.div`
`

const Time = styled.div`
  font-size: 10px;
  font-style: oblique;
  text-align: right;
  margin: 2px;
`
const Message = styled.div`
  animation: fadeIn 1s; 
  position: relative;
  left: 83%;
  max-width: 15%;
  margin: 10px;
  background-color: #ADFF2F;
  padding: 7px;
  border-radius:10px;
  border: 2px;
  transition-property: background;
  transition-duration: .5s;

  :active {
    background: #00BFFF;
  }

  @keyframes fadeIn {
    0% {
        transform: scale(0);
        opacity: 0.0;
    }
    60% {
        transform: scale(1.1);
    }
    80% {
        transform: scale(0.9);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
  }

`


function MessageValue(props){
    return(
        <Message>
          <Text>
            {props.value.text}
          </Text>
          <Time>
            {props.value.time}
          </Time>
        </Message>
    )
}

export default MessageValue
