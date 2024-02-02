import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client";
import {TOKEN} from "./shared";

export const isLoggedInUser = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logInUser = (token: string) => {
  localStorage.setItem(TOKEN, token);
};
export const logOutUser = () => {
  localStorage.removeItem(TOKEN);
};
export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
