/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

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
  
  const producto1 = new Producto(1, 'VolksWagen', 'Golf', 2015, 300, 'deportivo', 'https://via.placeholder.com/150');
  const producto2 = new Producto(2, 'Porsche', '911', 2020, 700, 'deportivo', 'https://via.placeholder.com/150');
  const producto3 = new Producto(3, 'Porsche', '718 Cayman', 2020, 800, 'deportivo', 'https://via.placeholder.com/150');
  const producto4 = new Producto(4, 'BMW', 'X1', 2020, 500, 'camioneta', 'https://via.placeholder.com/150');
  const producto5 = new Producto(5, 'BMW', 'X6', 2020, 500, 'camioneta', 'https://via.placeholder.com/150');
  const producto6 = new Producto(6, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://via.placeholder.com/150');
  const producto7 = new Producto(7, 'Mercedes', 'AMG C 63 S', 2021, 800, 'deportivo', 'https://via.placeholder.com/150');
  const producto8 = new Producto(8, 'BMW', 'MS Competition', 2017, 700, 'deportivo', 'https://via.placeholder.com/150');
  const producto9 = new Producto(9, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://via.placeholder.com/150');
  const producto10 = new Producto(10, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://via.placeholder.com/150');
  const producto11 = new Producto(11, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://via.placeholder.com/150');
  const producto12 = new Producto(12, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://via.placeholder.com/150');
  const producto13 = new Producto(13, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://via.placeholder.com/150');
  const producto14 = new Producto(14, 'BMW', 'X3', 2017, 450, 'camioneta', 'https://via.placeholder.com/150');
  
  const listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14];
  
  function filtrarProductos() {
    const valorFiltro = document.getElementById('filtro-precio').valueAsNumber;
    const productosFiltrados = listaProductos.filter(producto => producto.precio >= valorFiltro);
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
  

  