## 安装

```js
npm i webpack -D
npm i webpack-cli -D
```

## 必要文件目录

```js
dist	打包好的文件目录
src		源码
webpack.config.js	webpack配置文件
```

## webpack.config.js

### 基本使用

```js
const path = require('path')

module.exports = {
    entry:'./src/main.js',		//入口
    mode:'development',			//工作状态
    output:{				   //出口
        filename:'index.js',	//文件名
        path:path.resolve(__dirname,'dist')		//通过path改成相对路径
    }
}
```

### 修改webpack.config.js名称

```js
在启动时加上 --config "修改的配置文件名"
```

### 打包命令

```js
npx webpack
```

## 脚本

```js
在package.json中加入script对象
"脚本名":"运行的代码"

在脚本后面添加参数 需要加--让node知道后面的是字符串

比如	
"build":"webpack"
npm run build -- --config webpack.config.js
```

## 常用脚本

```js
打包脚本
"build":"webpack --config webpack.config.js"
启动本地服务
"dev":"webpack-dev-server"
```

## 插件

```
module.exports = {
	......
	plugins:[	//放着所以webpack的插件
		
	],
	......
}
```

## 模块与loader

### module

```
module:{	//模块
	reles[	//规则
        {test: /\.xx$/ ,use:['xxx-loader']}	//test填正则匹配文件后缀	use填loader
    ]
}
```

### loader

```js
使用loader前需要npm i xxx-loader -D
loader的特点	希望单一
loader的用法	字符串只用一个loader
		多个loader需要[]
		loader的解析顺序,默认是从右往左执行
		loader写成对象时
         {
             test:/\.xxx$/,
             use:[
                 {
                     loader:'xxx-loader',
                     options:{
                         insert:'top'
                     }
                 },
                 'yyyy-loader'
             ]
         }
		可以写options
```

## 搭建本地服务

```
在内存中打包,不会真的打包到本地目录
```

### 安装

```js
npm i webpack-dev-server -D
```

### 配置

```js
module.exports = {
	devServer:{
		port:端口号,
		progress:true,	//显示打包的进度条
		contentBase:"相对路径",	//指定打开的文件
		compress:true,	//配置是否启用 gzip 压缩
		hot: true,		//热更新
		open: true,		//自动打开浏览器
		openPage: '相对路径' //打开指定 URL 的网页
	},
	......
}
```

## 配置优化项

```
module.exports = {
	optimization:{
		
	}
}
```

## 常用插件

### html-webpack-plugin

```
1.为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
2.可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
```

#### 安装

```js
npm i html-webpack-plugin -D
```

#### 使用

```js
let HtmlWebpaclPlugin = require()

module.exports = {
	......
	plugins:[	//放着所以webpack的插件
		new HtmlWebpaclPlugin({
			template:'./src/xxx.html',	//模板html文件
			filename:'xxx.html'			//打包后的文件
		})
	],
	......
}
```

#### 压缩生产环境js代码

```js
需要修改工作状态成production


module.exports = {
	......
	mode:'production',			//工作状态
	plugins:[	//放着所以webpack的插件
		new HtmlWebpaclPlugin({
			template:'./src/xxx.html',	//模板html文件
			filename:'xxx.html',		//打包后的文件
			minify:{
                //是否对大小写敏感，默认false
                caseSensitive: true,

                //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
                collapseBooleanAttributes: true,

                //是否去除空格，默认false
                collapseWhitespace: true,

                //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
                minifyCSS: true,

                //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyJS: true,

                //Prevents the escaping of the values of attributes
                preventAttributesEscaping: true,

                //是否移除属性的引号 默认false
                removeAttributeQuotes: true,

                //是否移除注释 默认false
                removeComments: true,

                //从脚本和样式删除的注释 默认false
                removeCommentsFromCDATA: true,

                //是否删除空属性，默认false
                removeEmptyAttributes: true,

                //  若开启此项，生成的html中没有 body 和 head，html也未闭合
                removeOptionalTags: false, 

                //删除多余的属性
                removeRedundantAttributes: true, 

                //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
                removeScriptTypeAttributes: true,

                //删除style的类型属性， type="text/css" 同上
                removeStyleLinkTypeAttributes: true,

                //使用短的文档类型，默认false
                useShortDoctype: true
			}
		})
	]
	......
}

```

### mini-css-extract-plugin

```
把css样式从js文件中提取到单独的css文件中
```

#### 安装

```
npm i mini-css-extract-plugin -D
```

#### 使用

```js
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
	......
	plugins:[
		new MiniCssExtractPlugin({
			filename:'xxx.css'			//打包后的文件
		})
	],
    module:{
        rules:[
            //在css-loader处理完后将css样式从js文件中提取到单独的css文件中
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader,'css-loader']}
        ]
    }
	......
}
```

#### 添加浏览器兼容前缀loader

```js
需要安装postcss-loader和autoprefixer
在使用postcss-loader时需要调用autoprefixer

 module:{
     rules:[
         {
             test:/\.css$/,
             use:[
                 MiniCssExtractPlugin.loader,
                 'css-loader',
                 {
                     loader:'postcss-loader',
                     options:{
                         plugins:
                         [
                             //引入autoprefixer		//设置支持的浏览器
                             require("autoprefixer")("last 100 versions")
                         ]
                     }
                 }
             ]
         }
     ]
 }
```

## 常用loader

### css-loader

### style-loader