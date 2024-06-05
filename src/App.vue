<script setup lang="ts">
import { signinSchema } from './validations/Schema';
import { useGenericForm } from './composables/useGenericForm';
import { ref } from 'vue';
import { DATA_DRIVEN } from './data/DataDriven';
import { QBtn, QForm, QCard } from 'quasar';
import { TSignin } from './types/Signin';


// Valores iniciales
const SIGN_IN = ref<TSignin>({
  email: 'danielortizespitia8@gmail.com',
  pass: 'Autodidacta',
  accept: false
});

const { components, handleSubmit, values } = useGenericForm<TSignin>({
  validationSchema: signinSchema, // Esquema Yup (requerido)
  initVal: SIGN_IN.value, // Valores iniciales para los componentes. (requerido)
  dataDriven: DATA_DRIVEN, // Definicion de componentes tipo genérico. Use tipo TCreateDataDriven (requerido)
});
</script>

<template>

  <!-- Usa component para renderizar todos el formulario. -->
  <q-card class="bg-transparent q-pa-md">
    <h4>FORMULARIO GENÉRICO Y DINÁMICO</h4>
    <q-form @submit="handleSubmit" dark class="column q-gap-md">
      <component :is="components" />
      <q-btn color="white" text-color="black" class="text-bold" push type="submit">ENVIAR</q-btn>
    </q-form>
    <div>
      v-models según el esquema:
      <p>{{ values }}</p>
    </div>
  </q-card>
</template>
