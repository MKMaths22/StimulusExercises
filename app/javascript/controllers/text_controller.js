import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { counter: Number, limit: Number, margin: Number }
  static targets = [ "limitedtext", "errordiv", "warning", "error"]
  
  connect() {
    this.limit = 280
    this.margin = 20
    this.errorTarget.hidden = true
    this.warningTarget.hidden = true
  }
  
  checklength() {
    this.counter = this.limitedtextTarget.value.length
    console.log(this.counter)
    
    if (this.counter <= (this.limit - this.margin))
      {this.warningTarget.hidden = true
      this.errorTarget.hidden = true
      this.errordivTarget.classList.remove("warning")
      this.errordivTarget.classList.remove("error")
      return }
    else if (this.counter > this.limit)
      {
      this.warningTarget.hidden = true
      this.errorTarget.hidden = false
      this.errordivTarget.classList.remove("warning")
      this.errordivTarget.classList.add("error")
      return }
    else
      this.warningTarget.hidden = false
      this.errorTarget.hidden = true
      this.errordivTarget.classList.add("warning")
      this.errordivTarget.classList.remove("error")
  }

  

}