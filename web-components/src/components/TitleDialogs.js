const template = document.createElement('template')
template.innerHTML = `
    <style>

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

        .loupe {
          position: absolute;
          right: 3%;
          top: 40%;
          height: 30px;
          width: 30px;
        }

        .settings {
          position: absolute;
          left: 3%;
          top: 40%;
          height: 30px;
          width: 30px;
        }

    </style>

    <div class="title">
      <img class="loupe" src="image/loupe.svg"/>
      <img class="settings" src="image/settings.svg"/>
      <div class="title_text">
        <p style="font-size:30px";>Messenger</p>
      </div>
    </div>
`

class TitleDialogs extends HTMLElement {
    constructor () {
        super()
        /* eslint no-underscore-dangle: ["error", { "allow": ["_shadowRoot"] }] */
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('title-dialogs', TitleDialogs)
