import { httpActionGroup } from './allActions'
import { createAction as defaultActionCreator } from 'typesafe-actions'
type ReduxAppEntity = any;
type ReduxAppStartupState = any;
type ReduxAppLiveState = any;
type ReduxAppEntities = any;

interface IVisualComponentInitialState {
  type: string;

}

interface IActionGroups {
  index: string[];
}

interface EntityIdentifier {
   key: string;
   id: string | number;
   title: string;
}


interface StateContainer {
  createAppEntities(initialState: ReduxAppStartupState | ReduxAppLiveState): ReduxAppEntities
}
/* Set up default ReduxApp behavior (routes for logging/serializing state etc) */
abstract class ReduxApp implements StateContainer {
  private _initializedFrom: ReduxAppStartupState
  public entities: ReduxAppEntities;

  constructor (initialState: ReduxAppStartupState | ReduxAppLiveState) {
    this._initializedFrom = initialState;
  }

  abstract createAppEntities(initialState: ReduxAppStartupState): ReduxAppEntities
}

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
            actions[name] = createAction(actionGroup[name](this.entityName);
        })
        return actions;
    }
}

class LiquidTraceEntity {
    private _identifiers;
    public component;
    public actionGroups;
    public validation;
    public collection;


    public constructor({ identifiers, component, actionGroups, collection, validation }){
      this._identifiers = this.processIdentifiers(identifiers) // process later
      this.component = this.createReactComponent(component);
      this.actionGroups = this.createActionGroups(actionGroups);

      /*
        Optionally set up validation and collection if this component requires,
        typically for container components
      */

      this.validation = this.setupValidation(validation)
      this.collection = this.setupCollection(collection)
    }

    processIdentifiers({id, key, title}){
      /* 
        Process identifiers and make optional changes to meta data
        that affect the entity's instantiation.
       
      */
      const identifier: EntityIdentifier = {id: id, key: key, title: title}
      return identifier;
    }

    createReactComponent(initialState: IVisualComponentInitialState) {
      const component: any = {}
      switch(initialState.type) {
        case 'kendo-grid':
          return component //setupKendoGrid(config)
        case 'inspector':
          return component //setupInspector(config)
        default:
          return component // empty
      }
    }

    createActionGroups(initialState: IActionGroups) {
      const actionGroups: any = {};
      const { key } = this._identifiers;
      initialState.index.forEach(groupName => 
        actionGroups[groupName] = new LiquidTraceActionGroup(key, initialState[groupName]))
    }

    setupValidation(initialState: any) {
      /* set up validations for type of data that we need to operate on set up methods for createCollection */
      const validation: any = {};
      return validation;
    }

    setupCollection(initialState: any) {
      /* call getAll to get and use the validations to verify data integrity */
      const collection: any = {};
      return collection;
    }
  }

class LiquidTraceApp extends ReduxApp {
    public entities: any;

    public constructor(initialState: ReduxAppStartupState | ReduxAppLiveState) {
        super(initialState);
        this.entities = this.createAppEntities(initialState);
    }

    createAppEntities(initialState): ReduxAppEntities {
      const entities: ReduxAppEntities = {};
      initialState.index.forEach(entityName => 
        entities[entityName] = new LiquidTraceEntity(initialState[entityName]));
      return entities
    }
}



const entityActions = {
    comments: httpActionGroup,
    todos: httpActionGroup,
    users: httpActionGroup,
}

const liquidTraceInitialState: ReduxAppStartupState = {

  entities:{
    index: ['todos'],
    todos:{
      identifiers: {
        key: 'todos',
        id: 'todos-Table',
        title: 'Todos',
      },
      component:{
        type: 'kendo-grid',
        config:{
          columns:{
            key: 'hex-string',
            field: 'todos',
          }
        },
      },
      actionGroups: {
        index: ['http'],
        http: {},
      },
      collection: {
        fetching: false,
        fetched: false,
        data: [],
      },
      validation: {
        fetching: null,
        fetched: [],
        validators: [],
        toValidate: [],
        validEntries: {},
        invalidEntries: {},
      }
    }
  }
}

const app: LiquidTraceApp = new LiquidTraceApp(liquidTraceInitialState)

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