import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "div", "menu", "hide_me", "reveal_me", "checkbox" ]

  connect() {
    this.menuTarget.hidden = true
    this.reveal_meTarget.hidden = true
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

  hide_and_reveal_another() {
    this.hide_meTarget.hidden = true
    this.reveal_meTarget.hidden = false
  }

  highlight() {
    this.checkboxTarget.classList.add("highlighted")
  }
}
