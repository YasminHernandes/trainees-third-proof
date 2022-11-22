export type signIn = {
  token: string
  user: User
}

export type UserToken = { 
  token: string
  user: User 
}

export type User = {
  email: string,
  name: string
}

export type SignInInput = {
  email: string
  password: string
}