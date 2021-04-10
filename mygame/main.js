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

let map = {
    x: 500,
    y: 300,
    width: 500,
    height: 500,
    color: '#00d5e8',
    border: '#f1f1f1'
}

renderMap(map);
renderCube(spawnCube(map, cube));