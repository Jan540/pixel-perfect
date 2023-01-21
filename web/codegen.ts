
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5000/graphql/",
  documents: "graphql/**/*.ts",
  generates: {
    "gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
