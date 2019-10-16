## 双向数据绑定原理(★)

```
view层与Model层绑定,view层数据改变会影响Model层,Model层数据改变会影响view层

原生js的双向数据绑定,用到 Object.defineProperty()这个函数

例子:
<input type="text" id="input">

let data = {}
let temp = {}
    Object.defineProperty(data,'a',{
    	enumerable		定义属性能否被遍历	默认false
    	configurable	定义属性分否删除	默认false
    	writable		定义属性能否设置	默认false
    	
        get(){					   获取data的属性时触发
            return temp.a
        }
        set(value){					设置data函数的时候触发
            temp.a = value
            input.value = value
        }
    })
```

## vue生命周期(★)

```
所有的周期函数this都是实例化中的当前状态的vm
在周期函数中拿不到vm,因为还没有赋值还在实例化,只有实例化完成之后才能拿到
想在某个生命周期中使用最终的vm实例可以访问this.$nextTick(()=>{console.log(vm)})

beforeCreate	此时vue实例的状态	data中没有数据
created			此时vue实例的状态	data已经有数据了,但是数据没有挂载到视图中,数据没有挂载在根节点
	可以使用ajax请求数据,然后会mounted挂载到vm上
	
beforeMount		此时根节点已经存在 但是数据还没有挂载到根节点
mounted			此时数据已经挂载到根节点上了
	可以操作节点,可以拿到data里面的数据了
	
beforeUpdate	在数据改变之前触发
updated			在数据改变后触发

beforeDestroy	在销毁一个实例之前触发
destroyed		销毁一个实例触发
```

## vue生命周期补充

```
<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
如果没有 <keep-alive> 则不会有activated 和 deactivated 这两个生命周期钩子函数
```

## 使用vue

```
引入
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
    let vm = new Vue({
        el:'xxx'	根节点
        data:{		vue可以操作的数据集合
            写在里面的数据都是双向数据绑定的
            获取data中的属性可以通过	vm.a 或者 vm.$data.a
            如果要使视图中的数组发生改变 需要使用数组的变异方法
                push pop shift unshift splice sort reverse	
            !!特例 vue不能检测数组的length 对象属性的增加和删除!!
        }
    })

vm.c = 1; 这种方法定义的不是双向数据绑定的
```

## 一些带$的函数

```
vm.$data	获取数据

vm.$el		获取根节点

vm.$set(对象,属性,值)	添加对象的响应式属性
	不在data里添加的数据都没有双向数据绑定的,想要添加响应式属性
	vm.$set( target, propertyName/index, value )
	例子
	vm.$set(vm.obj,'c',2)
	
vm.$mount	挂载
	vm.$mount($el)挂载根节点
	
vm.destroy	销毁一个实例
```

## vue指令

```
{{数据}}		在{{}}中可以插入vue提供的数据,不能把标签格式的字符串解析成标签

v-html		  类似innerHTML	把数据解析成对应的标签格式
v-text		  类似innerText	把数据解析成对应的文本格式

v-if=数据		可以v-if="x"也可以v-if=x
v-else-if=数据	
v-else=数据
	如果数据为真	则渲染该节点
	如果数据为假	则不渲染该节点
	v-if=数据 v-else-if=数据 v-else 要同时使用必须相邻兄弟
	
v-show=数据
	如果数据为真	则渲染该节点并显示
	如果数据为假	则渲染该节点并隐藏
	
v-model=数据
	表单修饰符
    v-model.number
        1.限制用户输入的数据必须是数字
        2.把用户输入的数据转换成数字类型

    v-model.lazy	当文本框失去焦点时   数据响应视图的变化

    v-model.trim   对视图中的数据进行处理  再响应到vue中

    v-model的作用 ：收集表单中的数据
        单选按钮  收集的是value值
        多选按钮  收集的是value值  数据收集在数组中
        下拉框    收集的是value值
            两种情况  可以收集单个选中的下拉框  数据存在字符串中
                     可以收集多个选中的下拉框  数据存在数组中
                 
v-for	for循环渲染
	v-for='(item,index) in arr'
```

## 绑定样式

