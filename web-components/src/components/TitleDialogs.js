const template = document.createElement('template')
template.innerHTML = `
    <style>
        button {
          position: absolute;
          left: 2%;
          top: 30%;
          border: 0;
          height: 50px;
          width: 50px;
          transition-property: top;
          transition-property: height;
          transition-property: width;
          background: url('image/arrow.svg');
        }
        button:hover {
          top: 26%;
          height: 60px;
          width: 60px;
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
        .avatar {
          position: absolute;
          left: 43%;
          top: 16%;
          border-radius: 100%;
          height: 50px;
          width: 50px;
        }
        .loupe {
          position: absolute;
          right: 6%;
          top: 40%;
          height: 30px;
          width: 30px;
        }
        .settings {
          position: absolute;
          right: 3%;
          top: 40%;
          height: 30px;
          width: 30px;
        }
    </style>
    <div class="title">
      <button></button>
      <img class="avatar" src="image/avatar.jpeg"/>
      <img class="loupe" src="image/loupe.svg"/>
      <img class="settings" src="image/settings.svg"/>
      <div class="title_text">
        <p style="font-size:30px";>Spider-man</p>
        Online
      </div>
    </div>
`

class TitleMessage extends HTMLElement {
    constructor () {
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot", "_onClick"] }] */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$button = this._shadowRoot.querySelector('button')
        this.$button.addEventListener('click', this._onClick.bind(this))
    }

    _onClick (event) {
        this.$button.dispatchEvent(new Event('hide', {composed:true}))
    }
}

customElements.define('title-dialogs', TitleDialogs)