import { GraphQLClient, RequestDocument } from "graphql-request";

const endpoint = import.meta.env.SPACEX_GRAPHQL_ENDPOINT;
const client = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async (query: RequestDocument): Promise<any> =>
  await client.request(query);
