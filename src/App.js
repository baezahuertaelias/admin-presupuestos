import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  /* Definir state */
  /* variables todo minuscula, funciones 2da palabra mayuscula */
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false); /* Es un flag para evitar que muestre un arreglo sin datos en la pantalla */

  /* useEffect que actualiza el restante */

  useEffect(() => {
    if (creargasto) {

      /* Agrega nuevo presupuesto */
      guardarGastos([
        ...gastos,
        gasto
      ])
      /* Resta del presupuesto actual */
      const presupuestoRestanate = (restante - gasto.cantidad);
      guardarRestante(presupuestoRestanate);
      
      /* Cuando ya se registro el nuevo gasto, setear el guardarCrearGasto en false */
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante])

  /* Funcion que se ejecuta cuando se agregue un nuevo gasto */



  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">


          {
            /* Reviso el valor de la variable mostrarpregunta... Si es false, muestro el componente de pregunta, y si el usuario ingresa un monto, muestro el formulario */
            mostrarpregunta ?
              (
                /* Poner el parentesis es opcional, pero sirve para especificar que es para dar implicito el return */
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              ) : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}

                    />
                  </div>
                  <div className="one-half column">
                    <Listado
                      gastos={gastos}
                    />
                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  </div>
                </div>
              )}




        </div>
      </header>
    </div>
  );
}

export default App;
