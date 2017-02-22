/*
 * koa-router interceptor
 * 让koa-router更加灵活
 * @author slashhuang
 * 2017/2/22
 * 测试用例
 */
const Koa = require('koa');
const app = new Koa();
const KoaRouter = require('koa-router')();

const KoaRouterInterceptor =require('koa-router-interceptor')
KoaRouter.get(/.*/,(ctx,next)=>{
    ctx.body="hello world"
})
app.use(logger({
    logPath: path.join(__dirname, '../logs/'),
    logName:"server.log"
}));



let noViewBoolean =  ctx.path.substr(0,4)=='/api' || /\./.test(ctx.path)
