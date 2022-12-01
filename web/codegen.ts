
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5107/graphql/",
  documents: "graphql/**/*.ts",
  generates: {
    "gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
