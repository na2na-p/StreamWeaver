import type { FieldValues } from 'react-hook-form';
import { useForm as useBaseForm } from 'react-hook-form';

import type { UseFormProps } from './useForm.types';

// NOTE: プロパティdefaultValues, resolverの指定を必須とする
export const useForm = <TFieldValues extends FieldValues>(
  {
    defaultValues,
    resolver,
    values,
    resetOptions,
    context,
  }: UseFormProps<TFieldValues>,
  _error?: unknown // TODO
) => {
  const { handleSubmit, register, formState, setError, ...rest } = useBaseForm({
    defaultValues,
    resolver,
    values,
    resetOptions,
    context,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
    delayError: 0,
  });

  // const setRootError = useCallback(
  //   (rootErrorMessage: string) => {
  //     setError('root.formTop', { type: 'formTop', message: rootErrorMessage });
  //   },
  //   [setError]
  // );

  return {
    handleSubmit,
    register,
    formState,
    setError,
    ...rest,
  } as const;
};