```
:style=对象    对象的键名是标签的属性名 键值是标签的属性值
:style=数组    多个对象的键名是标签的属性名    多个对象的键值是标签的属性值
```

## 绑定属性

```
v-bind:属性名=属性值    <==>  :属性名=属性值  完全等价    
想要在:xxx里面绑定字符串可以 :xxx='"aa"'

:class=对象        只要对象的键值为true  则标签就会有对应键名的类名    
:class=数组        只要数组中存在某一项 则标签就会有对应数组项的类名
```

## 事件

#### 事件对象event

```
@click=fn 不写括号默认穿event对象
@click=fn($event,参数) 写了括号如果不写对应参数就没有形参对应event对象
```

#### 绑定事件

```
v-on:事件="函数"	绑定事件
v-on:事件.once="函数"	绑定事件只触发一次	.是对事件进行修饰
@事件		也可以绑定事件
```

#### 事件修饰符

```
v-on:事件.once   为元素绑定一次性事件
v-on:事件.stop   阻止事件冒泡
v-on:事件.capture  为元素绑定一个事件捕获阶段触发的回调函数
v-on:事件.self  为元素绑定一个只在自身元素上触发的事件
v-on:事件.prevent  阻止元素的默认行为
```

#### 按键修饰符

```
@keyup.enter
@keyup.tab
@keyup.delete (捕获“删除”和“退格”键)
@keyup.esc
@keyup.space
@keyup.up
@keyup.down
@keyup.left
@keyup.right

也可以使用keyCode

也可以两个键同时按触发函数@keyup.left.right
```

## nextTick

```
this.$nextTick(回调函数)  等dom更新完成后执行回调
```

## 修改data对象或数组(可监听)

#### set

```
通过this.$set(改的目标,属性名或者数组索引,value)
```

#### delete

```
this.$delect(改的目标,属性名或者数组索引)
```

## computed计算属性

```
vue里的计算属性
原理执行get函数将返回值保存在computed对象的自定义属性里里面
computed{
	xxx:{
		get(){
			return a + b
		}
	}

vue写法
computed{
	xxx(){
		return a + b 
	}
}

方法写在methods中  当视图重新渲染时  方法会再次执行
属性写在computed中  当视图重新渲染时  get不会再次执行
```

## 搜索框搜索数据案例

```
computed:{    
fliter(){        
    let result = []        
    for (let key in this.cities){            
    	this.cities[key].forEach((item,index)=>{                
    		if (item.name.includes(this.search)||item.spell.includes(this.search)){                    				result.push(item)                
    		}            
    	})        
    }      
    return result    
}}

数据
"cities": {
			"A": [{
				"id": 56,
				"spell": "aba",
				"name": "阿坝"
			}, {
				"id": 57,
				"spell": "akesu",
				"name": "阿克苏"
			}, {
				"id": 58,
				"spell": "alashanmeng",
				"name": "阿拉善盟"
			}],
			"B": [{
				"id": 1,
				"spell": "beijing",
				"name": "北京"
			}, {
				"id": 66,
				"spell": "baicheng",
				"name": "白城"
			}]
			......
```

## filters过滤器

```
对管道符左侧的数据不操作  只改变在视图中的显示
	{{ 左侧的数据 | fiexd(右侧需要传的数据)}}
    filters:{
            fixed(左侧的数据,右侧需要传的数据){   
                return  处理
            }
        },
```

## watch监视器

```
用于观察属性的变化
data公用一个监视器
computed则一个函数使用一个监视器
观察默认为渐层观察无法观察到数组中对象的属性值的变化

深度观察需要写全
watch:{
    arr:{
        handler(){
            console.log('data  中的arr被修改了  我观察到了')
            },
        deep:true,
    }
}
```

## ref获取节点或子组件

```
this.$refs
1.获取所有含有ref标记的单个节点
2.如果使用v-for获取相同的ref标记  则会获取到多个节点
3.如果ref标记到组件上  则获取的是整个组件
	用于父组件调用子组件方法
```

## 组件(★)

#### 全局组件

```
Vue.component('组件名',{
    template:'<div>xxx</div>'
});

如果使用驼峰命名法使用的时候要用-链接
例:
组件名为onClick
<on-click></on-click>
```

#### 局部组件

