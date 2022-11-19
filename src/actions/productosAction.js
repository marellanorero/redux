/** Estas son las funciones que modifican el State */
import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITOS,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_ERROR,
    PRODUCTO_EDITADO_EXITO
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//** Usualmente acá tendremos una función que se utilizará en la vista */
//** Se le da un valor y se consume */

//** Crear nuevos productos, acá se hará las consultas a la base de datos y modificará el state */
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            // insertar en la API
            await clienteAxios.post('/productos', producto);
            // si todo sale bien actualizar state
            dispatch( agregarProductoExito(producto) );

            // alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            // Si hay un error cambiar el state
            dispatch( agregarProductoError(true) );

            //alerta de error
            Swal.fire(
                {
                    icon: error,
                    title: 'Hubo un error',
                    text: 'Hubo un error, intenta de nuevo'
                }
            )
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    //Payload modifica los datos, el state, si solo agregaremos un producto no tendremos.
    payload:true
})

// si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})  

// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

//función que descarga los productos de la base de datos
export function obtenerProductosActions() {
    return async (dispatch) => {
        dispatch(descargarProductos());

        try {
            const respuesta =  await clienteAxios.get('/productos')
            dispatch(descargaProductosExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch( descargaProductosError() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const descargaProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITOS,
    payload: productos
})
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

//Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))

        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch( eliminarProductoExito() )

             // Si se elimina, mostrar alerta
             Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch( eliminarProductoError() );
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

//COLOCAR PRODUCTO EN EDICIÓN
export function obtenerProductoEditar(producto){
    return (dispatch) => {
        dispatch( obtenerProductoAction(producto))
    }
}

const obtenerProductoAction =  producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

//Edita un registro en la API y state
export function editarProductoAction(producto) {
    return async (dispatch) => {
       dispatch (editarProducto());
       try {
        await clienteAxios.put(`/productos/${producto.id}`, producto);
        dispatch( editarProductoExito(producto) );
       } catch (error) {
        console.log(error);
        dispatch( editarProductoError() );
       }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
})

const editarProductoExito =( producto) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError= () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})