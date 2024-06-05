import * as yup from 'yup';
import { TSignin } from "../types/Signin"

/** Esquema yup: 
 useGenericForm toma cada clave del esquema para representar un componente al que 
 será aplicado la validación correspondiente 
*/
export const signinSchema = yup.object<TSignin>({
  email: yup.string().required('Email requerido'),
  pass: yup.string().required('Contraseña requerida'),
  accept: yup.string().required('Requiere aceptar'),
});

