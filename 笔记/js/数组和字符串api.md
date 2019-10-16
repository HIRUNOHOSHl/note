ele.classList 新api

```
每个节点对象里都有的属性
classList.add("xxx");	添加className
classList.remove("xxx");	删除className,className没有xxx不会产生影响
classList.toggle("xxx");	有就删除没有就添加className
```

字符串相关api

```
string()	返回对象的值转换为字符串。
	例:
	let a = new String("8898") 
	输出a对象 8898 	
	
.concat() 字符拼接

.charCodeAt()	返回字符的ASCII码 或返回指定下标所对应的ASCII编码；
	例:
	let a = "阿飞"
	a.charCodeAt(1) 输出 39143
	
.charAt()	可返回指定位置的字符。
	例:
	let str = "HELLO WORLD";
	let n = str.charAt(2) 输出L 	
	
.indexOf() 查找对应的字符串,然后返回的是下标
	let str = "HELLOWORLD";
	let n = str.indexOf('L') 输出2

String.fromCharCode() 返回ASCII码获取的字符 只能通过String触发
	例:
	String.fromCharCode(39143) 输出 飞
	
.substr(起始数字,截取长度) 返回截取的字符串
	不包含起始数字

.substring(起始数字,结束数字) 返回截取的字符串
	包含起始数字,不包含结束数字
	只输入一个是数字从起始数字到最后
    起始数字负数认为是0
    substring是以两个参数中较小一个作为起始位置，较大的参数作为结束位置。
    没有前后限制
    
 .slice 返回截取的字符串
 	同上
 	但是可以倒数,并且要满足先后顺序
 	
 .toLocalUpperCase 返回字符变成大写
 	例:
 	let a = "abc"
 	a.toLocalUpperCase 输出 "ABC"
 	
 .toLocaleLowerCase 返回字符变成小写
 
 .indexOf() 返回找到字符或者字段的位置
 	let a ="阿飞阿飞"
 	a.indexOf("飞") 输出1
 	如果输入("飞")只能找到第一次出现的
 	输入("飞",x)可以找到第二个 数字x是从哪个位置开始找
 	如果找不到返回-1
 	
 .split("分割字符") 返回切割的字符串组成的数组
 	let a = "阿飞,朱雀,心爱";
 	let b = a.split(",")
 	输出Array(3)
 		0:"阿飞"
 		1:"朱雀"
 		2:"心爱"
 		length:3
 		
 	es6新api	
        .includes() 返回布尔值,表示是否找到了参数字符串	
        .startsWidth() 返回布尔值,表示参数字符串是否再原字符串的头部
        .endsWidth() 返回布尔值,表示参数字符串是否在原字符串的尾部
            都支持第二个参数,表示检查的起始,结束位置

        .repeat() 返回一个新字符串,表示将原字符串重复n次
		.replace(正则,替换的值) 替换正则匹配的值
        .padStart() 返回新字符串,前置补全
        .padEnd() 返回新的字符串,后置补全
            重复第二个参数来补全,太长的截取,没有第二个参数以空格补全
```

数组相关api

```
.push("xx") 往数组最后添加数据 返回改变后的数组的长度

.pop() 往数组最后删除数据 不需要实参 返回被删的数据

.unshift() 往前面加

.shift() 往前面删

.splice(x,y,z) x是从哪开始,y是切除几个,z是从x位置添加数据

.indexOf()也能用

.split()也能用

.sort() 默认将数组按升序排列
	a.sort(function(a,b){    可以传一个函数
        return a-b; 		当return为交互换位置,当为负值不交互位置  实参是自动取数组的每一个两两比较
	})
	return a-b正序 b-a倒序
.reverse() 将数组反序

.concat() 数组拼接 返回新数组

Array.isArray() 判断是否是数组

.join() 拼接实参是用什么拼接 不改变原数组 返回新的字符串

.forEach() 遍历数组
	a.forEach(function(value,key,Array){	可以传一个函数	第一个形参代表每一位数据
										   第二个形参代表每一位的下标
										   第三位形参代表原数组    				})
	返回值没有意义

.map() 和forEach功能一样 
	a.forEach(function(value,key,Array){	可以传一个函数	第一个形参代表每一位数据
										   第二个形参代表每一位的下标
										   第三位形参代表原数组    				})
	通过返回值形成新数组return什么就返回什么 默认返回undefined

.filter() 过滤
	a.filter(function(value,key,Array){	可以传一个函数	第一个形参代表每一位数据
										   第二个形参代表每一位的下标
										   第三位形参代表原数组    				})
	return为假过滤为真留下 返回新数组
	
.find	筛选出第一个
    .find(function(value,key,Array){

    })return 从第一个开始去筛选出满足条件的,返回第一个值
```

获取存储着ele展示样式的对象

```
getComputedStyle(ele)	ie8用不了
	存储着这个节点所有样式的对象
ele.currentStyle	只有ie能用
	存储着这个节点所有样式的对象
```

