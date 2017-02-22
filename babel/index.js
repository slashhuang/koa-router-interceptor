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
const RouterInterceptor= (koaRouter,interceptor)=> async (ctx,next)=>{
    let boolean = await interceptor(ctx,next);
    if(boolean===true){
        //手动dispatch路由匹配
        let routeDispatcher = koaRouter.routes();
        routeDispatcher(ctx,next);
    }
};
module.exports = RouterInterceptor;