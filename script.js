function minimum (a,b){

  if(b<a){
    let min=b;
    return min;
  }else{
    min=a;
    return min;
  }
}
function maximun(a,b){

  if (b>a){
    return b;
  }else{
    return a;
  }
}

function reduce(numbers, fn){
  if(numbers.length<2){
    return null;
  }else{
    let result= fn(numbers[0], numbers[1]);
    if(numbers.length>2);
    for(let i=2; i<numbers.length; ++i){
      result=fn(numbers[i].result);
  }
  return result;
}
}

function filter(numbers, fn) {
  for(let i=0; i<numbers.length; ++i){
   let results=fn(numbers[i]);
   if(results==true)
      console.log(numbers[i]);
}
}
console.log(5);
 let myTestnumbers=[5,8, 13, 21, 34, 618, 55, 3, 89, 144, 233, 377];
  console.log(reduce(myTestnumbers, minimum));
  console.log(reduce(myTestnumbers, maximum));
  console.log(filter(myTestnumbers, Arrayfunction));
