import React from 'react'
import styled from '@emotion/styled'
import loupe from '../assets/loupe.svg'
import settings from '../assets/settings.svg'

const Header = styled.div`
    position: absolute;
    overflow: auto;
    top: 0;
    background: #CD00CD;
    width:100%;
    height: 11%;

    .title_text {
        text-align: center;
        color: white;
        font-size:30px
    }

    .loupe {
      position: absolute;
      right: 3%;
      top: 40%;
      height: 30px;
      width: 30px;
    }

    .settings {
      position: absolute;
      left: 3%;
      top: 40%;
      height: 30px;
      width: 30px;
    }

    `

function HeaderDialogs() {
	return (
		<Header>
      <img src={loupe} className="loupe" alt="loupe" />
      <img src={settings} className="settings" alt="settings" />
      <br/>
      <div className="title_text">
        Messenger
      </div>
		</Header>
	)
}

export default HeaderDialogs
