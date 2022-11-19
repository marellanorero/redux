import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { editarProductoAction } from '../actions/productosAction';

const EditarProducto = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //nuevo state de producto
    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: ''
    });

    //producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);

    //llenar el state automáticamente con useEffect
    useEffect(() => {
        guardarProducto(productoeditar);
    }, [productoeditar]);

    //leer los datos del formulario
    const onChageFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, precio } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

       dispatch( editarProductoAction(producto));
       navigate('/');
    }
    
    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                        Editar Producto
                        </h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name='nombre'
                                    value={nombre}
                                    onChange={onChageFormulario}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name='precio'
                                    value={precio}
                                    onChange={onChageFormulario}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-10'
                            >
                            Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto;