
window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});

/*  COTIZA TU AUTO */




class Producto {
  constructor(id, marca, modelo, año, precio, categoria, imagen) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
  }
}

const producto1 = new Producto(1, 'VolksWagen', 'Golf', 2015, 300, 'deportivo', 'https://i0.wp.com/www.motorwebargentina.com/wp-content/uploads/2015/12/2016-Volkswagen-Golf-GTI-Motorweb-Argentina-01.jpg?fit=1289%2C857&ssl=1');
const producto2 = new Producto(2, 'Porsche', '911', 2020, 700, 'deportivo', 'https://cdn-fastly.thetruthaboutcars.com/media/2022/07/20/9417385/review-2011-porsche-911-turbo-s-pdk.jpg?size=720x845&nocrop=1');
const producto3 = new Producto(3, 'Porsche', '718 Cayman', 2020, 800, 'deportivo', 'https://hips.hearstapps.com/hmg-prod/images/2021-porsche-718-cayman-gt4-107-1616160477.jpg');
const producto4 = new Producto(4, 'BMW', 'X1', 2020, 500, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0jDk2_qLCy4KkFqZ_XAK_rg3ygDZZ7fzVA&usqp=CAU');
const producto5 = new Producto(5, 'BMW', 'X6', 2020, 500, 'camioneta', 'https://hips.hearstapps.com/hmg-prod/images/2020-bmw-x6-xdrive40i-206-1583153965.jpg?crop=0.616xw:0.692xh;0.344xw,0.308xh&resize=640:*');
const producto6 = new Producto(6, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y7ylyqtfKGtZh-kch9jSbfnWMslY9Wd4YQ&usqp=CAU');
const producto7 = new Producto(7, 'Mercedes', 'AMG C 63 S', 2021, 800, 'deportivo', 'https://richmonds.com.au/wp-content/uploads/2019/04/Mercedes-amg-c63s-black-2.jpg');
const producto8 = new Producto(8, 'BMW', 'MS Competition', 2017, 700, 'deportivo', 'https://cfx-wp-images.imgix.net/2022/04/2022-BMW-M3-Competition-Front-Exterior-Carter-MacLeod-Edit-scaled.jpg?auto=compress%2Cformat&ixlib=php-3.3.0&s=4fb1fd2208e9b5f753c0d833418d4016');
const producto9 = new Producto(9, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y7ylyqtfKGtZh-kch9jSbfnWMslY9Wd4YQ&usqp=CAU');
const producto10 = new Producto(10, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y7ylyqtfKGtZh-kch9jSbfnWMslY9Wd4YQ&usqp=CAU');
const producto11 = new Producto(11, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y7ylyqtfKGtZh-kch9jSbfnWMslY9Wd4YQ&usqp=CAU');
const producto12 = new Producto(12, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y7ylyqtfKGtZh-kch9jSbfnWMslY9Wd4YQ&usqp=CAU');
const producto13 = new Producto(13, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y7ylyqtfKGtZh-kch9jSbfnWMslY9Wd4YQ&usqp=CAU');
const producto14 = new Producto(14, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y7ylyqtfKGtZh-kch9jSbfnWMslY9Wd4YQ&usqp=CAU');
/* imagenes exclusivamente de muestra. todos los derechos reservados a quien corresponda */

const listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14];

function filtrarProductos() {
  const valorFiltro = document.getElementById('filtro-precio').valueAsNumber;
  const productosFiltrados = listaProductos.filter(producto => producto.precio <= valorFiltro); // Modificar criterio de filtrado
  const productosContainer = document.getElementById('productos-container');
    
  productosContainer.innerHTML = '';
  
  if (productosFiltrados.length === 0) {
    productosContainer.innerHTML = '<p>No se encontraron resultados para el monto especificado.</p>';
  } else {
    productosFiltrados.forEach(producto => {
      const productoHTML = `
        <div class="producto">
          <img src="${producto.imagen}" alt="${producto.modelo}">
          <h3>${producto.marca} ${producto.modelo}</h3>
          <p>Año: ${producto.año}</p>
          <p>Precio: $${producto.precio}</p>
          <p>Categoría: ${producto.categoria}</p>
        </div>
      `;
      productosContainer.innerHTML += productoHTML;
    });
  }
}

/* Generador de PDF */

function generatePDF() {
  // Obtén los datos del formulario
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;
  // ... Obtén otros campos del formulario ...

  // Crea una nueva instancia de jsPDF
  var doc = new jsPDF();

  // Agrega contenido al PDF
  doc.text(10, 20, 'Datos del formulario:');
  doc.text(10, 30, 'Nombre: ' + name);
  doc.text(10, 40, 'Email: ' + email);
  doc.text(10, 50, 'Telefono: ' + phone);
  doc.text(10, 60, 'Mensaje: ' + message);
  // ... Agrega otros campos del formulario ...

  // Guarda el PDF como archivo para descarga
  doc.save('formulario.pdf');
}
