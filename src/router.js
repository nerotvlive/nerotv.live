import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./pages/HomePage.vue";
import ZyneonPage from "./pages/ZyneonPage.vue";
import NotFoundError from "./pages/errors/404Page.vue";
import ImprintPage from "./pages/ImprintPage.vue";
import PrivacyPage from "./pages/PrivacyPage.vue";
import ServicesPage from "./pages/ServicesPage.vue";
import ZyneonError from "./pages/errors/ZyneonError.vue";
import ImprintError from "./pages/errors/ImprintError.vue";
import PrivacyError from "./pages/errors/PrivacyError.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { title: 'Startseite' },
        component: HomePage
    },
    {
        path: "/zyneon",
        name: 'Zyneon',
        meta: { title: 'Zyneon Studios' },
        component: ZyneonPage
    },
    {
        path: "/zyneonstudios",
        name: 'Zyneon Studios',
        meta: { title: '404 - Seite nicht gefunden' },
        component: ZyneonError
    },
    {
        path: '/services',
        name: 'Services',
        meta: { title: 'Dienste' },
        component: ServicesPage
    },
    {
        path: '/imprint',
        name: 'Imprint',
        meta: { title: 'Impressum' },
        component: ImprintPage
    },
    {
        path: '/impressum',
        name: 'Impressum',
        meta: { title: '404 - Seite nicht gefunden' },
        component: ImprintError
    },
    {
        path: '/privacy',
        name: 'Privacy',
        meta: { title: 'Datenschutzerklärung' },
        component: PrivacyPage
    },
    {
        path: '/datenschutz',
        name: 'Datenschutz',
        meta: { title: '404 - Seite nicht gefunden' },
        component: PrivacyError
    },
    {
        path: '/datenschutzerklaerung',
        name: 'Datenschutzerklaerung',
        meta: { title: '404 - Seite nicht gefunden' },
        component: PrivacyError
    },
    {
        path: '/datenschutzerkl%C3%A4rung',
        name: 'Datenschutzerklärung',
        meta: { title: '404 - Seite nicht gefunden' },
        component: PrivacyError
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error: 404',
        meta: { title: '404 - Seite nicht gefunden' },
        component: NotFoundError
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to) => {
    const defaultTitle = 'nerotv.live';
    document.title = to.meta.title ? `${to.meta.title} » ${defaultTitle}` : defaultTitle;
})

export default router;