import { ApolloServer } from 'apollo-server';
import { buildSchemaSync } from 'type-graphql';

import path from 'path';

const port = Number(process.env.PORT) || 4000;

const schema = buildSchemaSync({
  resolvers: [
    path.join(__dirname, '..', '..', 'modules', '**', '*.resolver.{ts,js}')
  ]
});

const app = new ApolloServer({ schema });

app.listen(port).then(({ url }) => {
  // eslint-disable-next-line
  console.log(`Server up in ${url}`);
});
