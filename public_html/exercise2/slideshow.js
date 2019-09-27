let imgarray = ["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg",
                "img/pic5.jpg"];
let position = 0;
function next(){
  let pics = document.getElementById('pictures');
  if(position == 4) position = 0;
  position++;
  pics.src = imgarray[position];
}

function prev(){
  let pics = document.getElementById('pictures');
  if(position == 0) position = 4;
  position--;
  pics.src = imgarray[position];
}
