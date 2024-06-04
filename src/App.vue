<script setup lang="ts">
import { signinSchema } from './validations/Schema';
import { useGenericForm } from './composables/useGenericForm';
import { ref } from 'vue';
import { DATADRIVEN } from './data/DataDriven';
import { QBtn, QForm, QCard } from 'quasar';
import { TSignin } from './types/Signin';


// Valores iniciales
const signin = ref<TSignin>({
  email: 'danielortizespitia8@gmail.com',
  pass: 'Autodidacta',
  accept: false
});

const { components, handleSubmit, wrapperModels } = useGenericForm<TSignin>({
  validationSchema: signinSchema, // Esquema Yup
  initVal: signin.value, // Valores iniciales para los componentes. (opcional)
  dataDriven: DATADRIVEN, // Definicion de componentes según el esquema yup. (use tipo: TCreateDataDriven)
});
</script>

<template>
  <q-card class="bg-transparent q-pa-md">
    <h4>FORMULARIO GENÉRICO Y DINÁMICO</h4>
    <q-form @submit="handleSubmit" dark class="column q-gap-md">
      <component :is="components" />
      <q-btn color="white" text-color="black" class="text-bold" push type="submit">ENVIAR</q-btn>
    </q-form>
    <div>
      v-models según el esquema:
      <p>{{ wrapperModels }}</p>
    </div>
  </q-card>
</template>
