let answer = 0
input.onGesture(Gesture.Shake, function () {
    answer = randint(0, 2)
    if (answer == 0) {
        basic.showString("Yes")
    } else {
        if (answer == 1) {
            basic.showString("No")
        } else {
            basic.showString("Try again")
        }
    }
})
basic.forever(function () {
	
})
