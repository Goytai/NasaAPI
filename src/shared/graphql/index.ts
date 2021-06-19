import path from 'path';
import Container from 'typedi';

import { ApolloServer } from 'apollo-server';
import { buildSchemaSync } from 'type-graphql';
import { useContainer } from 'typeorm';

const port = Number(process.env.PORT) || 4000;

const schema = buildSchemaSync({
  container: Container,
  resolvers: [
    path.join(__dirname, '..', '..', 'modules', '**', '*.resolver.{ts,js}')
  ]
});

const app = new ApolloServer({ schema });

useContainer(Container);

app.listen(port).then(({ url }) => {
  // eslint-disable-next-line
  console.log(`Server up in ${url}`);
});
