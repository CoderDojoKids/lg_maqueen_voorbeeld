while (!(input.buttonIsPressed(Button.A))) {
	
}
music.playMelody("C D E F G A B C5 ", 240)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(randint(250, 750))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
