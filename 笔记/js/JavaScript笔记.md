## 基础数据类型

	简单数据类型
	number NaN是一个特殊的number类型
	string
	null 一般用于后面存储对象
	undefined
	Symbol
	boolean
	复杂数据类型
	object
		function和array属于object类型
		object.属性名 = 属性值 可以附加属性
		object["string" 或 变量名] 也可以附加属性
		object.Symbol("x")会被当作函数执行不能附加属性 object[Symbol("x")]才能附加属性
		
	typeof查看数据类型
		typeof x 或 typeof(x) 使用
## 变量

	let x 声明变量 
		未赋值为undefined
## 常量

```
const 定义完了就不允许被重新赋值,但可以改变存储
	例
	const g=[]
	g[0]=10
```

## function

	function x {} 或 let x function (){} 声明函数
	x();自执行

## 获取元素

	document.getElementById("xxx") 通过id获取 只有document能使用
	        .getElementsByTagName("xxx") 通过标签获取多个  动态方法改变了会重新获取
	        .getElementsByClassName("xxx") 通过class获取多个 不支持IE8及以下 动态方法改变了class会重新获取还是同一个对象
	        .getElementsByName("xxx") 通过name获取多个  动态方法改变了name会重新获取还是同一个对象
	        .querySelector("xxx") 通过选择器获取一个 静态方法
	        .querySelectorAll("xxx") 通过选择器获取多个 静态方法

## 操作各种样式

```
1	JS操作CSS
	1.内部样式表 基本不用
	2.行内样式 一般控制行内样式
2	操作元素的标签属性
	1.合法的标签属性直接.操作
		写
		例	元素.id = "xxx"
		读
		例	元素.title
	2.操作不合法标签的属性
		不仅可以操作自定义标签属性还可以操作合法属性 但一般不用来操作合法属性
		1)getAtteribute() 获取属性
		2)setAtteribute() 设置属性
		3)removeAtteribute() 删除属性
	tip:
	不能用	元素.class = "xxx" class与保留词冲突 需要使用元素.className = "xxx"
	
	let x = document.getElementById("xxx")
	改变了Id不改变变量x的内存地址 x存储的依然是获取的对象
	
3	style
	这个属性非常特殊
	一个节点对象的style属性是 存储这个节点所有行内样式的属性的对象
	属性中有-的去掉-使用驼峰命名代替
	多条css样式附加使用cssText 不覆盖使用+= cssText也可以查看行内样式和获取
4	获取标签内容	
	.innerHTML获取内容可以解析html标签
	.innerText获取内容中的文本
	.value获取input的值
```

## 字符串拼接

```
普通字符串
	字符串中拼接变量 "xxx"+ 变量 +"yyy"
	换行需要用 + 拼接
模板字符串
	字符串中拼接变量`xxx ${变量} yyy`
	换行直接换行不需要 + 拼接
\转义字符
```

## 运算符

```
算术运算符
	+ - * / %
	先乘除后加减 同级从左往右运行
	隐式类型转换
	string + 任何 都会隐式类型转换成string类型再进行拼接
	boolean 和 number + boolean值会转换成 1 0
	- * / % 都会变成数字再运算 出现不合理的运算后,会出现NaN(not a 			number)NaN是number类型
	自增
	a++ 和 ++a 等于 a=a+1 a++是先赋值再自增 ++a是先自增再赋值
	++ 和 --  都会变成数字再运算 出现不合理的运算后,会出现NaN(not a number)NaN是number类型
赋值运算符
	===全等 数据类型和值都一致
	==等于 转换成同等类型在比较
比较运算符
	>  <  >=  <=
逻辑运算符
	&&与  ||或  !非
	&&	只考虑布尔值时:真真为真,其他都是假	真正运用的时候:遇到假,就停下,然后这个值取假,否则取后面的值
	||	只考虑布尔值时:假假为假,其他都是真	真正运用的时候:遇到真,就停下,然后这个值取真,否则取后面的值
	!	只考虑布尔值时:取反
0  undefined  null  false  ""  NaN  转成布尔值时是false
```

## 运算优先级

```
. [] ()
++ -- ! typeof
* / %
+ -
> < >= <=
&&
||
三目
=
,
```

## 判断

