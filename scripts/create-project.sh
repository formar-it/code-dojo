#!/bin/bash
set -e

mkdir -p $1
cd $1

yarn init -p -i=latest

rm .editorconfig
rm -rf .git

echo "node_modules" >> .gitignore
echo "coverage" >> .gitignore
echo "nodeLinker: node-modules" >> .yarnrc.yml

# Install dev dependencies
yarn add -D typescript @types/node vitest @vitest/coverage-v8 prettier eslint @eslint/js typescript typescript-eslint 

# Add typescript configuration
cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "nodenext",
    "noEmit": true,
    "strict": true
  },
  "include": ["src/**/*.ts"]
}
EOF


# Add eslint configuration
cat > eslint.config.mjs <<EOF
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { ignores: ["eslint.config.mjs"] }
);

EOF


## Add changes to package.json
jq '.type = "module"' package.json > package.json.tmp && mv package.json.tmp package.json
jq '.scripts = { "lint": "eslint --fix .","test": "vitest","check": "tsc" }' package.json > package.json.tmp && mv package.json.tmp package.json

yarn prettier --write .

mkdir -p src
touch src/index.ts
