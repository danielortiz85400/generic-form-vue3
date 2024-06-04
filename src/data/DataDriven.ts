import { QInput, QSelect, QCheckbox } from 'quasar';
import { TCreateDataDriven } from './DatadrivenTypes';
import { TSignin } from '../types/Signin';

/**
 Usa el mismo tipo pasado a useGenericForm(), para crear componentes por cada clave. 
 */

export const DATADRIVEN: TCreateDataDriven<TSignin> = {
    email: {
        type: 'QInput',
        fieldPath: 'email',
        meta: { component: QInput, props: { dark: true } },
    },
    pass: {
        type: 'QSelect',
        fieldPath: 'pass',
        meta: {
            component: QSelect,
            props: { dark: true, options: ['vue+js', 'vue+ts'] },
        },
    },
    accept: {
        type: 'QCheckbox',
        fieldPath: 'accept',
        meta: {
            component: QCheckbox,
            props: { dark: true, color: 'blue-10', label: 'aceptar' },
        },
    },
};