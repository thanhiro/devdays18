import Vue from "vue";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import fetch from "isomorphic-fetch";

Vue.use(VueApollo);

const httpLink = new HttpLink();

export default ctx => {
  const providerOptions = { clients: {} };
  const { isDev, app, route, beforeNuxtRender, store } = ctx;

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
  });
  const apolloProvider = new VueApollo({
    defaultClient: client
  });

  app.apolloProvider = apolloProvider;
  app.provide = apolloProvider.provide();

  if (process.server) {
    beforeNuxtRender(async ({ Components, nuxtState }) => {
      Components.forEach(Component => {
        // Fix https://github.com/nuxt-community/apollo-module/issues/19
        if (
          Component.options &&
          Component.options.apollo &&
          Component.options.apollo.$init
        ) {
          delete Component.options.apollo.$init;
        }
      });
      await apolloProvider.prefetchAll(ctx, Components);
      nuxtState.apollo = apolloProvider.getStates();
    });
  }
};
