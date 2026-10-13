import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Error404 from "@/pages/errors/Error404.vue";
import HomePage from "@/pages/HomePage.vue";
import ImprintPage from "@/pages/ImprintPage.vue";
import PrivacyPage from "@/pages/PrivacyPage.vue";
import ErrorImprintRedirect from "@/pages/errors/ErrorImprintRedirect.vue";
import ErrorPrivacyRedirect from "@/pages/errors/ErrorPrivacyRedirect.vue";
import StartPage from "@/pages/StartPage.vue";

import defaultFavicon from '@/assets/nerotv.live/img/logo.png'
import startpageFavicon from '@/assets/nerotv.live/img/startpage.png'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: { title: 'Home' },
        component: HomePage
    },
    {
        path: '/imprint',
        name: 'Imprint',
        meta: { title: 'Imprint' },
        component: ImprintPage
    },
    {
        path: '/startpage',
        name: 'Startpage',
        meta: { title: 'New Tab', favicon: startpageFavicon },
        component: StartPage
    },
    {
        path: '/impressum',
        name: 'Impressum',
        meta: { title: 'Error 404' },
        component: ErrorImprintRedirect
    },
    {
        path: '/privacy',
        name: 'Privacy',
        meta: { title: 'Privacy' },
        component: PrivacyPage
    },
    {
        path: '/datenschutz',
        name: 'Datenschutz',
        meta: { title: 'Error 404' },
        component: ErrorPrivacyRedirect
    },
    {
        path: '/datenschutzerklaerung',
        name: 'Datenschutzerklaerung',
        meta: { title: 'Error 404' },
        component: ErrorPrivacyRedirect
    },
    {
        path: '/datenschutzerkl%C3%A4rung',
        name: 'Datenschutzerklärung',
        meta: { title: 'Error 404' },
        component: ErrorPrivacyRedirect
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error: 404',
        meta: { title: 'Error 404' },
        component: Error404
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to) => {
    const defaultTitle = 'nerotv.live';
    const title = to.meta.title as string | undefined;
    document.title = title ? `${defaultTitle} » ${title}` : defaultTitle;

    const faviconPath = (to.meta.favicon as string) || defaultFavicon;
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");

    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.href = faviconPath;
})

export default router;