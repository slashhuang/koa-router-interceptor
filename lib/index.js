'use strict';

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
var RouterInterceptor = function RouterInterceptor(koaRouter, interceptor) {
    return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
            var boolean, routeDispatcher;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(typeof interceptor != 'function' && typeof koaRouter.routes != 'function')) {
                                _context.next = 4;
                                break;
                            }

                            console.log('interceptor and koaRouter should be a function\n');
                            console.log('use router.routes() as your second curry argument');
                            throw TypeError('interceptor and koaRouter should be a function');

                        case 4:
                            _context.next = 6;
                            return interceptor(ctx, next);

                        case 6:
                            boolean = _context.sent;

                            if (boolean === true) {
                                //手动dispatch路由匹配
                                routeDispatcher = koaRouter.routes();

                                routeDispatcher(ctx, next);
                            }

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
};
module.exports = RouterInterceptor;
