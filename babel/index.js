/*
 * koa-router interceptor
 * 让koa-router更加灵活
 * @author slashhuang
 * 2017/2/22
 */


 /*
  * @param koaRouter==> router.routes()实例
  * @param
  */
 const RouterInterceptor= interceptor=>koaRouter=>(ctx,next)=>{
    if(typeof interceptor!='function' &&  typeof koaRouter!='function'){
        console.log('interceptor and koaRouter should be a function\n');
        console.log('use router.routes() as your second curry argument')
        throw TypeError('interceptor and koaRouter should be a function')
    }
    let boolean = interceptor(ctx,next);
    if(typeof boolean !=='boolean'){
        console.log('interceptor should return a boolean value')
        console.log('if interceptor returns null,you should call next inside interceptor')
    }
    if(boolean){
        //手动dispatch路由匹配
        koaRouter(ctx,next);
    }
};
module.exports = RouterInterceptor;