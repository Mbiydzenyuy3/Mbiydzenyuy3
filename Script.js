changeImage = () => {
  var img = document.getElementById("img");
  if (img.src.match("./images/image-product-desktop.jpg")) {
    img.src = "./images/image-product-mobile.jpg";
  } else {
    img.src = "./images/image-product-desktop.jpg";
  }
};
