const template = document.createElement('template')
template.innerHTML = `
    <style>

        .answer {
            bottom: 20px;
            height: 100vh;
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;
        }

        .date {
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
            position: relative;
            margin: 10px;
            bottom: 20px;
            left: 10px;
            max-width: 20%;
            word-wrap: break-word;
            align-self: flex-end;
            background-color: #ADFF2F;
            padding: 7px;
            border-radius:10px;
            border: 2px;
        }
    </style>
        <div class="answer"></div>
`;


class MessageValue extends HTMLElement {
    constructor (){
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot"] }] */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$container = this.shadowRoot.querySelector('.answer')
        this.messages = []
    }

    static get observedAttributes() {
        return ['name', 'value', 'text-message']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text-message') {
            const message = {}
            message.inner = newValue
            const date = new Date()
            const myname = "kirill"
            const newtext = document.createElement('div')
            const newdate = document.createElement('div')
            const newname = document.createElement('div')
            message.date = `${date.getHours()}:${date.getMinutes()}`
            message.name = myname
            if (this.$container.scrollHeight) {
                this.$container.scrollTop = this.$container.scrollHeight
            }
            this.messages.push(message)
            const json = JSON.stringify(this.messages)
            localStorage.setItem('message-container', json)
        } else {
            this.$input.setAttribute(name, newValue)
        }
    }
    
    connectedCallback() {
       if (localStorage.getItem('message-container')) {
            const messageContainer = localStorage.getItem('message-container')
            this.messages = JSON.parse(messageContainer)
            for (let i = 0; i < this.messages.length; i += 1) {
                const newmessage = document.createElement('div')
                const newtext = document.createElement('div')
                const newdate = document.createElement('div')
                const newname = document.createElement('div')
                newtext.setAttribute('class', 'message')
                newdate.setAttribute('class', 'date')
                newname.setAttribute('class', 'name')
                newtext.innerHTML = this.messages[i].inner
                newdate.innerHTML = this.messages[i].date
                newname.innerHTML = this.messages[i].name
                newmessage.appendChild(newtext)
                newmessage.appendChild(newdate)
                newmessage.appendChild(newname)
                this.$container.prepend(newmessage)
            }
       }
    }

}

customElements.define('message-value', MessageValue);
