declare global {
    interface Window {
        configuration: any,
    }
}

export const config = window.configuration || {
    randomUserApiUrl: 'https://randomuser.me/api',
    routerBaseUrl: '/',
    assetsBase: '/',
    userList: {
        numberOfItemsPerPage: 50,
        maxNumberOfItems: 1000,
    }
};

