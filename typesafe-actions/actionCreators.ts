import { httpActionGroup } from './allActions'

class LiquidTraceActionGroup {

    public actions: any;
    public errors: Error[];

    public constructor(public entityName: string, actionGroup: any) {
        const actionNames = Object.keys(actionGroup)
        this.actions = this.createActionGroup(actionNames, actionGroup)
    }

    createActionGroup(actionNames: string[], actionGroup: any) {
        const actions: any = {}
        actionNames.forEach(name => {
            actions[name] = actionGroup[name](this.entityName);
        })
        return actions;
    }
}

class LiquidTraceApp {

    public entities: any;

    public constructor(entityActions: any) {
        this.entities = this.createActionGroups(entityActions)  
    }

    createAppEntities() {

    }

    createActionGroups(entityActions: any) {
        const entities: any = {};
        const entityNames = Object.keys(entityActions);
        entityNames.forEach(name => 
            entities[name] = new LiquidTraceActionGroup(name, entityActions[name]));
        return entities;
    }

}



const entityActions = {
    comments: httpActionGroup,
    todos: httpActionGroup,
    users: httpActionGroup,
}


const app = new LiquidTraceApp(entityActions);

console.log(app.entities.todos.actions.getAll())
console.log(app.entities.users.actions.getAll())
console.log(app.entities.comments.actions.getAll())

console.log(app.entities.todos.actions.getOne("7"))
console.log(app.entities.users.actions.getOne("7"))
console.log(app.entities.comments.actions.getOne("7"))

console.log(app.entities.todos.actions.update({id: "6"}))
console.log(app.entities.users.actions.update({id: "6"}))
console.log(app.entities.comments.actions.update({id: "6"}))

console.log(app.entities.todos.actions.create({value: "rejected"}))
console.log(app.entities.users.actions.create({value: "rejected"}))
console.log(app.entities.comments.actions.create({value: "rejected"}))


/*
  const app = {
        entities: {
            tables: {
                [tableName]<T>: {
                    component: {
                        key: number,  (<id>)
                        type: string, (<Grid>)
                        children: {
                            columns: {
                                config: object (<column meta data>)
                                component: GridColumn[],
                        }
                    },
                    actions: {
                        { ...httpActionGroup }
                        { ...uiTableActionGroup }
                    },
                    collection: {
                        fetching: boolean,
                        fetched:  boolean,
                        data: T[],
                    }
                    validation: {
                        fetching: string | null, (<id>)
                        fetched: string[],       (<id>[])
                        validators: Validator[]
                        toValidate: T[],
                        validEntries: { id: {...T} },
                        invalidEntries: { id: {...T} },
                    }
                }
            }
        }
    }
*/