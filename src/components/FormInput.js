import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
    position: absolute;
    bottom: 0;
    border: 1px solid rgba(25, 25, 25, 0.32);
    width: calc(100% - 20px);
`

function FormInput(props){
    function handleKeyPress(event){
      if (event.key === 'Enter' & event.target.value !== '') {
        if (!event.shiftKey) {
          props.updateData(event.target.value)
          event.target.value = ''
        } else {
          event.target.value += "\n"
        }
      }
    }

    return(
      <Input placeholder="Введите сообщение" onKeyPress={event => handleKeyPress(event)}/>
    )
}

export default FormInput
