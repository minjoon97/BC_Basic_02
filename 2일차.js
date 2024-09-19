//마블 보드판을 배열로 구현
let marble = Array(15).fill(0);

//A,B,C,D말의 위치
let A = 0;
let B = 0;
let C = 0;
let D = 0;

//A가 먼저, D가 마지막으로 주사위를 던짐
//주사위 숫자만큼 말이 이동은 하지만, 이미 다른 말이 점유한 곳은 말이 이동을 해도 먹을 수 없음
function play(param0) {

    A += param0[0];
    A %= 16;
    B += param0[1];
    B %= 16;
    C += param0[2];
    C %= 16;
    D += param0[3];
    D %= 16;

    if(marble[A-1]===0) {
        marble[A-1] = 'A'
    }
    if(marble[B-1]===0) {
        marble[B-1] = 'B'
    }
    if(marble[C-1]===0) {
        marble[C-1] = 'C'
    }
    if(marble[D-1]===0) {
        marble[D-1] = 'D'
    }

    //턴 횟수가 만료되거나, 마블 승자가 결정되면 결과값 리턴
    if(count===50 || !marble.includes(0)) {

        let result = new Map(); 
        result.set('A',marble.filter(v=>v==='A').length);
        result.set('B',marble.filter(v=>v==='B').length);
        result.set('C',marble.filter(v=>v==='C').length);
        result.set('D',marble.filter(v=>v==='D').length);
        return result;
    }
}

//게임 실행
//무한루프 방지를 위해 횟수는 50회 미만으로 제한
let count = 0;
while(marble.includes(0)&&count<50) {
    count++;

    //주사위 던지기
    let random = [];
    for(let i = 0; i < 4; i++) {
        random.push(Math.floor(Math.random() * 4) + 1);
    }
    play(random);
    if(play(random))console.log(play(random));
}