```
单条件判断
	if (条件) {
    	条件为真的执行语句
	}else {
    	条件为假的执行语句
	}

多分支条件判断
	if (条件1) {
        
	}else if (条件2) {
        
	}......省略多个else if (条件n) {
        
	}else {
        
	}
三目
	条件 ? 条件为真的执行语句 : 条件为假的执行语句
switch判断
    switch(通常是一个变量){
        case 条件 :
            代码1
            break;
        case 条件2 :
            代码2
            break;
        case 条件3 :
            代码3
            break;
        case 条件4 :
            代码4
            break;
        ......
        case 条件n :
            代码n
            break;
    }
用逻辑运算符代替if
	let a = true;
	function b (){}
	if(a){
        b();
	}
	可以用	a && b(); 代替
用逻辑运算符代替三目
	let a = 7;
	let b = 8;
	console.log(a<b ? 2 : 3)
	取得值是真值才能代替
	console.log(a<b && 2 || 3)
```

## 循环

```
  for循环
  	for(let i = 0 或 var i = 0; 条件 ; i++){ 		 条件成立执行条件不成立终止
        代码块
    }
    
while循环
    var i = 0 或 let i = 0;
    while( 条件 ){ 					条件成立执行条件不成立终止
        i++
    }
    
do while循环
	let 或 var ;
	do{
        						先执行再判断
	}
	while(条件)		
    
continue 结束本次循环,而不终止整个循环的执行
break 结束整个循环的执行
x:for(){} 给for循环一个标志 一般用来给break用 break x  用来跳出循环
```

## 函数

```
定义函数的方式
  1.  let x = function(){

      }
  2.  function x(){
      
  	 }
  	 x 调用函数
函数表达式	
  可以直接在后面加括号执行
  1	let x = function(){
        后面加括号直接执行
  	}();
  2	(function(){
        只能自执行一次        比较常用
  	})();
  3 function a(){
        只能通过名字加括号执行
    }
    a();
  4 +function(){
        
  	}();
  	-function(){
        
  	}();
  	~function(){
        
  	}();
  	!function(){
        
  	}();
参数
	形参	定义函数的时候()里面是允许写变量名字的,这些变量的名字就是形参,形参只针对函数内容起作用	形参大于实参形参就是undefined
	实参	函数调用的时候,()里面写的就是实参 实参和形参壹壹对应	实参大于形参没有对应的
	不定参  不管什么时候arguments都是所以实参的集合	for循环可以遍历arguments
```

## this

```
函数名加()自执行this指向window
对象的属性自执行this指向点之前的对象
事件函数this谁触发事件指向谁
正常情况下this不可能指向函数本身
```

## return

```
函数运行完会有一个返回值 函数默认返回undefined
function a(){
    return
}
a() 是返回值 return可以返回任何数据
let b = a();	接受返回值
一旦函数执行了return,那么函数内部后面的代码就不再执行了
return可有可无,根据需求
return函数 函数是一个函数表达式可以自执行
```

## 作用域

```
script标签是全局作用域

es5 var 定义的变量 起作用的范围是包含这个变量最近的function
	var/function在全局作用域里面定义了变量的话,相当于给window添加属性
	任意作用域里面,如果不加var直接产生了没有定义过的变量,那么这个变量也相当于全局变量但不允许这样写
	
es6 let定义的变量 起作用的范围是包含这个变量最近的{ }

for循环()会产生一个作用域是{}的父作用域

作用域链 
	操作变量时它自己没有的变量它往上父作用域找直到找到script还没有报错 自己有优先用自己的
```

## 解析顺序

```
在每一个作用域里解析顺序都是
es5
1.定义
	先解析var再解析function
	如果var同名保留最后一个
	如果function同名保留最后一个
	如果var和function同名保留function
2.执行

es6
	基本与es5差不多
	
	let只能先定义才能使用不然会报错
	
	let a = 20;
	function b(){
        alert(a);
        let a = 30;
	}会报错	暂时性死区----只要在作用域里面let过变量,那就不允许提前使用
```

## 闭包

```
闭包:内部使用了外部函数的参数或者变量的函数,不一定是父级

同一个函数多次执行产生不同的作用域

不希望某一个局部变量被回收使用闭包

例:
function a(x){
    aP[x].onclick = function(){
        alert(x);
    };
}
for(var i=0;i<5;i++){
    a(i);
}

一般闭包和函数自执行一起使用
自执行不是闭包
```

## call apply bind

