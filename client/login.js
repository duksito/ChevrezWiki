function loginn() {
  //let login = document.getElementById('login');
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let conn = document.getElementById('connect');
  let perfil = document.getElementById('perfil'); 

  let loginData = JSON.parse(localStorage.getItem("loginData")) || {};

  loginData[name] = true;

  localStorage.setItem("loginData", JSON.stringify(loginData));


  conn.innerHTML = `connect to chevrezWiki as <b>${name}</b>`
  conn.style.padding = "5px";

  setInterval(function () {
    window.location.href = "index.html";
  },3000)
}

function upImage() {
  let frameImage = document.getElementById('frameImage');
  let archivo = document.getElementById("file").files[0];
  let rd = new FileReader();

  if (archivo) {
    rd.readAsDataURL(archivo);
    rd.onloadend = function () {
      let img = document.createElement('img');
      let imgRs = img.src = rd.result;

      localStorage.setItem('image', imgRs)

      frameImage.innerHTML = "";

      frameImage.appendChild(img);
  }

  console.log(rd)

  }
}

document.addEventListener('DOMContentLoaded', function () {
  // recupera el dato del localStorage
  let loginData = JSON.parse(localStorage.getItem("loginData")) || {};
  let userName = Object.keys(loginData)[0]; // elije el primer dato que es nombre

  let imgData = localStorage.getItem('image');
  if (imgData) {
    let frameImage = document.getElementById('frameImage');
    let img = document.createElement('img');

    img.src = imgData;
    frameImage.appendChild(img);
  }

  let perfil = document.getElementById('perfil'); 

  if (userName) {
    perfil.innerHTML = userName;
  }
});