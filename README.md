# Intro til styled-components
Eksempler med og uten typescript

## Basics
1. Ta utgangspunkt i en eksisterende react app (CRA er brukt her)
2. Installer **styled-components** f.eks: ````npm i styled-components````
3. Du kan starte å bruke styled-components for å style komponentene dine

## Theme
I styled-components bruker du en wrapper component <ThemeProvider>. Som gir alle underliggende React komponentene tilgang til en prop kalt **theme** via context API-et.

## Global Styles
Du kan bruke funksjonen **createGlobalStyle** for å skape en spesiell type styled-component. Denne brukes for å definere global styling. Komponenten bør plasseres øverst i komponent-treet, sånn at style-taggen også injectes øverst. På den måten kan du enkelt kan overstyre resets osv.

## TypeScript
Hvis du vil bruke typescript (pssst! det gjør theming veldig deilig) må du:
1. Installere typescript (det trenger du ikke hvis du bruker CRA)
2. Lag en tsconfig.json
3. Installer @types/styled-components f.eks: ````npm i styled-components -D````
4. Lag en *styled.d.ts* (husk å  inkludere den i tsconfig!)
5. Her importerer du theme-filen din og bruker typeof for å  definere typen for theme-objektet ditt. Så extender du DefaultTheme interfaces med denne typen.
6. Det gjør at du får autocomplete på alle properties i theme 🤯🎉🥳

## Linting - Stylelint
Vi dekker ikke ESLint her, selv om det er lagt til i prosjetet. Isteden fokuserer vi på Stylelint:
1. Installer disse pakkene: **stylelint, stylelint-config-recommended, stylelint-config-styled-components, stylelint-processor-styled-components**
2. Opprett en fil kalt *.stylelintrc* i rotmappen til prosjektet ditt.
3. Legg til et npm script i *package.json*, f.eks: ````"lint:styles": "stylelint './src/**/*.{js,jsx,ts,tsx}'"````
4. Bruk dette med annen linting, i en pre-commit hook f.eks.
5. Hvis du ønsker å linte ved build må du bruke en egen loader i webpack for dette: https://styled-components.com/docs/tooling#webpack. Når du bruker CRA må du ejecte for å få dette til, eller bruke en annen app template, som: [react-app-rewired](https://www.npmjs.com/package/react-app-rewired). Men det gjør vi ikke i denne demoen.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