```
组件写法要在根组件里使用components:{}绑定组件
在组件内使用template写页面数据

    let vm = new Vue({
        el:'#app',
        components:{
            Son:{
            	 template:'<div>我是组件</div>'
            }
        }
    })
```

#### component动态组件

```
通过使用component来实现动态组件
:is="绑定组件的名字"
<component :is="xxx"></component>
```

#### 选项模板

```
    let vm = new Vue({
        el:'#app',
        components:{
            Son:{
            	 template:'<div>我是组件</div>'
            }
        }
    })
```

#### 标签模板

```
HTML

    <div id="app">
        <son></son>
    </div>

    <template id="son">
        <div>我是组件</div>
    </template>

JS
	 let  Son = {
        template:'#Son'
    }

    let vm = new Vue({
        el:'#app',
        components:{
            Son
        }
    })
```

#### script模板

```
<script type="text/x-template" id="绑定的组件名">
    <div></div>
</script>
```

#### 父子组件的生命周期

```
根组件
beforeCreate
created
beforeMount

子组件
beforeCreate
created
beforeMount

子组件
mounted
根组件
mounted
```

#### 父子组件通信(★)

###### 父传子

```
父子件传给数据给子组件
在子组件里绑定标签用	
	:xxx="父组件里的数据"
	:xxx是子组件接受的数据的名字
使用props接受父组件传的值
	props这个选项可以是一个数组  数组表示对变量不做校验
    props这个选项可以是一个对象  对象表示对变量做校验

HTML
<div id="app">
    <Son :msg="msg"></Son>
</div>


<template id="Son">
    <div>
        我是组件</br>{{msg}}
    </div>
</template>

JS
let  Son = {
    props:['msg'],
    template:'#Son'
}

let vm = new Vue({
    el:'#app',
    data:{
    	msg:'子组件传来的值'
    },
    components:{
    	Son
    }
})

单向数据流
    子组件不能直接修改父组件中传递的数据
    解决方法：可以在子组件data选项中存储父组件传递的数据
    之后修改子组件中的数据 即可
例:
    data(){
        return {
            msg:this.msg
        }
    },
    
```

###### 父传子参数校验

```
props这个选项可以是一个对象  对象表示对变量做校验

props:{
    a:{ //校验变量a
        // type:String	是否是字符串
        // required:true	是否传值
        // default:'3',		默认值
        validator(value){	校验器的警告如果返回true就不回警告false则相反
    		console.log('校验开始')
    		return value>1
		}
	}
}
```

###### 子传父

```
通过事件触发来传值
在子组件上绑定一个函数来接收子组件传来的值
<div id="app">
    <Son @xxx="fn">
</div>

在子组件的模板中绑定一个事件
<template id="Son">
    <div>
        <button @click="handleClick">传值</button>
    </div>
</template>

通过触发子组件模板中的事件使用this.$emit发射一个事件
发射事件之后 父组件可以通过组件绑定的函数fn立马监控到

let Son = {
......
    methods: {
        handleClick() {
            this.$emit('子组件绑定的函数名',传的数据)
        }
    }
}
```

#### 同级组件间传值eventBus

```
 在组件里created状态订阅一个事件
 created(){
     eventBus.$on('xxx',(msg)=>{
		接受数据
     })
 }
 
 另一个组件在函数中发射一个事件
 methods:{
    fn(){
    	eventBus.$emit('xxx',传的数据)
    }
}
        
        
 例:
 let eventBus = new Vue();
 let heaven = {
        template:'#heaven',
        data(){
            return {
                msg:'我是heaven'
            }
        },
        created(){
           eventBus.$on('xxx',(msg)=>{   //heaven组件先订阅一个事件
                console.log('xxx事件已经触发了  我监控到了',msg)
            });
        },
        methods:{
            fn(){
                eventBus.$emit('yyy',this.msg)
            }
        }
    }
    let xiaoming = {
        template:'#xiaoming',
        data(){
            return {
                msg:'我是xiaoming'
            }
        },
        created(){
            eventBus.$on('yyy',(msg)=>{
                console.log('yyy事件已经触发了  我监控到了',msg)
            });
        },
        methods:{
            fn(){
                eventBus.$emit('xxx',this.msg)
            }
        }
    }
```

