import React from 'react';
import HeaderMessages from './HeaderMessages';
import HeaderDialogs from './HeaderDialogs';
import MessageCatalog from './MessageCatalog';
import DialogList from './DialogList';
import FormInput from './FormInput';
import NewDialogs from './NewDialogs';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: localStorage.getItem('message-container'),
      dialogsStyle: 'none',
      messagesStyle: 'block'
    };
  }

  updateData = (value) => {
      let newmessage = {}
      newmessage.text = value
      newmessage.time = `${('0'+new Date().getHours()).slice(-2)}:${('0'+new Date().getMinutes()).slice(-2)}`
      let buf
      if (this.state.container) {
        buf = JSON.parse(this.state.container)
        buf.unshift(newmessage)
      } else {
        buf = [newmessage]
      }
      localStorage.setItem('message-container', JSON.stringify(buf))
      this.setState({container: JSON.stringify(buf)})
  }

  hideMessage = () => {
      this.setState({dialogsStyle: 'block'})
      this.setState({messagesStyle: 'none'})
  }

  hideDialogs = () => {
      this.setState({dialogsStyle: 'none'})
      this.setState({messagesStyle: 'block'})
  }

  render() {
    return (
      <div>
        <div class="Messages" style={{display: this.state.messagesStyle}}>
          <HeaderMessages hideMessage={this.hideMessage}/>
          <MessageCatalog container={this.state.container}/>
          <FormInput updateData={this.updateData}/>
        </div>
        <div class="Dialogs" style={{display: this.state.dialogsStyle}}>
          <HeaderDialogs/>
          <DialogList lastMessageText={(JSON.parse(this.state.container))[0].text} lastMessageTime={(JSON.parse(this.state.container))[0].time} hideDialogs={this.hideDialogs}/>
          <NewDialogs/>
        </div>
      </div>
    )
  }
}

export default Messenger
