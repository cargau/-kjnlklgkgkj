input.onPinPressed(TouchPin.P0, function () {
	
})
function faireQuelqueChose () {
    let x4 = 0
    let x3 = 0
    let x2 = 0
    let x1 = 0
    let x0 = 0
    if (x0 && (x1 && (x2 && (x3 && x4)))) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
        game.gameOver()
    }
}
input.onButtonPressed(Button.A, function () {
    if (trucx > 0) {
        trucx = trucx - 1
        led.plot(trucx, trucy)
    }
})
input.onGesture(Gesture.TiltRight, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    if (trucx < 4) {
        trucy = trucy + 1
        led.plot(trucx, trucy)
    }
})
input.onButtonPressed(Button.B, function () {
    if (trucx < 4) {
        trucx = trucx + 1
        led.plot(trucx, trucy)
    }
})
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (trucx > 0) {
        trucy = trucy - 1
        led.plot(trucx, trucy)
    }
})
let trucy = 0
let trucx = 0
trucx = 4
trucy = 4
led.plot(trucx, trucy)
basic.forever(function () {
    faireQuelqueChose()
})
