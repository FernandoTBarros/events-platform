import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nkyje7070a01xpc98l94hs/master',
	cache: new InMemoryCache()
})