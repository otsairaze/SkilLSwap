import { useMutation } from '@apollo/client/react';
import { SIGN_IN_MUTATION } from '../../api/mutations/sign-in-mutation';
import type { SignInInput, SignInResponse } from '../../api/types/auth.types';

export const useSignIn = () => {
  const [mutate, { loading, error, data }] = useMutation<SignInResponse, { input: SignInInput }>(
    SIGN_IN_MUTATION,
  );

  const signIn = async (input: SignInInput) => {
    return await mutate({
      variables: { input },
    });
  };

  return {
    signIn,
    loading,
    error,
    data: data?.signIn,
    isSuccess: !!data?.signIn,
  };
};
