## react入门

#### 准备配置文件

```
1.安装配制文件    
cnpm/npm init -y 安装配制文件； 
	"main": "index.js", //入口文件
2.安装引入babel.js    npm i babel-standalone -D   //-D 开发环境下；
3.引入虚拟DOM    cnpm/npm i react-dom -D
4.引入react的库，UI库；    cnpm/npm i react -D
```

#### 引入环境

```
<!-- 用于解析jsx的代码 -->
<script src="./node_modules/babel-standalone/babel.js"></script>
<!-- 引用react模块，用于构建用户界面的 JavaScript 库   UI库 -->
<script src="./node_modules/react/umd/react.development.js"></script>
<!-- 操作VM DOM ，-->
<script src='./node_modules/react-dom/umd/react-dom.development.js'></script>
<!-- 引入script类型为babel样式 -->
<script type='text/babel'></script>
```

## 使用react

#### 简单使用

```
<div id="app"></div>
jsx部分
const element = (<div>
        <p>hello reackt</p>
    </div>)
ReactDOM.render(
    element,
    document.getElementById("app")
)
```

#### 插值符号

```
{}是插值符号   
    插值符号只能写一段js语句 
    但是在那一段语句的里面可以在里面写多条js语句
    插值符号里面可以写些什么内容：        
        1.表达式        
        2.数组       会直接打开数据    
        3.字符串        
        4.即时函数		(function(){})
        5.布尔值；        
        6.不能插入if判断，只能使用三目表达式；           
        7.不能直接使用json值，	
```

#### 遍历数组数据

	使用array.map
	例:arr.map( ( item , index )=>{
	                return (
	                    <li
	                        key={index}		代表元素的唯一性
	                        className='red'	class在react是关键词，需要换为className
	                        title={item}	
	                    > {item} </li>
	                )
	            })
#### 使用对象的数据

```
例:const person = {name:'xxx',age:18,kuang:'true'}
const element = (
<div>
    <h1> 姓名：{person.name} </h1>
    <h2> 年龄：{person.age}</h2>
    <h2> kuang:{person.kuang} </h2>
</div>
```

#### 样式处理

```
要在插值符号里引用
	例1
    const style = {
        background:'red'
    }
    
    const element = (<div>
    	<p style={style}>hello reackt</p>
    </div>)
      
     例2
    const style1 = {
        bgc1:{
            backgroundColor :"#999"
        },
         bgc2:{
            backgroundColor:"#a00"
        }
    }
    
	const element = (<div>
		<p style={style.bgc1}>hello reackt</p>
	</div>)   
```

## 组件

#### 声明式无状态组件

```
es5写法

    function Section(){    
        return (        
            <section> 这是主体样式 </section>    
        )
    }
    let element = (<div>
        <Section />				可以单标签
        <Section></Section>		 也可以双标签
    </div>);

es6写法

class Section extends React.Component{
    constructor(){
    	super(...arguments)
    }
    render(){
		return (
			 <section> 这是主体样式 </section>
		)
	}
}
```

#### 无状态组件传参

```
组件里面的全部数据都保存在props里

例

es5写法

function Section(props){    
    return (        
    	<section> 这是主体样式 {props.title}{props.data}......</section>    
    )
}
let element = (<div>
	<Section
		title={'this is xxx'}
		data={'xxx'}
		aa={'xxx'}
		bb={'xxx'}
		......
	></Section>		
</div>);

es6写法

class Section extends React.Component{
        constructor(){
            super(...arguments)
        }
        render(){
            console.log(this)
            return (
                <section>{this.props.title}</section>
            )
        }
    }
let element = (<div>
	<Section
		title={'this is xxx'}
		data={'xxx'}
		aa={'xxx'}
		bb={'xxx'}
		......
	></Section>		
</div>);
```

#### 声明式有状态组件

```
React 把组件看成是一个状态机(State Machines)

 class Head extends React.Component{
            constructor(){
                super(...arguments)  //把父级所有的样式解构出来
                this.state = {
                	设置状态
                }
            }
            render(){
                return (
                    <header>xxxxxxx</header>
                )
            }
        }
        
        
 this.setState({})设置新的值，改变状态
```

