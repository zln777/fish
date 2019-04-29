// 大鱼与食物是否发生碰撞
function fishfoodcollsion(){
  // 循环遍历食物数量
  for(var i=0;i<food.num;i++){
    // 判断食物状态, true则执行
    if(food.alive[i]){
      var len=calLength2(food.x[i],food.y[i],bigFish.x,bigFish.y);
      // 判断食物与大鱼之间的距离, 勾股定理, 如果len小于900, 实际小于30
      if(len<900){
        food.alive[i]=false;
        // console.log(food.alive[i]);
        if(food.colorType[i]=="blue"){
          score.double=-1;
          bigFish.hp-=2;
          if(bigFish.hp<0){
            bigFish.hp=0;
          }
        }else{
          score.double=2;
          if(bigFish.hp<100){
            bigFish.hp+=1;
          }
        }
        score.addScore();
      }
    }
  }
}