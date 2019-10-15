const template = document.createElement('template');
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
          top: 110px;
          right: 10px;
          bottom: 5px;
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
        <message-value class="message"></message-value>
        <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$message = this._shadowRoot.querySelector('message-value');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
      event.preventDefault()
      this.$message.setAttribute('text-message', this.$input.value)
      this.$input.setAttribute('value', '')
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
