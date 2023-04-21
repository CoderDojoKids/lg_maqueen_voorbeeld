function Meet_afstand () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    ongefilterde_afstand = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (ongefilterde_afstand > 150 || ongefilterde_afstand <= 0) {
        aantal_foute_metingen += 1
        if (aantal_foute_metingen > 3) {
            afstand = 0
        }
    } else {
        aantal_foute_metingen = 0
        afstand = ongefilterde_afstand
    }
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
}
function Draai_willekeurig () {
    if (Math.randomBoolean()) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
    basic.pause(randint(333, 667))
    maqueen.motorStop(maqueen.Motors.All)
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    control.reset()
})
let afstand = 0
let aantal_foute_metingen = 0
let ongefilterde_afstand = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
maqueen.motorStop(maqueen.Motors.All)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 216, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
basic.showString("A")
while (!(input.buttonIsPressed(Button.A))) {
	
}
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 4610, 255, 224, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    Meet_afstand()
    while (afstand < 10) {
        Draai_willekeurig()
        Meet_afstand()
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
loops.everyInterval(100, function () {
    basic.showNumber(afstand)
})
// Disco :)
loops.everyInterval(100, function () {
    strip.setPixelColor(randint(0, 3), neopixel.hsl(randint(0, 360), 100, 50))
    strip.show()
})
