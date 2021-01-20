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

export default {
    install(app) {
        components.map((comp) => app.component(...comp));
    },
};