#### 插槽

```
使用组件时为了让组件更加灵活
可以使用slot插槽标签
<slot></slot>

在组件中写slot提供插槽,<slot></slot>插槽  默认是没有名字的  可以给slot加上name属性,有名字的叫具名插槽,没有的叫匿名插槽

在使用组件的标签写入slot="插槽的name"

一个槽可以被插入多个内容 ，多个内容可以全都放在template中，只要给template命名即可

例:
<div id="app">
    <Son>
        <template slot="qq">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </template>
        <div slot="hh">22222</div>
    </Son>
</div>

<template id="Son">
    <div>
        <slot name="hh"></slot>
        <slot name="qq"></slot>
    </div>
</template>
```

#### 作用域插槽

```
子组件传值给父组件然后在通过父组件插到子组件
在子组件模板中绑定一个xxx(任意值)="子组件的数据"

<template id="Son">
	<div>
        <slot :xxx="arr" name="xxx"></slot>
    </div>
</template>

在子组件中使用template标签 必须要用slot-scope属性
slot-scope="xxx(任意值)"
<div id="app">
    <Son>
    	<template slot-scope="xxx">
			{{xxx}}	//出来的就是子组件传的值
		</template>
    </Son>
</div>  
```

## 路由(★)

#### 基本使用

```
使用前需要引入vue的路由模块
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

1.建立路由和组件的映射表
    let routes = [  //路由和组件的映射表
        {path:'/xxx',name:'xxxlink',component:xxx},
    ];
    
2.实例化路由对象
    let router = new VueRouter({
        routes
    })
    
3.在app中使用<router-view></router-view>组件



```

#### 路由映射表

```
let routes = [  		//路由和组件的映射表
	{path:'/xxx',name:'xxxlink',component:xxx},
];

路由映射表里有层级关系优先匹配最上面的
404页面写在最下面监听所有
{path:'*',name:'xxxlink',component:xxx}
```

#### router-link

```
是vue路由提供的组件使用效果是和a标签一样的
    <router-link></router-link>
    
绑定跳转地址使用:to
    可以绑定path也可以绑定name
    <router-link :to="{path:'/home'}"></router-link>
    <router-link :to="{name:'homelink'}"></router-link>
    也可以直接写跳转地址
	<router-link :to="/"></router-link>
    
tag属性可以把router-link变成任意原生标签
	<router-link :to="{path:'/home'}" tag="button"></router-link>
```

#### 查询地址栏get数据

```
<router-link :to="{name:'homelink',query:{id:1}}" tag="button"></router-link>
在地址栏的表示就是  /home?id=1
通过this.$router.query获取
```

#### 动态路由

```
不能使用path要使用name
{path:'/xxx/:id',name:'xxxlink',component:xxx}
<router-link :to="{name:'homelink',params:{id:1}" tag="button"></router-link>
	params:{xx:1}
	xx必须和映射表里的:/:xx相同
```

#### 动态路由与props结合

```
在动态路由中加一个props:true
{path:'/xxx/:id',name:'xxxlink',component:xxx,props:true}
可以直接在页面props中获取:id的数据
```

#### 动态路由加载数据

```
通过监听$toute的变化来加载不同的数据
watch:{
    $route(){
    
    }
}
```

#### 编程式路由

```
通过函数调用的形式路由 使用$router
<button @click="goHome">首页</button>

this.$router.push()增加跳转的栈
methods:{
    goHome(){
        this.$router.push({
            path:'/home',
            query:{a:1}
        })
    },
	goUser(){
    	this.$router.push({
        	name:'userlink',
        	params:{
        		id:2
        	}
    	})
    }
}

this.$router.go(val)
在history记录中前进或者后退val步，当val为0时刷新当前页面。
```

#### 重定向

```
  routes: [
    { path: '/a', redirect: '/b' }
  ]
```

#### 嵌套路由

```
  let routes = [  //路由和组件的映射表
        {
            path:'/xxx',
            name:'xxxlink',
            component:xxx,
            children:[
				{path:'yyy',name:'yyytlick',component:yyy},
         },
    ];
    
    <template id="xxx">
        <div>
            <router-link to="/user/Contact">联系</router-link>
            <router-link to="/user/Intro">简介</router-link>
            <router-view></router-view>
        </div>
	</template>
```

