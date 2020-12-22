import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"


const server = new GraphQLServer({
    // type들에 대한 정의
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers   
});

server.start(() => console.log("Graphql Server Running"));