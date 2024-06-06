// app/javascript/controllers/chatroom_subscription_controller.js
import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  static values = { chatroomId: Number }
  static targets = ["messages"]

  connect() {
    this.subscription = createConsumer().subscriptions.create(
      { channel: "ChatroomChannel", id: this.chatroomIdValue },
      { received: data => this._insertMessageAndScroll(data) }
    )
  }

  disconnect() {
    console.log("unsub")
    this.subscription.unsubscribe()
  }

  resetForm(event) {
    event.target.reset()
  }

  _insertMessageAndScroll(data){
    this.messagesTarget.insertAdjacentHTML("beforeend", data)
    this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight)
  }

}
