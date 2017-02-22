/*
 * koa-router interceptor
 * 让koa-router更加灵活
 * @author slashhuang
 * 2017/2/22
 * 测试用例
 */

const http = require('http');
const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router')();

const KoaRouterInterceptor =require('koa-router-interceptor')
KoaRouter.get(/.*/,(ctx,next)=>{
    ctx.body="hello world"
})

let interceptor = (ctx,next)=>{
    return ctx.path.substr(0,4)!="/api"
}
app.use(KoaRouterInterceptor(interceptor)(KoaRouter));

http.createServer(app.callback()).listen(7000)

