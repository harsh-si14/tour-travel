
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var packages = document.querySelector(".box1").children;
var packages1 = document.querySelector(".box2").children;
totalpackages = packages.length;
totalpackages1 = packages1.length;
var index = 0;
prev.addEventListener("click", () => {
  nextpackages("prev");
  
  
});

next.addEventListener("click", () => {
  nextpackages("next");
 
  
});


// // check for updated index value
function nextpackages(direction) {
  if (direction == "next") {
    index++;
    if (index == totalpackages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalpackages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < totalpackages; i++) {
    packages[i].classList.remove("main");
  }
  packages[index].classList.add("main");
}





var index1 = 0;
prev.addEventListener("click", () => {
  nextpackages1("prev");
  
});

next.addEventListener("click", () => {
  nextpackages1("next");
  
});
function nextpackages1(direction) {
  if (direction == "next") {
    index1++;
    if (index1 == totalpackages1) {
      index1 = 0;
    }
  } else {
    if (index1 == 0) {
      index1 = totalpackages1 - 1;
    } else {
      index1--;
    }
  }

  for (let i = 0; i < totalpackages1; i++) {
    packages1[i].classList.remove("main");
  }
  packages1[index].classList.add("main");
}

function autoMove() {
  setInterval(() => {
    nextpackages("next");
    nextpackages1("next");
  }, 3000);
}
window.onload = autoMove;