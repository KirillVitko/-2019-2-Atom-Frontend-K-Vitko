const template = document.createElement('template')
template.innerHTML = `
    <style>
        form-input {
            width: 99%;
            position: absolute;
            overflow: auto;
            bottom: 0;
        }

        .title {
            position: absolute;
            overflow: auto;
            top: 0;
            background: #CD00CD;
            width:100%;
            height: 11%;
        }

        .title_text {
            text-align: center;
            color: white;
        }

        .message {
          position: absolute;
          overflow: auto;
          left: 0;
          right: 3px;
          top: 12%;
          bottom: 3%;
        }

        input[type=submit] {
            visibility: collapse;
        }

    </style>
    <form>
        <div class="title">
          <div class="title_text">
            <p style="font-size:30px";>Kirill</p>
            Online
          </div>
        </div>
        <message-catalog class="message"></message-catalog>
        <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
    </form>
`

class MessageForm extends HTMLElement {
    constructor () {
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot", "_onSubmit", "_onKeyPress"] }] */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$form = this._shadowRoot.querySelector('form')
        this.$input = this._shadowRoot.querySelector('form-input')
        this.$message = this._shadowRoot.querySelector('message-catalog')

        this.$message.scrollTop = this.$message.scrollHeight

        this.$form.addEventListener('submit', this._onSubmit.bind(this))
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this))
    }

    _onSubmit (event) {
      event.preventDefault()
      this.$message.setAttribute('text-message', this.$input.value)
    }

    _onKeyPress (event) {
        if (event.keyCode == 13 && this.$input.value != '') {
            this.$form.dispatchEvent(new Event('submit'))
            console.log('dwadwa')
            this.$input.setAttribute('value','')
            console.log('dwadwa')
        }
    }
}

customElements.define('message-form', MessageForm)
