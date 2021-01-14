input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    lost = 0
    basic.showString("OK!")
})
let lost = 0
basic.showIcon(IconNames.Heart)
lost = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        lost += 1
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (lost == 5) {
        lost = 0
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            `)
        lost = 0
        music.playMelody("C5 B A G F E D C ", 135)
    }
})
basic.forever(function () {
    basic.showNumber(lost)
})