## 事件

#### event

	在js里event对象在函数的第一个参数
	而react里面是最后一个参数
		如果传了n个参数
		那么evet对象就是第n+1个
#### 绑定事件的方法

```
 class Head extends React.Component{
            constructor(){
                super(...arguments)  //把父级所有的样式解构出来
                this.state = {
                	设置状态
                }
            }
            handleClick(){
            	console.log(this)
            }
            render(){
                return (
                    <header onClick={this.handleClick}>xxxxxxx</header>
                )
            }
        }
        
点击函数handleClick的this是undefined所以我们要解决

第一种方法：使用预传参的方法，改变this的改变；
	<header onClick={this.handleClick.bind(this)}>xxxxxxx</header>
第二种方法：
	这里因为是handleClick1是在原例化对应里面的原型上，所以需要在调用的时候写this.handleClick
	constructor(){
		this.handleClick2 = this.handleClick2.bind(this)
	}
第三种：使用箭头函数来改变；
	handleClick=()=>{}
```

#### 事件处理

```
react事件处理函数前面都要加 handle
    例
     class Head extends React.Component{
            constructor(){
                super(...arguments)  //把父级所有的样式解构出来
                this.state = {
                	设置状态
                }
            }
            handleClick(){
            	console.log(this)
            }
            render(){
                return (
                    <header onClick={this.handleClick}>xxxxxxx</header>
                )
            }
        }
    
传参问题
    onclick={handleclick}   这里不可以使用handleclick()来传参
    					  需要用指定this指向的函数来传参 bind()
```

操作DOM

```
1.通过js来操作DOM;
const inp = document.querySelector('input');
console.log( inp )
inp.style.backgroundColor = 'deeppink'

2.通过事件代理来实现DOM操作
let {target} = e;
console.log( e.target )
console.log( target )
target.style.backgroundColor = '#90f'

3.ref属性:
	有两种标记方式：
		字串的方法来进行标记
			ref="xxx"
		函数式的引用方式(常用的)
			ref={
                (element) =>{this.btn = element} element只是一个随便的值可以是aa bb cc
			}
```

## findDOMNode

#### findDOMNode的作用

```
ReactDOM.findDOMNode是用来获取实际DOM的
ReactDOM.findDOMNode也可以将组件转化成节点
```

## React 父子组件通信

```
通讯是单向的，数据必须是由一方传到另一方。
```

#### 父组件向子组件的通信

```
组件可以向子组件通过传 props的方式，向子组件进行通讯
例
class List extends React.Component{......}
class Element extends React.Component{
	state = {
		data:"父组件从后台请求来的数据"
	}
	render(){
		return (
			<div>
				<h2> ccccccc </h2>
                <List 				
                    //在 React 中，父组件可以向子组件通过传 props 的方式，向子组件进行通讯。
                    abc={'这个是父组件的值;'}	//传字符串
                    data={ this.state.data }   //传变量
                    fn={ this.getData }		  //传函数	
                ></List>
			</div>  
		)
	}
}
```

#### 子组件向父组件的通信

```
子组件向父组件通讯，同样也需要父组件向子组件传递 props 进行通讯，只是父组件传递的，是作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中。

例
class List extends React.Component{
	render(){
		return (
			<div> 
				//在子组件使用bind预传参
				<button onClick={this.props.fn.bind( this,'子组件里面的进行传值' )}> 获取数据 </button>   
			</div>
		)
	}
}


class Element extends React.Component{
	state = {
		data:"父组件从后台请求来的数据"
	}
	getData=(a)=>{
		this.setState({
			data:a
		})
	}
	render(){
		return (
			<div>
				<h2>{this.state.data}</h2>
                <List 				
                    //在 React 中，父组件可以向子组件通过传 props 的方式，向子组件进行通讯。
                    abc={'这个是父组件的值;'}	//传字符串
                    data={ this.state.data }   //传变量
                    fn={ this.getData }		  //传函数	
                ></List>
			</div>  
		)
	}
}
```

