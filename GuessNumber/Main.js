const btn=document.getElementById("btn");
const input= document.querySelector("input");
const res=document.getElementById("res");
const random=()=>{
  return Math.floor(Math.random()*10)
}
btn.addEventListener("click",()=>{
  const randomnumber=random();
  const userguess=input.value;
if(randomnumber>userguess){
res.textContent="Nah! You are lower";
}
else if(randomnumber<userguess){
  res.textContent="Nah! you are higher";
}
else{
  res.textContent="Yah you are right"
}
});