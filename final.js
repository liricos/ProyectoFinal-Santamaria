console.log("inicio");

function iniciarSesion() {
    let usuario = prompt("Ingrese su nombre de usuario");
    localStorage.setItem('usuario', 'Franco'); 
  }
  
  function obtenerNombreDeUsuario() {
    return localStorage.getItem('usuario'); 
  }
  
  let span = document.querySelector('h2 > span');
  let usuario = obtenerNombreDeUsuario();
  let boton = document.querySelector('button');
  
  boton.onclick = cerrarSesion;
  
  if (usuario == 'null' || usuario == null) {
    iniciarSesion();
    usuario = obtenerNombreDeUsuario();
    span.innerText = usuario;
  } else {
    span.innerText = usuario;
  }
  
  function cerrarSesion() {
    localStorage.removeItem('usuario'); 
  }
  
  function reiniciarLocalStorage() {
    localStorage.clear();
  }
  
  this.saludar = function(listapersonas) {
    alert("Bienvenido")
  }
  
setTimeout(function (){
  console.log("saca la publicidad");
  document.body.classList.remove('publicidad');
},100000);

  let productos = [
      new Producto('Placa de video'),
      new Producto('Procesador'),
      new Producto('memoria ram')
  ];
  
  function Producto(descripcion, precio, stockInicial, stockMinimo, stockMaximo) {
    this.descripcion = descripcion;'Placa de video'
    this.precio = precio;3000
    this.stock = stockInicial;10
    this.stockMinimo = stockMinimo;1
    this.stockMaximo = stockMaximo;2
  
    this.descripcion = descripcion;'Procesador'
    this.precio = precio;2500
    this.stock = stockInicial;15
    this.stockMinimo = stockMinimo;1
    this.stockMaximo = stockMaximo;2
  
    this.descripcion = descripcion;'memoria ram'
    this.precio = precio;1500
    this.stock = stockInicial;20
    this.stockMinimo = stockMinimo;1
    this.stockMaximo = stockMaximo;4
  
    this.aumentarStock = function(cantidad) {
      let stockAumentado = this.stock + cantidad;
  
      if (stockAumentado > this.stockMaximo) {
        alert('el stock maximo de ' + this.descripcion + ' es ' + this.stockMaximo);
        return;
      }
      this.stock = stockAumentado;
      alert('el stock actual de ' + this.descripcion + ' es ' + this.stock);
    }
  
    this.disminuirStock = function(cantidad) {
      let stockDisminuido = this.stock - cantidad;
      
      if (stockDisminuido < this.stockMinimo) {
        alert('el stock minimo de ' + this.descripcion + ' es ' + this.stockMinimo);
        return;
      }
      this.stock = stockDisminuido;
      alert('el stock actual de ' + this.descripcion + ' es ' + this.stock);
    }
  }
  
  function agregarProducto() {
    let descripcion = prompt('Ingrese la descripcion del producto');
    let precio = Number(prompt('Ingrese el precio de ' + descripcion));
    let stockInicial = Number(prompt('Ingrese el stock que va a tener inicialmente ' + descripcion));
    let stockMinimo = Number(prompt('Ingrese el stock minimo de ' + descripcion));
    let stockMaximo = Number(prompt('Ingrese el stock maximo de ' + descripcion));
  
    let productoNuevo = new Producto(descripcion, precio, stockInicial, stockMinimo, stockMaximo);
  
    productos.push(productoNuevo);
  }
  
  function buscarProducto() {
    let descripcion = prompt('Ingrese la descripcion del producto que desea buscar');
    let productoBuscado = productos.find(producto => producto.descripcion === descripcion);
  
    alert(`
      ${productoBuscado.descripcion}
      precio: ${productoBuscado.precio}
      stock actual: ${productoBuscado.stock}
      stock minimo: ${productoBuscado.stockMinimo}
      stock maximo: ${productoBuscado.stockMaximo}
    `);
  
    return productoBuscado;
  }
  
  function borrarProducto() {
    let descripcion = prompt('Ingrese la descripcion del producto que desea borrar');
    productos = productos.filter(producto => producto.descripcion !== descripcion);
  }
  
  function aumentarStock() {
    let producto = buscarProducto();
    let cantidad = Number(prompt('Ingrese la cantidad que desea aumentar de ' + producto.descripcion));
    producto.aumentarStock(cantidad);
  }
  
  function disminuirStock() {
    let producto = buscarProducto();
    let cantidad = Number(prompt('Ingrese la cantidad que desea disminuir de ' + producto.descripcion));
    producto.disminuirStock(cantidad);
  }
  console.log("final");