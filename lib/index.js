"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
 * koa-router interceptor
 * 让koa-router更加灵活
 * @author slashhuang
 * 2017/2/22
 */

/*
 * @param koaRouter
 * ==> router.routes()实例
 * @param interceptor
 *  ==> return boolean=true to koaRouter or call next manually inside interceptor
 */
const RouterInterceptor = (koaRouter, interceptor) => (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        let boolean = yield interceptor(ctx, next);
        if (boolean === true) {
            //手动dispatch路由匹配
            let routeDispatcher = koaRouter.routes();
            routeDispatcher(ctx, next);
        }
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();
module.exports = RouterInterceptor;
