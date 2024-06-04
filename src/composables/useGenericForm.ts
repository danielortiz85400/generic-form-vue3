/**
  Composable genérico y dinámico para crear formularios:
   Usa vee-validate con esquema yup, para validar dinámicamente y armar por clave componentes de quasar según un data driven.
   Es decir, cada clave del esquema yup representa un componente (q-input, q-select), conformando un formulario, que a al tiempo es validado.

   acceso a: 
   - components: Todos los componentes creados en el data driven
   - handleSubmit: Maneja el submit del formulario (ver vee-validate)
   - wrapperModels: Envuelve todos los v-model de cada componente creado.
 */


import { h, ref } from 'vue';
import { useForm, GenericObject } from 'vee-validate';
import { ObjectSchema } from 'yup';
import { ErrorFields, errorSchemas } from '../validations/YupErrors';
import { TCreateDataDriven } from '../data/DatadrivenTypes';

interface TuseGenericForm<T> {
    validationSchema: ObjectSchema<{}, T, {}, ''>;
    initVal: T;
    dataDriven: TCreateDataDriven<T>;
}
export const useGenericForm = <TVal extends Record<string, any>>({
    validationSchema,
    initVal,
    dataDriven,
}: TuseGenericForm<TVal>) => {
    const { defineField, handleSubmit, values } = useForm({
        validationSchema,
        initialValues: initVal as GenericObject,
    });
    const wrapperModels = ref(values as TVal);

    const components = () =>
        Object.values(dataDriven).map(
            ({ fieldPath, meta: { component, props } }) => {
                const [model, error] = defineField<string, TVal, ErrorFields>(
                    fieldPath,
                    errorSchemas
                );
                return h(component, {
                    modelValue: model.value,
                    'onUpdate:modelValue': (value: TVal) => (model.value = value),
                    ...error.value,
                    ...props,
                });
            }
        );
    return {
        components,
        handleSubmit,
        wrapperModels,
    };
};