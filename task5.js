class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    turnOn() {
        if (!this.pluggedIn) {
            this.pluggedIn = true;
            console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
        } else {
            console.log(`${this.name} уже включен.`);
        }
    }


    turnOff() {
        if (this.pluggedIn) {
            this.pluggedIn = false;
            console.log(`${this.name} выключен.`);
        } else {
            console.log(`${this.name} уже выключен.`);
        }
    }
}

class DeskLamp extends ElectricDevice {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`${this.name} яркость установлена на ${this.brightness}.`);
    }
}


class Computer extends ElectricDevice {
    constructor(name, power, operatingSystem) {
        super(name, power);
        this.operatingSystem = operatingSystem;
    }


    reboot() {
        console.log(`${this.name} перезагружается...`);
    }
}


const lamp = new DeskLamp('Настольная лампа', 25, 'средняя');
const computer = new Computer('Компьютер', 500, 'Windows');


lamp.turnOn();
lamp.adjustBrightness('высокая');
lamp.turnOff();

computer.turnOn();
computer.reboot();
computer.turnOff();