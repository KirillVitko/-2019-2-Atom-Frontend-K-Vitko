const template = document.createElement('template')
template.innerHTML = `
    <style>

        .message {
            max-width: 15%;
            position: absolute;
            right: 0%;
            word-wrap: break-word;
            align-self: flex-end;
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;
        }

    </style>
        <div class="message"></div>
`


class MessageCatalog extends HTMLElement {
    constructor (){
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot"] }] */
        /* eslint camelcase: 0 */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$container = this.shadowRoot.querySelector('.message')
        this.message_list = []
    }

    static get observedAttributes() {
        return ['text-message']
    }

    attributeChangedCallback(name, old_value, new_value) {
          const message = {}
          const time = new Date()
          const user_name = "kirill"
          message.text = new_value
          message.time = `${time.getHours()}:${time.getMinutes()}`
          message.name = user_name
          this.message_list.push(message)
          const json = JSON.stringify(this.message_list)
          localStorage.setItem('message-container', json)
      
          const newmessage = document.createElement('message-value')
          newmessage.setAttribute('text', message.text)
          newmessage.setAttribute('time', message.time)
          newmessage.setAttribute('name', message.name)
          this.$container.scrollBottom = this.$container.scrollHeight
          this.$container.prepend(newmessage)
          newmessage.scrollIntoView()
    }

    connectedCallback() {
        const json = localStorage.getItem('message-container')
        if (json) {
            const message_container = json
            this.message_list = JSON.parse(message_container)
            for (let i = 0; i < this.message_list.length; i += 1) {
                const newmessage = document.createElement('message-value')
                newmessage.setAttribute('text', this.message_list[i].text)
                newmessage.setAttribute('time', this.message_list[i].time)
                newmessage.setAttribute('name', this.message_list[i].name)
                this.$container.prepend(newmessage)
            }
       }
    }

}

customElements.define('message-catalog', MessageCatalog)
