// food.js
var foodObj=function(){
  // 食物出生x
  this.x=[];
  // 食物出生y
  this.y=[];
  // 食物宽度l
  this.l=[];
  // 食物颜色, 橙色或者蓝色
  this.colorType=[];
  // 食物速度, 影响生长和上浮
  this.spd=[];
  // 食物状态
  this.alive=[];
  // 食物出生海葵的编号
  this.aneNo=[];
  // 声明两张图片, 橙色和蓝色
  this.blue=new Image();
  this.orange=new Image();
}
// 食物数量 30
foodObj.prototype.num=30;
// 食物初始化方法
foodObj.prototype.init=function(){
  // 循环遍历所有食物
  for(var i=0;i<this.num;i++){
    // 初始化时食物不可见
    // 初始化食物x位置
    this.x[i]=0;
    this.y[i]=0;
    this.alive[i]=false;
    // 初始食物宽度为0
    this.l[i]=0;
    // 初始化速度, 初速的0.02
    this.spd[i]=Math.random()*0.21+0.3;
    // 食物颜色类型 90%为蓝色, 10%为橙色
    this.colorType[i]="";
    // 图片src
  }
  this.blue.src='src/blue.png';
  this.orange.src='src/fruit.png';
}
// 监听食物数量
function foodMonitor(){
  var sum=0;
  for(var i=0;i<food.num;i++){
    if(food.alive[i]) sum++;
  }
  // console.log(sum);
  // 如果sum小于15
  if(sum<30){
    sendFood();
    return;
  }
}
// 选中不活动食物
function sendFood(){
  for(var i=0;i<food.num;i++){
    if(food.alive[i]==false){
      food.born(i);
      return;
    }
  }
}
// 食物出生
foodObj.prototype.born=function(i){
  var idx=Math.floor(Math.random()*ane.num);
  this.aneNo[i]=idx;
  this.alive[i]=true;
  this.l[i]=0;
  this.colorType[i]=Math.random()<0.9?"blue":"orange";
}
// 画出食物
foodObj.prototype.draw=function(){
  for(var i=0;i<this.num;i++){
    // 判断食物状态是否为true,为true则执行
    if(this.alive[i]){
      // 颜色类型来判断pic
      if(this.colorType[i]=="blue"){
        var pic=this.blue;
      }else{
        var pic=this.orange;
      }
      // 食物生长, 最大生长到14
      if(this.l[i]<14){
        this.l[i]+=this.spd[i];
        // 找到出生海葵的编号
        var no=this.aneNo[i];
        // 定位出生位置与海葵重点位置一样
        this.x[i]=ane.x[no];
        this.y[i]=ane.y[no];
      }else{
        // 食物上升
        this.y[i]-=this.spd[i]*2;
      }
      ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
      if(this.y[i]<0){
        this.alive[i]=false;
      }
    }
  }
}