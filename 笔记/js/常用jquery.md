获取元素

```
$("里面可以通过任何方式获取")
```

操作样式

```
$("xx").css('font-size','30px')
$("xx").css({
'font-size':'30px',
'background-color':'pink'		
})
```

eq方法

```
eq方法   下标方法
例:
	box.eq( 1 ).css('background-color','#f0f')
	改变下标为1的盒子
	
last()	最后一个
filters()	过滤,只选择到符合的
next()	下一个
prev()	上一个
```

hasClass

```
判断有没有类名
.hasClass('xxx')
```

定位父级

```
定位父级
    offsetParent()
```

before,after

```
before()	在元素之前增加内容
after()		在元素之后增加内容
```

添加子元素

```
.append()
```

克隆对象

```
clone()  克隆对象
	true   克隆事件    false  不克隆事件
```

删除节点

```
.remove()
```

清空内容

```
.empty()
```

get

```
和eq类似
```

parents/parent

```
parents()可以拿到祖宗十八代
	还可以parents('.box2')选择父级中的一个
parent()只能拿到父级
```

removeClass

```
.removeClass()删除class
```

hover

```
.hover(fn1,fn2)
fn1是移入
fn2是移出
```

html

```
inneHTML的jq写法
```

on off

```
on()  jq的事件监听 
	on("事件",{可以给event增加属性},function(){})
off()  解绑事件
```

trigger

```
trigger() 方法触发被选元素上指定的事件以及事件的默认行为(比如表单提交)
```

animate

```
jq的运动框架
```

hide,show

```
改变display具有动画效果
```

toggle

```
1.9版本被移除
toggle() 方法切换元素的可见状态。
如果被选元素可见，则隐藏这些元素，如果被选元素隐藏，则显示这些元素。
```

