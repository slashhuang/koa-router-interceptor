'use strict';

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
var RouterInterceptor = function RouterInterceptor(koaRouter, interceptor) {
    return function (ctx, next) {
        if (typeof interceptor != 'function' && typeof koaRouter.routes != 'function') {
            console.log('interceptor and koaRouter should be a function\n');
            console.log('use router.routes() as your second curry argument');
            throw TypeError('interceptor and koaRouter should be a function');
        }
        var boolean = interceptor(ctx, next);
        if (boolean) {
            //手动dispatch路由匹配
            var routeDispatcher = koaRouter.routes();
            routeDispatcher(ctx, next);
        }
    };
};
module.exports = RouterInterceptor;
