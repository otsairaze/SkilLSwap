import { gql } from '@apollo/client';
import { USER_FRAGMENT } from '../fragments/user.fragment';

export const GET_ME = gql`
  ${USER_FRAGMENT}
  query Me {
    me {
      user {
        ...UserFields
      }
    }
  }
`;
