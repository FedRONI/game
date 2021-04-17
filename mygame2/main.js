let map = {
    x: 0,
    y: 0,
    width: 1920,
    height: 969,
    color: '#00becc',
    border: '#f1f1f1'
}


let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let bots = [];

let bot = {
    id: 1,
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'red'
}

bots.push(bot);

let buffs = [];

let buff = {
    id: 1,
    x: 224,
    y: 224,
    width: 56,
    height: 56,
    trnstn: .25,
    color: '#a700cc'
}

buffs.push(buff);



renderMap(map);
renderCube(spawnCube(map, cube));
renderBots(bots);
renderBuffs(buffs);

let tick = setInterval(timeTick, 1000);