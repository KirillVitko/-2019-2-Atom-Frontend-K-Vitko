const template = document.createElement('template')
template.innerHTML = `
    <style>

        .time {
            font-size: 10px;
            font-style: oblique;
            text-align: right;
            margin: 2px;
        }

        .name {
            font-size: 12px;
            font-style: oblique;
            text-align: right;
            margin: 2px;
        }

        .message {
            max-width: 100%;
            margin: 10px;
            background-color: #ADFF2F;
            padding: 7px;
            border-radius:10px;
            border: 2px;
        }
    </style>

    <div class="message">
      <div class="text"></div>
      <div class="time"></div>
      <div class="name"></div>
    </div>

`

class MessageValue extends HTMLElement {
    constructor (){
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot"] }] */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$text = this.shadowRoot.querySelector('.text')
        this.$time = this.shadowRoot.querySelector('.time')
        this.$name = this.shadowRoot.querySelector('.name')
        this.message = []
    }

    static get observedAttributes() {
        return ['text', 'time', 'name']
    }

    connectedCallback() {
        const newtext = document.createElement('div')
        const newtime = document.createElement('div')
        const newname = document.createElement('div')
        newtext.innerHTML = this.message[0]
        newtime.innerHTML = this.message[1]
        newname.innerHTML = this.message[2]
        this.$text.prepend(newtext)
        this.$time.prepend(newtime)
        this.$name.prepend(newname)
        this.message = []
    }

    attributeChangedCallback(name, old_value, new_value) {
        if (name == 'text') {
          this.message.push(new_value)
        }
        else if (name == 'time') {
          this.message.push(new_value)
        } else {
          this.message.push(new_value)
        }
    }


}

customElements.define('message-value', MessageValue)
