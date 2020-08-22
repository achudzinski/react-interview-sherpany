declare global {
    interface Window {
        configuration: any,
    }
}

export const config = window.configuration || {
    routerBaseUrl: '/',
    assetsBase: '/',
};

