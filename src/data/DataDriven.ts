import { QInput, QSelect, QCheckbox } from 'quasar';
import { TCreateDataDriven } from './DatadrivenTypes';
import { TSignin } from '../types/Signin';

/**
 Data driven: Tipo TCreateDataDriven. 
 Debe usar el mismo tipo genérico pasado a useGenericForm, para representar por clave
 un componente o tendrá error de tipo. 
 */
export const DATA_DRIVEN: TCreateDataDriven<TSignin> = {
    email: {
        type: 'QInput',
        fieldPath: () => 'email',
        def: { component: QInput, props: { dark: true} },
    },
    pass: {
        type: 'QSelect',
        fieldPath: () => 'pass',
        def: {
            component: QSelect,
            props: { dark: true, options: ['vue+js', 'vue+ts'] },
        },
    },
    accept: {
        type: 'QCheckbox',
        fieldPath: () => 'accept',
        def: {
            component: QCheckbox,
            props: { dark: true, color: 'blue-10', label: 'aceptar' },
        },
    },
};