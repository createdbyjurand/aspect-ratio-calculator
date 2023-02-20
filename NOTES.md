## Notes

## Replace

`^ *"(.*)": ".*$`
`$1`

### React + TypeScript

`npx create-react-app ratio-calculator --template typescript`

### Absolute Paths

```javascript
import Button from '../../components/Button'; // Normal Way
import Button from 'components/Button'; // Absolute Path Way
```

```javascript
{
  "compilerOptions": {
    // your other configurations
    "baseUrl": "src"
  }
}
```

### Eslint and Prettier

`npm install eslint prettier eslint-config-prettier --save-dev`

`npx eslint --init`

```javascript
{
   "env": {
      "browser": true,
      "es2021": true
   },
   "settings": {
      "react": {
         "version": "detect"
      }
   },
   "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier" // --> Add this line
   ],
   "overrides": [],
   "parser": "@typescript-eslint/parser",
   "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
   },
   "plugins": ["react", "@typescript-eslint"],
   "rules": {
      "react/react-in-jsx-scope": "off"
   }
}
```

```javascript
{
  "bracketSpacing": true,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 3
}
```

### Husky

`npx husky-init && npm install`

**.husky/pre-commit**:

```javascript
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

**package.json**:

```javascript
{
  ...
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "npx eslint --fix",
      "npx prettier --write"
    ]
  }
}
```

### SASS

`npm install sass`

### noopener noreferrer

`rel="noopener noreferrer"`
