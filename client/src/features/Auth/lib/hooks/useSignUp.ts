import { useMutation } from '@apollo/client/react';
import { SIGN_UP_MUTATION } from '../../api/mutations/sign-up-mutation';
import type { SignUpInput, SignUpResponse } from '../../api/types/auth.types';

export const useSignUp = () => {
  const [mutate, { loading, error, data }] = useMutation<SignUpResponse, { input: SignUpInput }>(
    SIGN_UP_MUTATION,
  );

  const signUp = async (input: SignUpInput) => {
    return await mutate({
      variables: { input },
    });
  };

  return {
    signUp,
    loading,
    error,
    data: data?.signUp,
    isSuccess: !!data?.signUp,
  };
};
