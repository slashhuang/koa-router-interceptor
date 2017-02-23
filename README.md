# koa-router-interceptor


> when using koa-router@next ,only regular expression is not enough

> to handle dynamic router situation。

> this  koa-router-interceptor module is to make koa-router more flexible

> interceptor should return a true value to handle koa-router logic.

> if boolean==true is not returned or resolved, koa-router-interceptor automatically

> call next koa middleware for you

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
    const KoaRouterInterceptor = require('koa-router-interceptor');
    KoaRouter.get('/hello',(ctx,next)=>{
        ctx.body="hello world"
    })
    app.use(KoaRouterInterceptor(KoaRouter,(ctx,next)=>{
       return !(ctx.path.substr(0,4)=='/api' || /\./.test(ctx.path));
    }));
    http.createServer(app.callback()).listen(7000)

```

## notice

> it is strongly recommended to use node >=6.0





