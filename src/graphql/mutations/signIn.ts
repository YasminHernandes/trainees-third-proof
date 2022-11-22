import { gql } from '@apollo/client'

export const SIGN_IN = gql `
  mutation signIn($input: SignInInput!) {
    signIn(input: $Input) {
      token
      user {
        email
        name
      }
    }
  }
`