/** Define el tipo genérico del composable. Es decir que si añade nuevos valores, debe igualmente 
 añadirlos al esquema yup y a los valores iniciales o tendrá un error de tipo.
 */
export interface TSignin {
  email: string;
  pass: string;
  accept: boolean;
}
