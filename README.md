# koa-router-interceptor

> a koa-router interceptor to make koa-router more flexible

> interceptor should return a boolean value

> if interceptor returns null,you should call next inside interceptor


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
    app.use(KoaRouterInterceptor(KoaRouter,(ctx,next)=>{
        let bool =  ctx.path.substr(0,4)!="/api";
        return bool
    }));
    http.createServer(app.callback()).listen(7000)

```





