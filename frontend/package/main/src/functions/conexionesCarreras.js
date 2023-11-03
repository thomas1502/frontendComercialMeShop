/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// Conexiones para Carreras
export const getCarreras = async (datos) => {
    try {
        const response = await axios.get('http://localhost:8000/carreras/', {
            headers: {
                'Authorization': datos.token,
                'nombre-usuario': datos.nombre_usuario,
                'id-user': datos.id_User,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'Error al listar carreras' };
    }
};

export const createCarreras = async (datos) => {
    try {
        const response = await axios.post('http://localhost:8000/carreras/nuevo/', datos, {
            headers: {
                'Authorization': datos.token,
                'nombre-usuario': datos.nombre_usuario,
                'id-user': datos.id_User,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'Error al crear la carrera' };
    }
};

export const updateCarreras = async (datos) => {
    try {
        const response = await axios.put(`http://localhost:8000/carreras/${datos.id}/editar/`, datos, {
            headers: {
                'Authorization': datos.token,
                'nombre-usuario': datos.nombre_usuario,
                'id-user': datos.id_User,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'Error al actualizar carrera' };
    }
};

export const deleteCarrera = async (datos) => {
    try {
        const response = await axios.delete(`http://localhost:8000/carreras/${datos.id}/eliminar/`, {
            headers: {
                'Authorization': datos.token,
                'nombre-usuario': datos.nombre_usuario,
                'id-user': datos.id_User,
            }
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return { success: false, message: error.response.data.message };
        }
        return { success: false, message: 'Error al eliminar carrera' };
    }
};