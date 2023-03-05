console.log('Palabras!')
const nombre_producto = document.querySelector('#NombreProducto');
const precio_producto = document.querySelector('#PrecioProducto');
const cantidad_producto = document.querySelector('#CantidadProducto');
const boton_guardar = document.querySelector('#BotonGuardar');
const boton_limpiar = document.querySelector('#BotonLimpiar');
const lista_productos = document.querySelector('#ListaProductos');
const total_importe = document.querySelector('#PrecioTotal');

let total = 0;

const crearNuevoProducto = (nombre, precio, cantidad) => {
    const ionCard = document.createElement('ion-card');
    const nuevoCampoProducto = document.createElement('ion-card-content');
    nuevoCampoProducto.textContent = '('+ nombre + ')  ' + precio + ' €' + '  x  ' + cantidad + ' uds  => Total:  ' + (+precio*+cantidad).toFixed(2) + ' €';
    ionCard.appendChild(nuevoCampoProducto);
    lista_productos.appendChild(ionCard);
}

const limpiarEntradas = () => {
    nombre_producto.value = '';
    precio_producto.value = '';
    cantidad_producto.value = '1';
}

const presentarAlerta = () => {
    const alerta = document.createElement('ion-alert');
    alerta.header = 'Datos Incorrectos';
    alerta.subHeader = 'Por favor, verifica los datos introducidos.';
    alerta.message = 'El Nombre o el Precio no son válidos';
    alerta.buttons = ['Aceptar'];
    document.body.appendChild(alerta);
    return alerta.present();
}

//const estaVacio = str => !str.trim().length;

boton_guardar.addEventListener('click', () =>{
    const nombre = nombre_producto.value;
    const precio = precio_producto.value;
    const cantidad = cantidad_producto.value;

    if (nombre != '' && precio != '') {
        crearNuevoProducto(nombre, precio, cantidad);
        total += (+precio*+cantidad); // el + convierte precio en un número, ya que es un string
        total_importe.textContent = total.toFixed(2);
        limpiarEntradas();
    } else { presentarAlerta() };
})

boton_limpiar.addEventListener('click', limpiarEntradas);
