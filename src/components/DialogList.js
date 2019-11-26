import React from 'react';
import styled from '@emotion/styled';
import avatar from '../assets/avatar.jpeg';
import PropTypes from 'prop-types';

const Result = styled.div`
  transition-property: background;
  transition-duration: 1s;
  position: absolute;
  left: 5%;
  top: 13%;
  border-radius: 20px;
  border: 3px solid #30D5C8;
  width: 90%;
  height: 15%;

:hover {
  background: #CCFFFF;
}

.avatar {
  position: relative;
  left: 1%;
  top: 8%;
  border-radius: 100%;
  height: 120px;
  width: 120px;
}
.username {
  position: relative;
  left: 15%;
  bottom: 100%;
  font-size: 30px;
  color: #DC143C;
}
.message {
  position: relative;
  left: 15%;
  bottom: 30%;
  font-size: 20px;
}
.time {
  position: relative;
  left: 95%;
  bottom: 20%;
}
`;

function DialogList(props){
  return(
    <Result onClick={() => props.hideDialogs()}>
      <img src={avatar} className="avatar" alt="avatat"/>
      <div className="message">
        {props.lastMessageText}
      </div>
      <div className="time">
        {props.lastMessageTime}
      </div>
      <div className="username">
        Spider-man
      </div>
    </Result>
  );
}

export default DialogList;
