import LiquidTraceClient from '../requests/LiquidTraceClient'

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}

const httpClient = new LiquidTraceClient(config);

httpClient.createEntities([
    { name: 'users' }, 
    { name: 'todos' },
    { name: 'comments' }
]);

export {
    httpClient,
    config,
}