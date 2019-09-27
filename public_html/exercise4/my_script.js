function change_color(back_r, back_g, back_b, bord_r, bord_g, bord_b)
{
  var background = document.getElementById("paragraph");
  let r1 = convert(back_r);
  let g1 = convert(back_g);
  let b1 = convert(back_b);
  let final__background_color = r1+g1+b1;
  let r2 = convert(bord_r);
  let g2 = convert(bord_g);
  let b2 = convert(bord_b);
  let final_border_color = r2+g2+b2;
  background.style.backgroundColor = final__background_color;
  background.style.borderColor = final_border_color;
}

function convert(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}
