登录

```
cookie处理
	登录成功下发cookie,刷新页面
	app.use监听全部路由,为了让所有的页面都能使用cookie,如果有cookie就存放在req.userInfo里面方便全部路由使用cookie,如果没有直接next()
	在main路由那边把req.userInfo数据渲染到ejs里
	如果没有cookie	req.userInfo是undefined
	然后再ejs里做判断
```

退出

```
在后台讲cookie设置为空,刷新页面
```

进入后台

```
在/admin监听全部路由	判断isAdmin属性
```

后台管理