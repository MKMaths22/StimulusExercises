import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "div", "menu", "hideme", "revealme", "checkbox" ]

  connect() {
    this.menuTarget.hidden = true
    this.revealmeTarget.hidden = true
  }

  hideorreveal() {
    this.divTargets.forEach((element) => {
      element.hidden = !element.hidden
    })
  }

  reveal() {
    this.menuTargets.forEach((element) => {
      element.hidden = false
    })
  }

  hideandrevealanother() {
    this.hidemeTarget.hidden = true
    this.revealmeTarget.hidden = false
  }

  highlight() {
    this.checkboxTarget.classList.add("highlighted")
  }
}
