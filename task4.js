function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}


ElectricDevice.prototype.turnOn = function() {
    if (!this.pluggedIn) {
        this.pluggedIn = true;
        console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
    } else {
        console.log(`${this.name} уже включен.`);
    }
};

ElectricDevice.prototype.turnOff = function() {
    if (this.pluggedIn) {
        this.pluggedIn = false;
        console.log(`${this.name} выключен.`);
    } else {
        console.log(`${this.name} уже выключен.`);
    }
};


function DeskLamp(name, power, brightness) {
    ElectricDevice.call(this, name, power);
    this.brightness = brightness;
}


DeskLamp.prototype = Object.create(ElectricDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;


DeskLamp.prototype.adjustBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} яркость установлена на ${this.brightness}.`);
};

function Computer(name, power, operatingSystem) {
    ElectricDevice.call(this, name, power);
    this.operatingSystem = operatingSystem;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.reboot = function() {
    console.log(`${this.name} перезагружается...`);
};

const lamp = new DeskLamp('Настольная лампа', 25, 'средняя');
const computer = new Computer('Компьютер', 500, 'Windows');

lamp.turnOn();
lamp.adjustBrightness('высокая');
lamp.turnOff();

computer.turnOn();
computer.reboot();
computer.turnOff();