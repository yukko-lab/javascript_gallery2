const items = document.querySelectorAll('.img-item');
console.log(items);

for( let i = 0; i < 5; i++) {
  console.log(i);
}
//let i = 0;　…初期化処理。iに0を代入
//i < 5;　…ループ継続のための条件式
//i++　…ループごとの最後に実行される式
//i = 0からスタートして、ループごとに１増えていきます。i が5より小さいとき（4）まで実行されるので、最終的には５回の処理が行われます。




console.log(items.length);

// for文
//for(let i = 0; i < items.length; i++){

 // const keyframes = {
 //   opacity: [0, 1],
 //   translate: ['0 50px', 0],
 //  filter: ['blur(10px)', 'blur(0)'],
// };
  
//  const options = {
  //  duration: 600,
  //   fill: 'forwards',
  //  delay: i * 400,
//  };

 // items[i].animate(keyframes, options);
//}




// forEach文
items.forEach((item, i) => {

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 1000,
    fill: 'forwards',
  };

  item.animate(keyframes, options);
});