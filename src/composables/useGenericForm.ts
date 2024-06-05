/**
  Composable genérico y dinámico para crear formularios:
    Usa vee-validate con esquema yup, para validar dinámicamente y armar por clave componentes de quasar según un data driven.
    Es decir, dado un tipo firmará un esquema, valores iniciales y un data driven, cuyas claves representará un componente
    (q-input, q-select), conformando un formulario, que a al tiempo es validado.

   acceso a: 
   - components: Todos los componentes creados en el data driven
   - handleSubmit: Maneja el submit del formulario (ver vee-validate)
   - values: v-models de cada componente creado.
 */


import { h } from 'vue';
import { useForm } from 'vee-validate';
import { ObjectSchema } from 'yup';
import { errorSchemas } from '../validations/YupErrors';
import { ComponentConstructor } from 'quasar';
import type { PartialDeep } from 'type-fest';

interface TGenericFormArgs<T> {
    validationSchema: ObjectSchema<{}, T, {}, ''>;
    initVal: PartialDeep<T, {}>;
    dataDriven: {
        [P in keyof T]: {
            fieldPath: (val: T[P]) => string
            def: {
                component: ComponentConstructor;
                props: Record<string, any>;
            };
        };
    };
}

export const useGenericForm = <TVal extends Record<string, any>>({
    validationSchema,
    initVal,
    dataDriven,
}: TGenericFormArgs<TVal>) => {
    const { defineField, handleSubmit, values } = useForm({
        validationSchema,
        initialValues: initVal,
    });
    const components = () =>
        Object.values(dataDriven).map(
            ({ fieldPath, def: { component, props } }) => {
                const [model, error] = defineField(
                    fieldPath,
                    errorSchemas
                );
                return h(component, {
                    modelValue: model.value,
                    'onUpdate:modelValue': (value: any) => (model.value = value),
                    ...error.value,
                    ...props,
                });
            }
        );
    return {
        components,
        handleSubmit,
        values,
    };
};