## 全局变量

```
global
```

## require引入文件，模块

```
require
	引入文件，模块
	单独的作用域，不挂载在其他文件的顶层对象
	返回值是exports的内容
```

## module

```
module.exports
	require返回值的内容
exports
	和module.exports是引用关系
```

## node.js的缓存模块

```
require一次之后引入的文件就在缓存里面，如果有需求在require一次就会直接返回缓存里面的东西
```

## path

```js
path 模块提供用于处理文件路径和目录路径的实用工具
    path.join([...paths])
    path.parse(path)
    path.relative(from, to)
    path.resolve([...paths])
```

## fs文件系统

```js
文件操作
    读文件
        fs.readFile('路径', (err, data) => {
          if (err) throw err;
          data是文件里的数据
        });
    写文件
        fs.writeFile('路径', data, (err) => {
         if (err) throw err;
        });
    删除文件
        fs.unlink('路径', (err) => {
         if (err) throw err;
        });

文件夹操作
    读文件夹
        fs.readdir('路径', (err,files) => {
         if(err)throw err;
         files是文件内的全部文件名
        });
    创建文件夹
        fs.mkdir('路径', { recursive: true }, (err) => {
         if (err) throw err;
         recursive : true 属性是不管有没有父级目录都创建，并且父级目录也一起创建默认为false   
        });
    删除空文件夹
        fs.rmdir('路径', (err) => {
         if(err)throw err;
        });
	
    重命名文件夹
    移动文件并修改文件名
        fs.rename('旧文件', '新文件', (err) => {
         if (err) throw err;
        });
```

文本流

```

```

## http

```
创建http服务	必须要写监听的端口
	写法1
    let server = http.createServer((req,res) => {
		res.end("Hello World!");
    });
    server.listen(端口号或者是地址);
    
    写法2
     let server = http.createServer();
     server.on("request",() => {
     	res.end("Hello World!");
     });
    
	server.listen启动监听
	http.createServer返回的是一个对象
	
        res对象
            res.writeHead(状态码,{状态消息,响应头});res的头信息
				 例子
                     res.writeHead(200,
                        {
                        'Content-Type': 'text/html',
                        'Access-Control-Allow-Origin' : '*'
                        })
            res.write();需要返回的东西
            res.end();返回结束
```

## npm常用命令

```
npm init	初始化配置	开始项目必须初始化
	npm init -y	默认配置
	初始化后会有一个package.json存放项目的信息
		dependencies保存项目运行的包依赖关系信息,可以通过npm install就可以直接安装dependencies里写的包
		devDependencies保存项目开发的包依赖关系信息,也可以通过npm install直接安装
cnpm
	是npm的淘宝镜像,比nmp下载要快,cnmp安装必须带-S或者-D
	要么使用npm开发要么使用cnpm

npm install xxxxx -save	 安装npm包并写入dependencies		生产依赖
	npm i xxxxx	-S	简写
	
npm i xxxxx -D	安装npm包并写入devDependencies		开发依赖

npm i xxxx -g	安装在全局,在任何位置都能使用这个包

npm uninstall xxxxx	卸载包		最好带上-S或者-D

npm update	xxxx 升级包		最好带上-S或者-D

npm list	展示安装了的包

npm login	登录npm
```

## express

```
必须了解的
	基本写法
	get post
	路由
	路由和静态资源的区别
	urlencoded static
	中间件 子路由 use Router next()
	路径的正则写法 req.params
	set status
	重定向


const express = require("express");		引入模块
let app  = express();
app.listen(端口号);		启动监听

	app.get(里面还能写正则)
	app.get("路由路径",(req,res，[next])=>{});		get监听路由，如果两个app.get监听同一个路由，就要看上一个函数有没有next()如果没有下面的就不会执行
	
    app.get("/",(req,res,[next])=>{		监听根目录

                res对象
                    res.status();	设置状态码
                    res.send();		返回的信息,可以自动加头信息,不需要设置,一个路由监听只能send一次，如果两个app.get监听同一个路由也只能send一次
                    res.send(obj);	如果传的的是obj,就会直接反序列化成json数据	
                    res.sendFile('绝对路径');		返回文件
                    res.set("头信息")		修改返回的头信息
                    res.redirect()		重定向
                    
              req对象
              		
                    req.app	这是用于分离出来的路由想要拿到与主程序相同的app对象
                    req.params 这是获得路径里面的数据
                        例子app.get("/index/:user")
                            就拿到user的数据
                            app.get(正则)
                            req.params[0]	是拿到app.get(/teacher(\d+)/)的第一个子项        
            [next()]
        });
        
		app.post同上
		
其他app的api
    app.all监听所有请求
    app.path() 当前应用的根
    app.set() 设置头文件
    app.route("监听路由").get((req,res)=>{}).post((req,res)=>{})	同时监听get和post请求
	app.use("子路由的根目录",router)	使用子路由
	!--其他的查文档---!
	
子路由
	子路由也能使用中间件
	const express = require("express");	
	let router = express.Router();
	router.get("子路由路径",(req,res) => {
		res.send()
	})

中间件
	一个自定义的函数用来处理一些需求需要通过app.use执行
    app.use(["路由路径"],(req,res,next)=>{			可以用来处理中间件,也监听全部路由
        可以处理req,res里面的东西		会继承到后面的req,res里面
        next();						  必须调用了next才能执行下面的代码
    });	
    
    默认提供的中间件
        app.use(express.json())	
        app.use(express.urlencoded({extended:true}))		整合前端form提交的值到req.body里
        app.use(express.static())		部署静态资源库

前端要使用form提交数据action里要填http://xxxxxx:xxxx/xxxx 域名或者ip;
	通过app.use(express.json())		
	和app.use(express.urlencoded({extended:true}))
	处理之后数据存放在req.body里面
	
如果是请求接口需要转递{xxx:value} node才能通过app.use(express.json())获取数据		
```

