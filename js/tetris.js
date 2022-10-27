// DOM
const playground = document.querySelector(".playground > ul");
// ul = playgroud

// Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
    tree: [
        [[2, 1], [0, 1], [1, 0], [1, 1]],
        [],
        [],
        [],
    ]
}

const movingItem = {
    type: "tree",
    direction: 0, // 화살표 좌우 돌리는 도와주는 지표
    top: 0, // 어디까지 올라오고 내려와있는지
    left: 3,
};

init();

// functions
function init() {
    tempMovingItem = { ...movingItem }; // 껍데기를 벗긴 안의 내용물만 가져온다
    for (let i = 0; i < GAME_ROWS; i++) {
        prependNewLine();
    }
    renderBlocks();
}

function prependNewLine() {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let j = 0; j < GAME_COLS; j++) {
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul); // 10개 담긴 ul을 li에 집어넣는다
    playground.prepend(li);
}

function renderBlocks() {
    const { type, direction, top, left } = tempMovingItem;
    // tempMovingItem에 들어있는 각각의 property들을 변수로 사용해서 바로 사용할수있도록
    

    BLOCKS[type][direction].forEach(block => {
        const x = block[0] + left;
        const y = block[1] + top;
        console.log({playground});
        const target = playground.childNodes[y].childNodes[0].childNodes[x];
        target.classList.add(type);
    });
}

// event handling
document.addEventListener("keydown")