```
this指向是不确定的
	普通模式下函数自执行this指向window,严格模式报错
	事件this指向触发事件的元素
	
函数.call();是可以借助call执行 自执行
	函数.call([this指向],实参,实参,...)需要传参错开一位对应
函数.apply();也可以执行 自执行
	函数.apply(this指向,[实参,实参,......])需要传参在数组里面对应
函数.bind();
	函数.bind(this指向),复制了一份相同函数产生了一个新函数只是this指向被改变了
	函数.bind(this指向)会产生一个新函数
	函数.bind(this指向)(实参,实参.......)需要传参在后面直接传
bind(null或者undefined)()就是不改变
```

## checked disability

```
在js里面是以布尔值形式体现的
ele.checked=布尔值;
```

## es6解构赋值

```
    let	a = 10,
        b = 20,
        c =30;
    可以写成 let [a,b,c]=[10,20,30]
对象赋值
	let [a:x,b:y]=[a=10,b=20]
	x,y才是变量名 a b只是对应关系,赋值的话等号右边的a b必须对应左边的
	let [x:x,y:y]=[x:x=10,y:y=20]
	可以简写成
	let [x,y]=[x=10,y=20]
有Iterator接口才能解构,str类型拥有该接口,Nodelist类型有该接口
```

## 默认值

```
es5只能用if(x===undefined){
    x=10;
}
不可以用逻辑运算符

es6	function fn(data){
    let {a,b,c=10}=data;
}
fn({a:10,b:20})
c的默认值是10
```

## ...

```
...数组相当于把数组拆解了
	let a = [1,2,3];
	...a输出1,2,3
let [a,...b] = [1,2,3,4]
	可以让b成为数组将后面的2,3,4放入b 
...只能放最后
形参也能用
节点集合也能用
可以替代不定参
有接口的就可以拆解
```

## 数学对象

```
Math.PI() 圆周率
	.asb() 绝对值
	.pow() 计算任意数的任意次方	两个参数第一个是底数,第二个是指数
	.floor() 向下取整
	.ceil() 向上取整
	.round() 四舍五入
	.trunc() 小数点部分删掉 
	.random() 返回一个大于0小于1的一个随机数
	.parseInt() 第一个是要转数字整型类型的数据,第二个是进制最小是2进制 最大是36进制
	.parseFloat() 第一个是要转数字浮点型类型的数据
		.parseInt()  .parseFloat()会调用对象的toString方法先变成字符串再转数字类型
```

## 操作对象

```
遍历对象的属性
    for(let key in a){   a是对象

    }
删除
	delete a.xx 		删除a对象的xx属性
in 检测对象中是否存在xxx属性
	"xxx" in obj
```

## 箭头函数

```
let fn = (形参) => 返回值
let fn = (形参) => {
    语句
    [return]
}
没有不定参,this就是定义的this
```

## 定时器

```
setTimeout(); 多少时间之后执行一次	第一个参数是函数/字符串 字符串会被解析成js代码作用域是全局,第二个参数是数子(毫秒),需要传参后面在第二个参数后面写一一对应	返回值是定时器编号用来清除
setInterval(); 多少时间之后循环执行	同上
clearTimeout(); 清除timeout定时器
clearINterval(); 清除interval定时器
requestAnimationFrame() ; 和setTimeout()一样但第二个参数是没有用的
```

## 日期对象/时间戳

```
let x = new Date()	本地此时此刻的日期对象
	console.dir(x)显示本地时间
	x.getFullYear() 年
	x.getMonth() 月 从0开始数
	x.getDate() 日
	x.getHours() 时
	x.getMinutes() 分
	x.getSeconds() 秒
	x.getDay() 星期 周日是0
	
	x.getTime() 获取时间戳是从1970年1月1到现在的毫秒数	日期对象是可以加减的加减就是调用getTime变成时间戳
	new Date() 可以设置时间戳传入数据即可
```

## 回调函数

```
回调函数：一个函数成为另一个函数的处理结果，里面的函数就叫作外边函数的回调函数；
先运行完原函数,再运行回调函数
```

## DOM

```
重点
offsetParent  返回定位父级
.appendChild 在后面添加子节点
.cloneNode(true 深拷贝false 浅拷贝)  拷贝
document.createElement(创建节点)


document.createAttribute(创建自定义标签属性)

ele.childNodes
    text :文本节点 （空格）
    comment :注释节点
    ele:元素节点
   
ele.children : 返回子元素（标签）节点   
    如果需要对节点进行操作，需要加下标，因为返回的是类数组

ele.nodeType:返回节类型（具体百度下nodeType类型表）

ele.nodeName：返回节点名称（返回时为大写类型）

firstChild           获取(nodeName)节点

firstElementChild    获取(tagName)节点

parentNode    返回父级节点

.insertBefore 添加子节点前面

.removeChild  删除子节点

.replaceChild  代替子节点
```

