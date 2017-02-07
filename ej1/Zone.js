const getRandom = require ('./functions/random.js')
const Player = require('./Player.js')

class Zone {

    constructor(players) {
        this.players = []
        for (let n = 0; n < players; n++) {
            let name = "Player " + (n + 1)
            let hp = getRandom(10, 20)
            let atk = getRandom(3,5)
            let def = getRandom(3,5)

            this.players.push(new Player(name, hp, atk, def))
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
            
            var player2 = this.drawPlayer(player1)
            
            if (player2 && player2.stillAlive()) {
                console.log (player1.name + " vs ")
                player1.hit(player2)
                console.log(player2)
            }
            
        })
        
        // Filtarmos los jugadores vivos
        this.players = this.players.filter((jugador) => {
            return jugador.stillAlive()
        })


        console.log("")
        console.log("")
        console.log("Jugadores vivos a final de turno: " + this.players.length)
        console.log(this.players)
        if (this.players.length == 1) {
            console.log("Victoria para " + this.players[0].name)
        } else if (this.players.length == 0) {
            console.log("Todos han muerto")
        } else {
            // Bind para conservar el this
            setTimeout(this.battle.bind(this), 10)
        }
    }


    drawPlayer(excludedPlayer)  {
        if (this.players.length > 1) {
            var player
            do {
                var id = getRandom(0, this.players.length)
                player = this.players[id]
            } while ((excludedPlayer && player.name == excludedPlayer.name))
            //!player.stillAlive() ||  // <-- causa bug si no quedan vivos
            
            console.log("Escogido jugador " + player.name)

            return player
        }
        return false;
    }
}

module.exports = Zone