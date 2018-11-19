"use strict";
exports.__esModule = true;
var allActions_1 = require("./allActions");
var LiquidTraceActionGroup = /** @class */ (function () {
    function LiquidTraceActionGroup(entityName, actionGroup) {
        this.entityName = entityName;
        var actionNames = Object.keys(actionGroup);
        this.actions = this.createActionGroup(actionNames, actionGroup);
    }
    LiquidTraceActionGroup.prototype.createActionGroup = function (actionNames, actionGroup) {
        var _this = this;
        var actions = {};
        actionNames.forEach(function (name) {
            actions[name] = actionGroup[name](_this.entityName);
        });
        return actions;
    };
    return LiquidTraceActionGroup;
}());
var LiquidTraceApp = /** @class */ (function () {
    function LiquidTraceApp(entityActions) {
        this.entities = this.createActionGroups(entityActions);
    }
    LiquidTraceApp.prototype.createAppEntities = function () {
    };
    LiquidTraceApp.prototype.createActionGroups = function (entityActions) {
        var entities = {};
        var entityNames = Object.keys(entityActions);
        entityNames.forEach(function (name) {
            return entities[name] = new LiquidTraceActionGroup(name, entityActions[name]);
        });
        return entities;
    };
    return LiquidTraceApp;
}());
var entityActions = {
    comments: allActions_1.httpActionGroup,
    todos: allActions_1.httpActionGroup,
    users: allActions_1.httpActionGroup
};
var app = new LiquidTraceApp(entityActions);
console.log(app.entities.todos.actions.getAll());
console.log(app.entities.users.actions.getAll());
console.log(app.entities.comments.actions.getAll());
console.log(app.entities.todos.actions.getOne("7"));
console.log(app.entities.users.actions.getOne("7"));
console.log(app.entities.comments.actions.getOne("7"));
console.log(app.entities.todos.actions.update({ id: "6" }));
console.log(app.entities.users.actions.update({ id: "6" }));
console.log(app.entities.comments.actions.update({ id: "6" }));
console.log(app.entities.todos.actions.create({ value: "rejected" }));
console.log(app.entities.users.actions.create({ value: "rejected" }));
console.log(app.entities.comments.actions.create({ value: "rejected" }));
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
