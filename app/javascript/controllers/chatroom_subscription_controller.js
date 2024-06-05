// app/javascript/controllers/chatroom_subscription_controller.js
import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

export default class extends Controller {
  static values = { chatroomId: Number }

  connect() {
    this.subscription = createConsumer().subscriptions.create(
      { channel: "ChatroomChannel", id: this.chatroomIdValue },
      { received: data => this.element.insertAdjacentHTML("beforeend", data) }
    )
  }
}
