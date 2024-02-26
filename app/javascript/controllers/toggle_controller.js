import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "div", "menu" ]

  connect() {
    this.menuTargets.forEach((menu) => {
      menu.hidden = true
    })
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
}
