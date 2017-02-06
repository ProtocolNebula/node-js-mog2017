const getRandom = require ('./functions/random.js')

class Player {
    constructor(name, hp, atk, def) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def

        console.log("=============")
        console.log(name + " entra a la arena")
        this.showStatus()
        console.log("=============")
    }

    hit(player) {
        var hitDmg = this.atk - player.def
        if (hitDmg < 1) hitDmg = 1

        return player.getDamage(hitDmg);
    }

    getDamage(hitDmg) {
        this.hp -= hitDmg
        if (this.hp < 0) {
            console.log(this.name + " ha muerto")
        } else {
            console.log(this.name + " recibe un golpe de " + hitDmg + " de daño")
            console.log()
            console.log("Status " + this.name + ":")
            this.showStatus()
        }
    }

    stillAlive() {
        return this.hp > 0
    }

    showStatus() {
        console.log("HP: " + this.hp +  " | Ataque: " + this.atk + " | Defensa: " + this.def)
    }
}

module.exports = Player