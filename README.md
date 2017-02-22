# koa-router-interceptor


> when using koa-router@next ,only regular expression is not enough

> to handle dynamic router situation。

> this  koa-router-interceptor module is to make koa-router more flexible

> interceptor should return a true value to handle koa-router logic.

> call next inside interceptor to handle down to next koa middleware

## install

```bash
    npm install koa-router-interceptor
```

## soure code
[koa-router-interceptor](./babel/index.js)

## usage case

```javascript

    const http = require('http');
    const Koa = require('koa');
    const app = new Koa();
    const KoaRouter = require('koa-router')();
    const KoaRouterInterceptor = nodePackage;
    KoaRouter.get('/hello',(ctx,next)=>{
        ctx.body="hello world"
    })
    app.use(KoaRouterInterceptor(KoaRouter,(ctx,nextMiddleware)=>{
        let bool =  ctx.path.substr(0,4)!="/api";
        if(bool){
            // 让koa-router 处理逻辑
            return true
        }else{
            // 跳过koa-rourter
            return nextMiddleware()
        }
    }));
    http.createServer(app.callback()).listen(7000)

```





