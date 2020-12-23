import { getMovies } from "./db"

// resolve a Query, program func of query
const resolvers = {
    Query: {
        // _ = name of variable, not use
        movies: (_, {rating, limit}) => getMovies(limit, rating)
    }
};

export default resolvers;