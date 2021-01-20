// fetch all components
const files = require.context('./components/', true, /.*\.vue$/i);
const components = files.keys().map((key) => {
    // get name and definition
    const [name] = key
        .split('/')
        .pop()
        .split('.');
    const definition = files(key).default;

    return [name, definition];
});

// define default translator factory
const createTranslator = (config) => {
    // @todo: define translator later!
    return config ? (txt) => txt : (txt) => txt;
};

export default {
    install(app,  options) {
        // add translator mixin
        app.mixin({
            methods: {
                __: createTranslator(options?.tranlations),
            },
        });

        // define components
        components.map((comp) => app.component(...comp));
    },
};
