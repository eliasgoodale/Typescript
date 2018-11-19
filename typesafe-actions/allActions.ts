import { createAction } from 'typesafe-actions'
import { httpClient } from './httpClient'

const { endpoints } = httpClient




const actionKeys = {
    getAll: 'GET_ALL',
    getOne: 'GET_ONE',
    create: 'CREATE',
}


namespace httpActionGroup {

    export const getAll = (entity: string) => 
        createAction(`${entity}/GET_ALL`, resolve => {
            return () => resolve(endpoints[entity].getAll())
    })

    export const getOne = (entity: string) => 
        createAction(`${entity}/GET_ONE`, resolve => {
            return (id: string | number) => resolve(endpoints[entity].getOne({ id: id }));
    })

    export const create = (entity: string) => 
        createAction(`${entity}/CREATE`, resolve => {
            return (item: any) => resolve(endpoints[entity].create(item));
    })

    export const update = (entity: string) =>
        createAction(`${entity}/UPDATE`, resolve => {
            return (item: any) => resolve(endpoints[entity].update(item));
    })
}

const assignEntityHttpAction = (entity: string, action: string) => {
    if (httpActionGroup.hasOwnProperty(action) {
        return httpActionGroup[action] 
    }
}
export {
    assignHttpAction,
    httpActionGroup
}