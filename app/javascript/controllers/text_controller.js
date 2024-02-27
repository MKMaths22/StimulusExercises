import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { counter: Number, limit: Number, margin: Number }
  static targets = [ "limited_text", "error_div", "warning", "error"]
  
  connect() {
    this.limit = 280
    this.margin = 20
    this.errorTarget.hidden = true
    this.warningTarget.hidden = true
  }
  
  check_length() {
    this.counter = this.limited_textTarget.value.length
    
    if (this.counter <= (this.limit - this.margin))
      {this.warningTarget.hidden = true
      this.errorTarget.hidden = true
      this.error_divTarget.classList.remove("warning")
      this.error_divTarget.classList.remove("error")
      return }
    else if (this.counter > this.limit)
      {
      this.warningTarget.hidden = true
      this.errorTarget.hidden = false
      this.error_divTarget.classList.remove("warning")
      this.error_divTarget.classList.add("error")
      return }
    else
      this.warningTarget.hidden = false
      this.errorTarget.hidden = true
      this.error_divTarget.classList.add("warning")
      this.error_divTarget.classList.remove("error")
  }

  

}