## 安装

```
npm install -g typescript
```

## 变量的数据类型

### Boolean

### number

### string

### array

### object

### 元组tuple

```JS
表示一个已知元素数量和类型的数组

例
	let arr2:[number,string]=[2,'111']
```

### 枚举enum

```js
ts实现的原理

	//js代码
    var a;
    (function (a) {
        a[a["s"] = 1] = "s";
        a[a["f"] = 2] = "f";
        a[a["bu"] = 3] = "bu";
    })(a || (a = {}));

tips
	a['s']=1	的返回值就等于右边的值没有就是undefined
```

### any任意类型

### null

### undefined

### never

```js
ever类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

下面是一些返回never类型的函数：

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

## 函数

### 返回值类型

```
基本与变量的相同
多了一个void
	表示没有返回值
```

### 函数传参

```
在ts中形参和实参是必须对应的而且要定义类型
```

### 函数的可选参数

```js
可选参数就可以选择传入,不会报错
tips
	可选参数必须放在最后
例:
    function z(a:string,b?:string):string{
        return a+b
    }
	z('test')
```

### 函数的默认值

```js
可以给形参设置默认值
例:
    function z(a:string,b:string='xxx'):string{
        return a+b
    }
	z('test')
```

### 函数的剩余参数

```js
剩余参数通过遍历arguments传入result中保存

function sum(a:string,...result:number[]):any{
    
}
```

### 函数的伪方法重载

```js
 编译器会根据这个列表去处理函数的调用
function l(a:number):number
function l(a:number):string
function l(a:any):any{
    if(typeof a =='string'){
        return '字符串'
    }else{
        return '数字'
    }
}
```

## class类

```js
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

### 继承extends

```js
tips
	继承必须写super()

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
```

### 修饰符

#### 默认public

```
外部/内部/子类	都可以访问
```

#### private

```
内部/子类	不能外部访问
```

#### protected

```
子类		不能外部和内部访问
```

#### readonly

```
只读属性
	只读属性必须在声明时或构造函数里被初始化
```

### 存取器

```js
TypeScript支持通过getters/setters来截取对对象成员的访问

class Prson{
    private name:string
    constructor(name:string){
        this.name = name
    }
    set _name(name:string){
    	//在set中加判断就可以截取对对象成员的访问
        this.name = name
    }
    get _name():string{
        return this.name
    }
}
```

### 静态属性

```
那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上

我们使用 static定义

这样就可以直接 xxx. 来访问了
```

### 多态

```
子类重写父类函数
```

### 抽象类

```
抽象类不能实例化只能继承

abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

在抽象类中带abstract的函数必须在派生类中实现
```

### 高级技巧

```
当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");

这里，我们写了 let greeter: Greeter，意思是 Greeter类的实例的类型是 Greeter
```

## 接口

```
可以严格约束传入的数据

interface test{
	a:string;
	b:string;
}

function xxx(info:test){
	
}

let info:Object={
	a:'11',
	b:'111'
}

xxx(info)
```

### 接口的可选属性

```
interface test{
	a?:string;
	b:string;
}

function xxx(info:test){
	
}

let info:Object={
	b:'111'
}

xxx(info)
```

### 函数类型

```
interface aaaaa{
    (value1:string,value2:string):string
}

//函数类型接口	要求函数的形参与接口相同	返回值也相同
let aaaaaa:aaaaa=function(value1:string,value2:string):string{
    return 's'
}
```

### 只读属性

```

```

### 可索引接口

```
索引签名[index:number] 
索引签名只能为number string

对数组的约束
interface ksy{
    [index:number]:object
}
let array:ksy=[{},{}]

对对象的约束
interface ksy1{
    [index:string]:number
}

let objj:ksy1={name:1}
```

### 类类型接口

```
对类的约束

interface lls{
    name:string;
    type:number;
    sss():void;
}

class Ls implements lls{
    public name:string='1'
    public type:number=1231

    sss(){
        
    }
}
```

### 接口的继承

```

```

## 泛型

```
传递参数不限制但是带有校验,扩展性高
```

### 泛型函数

```
function getData<T>(value:T):T{
    return value
}

getData<number>(123)
getData<string>('123')
```

### 泛型类

```
class MIn<T>{
    public a:T[] = [];
    add(x:T):void{
        this.a.push(x)
    }
    set(x:T):T{
        return x
    }
}
```

### 泛型接口

```
是给泛型函数使用的接口


写法1
interface bbbb{
    <T>(name:T,age:T):void
}

let awd:bbbb = function<T>(name:T,age:T){
	
}

awd<string>('1','2')
写法2
interface cccc<T>{
    (name:T,age:T):void
}


let awds:cccc<string> = function<T>(name:T,age:T){
    
}
```

### 类作为参数的泛型类(未完成)

```

```

## 模块化

```
侧重于代码的复用
```

## 命名空间

```
避免代码冲突
```

## 类的装饰器

```
装饰器就是一个方法:可以注入到类 方法 属性参数上扩展类 方法 属性
```

### 普通类装饰器

```
当不传参数时装饰器接受的参数就是当前类

function zsq(target:any){		target为当前类
    params.prototype.test = '装饰器'
}

@zsq
class Test{

}

let test1:any = new Test
console.log(test1.test)
```

### 类装饰器工厂

```
可传参数的装饰器

function zsq(params:any){			params为参数
    return function(target:any){	 target为当前类
        target.prototype.test=params		
    }
}

@zsq('装饰器工厂')
class Test{

}

let test1:any = new Test
console.log(test1.test)
```

### 装饰器重载类的构造函数和方法

```
function zsq(target:any){			
    return class extends target{
        a = '修改后'
        get():void{
            console.log(this)
        }
        e():void{

        }
    }
}

@zsq
class Test{
    public a:any
    constructor() {
        this.a='修改前'
    }
    e():void{

    }
}
```

### 类属性装饰器

```
属性装饰器放在哪个属性的上面就是装饰哪个属性


function zsq(params:any):any{					   target类的原型
    return function(target:any,attr:any):void{		attr是属性
        target[attr] = params
    }
}


class Test{
    @zsq('123')
    public a:any
    constructor() {
        
    }
    e():void{
        console.log(this.a)
    }
}

let test1:any = new Test
test1.e()
```

### 类方法装饰器(未完成)