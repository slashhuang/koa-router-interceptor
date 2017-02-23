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
  *  ==> return boolean==true to handle down to koaRouter
  *      else it will auto call next middleware for you
  */
const RouterInterceptor= (koaRouter,interceptor)=> (ctx,next)=>{
    return Promise.resolve(interceptor(ctx,next)).then((boolean)=>{
            if(boolean===true){
               return  koaRouter.routes()(ctx,next)
            }else{
               return next()
            }
        })
};
module.exports = RouterInterceptor;