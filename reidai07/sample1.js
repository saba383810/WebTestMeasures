//初期化
var sum = 0;
var min = 100;
var Max = 0;
var diff;
var avg;
//乱数を10個表示
for(var i = 0; i<10;i++){
    var random = Math.floor( Math.random() * 89 ) + 10;
    sum += random;
    if(min>random) min = random;
    if(Max< random) Max = random;
    document.write(random," ");
}
avg = sum /10; // 平均値の計算
diff = Max-min; // 最大値と最小値の差
// 計算結果を表示
document.write("<p>合計 : ",sum,"</p>");
document.write("<p>平均 : ",avg,"</p>");
document.write("<p>最大値 : ",Max,"</p>");
document.write("<p>最小値 : ",min,"</p>");
document.write("<p>最大値と最小値の差 : ",diff,"</p>");
