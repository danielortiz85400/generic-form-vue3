import { TQComps } from './QComponents';
import { ComponentConstructor } from 'quasar';

/** Definición para crear data driven: Usa componentes de quasar.
 
 - type: Nombre del componente.
 - component: componente Quasar.
 - props: Props propios del componente Quasar.
*/
export type TDefDataDriven = {
  [K in keyof TQComps]: {
    type: K;
    def: {
      component: ComponentConstructor<TQComps[K]['component']>;
      props: Omit<TQComps[K]['props'], 'modelValue'>;
    };
  };
};

type TDefDataDrivenUnion = TDefDataDriven[keyof TDefDataDriven];
/** Crear data driven: Según el tipo de componente elegido, puede añadir los props del componente.*/
const CREATE_DD = <TType extends TDefDataDrivenUnion['type']>(
  ...args: Extract<TDefDataDrivenUnion, { type: TType }> extends {
    def: infer TDef;
  }
    ? [type: TType, def: TDef]
    : [type: TType]
) =>
({ type: args[0], def: args[1] } as Extract<
  TDefDataDrivenUnion,
  { type: TType }
>);

/** Tipo para Crear data driven:
  Toma el tipo genérico (que debe ser y es el mismo del esquema yup y valores iniciales),
   para representar un componente por cada clave.
 */
export type TCreateDataDriven<TSchema = Record<string, string>> = {
  [P in keyof TSchema]: ReturnType<typeof CREATE_DD> & { fieldPath: P };
};
