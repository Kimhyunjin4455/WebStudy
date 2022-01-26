const proverbs = [
    {
        proverb: "\" 일찍 일어나는 새가 벌레를 잡는다 \" : ",
        mean: "부지런한 사람이 먼저 이득을 보고 기회를 잡을 수 있다",
    }, {
        proverb: "\" 낮말은 새가 듣고 밤말은 쥐가 듣는다 \" : ",
        mean: "아무도 안 듣는 데에서도 말은 조심해야 한다.",
    }, {
        proverb: "\" 족제비도 낯짝이 있다 \" : ",
        mean: "염치나 체면을 모르는 사람을 탓하는 말.",
    }, {
        proverb: "\" 눈 가리고 아웅한다 \" : ",
        mean: "얕은 꾀를 써서 속이려고 한다.",
    }, {
        proverb: "\" 길이 아니면 가지 말고 말이 아니면 탓하지 마라 \" : ",
        mean: "사리에 어긋난 말이면 아예 참견하지도 말라는 뜻",
    }

]

const proverbPrint = document.querySelector("#proverbs span:first-child");
const meanPrint = document.querySelector("#proverbs span:last-child");

const todaysProverb = proverbs[Math.floor(Math.random() * proverbs.length)];
// 배열은 0부터 시작하는 것 잊지말기!
if (Math.floor(Math.random() * proverbs.length) == 0) {
    proverbPrint.innerText = todaysProverb.proverb;
    meanPrint.innerText = todaysProverb.mean;
    document.getElementById("proverbs").style.color = "blue";

}
else if (Math.floor(Math.random() * proverbs.length) == 1) {
    proverbPrint.innerText = todaysProverb.proverb;
    meanPrint.innerText = todaysProverb.mean;
    document.getElementById("proverbs").style.color = "red";

}
else if (Math.floor(Math.random() * proverbs.length) == 2) {
    proverbPrint.innerText = todaysProverb.proverb;
    meanPrint.innerText = todaysProverb.mean;
    document.getElementById("proverbs").style.color = "green";

}
else if (Math.floor(Math.random() * proverbs.length) == 3) {
    proverbPrint.innerText = todaysProverb.proverb;
    meanPrint.innerText = todaysProverb.mean;
    document.getElementById("proverbs").style.color = "yellowgreen";

}
else if (Math.floor(Math.random() * proverbs.length) == 4) {
    proverbPrint.innerText = todaysProverb.proverb;
    meanPrint.innerText = todaysProverb.mean;
    document.getElementById("proverbs").style.color = "grey";

}
else {
    proverbPrint.innerText = "error";
}
/*왜 에러가 발생되는지?*/


