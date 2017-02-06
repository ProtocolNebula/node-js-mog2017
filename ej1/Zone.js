const getRandom = require ('./functions/random.js')
const Player = require('./Player.js')

class Zone {

    constructor(players) {
        this.players = []
        for (let n = 1; n <= players; n++) {
            let name = "Player " + n
            let hp = getRandom(10, 20)
            let atk = getRandom(3,5)
            let def = getRandom(3,5)

            this.players[n] = new Player(name, hp, atk, def)
        }
    }

    battle() {
        console.log ("")
        console.log ("")
        console.log ("########## NUEVO TURNO ##########")
        
        // Arrow function (params) => || Fuerza el estado
        this.players.forEach((player1) => {
            console.log ("====== NUEVO MOVIMIENTO ======")
            //var player1 = that.drawPlayer(null)
            console.log (player1.name + " vs ")
            var player2 = this.drawPlayer(player1)
            
            
            player1.hit(player2)
            console.log(player2)
        })
        
        // Filtarmos los jugadores vivos
        this.players = this.players.filter((jugador) => {
            return jugador.stillAlive()
        })


        console.log("")
        console.log("")
        console.log("Jugadores vivos a final de turno: " + this.players.length)
        console.log(this.players)
        if (this.players.length < 2) {
            console.log("Victoria para " + this.players[0].name)
        } else {
            // Bind para conservar el this
            setTimeout(this.battle.bind(this), 10)
        }
    }


    drawPlayer(excludedPlayer)  {
        var player
        do {
            var id = getRandom(1, this.players.length)
            player = this.players[id]
            
        } while (!player.stillAlive() || (excludedPlayer && player.name == excludedPlayer.name))
        
        console.log("Escogido jugador " + player.name)

        return player
    }
}

module.exports = Zone