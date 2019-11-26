import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled'
import MessageValue from './MessageValue'

const Result = styled.div`
    position: absolute;
    word-wrap: break-word;
    align-self: flex-end;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    overflow: auto;
    width: 100%;
    top: 110px;
    bottom: 28px;
`

function MessageCatalog(props){
    const messageEndRef = useRef(null)
  	const scrollToBottom = () => {
  		messageEndRef.current.scrollIntoView()
  	}
  	useEffect(scrollToBottom)

    const string = JSON.parse(props.container)

    return(
      <Result>
        <div ref={messageEndRef} />
        {string.map((value, index) =>
          <MessageValue
              key={String(index)}
              value={value}
            />
        )}
      </Result>
    );
}

export default MessageCatalog
