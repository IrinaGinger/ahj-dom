export default class GameController {
    constructor(gamePlay) {
        this.gamePlay = gamePlay;
    }

    init() {
        this.gamePlay.drawUi();

        let onClick = false;
        let position;
        document.addEventListener('click', () => {onClick = true});

        const redrawInterval = setInterval(() => {
            if(onClick) {
                clearInterval(redrawInterval);
            } else {
                position = Math.floor(Math.random() * (this.gamePlay.boardSize) ** 2);
                this.gamePlay.redrawPosition(position);
            }
        }, 2000);
    }
}