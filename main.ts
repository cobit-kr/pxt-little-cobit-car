enum Motor {

    //% block="left"
    Left = 0,
    //% block="right"
    Right = 1
}

enum MotorDirection {
    //% block="CCW"
    CCW = 0,
    //% block="CW"
    CW = 1
}

/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9" block="little-cobit-car"
namespace little_cobit_car {

	/**
	 * Stops the motor.
	 */
    //% weight=90
    //% blockId="cobit_stopMotor" block="멈추기"
    export function motorStop(): void {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
    }

    /**
	 * Go forward
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_goForward" block="앞으로 %speed|% 속도로 가기"
    export function goForward(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P13, pwr)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, pwr)

    }

    /**
	 *  Go backward
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_goBackward" block="뒤로 %speed|% 속도로 가기"
    export function goBackward(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.analogWritePin(AnalogPin.P13, (1024 - pwr))
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.analogWritePin(AnalogPin.P15, (1024 - pwr))

    }

    /**
	 *  Turn left
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_turnLeft" block="왼쪽으로 %speed|% 속도로 회전하기"
    export function turnLeft(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, pwr)
    }

    /**
	 *  Turn right
	 */
    //% speed.min=0 speed.max=100
    //% weight=90
    //% blockId="cobit_turnRight" block="오른쪽으로 %speed|% 속도로 회전하기"
    export function turnLight(speed: number): void {
        let pwr = 0
        if (speed > 100) {
            speed = 100
        }
        pwr = speed * 10
        if (pwr > 1024) {
            pwr = 1024
        }
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P13, pwr)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
    }

    /**
	 *  Read ultrasonic sensor 
	 */
    //% weight=90  
    //% blockId="cobit_readUltraSonic" block="초음파센서 읽기"
    export function readUltra(): number {
        let value = 0
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(2)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P8, 0)
        value = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
        return value
    }

    /**
	 * Moves the servo.
     * @param degree servo rotation degree 
	 */
    //% weight=90
    //% degree.min=0 degree.max=180
    //% blockId="cobit_rotateServo" block="서보모터  %degree|도 회전하기"
    export function rotateServo(degree: number): void {
        if (degree > 180) {
            degree = 180
        }
        if (degree < 0) {
            degree = 0
        }
        pins.servoWritePin(AnalogPin.P16, degree)
    }

    /**
	 *  Read IR sensor left-out
	 */
    //% weight=90
    //% blockId="cobit_readIRsensor_left_out" block="왼쪽 외부 IR센서 읽기"
    export function readIRsensorLeftOut(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P6)
        return value
    }

    /**
	 *  Read IR sensor left-in
	 */
    //% weight=90
    //% blockId="cobit_readIRsensor_left_in" block="왼쪽 내부 IR센서 읽기"
    export function readIRsensorLeftIn(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P7)
        return value
    }

    /**
    *  Read IR sensor right-in
    */
    //% weight=90
    //% blockId="cobit_readIRsensor_right_in" block="오른쪽 내부 IR센서 읽기"
    export function readIRsensorRightIn(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P9)
        return value
    }

    /**
   *  Read IR sensor right-out
   */
    //% weight=90
    //% blockId="cobit_readIRsensor_right_out" block="오른쪽 외부 IR센서 읽기"
    export function readIRsensorRightOut(): number {
        let value = 0
        value = pins.digitalReadPin(DigitalPin.P10)
        return value
    }
}