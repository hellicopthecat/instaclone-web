import {
  ApolloClient,
  ApolloLink,
  DefaultContext,
  HttpLink,
  InMemoryCache,
  from,
  makeVar,
} from "@apollo/client";
import {TOKEN} from "./shared";

export const isLoggedInUser = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logInUser = (token: string) => {
  localStorage.setItem(TOKEN, token);
  window.location.reload();
};
export const logOutUser = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload();
};
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});
const setAuthor = new ApolloLink((operation, forward) => {
  operation.setContext((context: DefaultContext) => ({
    headers: {
      ...context.headers,
      token: localStorage.getItem(TOKEN),
    },
  }));
  return forward(operation);
});

export const client = new ApolloClient({
  link: from([setAuthor, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
