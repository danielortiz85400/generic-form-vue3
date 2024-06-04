import { TQComps } from './QComponents';
import { ComponentConstructor } from 'quasar';

/** Definicion para crear data driven: Usa componentes de quasar. Intente vuetify,ant, etc... 
 
 - type: Nombre del componente.
 - component: componente Quasar.
 - props: Props propios del componente Quasar.
*/
export type TDefDataDriven = {
  [K in keyof TQComps]: {
    type: K;
    meta: {
      component: ComponentConstructor<TQComps[K]['component']>;
      props: Omit<TQComps[K]['props'], 'modelValue'>;
    };
  };
};

type TDefDataDrivenUnion = TDefDataDriven[keyof TDefDataDriven];
/** Crear data driven: Según el tipo de componente elegido, puede añadir los props del componente.*/
const CREATEDD = <TType extends TDefDataDrivenUnion['type']>(
  ...args: Extract<TDefDataDrivenUnion, { type: TType }> extends {
    meta: infer TMetha;
  }
    ? [type: TType, meta: TMetha]
    : [type: TType]
) =>
({ type: args[0], meta: args[1] } as Extract<
  TDefDataDrivenUnion,
  { type: TType }
>);

/** Tipo para Crear data driven:
  Toma el valor génerico del composable (que debe ser y es el mismo del esquema yup y valores iniciales), para crear un componente según las claves del esquema yup.
 */
export type TCreateDataDriven<TSchema = Record<string, string>> = {
  [P in keyof TSchema]: ReturnType<typeof CREATEDD> & { fieldPath: P };
};