## request

```
request({
	method:"",
	url:"",
	headers:""		"User-Agent"之类的
},(err,res,body)=>{
	res.statusCode		状态码
	body是请求页面的html代码或者是数据
})

request(url).pipe(fs.createWriteStream(文件名))
	可以直接讲响应流变成文件流
```

## 爬虫例子

```
const request = require("request");
const fs = require("fs");
new Promise((resolve , reject)=> {
    request({
        method:"GET",
        url:"https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%C3%C0%C5%AE&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111",
        headers:{
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36"
        }
    },(err,res,body)=>{
        resolve(body)
    })
}).then((data)=>{
    let zz = /https.*?(jpg|gif|jepg|png)/gi;
    let aa = data.match(zz)
    aa.forEach((v,i)=>{
        request(v).pipe(fs.createWriteStream("./img/"+i+"."+v.match(/(jpg|gif|jepg|png)$/g)))
    })
})

```

## jsdom

```
在服务端用原生js的方式操作request返回的数据
const {JSODOM} = require("jsdom")
let window = new JSDOM(body).window
windows.document.获取元素的方法
```

## cheerio

```
在服务端用原生jq的方式操作request返回的数据
```

## ejs

```
首先要安装ejs
通过express使用
	1.js
    const express = require("express");
    const rou = require("./2.js");
    let app = express();
    app.listen(8888);
    app.set("view engine","ejs")
    app.get("",(req,res)=>{
        res.send("/")
    })
    app.use("/info",rou);
	
子路由
	2.js
	const express = require("express");
	let router = express.Router();
	router.get("/",(req,res)=>{
    res.render(路径,数据)	路径默认是views
	});
	module.exports = router;
	
ejs模板www.baidu.com
```

## cookies

```
客户端第一次访问服务器
服务器端会返回要求设置cookie的信息
当客户端第二次访问服务器就会携带cookie信息验证身份

const express = require('express');
const cookieParser = require('cookie-parser');		引入包
let app = express();
app.use(cookieParser())			获取cookie中的数据的中间件

app.get('/login',(req,res)=>{
	req.cookies					获取cookie中的数据,没有引入中间件是undefined
	res.cookie('key','value',{		下发cookie
		maxAge:毫秒数				cookie过期时间
	});
	res.send('ok')
});

例子
    const express = require("express");
    const cookieParser = require("cookie-parser");
    let app = express();
    app.use(cookieParser());
    app.listen(8888);
    let cityArr = [];
    app.get('/',(req,res)=>{
        if (req.url==='/favicon.ico')return
        res.send('你浏览过'+cityArr)
    });

    app.get('/:city',(req,res)=>{
        if (req.url==='/favicon.ico')return
        res.cookie('city', req.params.city ,{
            maxAge:900000
        });
        cityArr.push(req.params.city);
        res.send('你在当前/'+req.params.city+'目录')
    });

```

## session

```
const express = require('express');
const session = require('express-session');
let app = express();

app.use(session({
	secret:'保密的数据',
	cookie:{maxAge: 毫秒数 },
	resave:true,
	saveUninitialized:true
}))

app.get('/login',(req,res)=>{
	req.session					req.session对象可以拿来存cookie信息
})



例子
    const express = require('express');
    const session = require('express-session');
    
    let app = express();
    app.listen(8888)
    app.use(session({
        secret:'dxy',
        cookie:{maxAge: 600000 },
        resave:true,
        saveUninitialized:true
    }),(req,res,next)=>{
        if ( !req.session.city) req.session.city = [];
        next();
    })

    app.get('/',(req,res)=>{
        if (req.url==='/favicon.ico')return
        res.send('你浏览过'+req.session.city)
    });

    app.get('/:city',(req,res)=>{
        if (req.url==='/favicon.ico')return
        req.session.city.push(req.params.city)
        console.log(req.session.city);
        res.send(req.params.city)
    });
```

## node事件循环机制

```
事件从上往下
    先执行	js代码 然后是 微任务 然后是宏任务
    宏任务里面如果有微任务就先清空里面的微任务
    微任务里面如果有宏任务,就丢去宏任务的流程里

宏任务
	settimeout/setInterval	>	setImmediate
微任务
	process.nextTIck的回调   >	  then的回调
```