## 生命周期

#### 生命周期第一阶段

```
react的生命周期：    
init:        constructor(props){}    
Mounting 初始化阶段（挂载阶段）        
    componentWillMount(){}   组件即将被挂载        
    render(){}    更新渲染        
    componentDidMount{}      已经渲染完成了    
```

#### 生命周期第二阶段

```
Updating 运行中阶段     
constructor (){}        构造函数            
componentWillReceiveProps(nextProps) {}        父组件的更新会触发生组件的这个函数        nextProps 获取父组件更新的时候带来的数据            
shouldComponentUpdate(nextProps, nextState) {}        是否更新组件           
componentWillUpdate(nextProps, nextState) {}        即将被更新            
render(){}        更新渲染            
componentDidUpdate(nextProps, nextState){}        组件更新完成
```

#### 生命周期第三阶段

```
Unmounting	销毁阶段
componentWillUnmount()：此函数在组件被卸载和销毁之前被立即调用
```

## 脚手架

```
使用脚手架是非常方便且高效，里面结合webpack里面的优点，把配置起来显得更加便捷；
使用框架都需要按照一定的标准规范来进行开发，统一的标准；
```

#### 安装

```
安装所谓的集成环境（脚手架）：          
npm i create-react-app -g    安装脚手架（ -global ）      
```

#### 创建

```
create-react-app 项目名   创建一个项目文件；	//在创建文件的进程中，不要去动模块，如果动模块有可能出错
```

#### 启动

```
npm start	启动
```

说明

```
如果拿到别人的react代码，需要在自己电脑上面运行，需要安装模块    
cnpm i     
如果后期报错，说少了什么模块的情况需要对应地去进行安装    
如果要运行别人的项目，最好拿到开发环境？ -D   
public 静态的资源；      
	html ，css , js
src( resource )资源  ：包括            
    conponents 组件            
    img            
    js            
    css        
README:说明介绍    
```

## 表单控制

```
表单控制：    
text、password、checkbox、radio、select、option、textarea、表单在数据交互方面起来很重要的一部分
```

## 路由

```
react-router
提供了一些router的核心api，静态的
Router, Route, Switch等，但是它没有提供dom操作进行跳转的api
React-router-dom
提供了BrowserRouter, Route, Link等api，动态的
我们可以通过DOM的事件控制路由

- BrowerserRouter路由和HashRouter路由
  - 是路由的基本
  - 就像路由器一样去管理网络及给每个接入进来的用户分发ip
  - 是一个大容器 包裹着路由
  - HashRouter它是通过hash值来对路由进行控制。如果你使用HashRouter，你的路由就会默认有这个#。
  - BrowerserRouter它的原理是使用HTML5 history API (pushState, replaceState, popState)来使你的内容随着url动态改变的，如果放在二级目录下给BrowerserRouter增加个属性

- Switch
  - 会用来包裹Route，它里面不能放其他html元素，用来只显示一个路由

- Route
  - 控制路径对应显示的组件
  - 标签属性有exact、path以及component
    - exact 是严格匹配，控制匹配到/路径时不会再继续向下匹配
    - path 是标识路由的路径
      - /path/:id路由参数
    - component 则表示路径对应显示的组件

- Link和NavLink
  - 两者都是可以控制路由跳转的
  - NavLink的api更多
  - Link标签有to属性
    - to可以接受string或者一个object，来控制url
  - NavLink它可以为当前选中的路由设置类名、样式以及回调函数等
    <NavLink  exact activeClassName='select'> to='/'</NavLink>
   
- Redirect
  - 重定向
    - 属性 from='*' to='/'
  - 404

- params与query
  - this.props.match 来获取路由(/news/list123)参数
  - 可以通过node-url 来获取路由(/news/list?id=123&a=456&b=789)参数
```

#### 使用

    1.安装模块
    npm i react-router-dom --save
    2.引入模块
    import {   
        BrowserRouter,    
        Route,    
        NavLink,    
        Switch
    } from 'react-router-dom'
    
    <BrowserRouter></BrowserRouter>是必须要的不写无法开启路由
