
<template>
    <div class="q-pa-lg">
        <q-option-group
                v-model="group"
                :options="options"
                color="green"
                type="checkbox"
                style="display: flex; flex-direction: row"
                @update:model-value="emitValor"
        />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        options: {
            type: Array,
            default: () => [],
        },
        nombre: {
            type: String,
            default: () => '',
        },
        onChanges: {
            type: Function,
            required: false,
        },
    },
    methods: {
        emitValor() {
            //console.log(this.group[1]); // Accede a this.group directamente
             this.onChanges(this.group[1], this.nombre);
        },
    },
    setup() {
        const group = ref(['op1']); // Inicializa group con un valor

        return {
            group,
        };
    },
};
</script>

