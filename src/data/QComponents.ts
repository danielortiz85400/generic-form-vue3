import {
  QInput,
  QInputProps,
  QSelect,
  QSelectProps,
  QCheckbox,
  QCheckboxProps,
} from 'quasar';

/*Componentes de quasar: 
  Importe desde quasar el componente/props para TQComps, y estarán disponible al armar un data driven*/
export type TQComps = {
  QInput: { component: QInput; props: QInputProps };
  QSelect: { component: QSelect; props: QSelectProps };
  QCheckbox: { component: QCheckbox; props: QCheckboxProps };
};
