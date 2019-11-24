const template = document.createElement('template')
template.innerHTML = `
    <style>
        form-input {
            width: 99%;
            position: absolute;
            overflow: auto;
            bottom: 0;
        }
        .message {
          position: absolute;
          overflow: auto;
          left: 0;
          right: 3px;
          top: 110px;
          bottom: 28px;
        }
        .pen {
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
        }
        .pen:hover {
          height: 60px;
          width: 60px;
        }
        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <div class="dialog_page" style="display: none">
        <title-dialogs></title-dialogs>
        <dialog-list></dialog-list>
        <img class="pen" src="image/pen.svg" title="Создать диалог"/>
    </div>
    <form>
        <title-message></title-message>
        <message-catalog class="message"></message-catalog>
        <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
    </form>
`

class MessageForm extends HTMLElement {
    constructor () {
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot", "_onSubmit", "_onKeyPress", "_hideMessage", "_hideDialog"] }] */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$form = this._shadowRoot.querySelector('form')
        this.$input = this._shadowRoot.querySelector('form-input')
        this.$message = this._shadowRoot.querySelector('message-catalog')
        this.$title_message = this._shadowRoot.querySelector('title-message')
        this.$dialog = this._shadowRoot.querySelector('dialog-list')
        this.$dialogs = this._shadowRoot.querySelector('.dialog_page')
        this.$title_message.addEventListener('hide', this._hideMessage.bind(this))
        this.$dialog.addEventListener('hide', this._hideDialog.bind(this))
        this.$form.addEventListener('submit', this._onSubmit.bind(this))
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this))
    }

    _onSubmit (event) {
        event.preventDefault()
        this.$message.setAttribute('text-message', this.$input.value)
        this.$dialog.setAttribute('new','')
        this.$input.setAttribute('value','')
    }

    _onKeyPress (event) {
        if (event.keyCode === 13 && this.$input.value !== '') {
            this.$form.dispatchEvent(new Event('submit'))
        }
    }

    _hideMessage (event) {
        this.$form.setAttribute('style', 'display: none')
        this.$dialogs.setAttribute('style', 'display: block')
    }

    _hideDialog (event) {
        this.$form.setAttribute('style', 'display: block')
        this.$dialogs.setAttribute('style', 'display: none')
    }

}

customElements.define('message-form', MessageForm)