## 视图模式

```
距离定位父级的距离
	offsetLeft		
	offsetTop
获取页面高度（ 包括滚动条 ）
clientWidth/clientHeight
    获取相关的宽度与高度（除去滚动条）
    如果是获取到对象
        clientWidth:padding + 内容Width
        clientHeight:padding + 内容Height 
        此属性不包括border;
offsetWidth / offsetHeight
        offsetWidth:padding + 内容Width + border 
        offsetHeight:padding + 内容Height + border
scrollHeight/scrollWidth  滚动大小，指的是包含滚动内容的元素大小（元素内容的总高度）   
scrollTop / scrollLeft  滚动高度

clientX/clientY   文档可视区域的top,left值；
pageX /pageY   到文顶部包含（ scrollTop,ScrollLeft ）的值；ie的是scrollTop+clientY,ScrollLeft+clientX
```

## 事件对象

```

event兼容
 document.onclick = function( event ){
	event = event || window.event;
}


事件冒泡
	事件从子元素往父元素向上触发事件。
	
	
阻止冒泡事件
       event.stopPropagation()
       event.stopImmediatePropagation() 
       window.event.cancelBubble = true;
            event.stopPropagation() 不支持ie8及以下
            ie8用 window.event.cancelBubble = true
        
  
事件监听 
	DOM零级能兼容低版本    
		缺点一个对象只能绑定一个事件
	DOM二级    
		能够处理多个事件的问题   
    	ele.addEventListener( type , callback , boolean) 事件监听   
        	boolean        
        		false (默认值) : 事件冒泡 从子元素到父级元素
        		true : 事件捕获 从父级元素到子元素   事件捕获优先执行
        		
        		
取消事件监听    
    ele.removeEventListener( type , callback )
    
    
事件委托对象
   event.target
   
  
阻止事件执行
		event.preventDefault()
         return false
	ie8	event.returnValue = false
	
	DOM零级 
        document.onclick = function(){
            return false;就可以阻止
        } 
        也可以直接放在html标签里面
            onXXXXX = "return false
		
	DOM二级
		event.preventDefault()
	
事件委托
	父节点委托给子节点执行
	如果父节点包含字节的当事件绑定在父节点 , 比如mousemove 当鼠标移动到子节点,父节点会委托给字节点执行事件
	document的事件在整个窗口都能执行 因为document会委托给子节点执行事件
```

## 常用BOM	window.onresize

```
改变浏览器窗口大小触发事件
```

## 滚动事件

```
要有滚动条才能触发
onscroll
```

## 滚轮事件

```
只要滚动鼠标中间的滚轮就可以触发
主流浏览器或 IE
	onmousewheel
		event.wheelDelta   滚动方向与尺度
        尺度 120
        往下滚    -120
        往上滚    120
        火狐浏览器：
 	只有DOM二级  DOMMouseScroll
 		event.detail  滚动方向与尺度
		往下滚：   3
		往上滚：   -3
```

## BOM

```
浏览器对象
	www.baidu.com
```

## 表单事件

```
失去焦点事件
    input.onblur = function(){
        console.log( '失去焦点' )
        console.log( this.value )
    }
获取焦点事件
    input.onfocus = function(){
    	console.log( '获取焦点' )
    }
触发焦点事件
失去焦点之后触发事件
    input.onchange = function(){
     	console.log( this.value )
    }
输入内容的时候触发事件
    input.oninput = function(){
    	console.log( this.value )
    } 
```

## 键盘事件

```
onkeydown    按下
    任何键
    
onkeypress   按下
    字母键、数字键 ，不响应功能键F1-12;
    
onkeyup  抬起

event.key 是按下了什么键
event.keyCode 是按下了什么键对应的编码
```

## 正则表达式

