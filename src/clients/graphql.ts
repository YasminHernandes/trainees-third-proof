import { ApolloClient, InMemoryCache } from "@apollo/client";

export const loginClient = new ApolloClient ({
  uri: 'https://urchin-app-ikk9z.ondigitalocean.app/graphql',
  cache: new InMemoryCache ({
    resultCaching: false
  })
})