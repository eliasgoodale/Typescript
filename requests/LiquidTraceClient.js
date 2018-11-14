"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var LiquidTraceClient = /** @class */ (function () {
    function LiquidTraceClient(config, endpoints) {
        if (endpoints === void 0) { endpoints = {}; }
        var _this = this;
        this.config = config;
        this.endpoints = endpoints;
        this.createEntity = function (entity) {
            _this.endpoints[entity.name] = _this.createBasicCRUDEndpoints(entity);
        };
        this.createEntities = function (entities) {
            entities.forEach(_this.createEntity.bind(_this));
        };
        this.createBasicCRUDEndpoints = function (_a) {
            var name = _a.name;
            var endpoints = {};
            var resourceURL = "/" + name;
            endpoints.getAll = function (_a) {
                var query = (_a === void 0 ? {} : _a).query;
                return _this._instance.get(resourceURL, { params: { query: query } });
            };
            endpoints.getOne = function (_a) {
                var id = _a.id;
                return _this._instance.get(resourceURL + "/" + id);
            };
            endpoints.create = function (toCreate) { return _this._instance.post(resourceURL, toCreate); };
            endpoints.update = function (toUpdate) { return _this._instance.patch(resourceURL + "/" + toUpdate.id, toUpdate); };
            return endpoints;
        };
        this._instance = axios_1["default"].create(config);
    }
    return LiquidTraceClient;
}());
exports["default"] = LiquidTraceClient;
// const config = {
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     timeout: 1000,
// }
// const api = new LiquidTraceClient(config)
// api.createEntities([{name: 'todos'}, {name: 'users'}]);
// api.endpoints.todos.getAll().then((data: any) => console.log(data.data))
