import React from 'react';
import styled from '@emotion/styled';
import pen from '../assets/pen.svg'

const Pen= styled.img`
position: absolute;
right: 5%;
bottom: 10%;
height: 50px;
width: 50px;
box-shadow: 0 0 0 rgba(204,169,44, 0.4);
animation: pulse 2s infinite;
border: solid 2px;
border-radius: 10%;
background: #FFA500;

:hover {
height: 60px;
width: 60px;
`

function NewDialogs() {
    return(
      <Pen src={pen} alt="pen" />
    )
}

export default NewDialogs
