## 引入

```
需要引入
	jq
	bootstrap的js和css
```

## 容器

#### 流体容器

```
流体容器
	 width auto
```

#### 固定容器

```
固定容器
	有阈值
		大于等于1200			width 1170(默认值1140+槽宽)		pc	    lg
		
		大于等于992小于1200	   width 970(默认值940+槽宽)	   小屏pc	  md
		
		大于等于768小于992	   width 750(默认值720+槽宽)	    平板	  sm	
		
		小于768				 width auto		  移动端	xs
```

## 栅格系统

```
通过less递归实现很多功能
```

#### 行

```
一行默认被分为12个格子槽宽30px
    xs	对于 小于768 width auto
    sm	对应 width 768
    md	对应 width 992
    lg	对应 width 1200

行row	<div class="row"></div>为一行
	margin-left:-15(-槽宽/2)
	margin-right:-15(-槽宽/2)
```

#### 列

```
使用 col - xs/sm/md/lg- [1-12]
列	创建了12个列每个列的样式
	position:relatvie	用于列排序
	min-height:1px
	padding-left:15px
	padding-right:15px
	
	源码流程
    1.第一步
        float:left;
    2.第二步
        按百分比定义宽度
        width: x /12(默认) x区间为[1,12]
    3.第三步
        列排序
        pull	修改left
        push	修改right
    4.第四步
        列偏移修改marin-left
        margin-leff: x/12(默认) x区间为[0,12]
        
列排序	使用 col - xs/sm/md/lg - 列排序 - [1-12]
	在使用时	
		如果需要三个状态都排序中有其中一个状态的元素不需要排序也得定义排序0不然会沿用下一个状态的排序导致布局爆破
		col - xs/sm/md/lg - 列排序 - 0
```

#### 伪自定义栅格系统

```
使用bootstrap源码自定义栅格系统
需要文件
	mixin 
		clearfix.less
		grid.less
		grid-framework.less
	grid.less
    variables.less
    xxx.less

xxx.less引入前面的所有文件即可
主要修改grid-framework.less	替换col就可以自己定义名字变成自己的栅格系统了(滑稽)
clearfix.less的是一个混合是给其他的调用的所以我们改成类直接继承
```

## 响应式工具

```
-visible- xs/sm/md/lg
超小屏幕手机 (<768px)	
小屏幕平板 (≥768px)		
中等屏幕桌面 (≥992px)		
大屏幕桌面 (≥1200px)

					xs	 sm    md    lg
    .visible-xs-*	可见	隐藏	隐藏	隐藏
    .visible-sm-*	隐藏	可见	隐藏	隐藏
    .visible-md-*	隐藏	隐藏	可见	隐藏
    .visible-lg-*	隐藏	隐藏	隐藏	可见
    .hidden-xs		隐藏	可见	可见	可见
    .hidden-sm		可见	隐藏	可见	可见
    .hidden-md		可见	可见	隐藏	可见
    .hidden-lg		可见	可见	可见	隐藏
```

## bootstrap定制化

```
新建一个less,引入入口bootstrap.less
再修改variables.less里面的变量
```

