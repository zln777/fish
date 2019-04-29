// 创建全局变量
// 创建画布, 画笔, 画布宽度, 画布高度
var can1;
var can2;
// can3用来执行游戏开始前介绍页面
var can3; 
var ctx1;
var ctx2;
var ctx3;
var canWidth;
var canHeight;
// 创建变量保存背景图片
var bgPic;
// 创建变量保存海葵对象
var ane;
// 创建变量保存食物
var food;
// 创建变量保存大鱼
var bigFish;
var mx;
var my;
// 创建变量保存分数
var score;

// 创建函数game  游戏第一个要执行的函数
function game(){
  init();
  gameloop();
};

// 创建函数init 初始化函数, 创建角色对象并且初始化
function init(){
  // 获取画布1, 并且赋值给can1
  can1=document.getElementById("can1");
  // 获取画布2, 并且赋值给can2
  can2=document.getElementById("can2");
  // 获取画布3 , 并赋值给can3
  can3=document.getElementById("can3");
  // 依据can1获取其对应的画笔赋值给ctx1
  ctx1=can1.getContext("2d");
  // 依据can2获取其对应的画笔赋值给ctx2
  ctx2=can2.getContext("2d");
  // can3画笔
  ctx3=can3.getContext("2d");
  // 获取can1的宽度和高度赋值, canWidth canHeight
  canWidth=can1.width;
  canHeight=can1.height;
  // console.log(canWidth,canHeight);
  // 创建图片对象, 下载背景图片
  bgPic= new Image();
  bgPic.src="src/background.jpg";
  // 创建海葵对象并且调用海葵的init方法
  ane=new aneObj();
  ane.init();
  // 创建食物对象并且调用食物init方法
  food=new foodObj();
  food.init();
  // 创建大鱼对象并且条用init方法
  bigFish=new bigFishObj();
  bigFish.init();
  // can3添加鼠标点击事件,点击后消失
  can3.addEventListener("click",removeMsg,false);
  // 添加鼠标移动事件获取鼠标位置
  can1.addEventListener("mousemove",handleMove,false);
  // 创建得分对象
  score=new scoreObj();
  // 创建开始介绍信息对象
  msg=new startMsgObj();
};
// 创建函数gameloop 循环绘制游戏中的角色
function gameloop(){
  requestAnimFrame(gameloop);
  drawBackground();
  // 绘制海葵
  // console.log(new Date().getMilliseconds());
  ane.draw();
  // console.log(new Date().getMilliseconds());
  // 监听食物
  foodMonitor();
  // 绘制食物
  food.draw();
  if(bigFish.hp>0){
        
    ctx1.clearRect(0,0,canWidth,canHeight);
    bigFish.draw();
  }
  // 监听大鱼于食物之间的距离
  fishfoodcollsion();
  // 清除画布1
  score.draw();
  msg.draw();
};
// 网页加载成功来调用game
document.body.onload=game;
// 将main.js添加到index.html中

function handleMove(e){
  mx=e.offsetX;
  my=e.offsetY;
}
function removeMsg(e){
  e.target.style.display="none";
}
// 画圆角矩形
function drawRoundedRect(ctx, x, y, width, height, r, fill, stroke,style) {
  ctx.save(); ctx.beginPath(); // draw top and top right corner 
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
  ctx.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
  ctx.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
  ctx.arcTo(x, y, x + r, y, r);
  if (fill) { 
    ctx.fillStyle=style; 
    ctx.fill(); 
  }
  if (stroke) { 
    ctx.strokeStyle=style;
    ctx.stroke(); 
  }
  ctx.restore(); 
}