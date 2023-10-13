class Car {
    constructor(model) {
        this.model = model;
    }

    toJSON() {
        return {
            "type": "car",
            "model": this.model
        }
    }
}

module.exports = Car