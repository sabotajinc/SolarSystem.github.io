const game = new CrossGame('.game.cross');
const settings = new GameSettins({
    selector: '.game.actions',
    changeHandler: onRobotNameChange,
    submitHandler: onStartGame,
});

console.log({ game, settings });

game.addEventListener(CrossGame.EVENTS.WIN, ()=> setTimeout(onWin, 1000) );
game.addEventListener(CrossGame.EVENTS.DRAW, onDraw);

function onWin() {
    if(confirm(`Победили ${game.curentUser === CrossGame.CROSS ? 'крестики' : 'нолики'} \nНачать новую игру?`)) {
        game.startNewGame();
    }
}

function onDraw() {
    if (confirm('Ничья. Сыграть еще раз?')) {
        game.startNewGame();
    }
}

function onRobotNameChange() {
    if (confirm('Начать новую игру?')) {
        game.startNewGame();
    }
}

function onStartGame() {
    game.startNewGame();
}