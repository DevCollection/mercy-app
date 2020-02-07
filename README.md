## steps from scratch

### setup mercy keystone

1. follow get started in keystone to start a keystone project
2. replace `keystone/app-admin-ui` with our own `app-admin-ui`(a copy from keystone/app-admin-ui) folder in the root folder, and move all the package dependencies of our app-admin-ui to the root folders package.json
3. add `'@apollo/react-hooks$': require.resolve('@apollo/react-hooks')` to `app-admin-ui/server/getWebpackConfig.js` in `resolve.alias`
4. add nextjs typescript app (ex: pickbazar shop) in the root folder and move all the package dependencies of nextjs to the root folders package.json

### enable typescript editing.

1. to enable typescript editing in custom admin page, in `app-admin-ui/server/getWebpackConfig.js` ,replace rules of babel-loader's testing config `test: /\.js$/` to `test: /\.(ts|js)x?$/` to enable the usage of typescript.
2. add `extensions: ['.tsx', '.ts', '.js', '.jsx']` to `resolve` in `app-admin-ui/server/getWebpackConfig.js`
3. remove `Nav` component from `app-admin-ui/client/index` to remove the sidebars in admin page.
