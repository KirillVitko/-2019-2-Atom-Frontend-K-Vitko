import React from 'react'
import styled from '@emotion/styled'
import avatar from '../assets/avatar.jpeg'
import arrow from '../assets/arrow.svg'
import loupe from '../assets/loupe.svg'
import settings from '../assets/settings.svg'

const Header = styled.div`
    position: absolute;
    overflow: auto;
    top: 0;
    background: #CD00CD;
    width:100%;
    height: 11%;

    button {
      position: absolute;
      left: 2%;
      top: 30%;
      border: 0;
      height: 50px;
      width: 50px;
      transition-property: top;
      transition-property: height;
      transition-property: width;
      padding: 0;
    }

    button:hover {
      top: 25%;
      height: 60px;
      width: 60px;
    }

    .arrow {
      background: #CD00CD;
    }

    .title_text {
        text-align: center;
        color: white;
    }

    .name {
      font-size:30px
    }

    .avatar {
      position: absolute;
      left: 43%;
      top: 16%;
      border-radius: 100%;
      height: 50px;
      width: 50px;
    }

    .loupe {
      position: absolute;
      right: 6%;
      top: 40%;
      height: 30px;
      width: 30px;
    }

    .settings {
      position: absolute;
      right: 3%;
      top: 40%;
      height: 30px;
      width: 30px;
    }`

function HeaderMessages(props) {
	return (
		<Header>
			<img src={avatar} className="avatar" alt="avatar"/>
      <button onClick={() => props.hideMessage()}>
        <img src={arrow} className="arrow" alt="arrow"/>
      </button>
      <img src={loupe} className="loupe" alt="loupe" />
      <img src={settings} className="settings" alt="settings" />
      <br/>
      <div className="title_text">
        <div className="name">Spider-man</div>
        Online
      </div>
		</Header>
	)
}

export default HeaderMessages
