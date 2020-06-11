input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    255,
    robotbit.Motors.M1B,
    255
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallSquare)
    robotbit.MotorStop(robotbit.Motors.M1A)
    robotbit.MotorStop(robotbit.Motors.M1B)
})
