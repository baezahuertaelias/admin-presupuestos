export const revisarPresupuesto = (presupuesto, restante) => {
    /* Calcula el porcentaje disponible... Verde > 75%... Amarillo > 25% y < 75%... Rojo < 25%  */
    let clase;

    if( ( presupuesto / 4 ) > restante ) {
        clase = 'alert alert-danger';
    } else if ( (presupuesto / 2) > restante ) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }

    return clase;
}