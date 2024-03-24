import { gql, DocumentNode } from '@apollo/client';

export const AUTH_USER: DocumentNode = gql`
  mutation login($email: String!, $password: String!) {
    authUser(email: $email, password: $password) {
      user {
        name
        email
        role
      }
      accessToken
      refreshToken
    }
  }
`;
