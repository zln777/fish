var startMsgObj=function(){
  this.msg=`游戏简介: 鼠标移动控制小鱼, 小鱼碰到蓝色食物hp-2/得分-100, 碰到橙色食物hp+1/得分+200, hp为0则游戏结束`;
}
startMsgObj.prototype.draw=function(){
  // 在屏幕上方画出介绍信息
  ctx3.save();
  ctx3.fillStyle="#0aa1ed";
  ctx3.font="20px Arial";
  // 字符串换行 每行10个
  var t=charEnter(this.msg);
  // 循环绘制t
  for(var i=0;i<t.length;i++){
    ctx3.fillText(t[i],300,100+i*24);
  }
  ctx3.restore();
  // 在按钮中写上开始
  ctx3.save();
  ctx3.fillStyle="#e00012";
  ctx3.font="36px SimHei";
  var txt="点击屏幕开始游戏";
  var tw=ctx3.measureText(txt).width;
  ctx3.fillText(txt,canWidth*0.5-tw*0.5,canHeight*0.5);
  ctx3.restore();
}
// 字符串换行
function charEnter(txt){
  var arr=txt.split("");
  var temp="";
  var row=[];
  for(var i=0;i<arr.length;i++){
    if(temp.length<13){
      temp+=arr[i];
    }else{
      row.push(temp);
      temp=arr[i];
    }
  }
  row.push(temp);
  return row;
}