radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("-")
    randReceived = receivedNumber
    if (randSent != -1) {
        cech(receivedNumber)
    }
})
function cech (num: number) {
    if (randSent <= num) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("aaaa")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    randSent = randint(0, 5)
    radio.sendNumber(randSent)
    basic.showString("" + (randSent))
    if (randReceived != -1) {
        cech(randSent)
    }
})
let randReceived = 0
let randSent = 0
randSent = -1
randReceived = -1
