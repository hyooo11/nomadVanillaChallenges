const body = document.querySelector("body");

function windowResize() {
  const size = window.innerWidth;
  console.log(size);
  if( size > 900 ){
    body.style.backgroundColor = "yellow";
  }else if(size < 600){
    body.style.backgroundColor="purple";
  }else{
    body.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", windowResize);
