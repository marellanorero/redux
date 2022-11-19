// Types describen lo que pasa en la app, se usan en el action y en el reducer
//** Estos types se escriben en el axtion para ir describiendo y ejecutando ciertas funciones */
//** En reducers se evaluan cada una de las condiciones, así modificaremos el State de acuerdo a*/ 
//**lo que esté sucediendo. Cada vez que registre uno nuevo debe usarse tando en el reducer como el action */
export const AGREGAR_PRODUCTO = "AGREGAR_PRODUCTO";
export const AGREGAR_PRODUCTO_EXITO = "AGREGAR_PRODUCTO_EXITO";
export const AGREGAR_PRODUCTO_ERROR = "AGREGAR_PRODUCTO_ERROR";

export const COMENZAR_DESCARGA_PRODUCTOS ="COMENZAR_DESCARGA_PRODUCTOS";
export const DESCARGA_PRODUCTOS_EXITOS ="DESCARGA_PRODUCTOS_EXITOS";
export const DESCARGA_PRODUCTOS_ERROR ="DESCARGA_PRODUCTOS_ERROR";

export const OBTENER_PRODUCTO_ELIMINAR = "OBTENER_PRODUCTO_ELIMINAR";
export const PRODUCTO_ELIMINADO_EXITO = "PRODUCTO_ELIMINADO_EXITO";
export const PRODUCTO_ELIMINADO_ERROR = "PRODUCTO_ELIMINADO_ERROR";

export const OBTENER_PRODUCTO_EDITAR = "OBTENER_PRODUCTO_EDITAR";
export const COMENZAR_EDICION_PRODUCTO = "COMENZAR_EDICION_PRODUCTO";
export const PRODUCTO_EDITADO_EXITO = "PRODUCTO_EDITADO_EXITO";
export const PRODUCTO_EDITADO_ERROR = "PRODUCTO_EDITADO_ERROR";

export const MOSTRAR_ALERTA = "MOSTRAR_ALERTA";
export const OCULTAR_ALERTA = "OCULTAR_ALERTA";

