const template = document.createElement('template')
template.innerHTML = `
    <style>

        .dialog {
          transition-property: background;
          transition-duration: 1s;
          position: absolute;
          left: 5%;
          top: 13%;
          border-radius: 20px;
          border: 3px solid #30D5C8;
          width: 90%;
          height: 15%;
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

        .dialog:hover {
          background: #CCFFFF;
        }

    </style>

    <div class="dialog">
        <img class="avatar" src="../image/avatar.jpeg"/>
        <div class="message"></div>
        <div class="time"></div>
        <div class="username">Spider-Man</div>
    </div>
`

class DialogList extends HTMLElement {
    constructor () {
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot", "_onClick"] }] */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$dialog = this._shadowRoot.querySelector('.dialog')
        this.$message = this._shadowRoot.querySelector('.message')
        this.$time = this._shadowRoot.querySelector('.time')
        const lastmessagetext = document.createElement('div')
        const lastmessagetime = document.createElement('div')
        const container = JSON.parse(localStorage.getItem('message-container'))
        lastmessagetext.innerHTML = container[container.length-1].text
        this.$message.prepend(lastmessagetext)
        lastmessagetime.innerHTML = container[container.length-1].time
        this.$time.prepend(lastmessagetime)

        this.$dialog.addEventListener('click', this._onClick.bind(this))
    }

    _onClick (event) {
        this.$dialog.dispatchEvent(new Event('hide', {composed:true}))
    }
}

customElements.define('dialog-list', DialogList)
