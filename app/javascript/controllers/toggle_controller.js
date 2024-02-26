import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "div" ]

  hideorreveal() {
    this.divTargets.forEach((element) => {
      element.hidden = !element.hidden
    })
  }
}
