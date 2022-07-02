let ranNum = parseInt(Math.random()*45+1);
//document.write(ranNum);

let arr1 = []
for(let i=0;i<6;i++) {
  let num1 = parseInt(Math.random()*45+1);
  if (arr1.indexOf(num1) == -1) {
    arr1.push(num1);
  }
}
document.write(arr1.sort((a, b)=>a-b));
document.write("<br>");

let arr2 = []
while(arr2.length < 6) {
  let num2 = parseInt(Math.random()*45+1);
  if (arr2.indexOf(num2) == -1) {
    arr2.push(num2);
  }
}
document.write(arr2.sort((a, b)=>a-b));