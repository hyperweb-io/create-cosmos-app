"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryMobxStores = exports.createRpcQueryHooks = exports.createClientImpl = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const react_query_1 = require("@tanstack/react-query");
const mobx_1 = require("../../../../mobx");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* AppVersion queries an IBC Port and determines the appropriate application version to be used */
    appVersion = async (request) => {
        const data = query_1.QueryAppVersionRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.port.v1.Query", "AppVersion", data);
        return promise.then(data => query_1.QueryAppVersionResponse.decode(new binary_1.BinaryReader(data)));
    };
}
exports.QueryClientImpl = QueryClientImpl;
const createClientImpl = (rpc) => {
    return new QueryClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
const _queryClients = new WeakMap();
const getQueryService = (rpc) => {
    if (!rpc)
        return;
    if (_queryClients.has(rpc)) {
        return _queryClients.get(rpc);
    }
    const queryService = new QueryClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useAppVersion = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["appVersionQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.appVersion(request);
        }, options);
    };
    return {
        /** AppVersion queries an IBC Port and determines the appropriate application version to be used */ useAppVersion
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;
const createRpcQueryMobxStores = (rpc) => {
    const queryService = getQueryService(rpc);
    class QueryAppVersionStore {
        store = new mobx_1.QueryStore(queryService?.appVersion);
        appVersion(request) {
            return this.store.getData(request);
        }
    }
    return {
        /** AppVersion queries an IBC Port and determines the appropriate application version to be used */ QueryAppVersionStore
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
