var bigFishObj=function(){
  // 大鱼位置
  this.x;
  this.y;
  // 大鱼的游动角度
  this.angle;
  // 大鱼的眼睛两张图片, 睁眼和闭眼
  this.eye=[];
  // 大鱼的身体八张图片
  this.body=[];
  // 大鱼的尾巴八张图片
  this.tail=[];
  // 大鱼hp, 初始为100%;
  this.hp=100;
  // 大鱼身体变换效果
 
  this.bodyId=0;

  // 大鱼眼睛闭合效果, 根据下标0,1
  this.eyeStart=0;
  this.eyeEnd=3000;  //3000后眼睛闭合
  this.eyeId=0;

  // 大鱼尾巴摆动效果
  this.tailStart=0;
  this.tailEnd=300;  //300后尾巴摆动
  this.tailId=0;

}
bigFishObj.prototype.init=function(){
  // 初始化大鱼位置
  // 初始屏幕中心
  this.x=canWidth / 2;
  this.y=canHeight / 2;
  // 初始大鱼角度
  this.angle=0;
  
  // 初始化大鱼眼睛
  for(var i=0;i<2;i++){
    this.eye[i]=new Image();
    this.eye[i].src='src/bigEye'+i+'.png';
  }
  // 初始化大鱼身体
  for(var k=0;k<8;k++){
    this.body[k]=new Image();
    this.body[k].src='src/bigSwim'+k+'.png';
  }
  // 初始化大鱼尾巴
  for(var j=0;j<8;j++){
    this.tail[j]=new Image();
    this.tail[j].src='src/bigTail'+j+'.png';
  }
}

bigFishObj.prototype.draw=function(){
  // 将鼠标位置赋值给大鱼位置
  this.x=mx;
  this.y=my;
  // 大鱼身体图片切换
  this.bodyId=Math.ceil(this.hp/12.5)-1;
  console.log(this.bodyId);
  console.log(this.hp);
  // 大鱼眼睛图片切换
  // 大鱼眼睛起始数值累加
  this.eyeStart+=10;
  // 如果大鱼起始大于结束, 切换下标
  if(this.eyeStart>this.eyeEnd){
    // 下标自增 范围0~1 
    this.eyeId=(this.eyeId+1)%2;
    this.eyeStart=0;
    // 改变大鱼睁眼闭眼时间
    if(this.eyeId==0){
      // eyeid为0时为睁眼, 睁眼时间为3000
      this.eyeEnd=3000;
    }
    if(this.eyeId==1){
      // eyeid为1时为闭眼, 闭眼时间为300
      this.eyeEnd=300;
    }
  }
  // 大鱼尾巴图片切换
  this.tailStart+=10;
  if(this.tailStart>this.tailEnd){
    // 尾巴下标自增, 共8张图片, 取余8来获取 0~7
    this.tailId=(this.tailId+1)%8;
    this.tailStart=0;
  }

  // 保存画笔1状态
  ctx1.save();
  // 大鱼定于鼠标点
  ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle);
  // 绘制大鱼身体第一张图片
  // console.log(this.eye[0]);
  ctx1.drawImage(this.body[this.bodyId],-this.body[this.bodyId].width*0.5,-this.body[this.bodyId].height*0.5);
  // 绘制大鱼眼睛
  ctx1.drawImage(this.eye[this.eyeId],-this.eye[this.eyeId].width*0.5,-this.eye[this.eyeId].height*0.5);
  // 绘制大鱼尾巴
  // console.log(this.tailId);
  // console.log(this.body[0].width);
  ctx1.drawImage(this.tail[this.tailId],-this.tail[this.tailId].width*0.5+30,-this.tail[this.tailId].height*0.5);
  ctx1.restore();
}