```
基本用法：
    第一种：
       //正则的匹配
        /pattern(匹配的内容)/modifier( 修饰符 )
    第二种
        new RegExp( 匹配的内容 ,修饰符 )

.test : 检测
	返回布尔值；
.exec();  
	匹配字符串返回首次匹配的结果  
.match();
	方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
例:	
    var str = 'hello';
    var reg = /e/;
    console.log(  reg.test( str )  )
    console.log( reg.exec( str ) )
    
匹配任意字符
	/./
	
元字符：
    /\w/  匹配单词、数字 、_
    /\W/ 匹配非单词、非数字 、非_
    \d 匹配数字
    \D 匹配非数字
    \s  匹配空格
    \S  匹配非空格
    \b 单词边界
    \B 非单词边界
    
量词
    { num }  有几个n
    { num ,  }  匹配至少有多少个
    { num1 , num2 }  匹配num1与num2的范围满足条件匹配即可
    
^n  匹配以n开头的内容    
n$  匹配以n结尾的内容
.	匹配0或多个
*	匹配0或1个,开启贪婪匹配
?	匹配0个或1个
.*? 满足条件的情况只匹配一次，即最小匹配

贪婪模式与惰性模式：
    贪婪模式    
        n*     
        n+
    惰性模式：
        n*?
        n??
        n{num}?
        n{num,}??
        n{num1,num2}??
        
 修饰符：
    g  全局匹配
    i  不区分大小写
    
特殊字符:
    \n 换行
    \t tab
    
特殊转义
	\ 转义
	\\取消转义
	
分组
 	[]   区间
	()   分组
	{}   量词
	
捕获组
	n\1\1\1
	
非捕获组
    ?=
    ?:
    
正则断言：
    ?=
    (?=)  正向肯定断言
    (?!)  正向否定断言
    (?<=) 反向肯定断言
    (?<!) 反向否定断言
```

## cookie

```
cookie:储存在浏览器的当中的缓存信息
	 name:缓存的名称
     expires: 缓存的时间  只能=日期对象
     	toGMTString() 方法可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果。 	
```

## ajax

```
 ajax:
“Asynchronous Javascript And XML”(异步 JavaScript 和 XML），
是指一种创建交互式网页应用的网页开发技术。
	局部刷新：到后台请求对相应的数据；
		在本地服务器上面去加载相对应的内容；
	用处：
		评论加载
		注册表单
		。。。。

补充知识点
    json
        是一个格式非常标准长得很像对象的字符串
        通常用来前后端数据交互
        JSON.stringify() 	反序列化	将对象转成一个json
        JSON.parse()	序列号		将json转成对象
        反序化,序列化后的数据不同内存地址
    in json检测json中是否存在xxx属性
        "xxx" in obj


    GET:
        把数据放在url地址里面进行传输；
        数据量很小，缓存，可视（看得见）
        提交后例子:http://127.0.0.1 /1.php?user=123789&psd=789
    POST:
        数据不可视，不会缓存，数据量大  （  《= 2G  ）
        提交后例子:http://127.0.0.1 /1.php
        post提交是在请求头里提交	
```

## ajax使用


            请求属性：
                        0  初始化
                        1  链接         -> 连接到服务器
                        2  发送请求      ->send方法完成
                        3  请求处理      ->接收到响应头
                                -> enctype="application/x-www-form-urlencoded"
                                send( null )
                        4 接收完成  
                        
                var info = username.value;
          		1.实例化 XMLHttpRequest 对象；
           		var xhr = new XMLHttpRequest();             
                2.
                判断请求方式:
                    get                               
                    post
                请求的地址
                    get请求，传入对应的数据；
                    post请求，b
                同步与异步：
                    true     异步加载（默认）
                    false    同步加载
            
            GET
            xhr.open( 'get',"register.php?username=" + info ,true );    1 链接  
            3. 发送数据，使用get请求，基本上都使用null；
            xhr.send( null );     1 链接  
    		
    	   POST
    	   xhr.open( 'post',"register.php" ,true ); 1 链接 
    		var param = "username=" + info + "&psd=" +  new Date().getTime();
             xhr.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded")
             xhr.send( param ) 1 链接
    		
            4.设置回调函数，用于接收数据；
            xhr.onreadystatechange = function(){     2 发送请求 3 请求处理 4 接收完成
                var result = xhr.responseText;
                console.log( result )
            }
            
    在url后面加时间戳清除缓存
## 跨域请求

```
跨域问题是由于浏览器为了防止CSRF攻击，避免恶意攻击而带来的风险而采取的同源策略限制

同源策略：
    协议要相同，http/https 
    域名要相同，
    端口要相同， 
cors解决跨域问题：
    在后台写上	res.setHeader( 'Access-Control-Allow-Origin' , "*" )
jsonp解决跨域问题：
   jsonp就是利用了src：本身已经是解决了跨域的问题这个漏洞
   这就如同我们请求一个普通的JS脚本，可以自由的向不同的站点请求：
   <script src="http://www.b.com/request?para1=1"></script>
   
   写法: var scriptEle = document.createElement('script');
            scriptEle.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=666&cb=candy'
            headEle.appendChild(scriptEle)
```