#### 重定向

```
Redirect重定向一般使用在渲染完成触发函数
componentDidMount()
改变state的值完成重定向

如果在重定向之前卸载了组件就会出错所以
componentWillUnmount()在组件卸载前将state清除
例
   componentWillUnmount() {
        this.setState=()=>{
            return
        }
    }
```

#### 动态路由

```
通过:id来实现动态路由
    例
    path='/news/newslist/:id'
    
可以通过
	this.props.match.params.id	来获取动态路由(/newslist/123)参数
```

#### get

```
Url插件	匹配get
使用前要安装和引入Url插件
npm i url --save
    例
    path='/news/newslist?id=1'
    
可以通过
    let id = Url.parse(this.props.location.search,true) {id.query.id}	来获取路由(/newslist?id=1)参数
```

#### 路由嵌套

```
APP里有一层路由APP的子路由里还有路由就是路由嵌套
```

#### 模块化路由

```
将路由数据单独放在一个组件里并暴露出来
例:
    import Main from "../components/main";
    import User from "../components/user";
    import News from "../components/news";
    import Not404 from "../components/not404";

    let route = [
        {
            exact:true,
            path:'/',
            component:Main
        },
        {
            path:'/user',
            component: User
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/',
            component:Not404
        }
    ]

    export default route;

在使用的时候使用map遍历


//路由嵌套父子组件之间进行传值；	固定写法
render= {( props )=> {
    return <item.component data={ item.children } />
}}
```

## redux

```
redux是一个第三方的插件库，用来对状态进行管理；
```

#### 安装和引入

```
cnpm install redux --save
import {createStore,applyMiddleware,compose} from 'redux';
```

#### 使用

```
在顶层父级创建redux商店
例如脚手架的index.js
然后通过props传给子级

const store = createStore(    
    reducer,    //重要的回调函数,下面的是中间件不用中间件可不写
    compose(        
        applyMiddleware(thunk), //中间件用于处理方法   这个中间件是异步处理的中间件    
))
```

#### reducer函数

```
function reducer(state=0,action){
	state :原先的状态，
    action:需要来进行改造的内容
        action.type 决定你要处理的类型
            进行判断：
                if ,swich
}

例
const Add_Num = '叫只鸡'
const remove_Num = '少来一只鸡'
function reducer( state=0,action ){
    switch( action.type ){
        case Add_Num :
            return state + 5
        case remove_Num:    
            return state - 1
        default:
            return 0    
    }
}

function addNum(){
    return {
        type:Add_Num
    }
}

function removeNum(){
    return {
        type:remove_Num
    }
}
```

派发事件

```
改变store里的值
store.dispatch( {
	type:'叫只鸡'
} )
```

#### 获取当前数据

```
store.getState()
```

#### 监听数据改变函数

```
在顶层父级监听数据改变重新渲染
store.subscribe()
例

render()
function render(){
    ReactDOM.render(
        <App 
            store = { store }
            add = { addNum }
            remove = { removeNum }
            removeAsync = { removeAsync }
        />, 
        document.getElementById('root')
    );
}
store.subscribe( render )
```

#### 异步处理

```
redux-thunk:专门用于处理异步的数据内容
cnpm install redux-thunk --save

异步函数写法
export function removeNumAsync() {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(removeNum())
        },2000)
    }
}
```

#### redux模块化

```
例:网盘redux文件
```

#### react-redux

```
真正的仓库可以隔代获取数据

安装
    cnpm i react-redux --save

引入
    import {Provider} from 'react-redux'

使用
    用Provider组件包裹app组件将store写入标签
    <Provider store = { store }>
    <App />
    </Provider>

在App.js中引入connect
    import { connect } from 'react-redux'

执行connect
    将store中的数据作为props绑定到组件中
    const mapStateToProps = ( state )=>{
        return { abc : state }
    } ;

    派发事件函数
    const mapDispatchToProps = { addNum , removeNum , removeAsync }

    App = connect( mapStateToProps , mapDispatchToProps )( App )
```

