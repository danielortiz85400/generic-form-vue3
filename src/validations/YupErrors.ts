/** Errores de vee-validate */
export interface ErrorFields {
  error: boolean;
  'error-message': any;
}

export const errorSchemas = (state: {
  errors: any[];
}): { props: ErrorFields } => ({
  props: {
    error: !!state.errors[0],
    'error-message': state.errors[0],
  },
});
