export const formatoCLP = (valor) => {
    return valor.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    });
};