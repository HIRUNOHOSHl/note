## 使用

#### 安装

```
npm install -g @tarojs/cli
```

#### 创建项目

```
taro init 项目名称
```

#### 运行

```
npm run dev:需要编译成什么
```

## app.js

```
Taro的入口文件
```

### 全局配置

#### pages---(页面组成)

```
用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径 + 文件名 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的文件进行处理。
数组的第一项是首页
```

#### window---(小程序的状态栏、导航条、标题、窗口背景色)

```
用于设置小程序的状态栏、导航条、标题、窗口背景色，其配置项如下。
```

#### tabBar---(底部或顶部 tab 栏)

```
如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。
```

#### networkTimeout---(网络请求超时)

```
各类网络请求的超时时间，单位均为毫秒。
```

#### debug

```
可以在开发者工具中开启 debug 模式，在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有 Page 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。
```

#### functionalPages---(启用插件功能页)

```
启用插件功能页时，插件所有者小程序需要设置其 functionalPages 为 true
```

#### subPackages---(声明项目分包结构)

```
启用分包加载时，声明项目分包结构
```

#### workers---(处理多线程)

```
使用 Worker 处理多线程任务时，设置 Worker 代码放置的目录
```

#### requiredBackgroundModes---(申明需要后台运行的能力)

```
申明需要后台运行的能力，类型为数组
```

#### plugins---(声明小程序需要使用的插件)

```
声明小程序需要使用的 插件
```

#### preloadRule---(声明分包预下载)

```
声明分包预下载的规则
```

#### resizable---(屏幕旋转)

```
在 iPad 上运行的小程序可以设置支持屏幕旋转
```

#### navigateToMiniProgramAppIdList---(跳转到其他小程序)

```
当小程序需要使用 Taro.navigateToMiniProgram 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个
```

#### usingComponents---(声明的自定义组件视为全局自定义组件)

```
在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明
```

#### permission---(接口权限相关设置)

```
微信小程序接口权限相关设置。字段类型为 Object，结构为：
```

## 生命周期

#### 初始化

```
componentWillMount()	
第一次渲染之前

render()			    
渲染

componentDidMount()		
第一次渲染之后

componentWillUnmount()
此函数在组件被卸载和销毁之前被立即调用
```

#### 更新时

```
componentWillReceiveProps(nextProps) {}        
Props更新会触发生

shouldComponentUpdate(nextProps, nextState) {}        
是否更新组件  可以通过判断来决定是否更新,提高性能

componentWillUpdate(nextProps, nextState) {}     
即将被更新          

componentDidUpdate(nextProps, nextState){}        
组件更新完成
```

#### taro独有

```
原react是没有的
    componentDidShow()
    页面显示时触发
    componentDidHide()
    页面隐藏时触发
```

## state

```
通过state管理状态
state={
	xx:xxx
}

通过
setState({
	需要修改的属性:修改的值
})
```

## props

```
父组件传递给子组件,子组件用props接受
props可以传递任何数据
当父组件传递的数据为假值时
子组件可以定义一个props默认值
```

## 路由

```
在 Taro 中，路由功能是默认自带的，不需要开发者进行额外的路由配置。

我们只需要在入口文件的 config 配置中指定好 pages，然后就可以在代码中通过 Taro 提供的 API 来跳转到目的页面

例:
Taro.navigateTo({
  url: '/pages/page/path/name'
})

```

#### Taro.navigateTo(保留当前页面)

```
保留当前页面，跳转到应用内的某个页面。
```

#### Taro.redirectTo(关闭当前页面)

```
关闭当前页面，跳转到应用内的某个页面。
```

#### 路由传参

```
例:
Taro.navigateTo({
  url: '/pages/page/path/name?id=2&type=test'
})

在跳转成功的目标页的生命周期方法里就能通过 this.$router.params 获取到传入的参数，在目标页的 componentWillMount 生命周期里获取入参

 componentWillMount () {
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }
```

## 设计稿及尺寸单位

```
Taro 默认以 750px 作为换算尺寸标准，如果设计稿不是以 750px 为标准，则需要在项目配置 config/index.js 中进行设置
```

## 静态资源的引入

```
在小程序的样式中，默认不能直接引用本地资源，只能通过网络地址、Base64 的方式来进行资源引用，为了方便开发，Taro 提供了直接在样式文件中引用本地资源的方式，其原理是通过 PostCSS 的 postcss-url 插件将样式中本地资源引用转换成 Base64 格式，从而能正常加载。

引入图片不能使用本地路径编译时会报错
使用require,input引入
```

## 列表渲染

```
{使用三目判断进行条件渲染,或者使用&& ||}

在使用map循环的时候不能写if
taro中只能在渲染之前处理好数组
```

## Children(类似插槽)

```
在组件中定{this.props.children}就可以使用其他组件通过{}传过来的模板

例:
<Childen>{'cccc'}</Childen>

class Childen extends Component {
    render() {
        return (
            <View className="chiden">{this.props.children}</View>
        )
    }
}

export default Childen

也可以在组件中通过props传递模板
例:
<Childen xxx={<View>test</View>}></Childen>

class Childen extends Component {
    render() {
        return (
            <View className="chiden">{this.props.xxx}</View>
        )
    }
}
```

## 事件

```
事件参数event对象永远都是最后一个参数

当我们需要传递函数给子组件调用,必需要加上on
```

## 环境变量

```
process.env.TARO_ENV
可以用来判断当前是什么应用
来拉取相对的style样式
```

## 样式的书写

```
最好使用类选择器
其它的会出现错误

最好使用flex布局 适用性高
```

