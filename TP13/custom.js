class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    // Va permettre de modifier les attributs observés
    return ["label"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "label") {
      const button = this.shadowRoot.querySelector("input");
      if (button) {
        button.value = newValue; // pour un boutton serait .textContent
      }
    }
  }

  connectedCallback() {
    // n'est executé que quand ajouté au DOM, + performant pour composant complexes, - pour simples
    // const button = document.createElement('button');
    // button.textContent = 'cliquez-moi';
    // this.shadowRoot.appendChild(button);
    let label = this.getAttribute("label") || "Cliquez-moi"; // On peut mettre autant que possible / ! ne permet pas de modififier dynamiquement depuis le DOM
    // this.shadowRoot.innerHTML = `<input type='button' value=${label}>`; // Plus simple/rapide mais injections possibles.
    this.shadowRoot.innerHTML = `
        <style>
        input {
        background-color: green;
        color: white;
        padding: 10px;
        cursor: pointer;
        }
        </style>
        <input type='button' value=${label}>`;
  }

  updateColor(color) {
    const button = this.shadowRoot.querySelector("input");
    if (button) {
      button.style.color = color;
    }
  }
}

customElements.define("my-button", MyButton); // Tiret obligatoire pour différencier avec attribut classiques HTML
