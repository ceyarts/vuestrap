# vuestrap (Vue 3 & Bootstrap 5 & FontAwesome)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Usage
```
npm install https://github.com/ceyarts/vuestrap
```
First copy 'node_modules/../vuestrapsrc/styles.scss' file into your project/src folder.

Then import it along with the plugin in your main.js as follows:
```
import Vuestrap from '@ceyarts/vuestrap';
import './styles.scss';

createApp(App)
    .use(Vuestrap)
    .mount('#app');

...
```