import { createRouter, createWebHistory } from 'vue-router';

const views = require.context('./views', true, /.*\.vue$/i);

const routes = views.keys().map((key) => {
    // get name and definition
    const component = views(key).default;
    const [name] = key
        .split('/')
        .pop()
        .split('.');

    // get route path
    const path = name === 'index' ? '/' : `/${name}`;

    return { name, path, component };
});

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

export const links = routes.map((r) => ({
    to: r.path,
    label: r.name,
}));
