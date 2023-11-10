// src/store/index.js
// src/store/index.js
import {createStore} from 'vuex';

const store = createStore({
    state: {
        filteredData: {
            marca: "",
            sistema: "",
            estado: "",
            pantalla: "",
        }
    },
    mutations: {
        handleFiltrarDatos(state, filtro) {
            // Actualiza el estado con el valor del filtro
            let filtros = {
                marca: "",
                sistema: "",
                estado: "",
                pantalla: "",
            };
            filtros["marca"]=state.filteredData["marca"]
            filtros["sistema"]=state.filteredData["sistema"]
            filtros["estado"]=state.filteredData["estado"]
            filtros["pantalla"]=state.filteredData["pantalla"]

            let datoAnterio = state.filteredData;
            datoAnterio = filtro;
            for (let i = 0; i < 5; i++) {
                const propiedad = Object.keys(filtros)[i];
                if(datoAnterio[propiedad]!=="" && datoAnterio[propiedad]!==undefined){
                console.log(datoAnterio[propiedad])
                    filtros[propiedad] = datoAnterio[propiedad];
                }
            }
            state.filteredData = {...filtros};


        }
    },
    actions: {
        emitFiltrarDatos(context, filtro) {
            // Llama a la mutación para actualizar el estado
            context.commit('handleFiltrarDatos', filtro);
        }
    }
});

export default store;
