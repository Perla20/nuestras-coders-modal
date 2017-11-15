var selectPromo = document.body.children[1];
var imagesContainer = document.getElementById('images-container');



selectPromo.addEventListener('change',showPromo); //change evento para el cambio de selecioon en el select
// arrays de las promociones: alumnas
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

var CHILE4 = '4-chile';
var PERU5 = '5-lima';
var PERU6 = '6-lima';


function showCoders(arr,promo) {
 for( var i = 0; i < arr.length; i++){
   createImage(promo,arr[i]);
 }
}

// creando imagen
function createImage(promo, nombre) {
 var img = document.createElement('img');
 // construyendo una url dinamica --agregandole atributos
 img.setAttribute('src','assets/images/' + promo +'/' + nombre + '.jpg');
 // subImagesContainer.appendChild(img);
 imagesContainer.appendChild(img);
}


function showPromo(event) { // si no se 'e' o 'event' como paramentro dentro de la funcion se debe usar this pero aún no se lo quie es pe'

 // console.log(event.target.value); //target es el que ejecutra el evento o el que dispara el evento-- esto con console.log sirve para comprobar que esta ocurriendo lo que queremos en la consola

 switch(true) {//el true cuando la expresion es correcta lo ejecuta lo que esta dentro del case y si no es ninguna se va por el default
   case event.target.value === '4chile':
   imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
   showCoders(arr4Chile, CHILE4);
   break;
   case event.target.value === '5lima':
   imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
   showCoders(arr5Lima, PERU5);
   break;
   case event.target.value === '6lima':
   imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
   showCoders(arr6Lima, PERU6);
   break;
   default:

   imagesContainer.textContent
   // que aparezcan todas las coders
   showCoders(arr4Chile, CHILE4);
   showCoders(arr5Lima, PERU5);
   showCoders(arr6Lima, PERU6);
 }
}


showCoders(arr4Chile, CHILE4);
showCoders(arr5Lima, PERU5);
showCoders(arr6Lima, PERU6);

function showModal(event){
  var modal=document.createElement("div");
  modal.style.position="fixed";
  modal.style.background= "rgb(o, o, o, 0.7)";
  modal.style.top ="0";
  modal.style.left ="0";
  modal.style.width ="100%";
  modal.style.heigth ="100%";
  modal.appendChild(event.target);
  evennt.target.style.margin="auto";
    evennt.target.style.display="block";
    // como alinearlo forma vertical imagen al medio
      evennt.target.style.margin=window.innerHeight/4 + "px auto";

  document.body.appendChild(modal);
  modal.addEventListener("click",function(event){
  event.target.parentElement.removeChild(event.target);
});
}
// para centrar
// window.innerHeight/3
