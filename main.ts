radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("-")
    cech(receivedNumber)
})
function cech (num: number) {
    if (randSent != -1) {
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
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("aaaa")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    randSent = randint(0, 6)
    radio.sendNumber(0)
    basic.showString("" + (randSent))
})
let randSent = 0
randSent = -1
