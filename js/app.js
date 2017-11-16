var selectPromo = document.body.children[1];
var imagesContainer = document.getElementById('images-container');
// var subImagesContainer =  null;

imagesContainer.addEventListener('click',showModal);
selectPromo.addEventListener('change',showPromo); //change evento para el cambio de selecioon en el select
// arrays de las promociones: alumnas
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

 var CHILE4 = '4-chile';
 var PERU5 = '5-lima';
 var PERU6 = '6-lima';


function showCoders(arr,promo) {

//forma facil que no entendi
//   //eliminar por completo un nodo contenedor
//   if(subImagesContainer) { //se debe verificar si el hijo existe para que no salga error
//     imagesContainer.removeChild(subImagesContainer);//para remover el nodo hijo
//    //se vuelve a crear el mismo hijo
    // subImagesContainer = document.createElement('div'); // se crea el elemnto
    // imagesContainer.appendChild(subImagesContainer)// se le asigna al padre
//  }
  for( var i = 0; i < arr.length; i++){
    createImage(promo,arr[i]);
  }
}

// creando imagen
function createImage(promo, nombre) {
  var img = document.createElement('img');
  // construyendo una url dinamica --agregandole atributos
  img.setAttribute('src','assets/images/' + promo +'/' + nombre + '.jpg');
  imagesContainer.appendChild(img);
  // subImagesContainer.appendChild(img); //pedazo de la forma facil que no entendi
}


function showPromo(event) { // si no se 'e' o 'event' como paramentro dentro de la funcion se debe usar this pero aún no se lo que es pe'
//  console.log(event.target.value); //target es el que ejecutra el evento o el que dispara el evento-- esto con console.log sirve para comprobar que esta ocurriendo lo que queremos en la consola
  switch(true) {
    case event.target.value === '4chile':
    //subImagesContainer.textContent = '';
    imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
    showCoders(arr4Chile, CHILE4);
    break;
    case event.target.value === '5lima':
    //subImagesContainer.textContent = '';
    imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
    showCoders(arr5Lima, PERU5);
    break;
    case event.target.value === '6lima':
    //subImagesContainer.textContent = '';
    imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
    showCoders(arr6Lima, PERU6);
    break;
    default:
    // que aparezcan todas las coders
    imagesContainer.textContent = '';
    showCoders(arr4Chile, CHILE4);
    showCoders(arr5Lima, PERU5);
    showCoders(arr6Lima, PERU6);
  }
}


showCoders(arr4Chile, CHILE4);
showCoders(arr5Lima, PERU5);
showCoders(arr6Lima, PERU6);


function showModal(event) {
//console.log(event.target)   //verificar que el evento funciona --se agtegar al padre y por efecto burbuja se agrega alhijo - la imagen es el target
var modal = document.createElement('div');
// agregando estilos con el dom ---pero creo que es mala practica :/
modal.style.background = 'rgba(0, 0, 0, 0.7)'; //el ultimo parametro del rgba es ... no se pero va del 0 al 1
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';


modal.appendChild(event.target) // se le aumenta event.tragt por que eso es lo que tiene la información de la imagen

event.target.style.margin = window.innerHeight / 4 + 'px auto'; //usando el objeto window -- lo que ve en la pantalla se divide la altura de la pantalla entre 4  o calc(50% - )
event.target.style.display = 'block';

document.body.appendChild(modal);


modal.addEventListener('click',function(event) {
  event.target.parentElement.removeChild(event.target);
})

}
