const playground = document.querySelector(".playground > ul");
// ul = playgroud
console.log(playground);

for (let i = 0; i < 20; i++) {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let j = 0; j < 10; j++) {
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul); // 10개 담긴 ul을 li에 집어넣는다
    playground.prepend(li);
}