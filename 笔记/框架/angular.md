## 安装脚手架

```
npminstall @angular/cli –g
```

## 创建项目

```
ng new 项目名称
```

## 启动项目

```
ng serve --open
```

## 目录结构

app

#### styles.css

```
全局css样式
```

#### app.component.html

```
根页面的html结构
```

#### app.component.css

```
根页面的less
```

#### app.component.spec.ts

```
根页面的测试ts
```

#### app.component.ts

```
根页面的组件信息
```

#### app.module.ts

```
根页面的引入组件和配置组件的文件
```

## 组件

#### 创建组件

```
ng g component 目录	推荐创建在 app/components 下面
	通过命令创建的组件会自动写入app.module.ts
```

#### 引入组件

```
去看当前组件的xxx.component.ts中修饰器里的selector就是组件的名字
在需要引入的地方写上组件就可以了
```

#### 声明组件数据

```
属性类型 属性名:数据类型 = 值
属性类型有 pubic	protected private 
数据类型有 any,string,object,Array,Boolean

数组声明
	属性类型 属性名:Array<数组数据类型>=[]
	属性类型 属性名:数组数据类型[]=[]
```

#### 修改组件数据

```
this.test=xxx
```

#### 获取数据

```
this.test
```

#### 绑定动态标签属性

```
<p [绑定的标签名]="数据里的值"></p>
```

#### 绑定html代码

```
<p [innerHTML]="数据里的html代码"></p>
```

## angular中的*ng语法

#### 循环

```
*ngFor	循环
<p *ngFor="let item of 数组;let key=index"></p>
```

#### 流程控制

```
*ngIf  是否渲染
<p *ngIf="Boolean值"></p>	真就渲染,反之就不渲染
```

#### Switch

```
<span [ngSwitch]="xxx">
<p *ngSwitchCase="条件1">

</p>
<p *ngSwitchCase="条件2">

</p>
<p *ngSwitchDefault>

</p>
</span>

当满足条件时就渲染满足条件的语句
当没有满足条件的时候则自动渲染default
```

#### 动态修改Class

```
[class]="{class名:Boolean值}"
如果为真就添加类名,假则不添加
```

#### 动态修改style属性

```
<p [ngStyle]="{'color': 'red'}"></p>	直接写样式
<p [ngStyle]="{'color': xxx }"></p>		绑定xxx变量里面的样式
```

#### 管道

``` 
管道符 |
使用管道{{ 数据 | 管道名称:参数1:参数2 | 管道2 }}
当使用多个管道的时候,前一个管道输出的值是后一个管道的输入值
常用管道
	大小写转换管道
		uppercase将字符串转换为大写
		lowercase将字符串转换为小写
	日期管道
		date:'yyyy-MM-dd HH:mm:ss'
		
自定义管道
	ng g pipe 管道名
	自定义管道中可以进行数据处理,然后通过return返回数据处理之后的结果
```

## 事件

#### 绑定事件

```
<p (事件)="fn()"></p>
```

#### 事件对象

```
<p (事件)="fn($event)"></p>
```

#### 获取事件源

```
event.target
```

## form----双向数据绑定

```
需要在app.module.ts中引入
import { FormsModule } from '@angular/forms'
在@NgModle的imports中注册
才能双向数据绑定
```

#### 使用

```
input框
<input type="text" [(ngModel)]="绑定的数据"/>

选项卡
<select name="" id="" [(ngModel)]="cityObj.city">
    <option *ngFor="let item of cityObj.cityList" [value]="item">{{item}}</option>
</select>

复选框
<span *ngFor="let item of hobby">
    <input type="checkbox"  [(ngModel)]="item.checked">{{item.name}}
</span>	

单选框
<span><input type="radio" name="" id="" [(ngModel)]="sex" value="2">男</span>
<span><input type="radio" name="" id="" [(ngModel)]="sex" value="1">女</span>
```