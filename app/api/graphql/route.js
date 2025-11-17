import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const { handleRequest } = createYoga({
  schema: schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response: Response },
  graphiql: true,
});

export { handleRequest as GET, handleRequest as POST };
