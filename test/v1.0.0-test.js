/*
 * koa-router interceptor
 * 让koa-router更加灵活
 * @author slashhuang
 * 2017/2/22
 * 测试用例
 */


module.exports = (nodePackage)=>{
    const http = require('http');
    const Koa = require('koa');
    const app = new Koa();
    const KoaRouter = require('koa-router')();

    const KoaRouterInterceptor = nodePackage;
    KoaRouter.get('/hello',(ctx,next)=>{
        ctx.body="hello world"
    })
    app.use(KoaRouterInterceptor(KoaRouter,async (ctx,next)=>{
        let bool=!(ctx.path.substr(0,4)=='/api' || /\./.test(ctx.path));
        if(bool){
            return true
        }else{
          await  next()
        }
    }));

    http.createServer(app.callback()).listen(7000)
}


