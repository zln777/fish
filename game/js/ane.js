// 创建海葵的构造函数  aneObj
var aneObj= function(){
  // 所有海葵的起点
  this.x=[];
  // 所有海葵终点
  this.xend=[];
  // 所有海葵的高度
  this.y=[];
  // 摆动幅度
  this.amp=[];
  // 连续变化数值
  this.alpha=0;
}
// 为构造函数添加num属性 50
aneObj.prototype.num=50;
// 为构造函数添加init方法
aneObj.prototype.init=function(){
  for(var i=0;i<this.num;i++){
    // 初始化坐标起点
    this.x[i]=i*16+Math.random()*20;
    // 初始化坐标终点
    this.xend[i]=this.x[i];
    this.y[i]=canHeight-200+Math.random()*50;
    // 摆动幅度
    this.amp[i]=20+Math.random()*20;
  }
  // console.log(this.x);
  // console.log(this.xend);
  // console.log(this.y);
  // console.log(this.amp);
}
// 为构造函数添加draw方法
aneObj.prototype.draw=function(){
  // 在画布2保存画笔状态
  ctx2.save();
  ctx2.strokeStyle="red";
  ctx2.lineWidth=20;
  ctx2.lineCap="round";
  ctx2.globalAlpha=.5;
  this.alpha+=0.0008 * 36;
  // console.log(this.alpha);
  // console.log(this.alpha);
  var p=Math.sin(this.alpha);
  // console.log(p);
  // if(p==0.9999128327733301){
  //   console.log(new Date().getMilliseconds())
  // }else if(p==0.00239265130689064){
  //   console.log(new Date().getMilliseconds())
  // }else if(p==-0.9999415614966239){
  //   console.log(new Date().getMilliseconds())

  // }
  // 创建循环
  for(var i=0;i<this.num;i++){
    // 开始新路径
    ctx2.beginPath();
    this.xend[i]=this.x[i]+this.amp[i]*p;
    // console.log("p"+p);
    // console.log(this.amp[i]*p);
    ctx2.moveTo(this.x[i],canHeight);
    ctx2.quadraticCurveTo(this.x[i],canHeight-100,this.xend[i],this.y[i]);
    ctx2.stroke();
  }
  ctx2.restore();

}
// 将ane.js添加至index.html中
// 在main.js中创建海葵对象并且调用方法