## 面向对象

```
对象的创建方式：
	字面量/直接量
		var obj = {}   
	构造对象：
		系统定义：
            new Object()
            new Array()
            new String()
            new Boolean()
		自定义：
            new Xiaobai()
            new Ruirui()

构造函数原理
	与下方类似
        function person( name , sex, age , tall , weight ){
                var this_ = {};
                this_.name = name,
                this_.sex = sex,
                this_.age = age,
                this_.tall = tall,
                this_.weight = weight 
                return this_;
            }
        
构造函数的命名
	 大驼峰命名法：
		AaaaBbbbCccc

对象实例化
	var x = new 构造函数()
	构造函数里的this指向x
	
多态
	同一个对象里面有很多个方法，面对不同对象有不同的表情的形式叫作多态
	
包装类，包装对象
	把原先的XX类型转变成为object类型
	例
						  把xx类型的数据丢给一个变量
        var num1 = 123;		执行了包装类 num1 = new Number(123)
        num1.add = 456;			  	    num1.add = 465;
 							          num1.add = undefined;

```

## 原型

```
原型：原型是function对象的属性，定义了构造函数的构造出来的公共的祖先；
 	obj.prototype={
        XX:yy
 	}
 	obj.prototype.xx = yy

改变原型	
例:
     Person.prototype.name = "chang"
     function Person(){
     
     }
    var obj = {};
    var person1 = new Person();
    person1.__proto__ = obj1;  //改变__proto__的内容；
```

## 原型共享

```
 A<-B<-C.prototype
	 <-C.prototype
A能通过B拿到C的原型里面的东西	 
而C不能拿到A的东西
 
         function inheritAttrs( targets , Origins ){
            function F(){}
            F.prototype = Origins.prototype;
            targets.prototype = new F();    
            //wang.__proto__  = new F() = Kai.prototype
            //构造器改为自己
            targets.prototype.constructor = targets;
        }
        Kai.prototype.name = "candy";
        function Kai(){}
        function Wang(){}
        inheritAttrs( Wang , Kai )
        // Wang.prototype = Kai.prototype;
        var wang = new Wang();
        var kai = new Kai();
        Wang.prototype.age = "30";
```

## instanceof

```
A instanceof  B   判断A是否是B类的实例；
```

## 判断是[ ]还是{}

```
判断是[]还是{}
    1.判断length;
    2.instanceof	判断实例
    3.obj.constructor	判断构造器
    4.Object.prototype.toString()

        Object.prototype.toString.call([])
        "[object Array]"
        Object.prototype.toString.call({})
        "[object Object]"
        Object.prototype.toString.call(false)
        "[object Boolean]"
        Object.prototype.toString.call(123)
        "[object Number]"
```

## 对象枚举

```
枚举与不可枚举：
                枚举：深紫色的，可遍历到的
                不可枚举：浅紫色的，不可遍历到	
           
           
obj.hasOwnProperty("属性") 判断是可以枚举
```

## 对象克隆

```
例:
var huihui = {
    name:"灰灰",
    age:18,
    sex:undefined,
    hobby:["吃","喝","玩","乐"],
    boyfriend:{
        boy1:{
            name:"壮壮"
        },
        boy2:{
            name:"王总"
        }
    }
}

var ruirui = {};

for( var key in huihui ){
    console.log( huihui[key] )
    if( huihui.hasOwnProperty( key ) ){
        ruirui[key] = huihui[key]
    }
}
```

## 处理错误

#### throw

```
抛出错误
```

#### try/catch/finally

```
try/catch/finally 语句用于处理代码中可能出现的错误信息。

try语句允许我们定义在执行时进行错误测试的代码块。

catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。

finally 语句在 try 和 catch 之后无论有无异常都会执行。
	
注意： catch 和 finally 语句都是可选的，但你在使用 try 语句时必须至少使用一个。

提示： 当错误发生时， JavaScript 会停止执行，并生成一个错误信息。使用 throw 语句 来创建自定义消息(抛出异常)。如果你将 throw 和 try 、 catch一起使用，就可以控制程序输出的错误信息。

    try{

    }
    catch(err){

    }
```
