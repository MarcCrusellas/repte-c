input.onButtonPressed(Button.A, function () {
    radio.sendString("aaaa")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
