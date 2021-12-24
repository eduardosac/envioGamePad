radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        radio.sendString("13")
        basic.showNumber(3)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        radio.sendString("14")
        basic.showNumber(4)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        radio.sendString("15")
        basic.showNumber(5)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        radio.sendString("16")
        basic.showNumber(6)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("1")
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("2")
        basic.showString("B")
    }
})
