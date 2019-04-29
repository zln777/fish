// 创建得分构造函数
var scoreObj=function(){
  // 吃的食物数量
  this.foodNum=1;
  // 得分倍数, 蓝色一倍, 橙色两倍
  this.double=1;
  // 得分总数
  this.scroe=0;
}
// 绘制分数
scoreObj.prototype.draw=function(){
  // 保存画笔状态
  if(bigFish.hp>0){
    ctx1.save();
    ctx1.fillStyle="#fff";
    ctx1.font="24px SimHei";
    ctx1.textAlign="center";
    var w=canWidth-100;
    var h=40;
    ctx1.fillText("Score"+this.scroe,w,h);
    ctx1.restore();
  }
  drawRoundedRect(ctx1,10,10,bigFish.hp,30,5,true,false,"#e00012");
  ctx1.save();
  ctx1.fillStyle="#fff";
  ctx1.font="16px SimHei";
  ctx1.fillText("HP",15,30);
  ctx1.restore();
  if(bigFish.hp==0){
    ctx1.save();
    ctx1.fillStyle="red";
    ctx1.font="39px SimHei";
    var txt="You Are Dead!";
    var tw=ctx1.measureText(txt).width;
    ctx1.fillText(txt,canWidth*0.5-tw*0.5,canHeight*0.5);
    ctx1.restore();
  }
}
scoreObj.prototype.addScore=function(){
  this.scroe+=this.foodNum*100*this.double;
}
