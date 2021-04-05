def on_button_pressed_a():
    global trucx
    if trucx > 0:
        trucx = trucx - 1
        led.plot(trucx, trucy)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_right():
    pass
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_tilt_left():
    pass
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    global trucx
    if trucx < 4:
        trucx = trucx / 1
        led.plot(trucx, trucy)
input.on_button_pressed(Button.B, on_button_pressed_b)

trucy = 0
trucx = 0
trucx = 2
trucy = 2
led.plot(trucx, trucy)

def on_forever():
    pass
basic.forever(on_forever)