#### 子路由

```
 let routes = [  //路由和组件的映射表
        {
            path:'/xxx',
            name:'xxxlink',
            component:xxx,
            children:[
				{path:'yyy',name:'yyytlick',component:yyy},
         },
    ];
    
     children里面的path:''如国加了 /就精确跳转 ,如果没加就是子路由
```

#### 导航守卫

```
全局前置守卫	在访问网站的时候使用验证登录
	router.beforeEach((to, from, next) => {
		to是下一个组件
		from是上一个组件
		next()是放行
		
		在全局前置组件中可以使用重定向来让用户去到登录界面
		router.replace({
			name:'组件名称'
		})
	})
全局后置守卫	你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
	router.afterEach((to, from) => {
	})
	
	
路由独享守卫	你可以在路由配置上直接定义 beforeEnter 守卫
routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
      	
      }
    }
]


组件内守卫
beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
},
beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
},
beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
}
```

## vuex(★)

#### 安装

```
安装
npm install vuex --save

```

#### 创建文件

```
然后 在src文件目录下新建一个名为store的文件夹，为方便引入并在store文件夹里新建一个index.js,里面的内容如下:
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store();
export default store;

设置全局
state:{
   state设置变量
},
getters:{
	设置函数不能改变state
}
mutations:{
   设置可以改变state的函数
   	fn(state,传参){}
}
```

#### 引入

```
接下来，在 main.js里面引入store，然后再全局注入一下，这样一来就可以在任何一个组件里面使用this.$store了：

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$store = store	做app兼容在引入store时多加这一句

new Vue({
  router,
  store,	//全局注入
  render: h => h(App)
}).$mount('#app')
```

#### 修改state里的值

```
通过this.$store.commit('setAlphabet',index)函数来改变state里的值
```

#### 监听state变化

```
组件监听vuex里的变化只能用computed计算后再用watch监听

 		computed:{
           xxx(){
                return this.$store.state.xxx
            }
        },
        watch:{
            xxx(value){
            	value是监听到的值
            }
        }
```

## axios(★)

#### 安装

```
安装
	npm install axios
get请求
	axios.get(地址)
post请求
	axios.post(地址)
	
```

#### 拦截器(用来处理数据)

```
拦截器(做数据处理)
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

#### 请求接口例子

```
接口例子(★)
    import axios from 'axios'

    axios.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response;
    })

    export let getHome = ()=>{
      return axios.get('../static/mock/index.json')
    }

```

#### 拿取返回的数据

```
使用
async getData(){
	let a = await getHome()
}
因为返回的是promise对象所以需要通过async await拿到数据
```

## vue-cli脚手架(★)

#### 安装

```
安装脚手架前的配置
npm config set registry https://registry.npm.taobao.org --global
npm i webpack webpack-cli -g
```

#### 3.x脚手架

```
3.x脚手架
npm install -g @vue/cli		安装脚手架
vue create 项目名		//创建项目
npm run serve	//运行项目
```

#### 2.x脚手架

```
2.x脚手架
npm i vue-cli -g	安装脚手架
vue init webpack 项目名	//创建项目
npm run dev		//运行项目
```

## better-scroll滚动组件

```
安装
npm install better-scroll -S
引入
import BScroll from 'better-scroll'
使用
 mounted() {
            this.scroll = new BScroll(要固定的节点)
        }

当 content 的高度不超过父容器的高度，是不能滚动的，而它一旦超过了父容器的高度，我们就可以滚动内容区了，这就是 BetterScroll 的滚动原理。
子级只能是一个被其他子节点撑开的节点

better-scroll提供的锚点跳转函数
this.scroll.scrollToElement(跳到的节点)
```

## swiper轮播图组件

```
组件使用如果出错就使用这两个配置
将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
	observeParents:true,
启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
	observer:true
```

## vant框架

## 后台开发

```
https://juejin.im/post/5d69f6676fb9a06b0b1c8cd2?tdsourcetag=s_pcqq_aiomsg
```

