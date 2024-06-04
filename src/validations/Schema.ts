import * as yup from 'yup';
import { TSignin } from "../types/Signin"

export const signinSchema = yup.object<TSignin>({
  email: yup.string().required('Email requerido'),
  pass: yup.string().required('Contraseña requerida'),
  accept: yup.string().required('Requiere aceptar'),
});

/** useGenericForm() toma cada clave para representar un componente al que será aplicado la validación correspondiente */