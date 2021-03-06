import { getRandomArbitrary } from './utils';
import { level } from './game';
import { makeMagic, makeTurn } from './youTurn';
import { randomInteger, soundClickGreat, soundClickLosing } from './functions-task';

export default function showTask(param, player1, player2) {
    document.querySelector('.task').style.display = 'block';
    document.querySelector('.field').style.display = 'none';
    const arrayOperators = ['+', '-', ':', '*'];
    let points = 0;
    let argumentOne;
    let argumentTwo;
    let result;
    const numOperator = randomInteger(0, 3);
    const operator = arrayOperators[numOperator];
    if (operator === ':') {
        while ((argumentOne % argumentTwo) !== 0) {
            argumentOne = randomInteger(10, 100);
            argumentTwo = randomInteger(2, 50);
        }
    } else if (operator === '-') {
        argumentOne = randomInteger(1, 100);
        argumentTwo = randomInteger(1, argumentOne);
    } else if (operator === '*') {
        argumentOne = randomInteger(1, 10);
        argumentTwo = randomInteger(1, 10);
    } else {
        argumentOne = randomInteger(1, 100);
        argumentTwo = randomInteger(1, 100);
    }

    document.querySelector('.argument-one').innerHTML = argumentOne;
    document.querySelector('.argument-two').innerHTML = argumentTwo;
    document.querySelector('.operator').innerHTML = operator;
    switch (operator) {
    case '+':
        result = argumentOne + argumentTwo;
        break;
    case '-':
        result = argumentOne - argumentTwo;
        break;
    case ':':
        result = argumentOne / argumentTwo;
        break;
    case '*':
        result = argumentOne * argumentTwo;
        break;
    default:
        break;
    }
    function Task() {
        if (document.querySelector('.grate')) {
            document.querySelector('.task').removeChild(document.querySelector('.grate'));
        }
        const grate = document.createElement('div');
        const resultForm = document.querySelector('#input').value;
        if (resultForm.length === 0) {
            alert('Вы не ввели свое решение в форму!');
        } else if (+resultForm !== result) {
            document.querySelector('.task-window').style.display = 'none';
            document.querySelector('.task').appendChild(grate);
            grate.classList.add('grate');
            soundClickLosing();
            grate.innerHTML = '<p>Результат не верен - магия не применилась!</p><p>Теперь ходит противник.</p>';
            closeTask();
            points = Math.floor(getRandomArbitrary(10, 20) * level);
            param = getRandomArbitrary(1, 6);
            setTimeout(() => {
                makeMagic(param, '.player-container .magic', 'player-magic', '.monsters-container .magic', '.monsters-container .health');
                makeTurn(param, points, player2, player1, '.aboutMonster', '#monsterLife', '.aboutPlayer', '#playerLife', 'Противник');
            }, 1000);
        } else if (+resultForm === result) {
            document.querySelector('.task-window').style.display = 'none';
            document.querySelector('.task').appendChild(grate);
            grate.classList.add('grate');
            soundClickGreat();
            grate.innerHTML = '<p>Ура! Вы правильно решили - магия применилась!</p>';
            closeTask();
            points = getRandomArbitrary(10, 20);
            setTimeout(() => {
                makeMagic(param, '.monsters-container .magic', 'monsters-magic', '.player-container .magic', '.player-container .health');
                makeTurn(param, points, player1, player2, '.aboutPlayer', '#playerLife', '.aboutMonster', '#monsterLife', 'Ты');
            }, 1000);
        }
    }
    document.querySelector('.button').addEventListener('click', Task);

    function closeTask() {
        setTimeout(() => {
            document.querySelector('.task').removeChild(document.querySelector('.grate'));
            document.querySelector('.task').style.display = 'none';
            document.querySelector('.modal-dialog').style.display = 'none';
            document.querySelector('.task-window').style.display = 'block';
            document.querySelector('#input').value = '';
            document.querySelector('.button').removeEventListener('click', Task);
            document.querySelector('.field').style.display = 'grid';
        }, 2000);
    }
}
