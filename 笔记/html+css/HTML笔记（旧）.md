背景background:

	color	颜色
	image	图片
	repeat	图片平铺（ repeat no-repeat  repeat-x  repeat-y ）
	position   图片位置(第一个值-水平    第二个-垂直)（left right top bottom center）
		x
		y
	size	图片尺寸（CSS3新属性）
	attachment	图片是否滚动（默认滚动 fixed）
	综合写法	background : background-color background-image background-repeat background-attachment background-position;
定位position:

	relative;  相对定位 保留原来文档流的位置，然后再可以通过方位词移动，参照原位置
	absolute;  绝对定位 脱离文档流，参照物：最近的有定位父级，或者文档（html）  
	fixed 固定定位   参照物是当前显示的窗口
将前端的数据发送到后端form :

	input控件，不同type标签属性，使input的意义不同
		type="submit" / "image"  提交按钮
		type="text"  单行文本
		type="password" 密码
		type="radio"  单项选择   （一组单选input，name必须一样）
		type="checkbox" 多项选择
		type="hidden"
	
		value   让表单有默认的实际值
		placeholder  让表单有提示文字
		checked 让选项默认选中
		disabled 让选项禁用
		selected 下拉选框独有的
	textarea
		style="resize:none"禁止拉伸
动画animation:

	animation-name: 动画名称
	animation-duration: 动画执行时间
	animation-delay: 动画延迟时间
	animation-timing-funtion: 动画曲线
		1)linear 匀速
		2)ease 慢快慢(默认)
		3)ease-in 慢入
		4)ease-out 慢出
		5)ease-in-out 慢入慢出
		6)cubic-bezier (贝塞尔曲线)
	animation-iteration-count 动画执行次数
		1)infinite 无限循环
		2)默认是一次
		3)数值,规定次数
	animation-direction 动画是否反向运动
		1)reverse 规定反向运动
		2)alternate 先正向再反向
		3)alternate-reverse 先反向再正向
		4)normal 默认值,正常方向,可以不写
	animation-play-state 动画执行状态
		1)running 运动,默认,可以不写
		2)paused 暂停
	animation-fill-mode 动画时间之外的状态
		1)none 默认 ,原始状态->动画->原始状态
		2)fowards 原始状态->动画->停在动画帧100%
		3)backwards (忽略原始状态)直接进入动画帧0%->动画-原始状态
		4)both (忽略原始状态)直接进入动画帧0%->动画->停在动画帧100%
	复合样式写法:
		animation:name duration delay timing-funtion iteration-count direction play-state fill-mode;	
	动画帧:
		关键词-@keyframes
			动画名称 -> 自己取
			动画时间 -> 0%-100%(规定在某一个点的时候的样式)
过渡transition:

	简单说,就是一个样式变化的时间
	transition-property:制定属性名称(什么属性发生这样一个过渡效果)
		1.多个属性发生过渡效果的时候,用逗号隔开
		2.all所有属性都有过渡效果(默认的)
	transition-duration:过渡时间
	transition-delay:过渡延迟,多久之后才开始执行过渡效果
	transition-timing-function:运动形式
		1)linear 匀速
		2)ease 慢快慢(默认)
		3)ease-in 慢入
		4)ease-out 慢出
		5)ease-in-out 慢入慢出
		6)cubic-bezier贝塞尔曲线
3D变换transform:

	就是对一个元素进行,放大,缩小,位移的一些改变,分为2D和3D空间
	3D转换:transform-style:preserve-3d;
		注意:放在3D元素的父级上面
	
	景深:perspective
		注意:
		1.给3D元素的父级(也就是3D空间标签上)
		近大远小的一个效果:
			数值越大,看到的效果越近,越明显(看到的远处越大)
			数值越小,看到的效果越远,越模糊(看到的远处越小)
		这个景深会出现梯形的效果,近大远小的视角
	
		2.给3D空间的父级(一般都给他)
		不会出现梯形效果
	
	rotate 旋转
		1.rotatex() rotatey() rotatez()
		2.scalez() z轴缩放
		3.translatez() z轴位移
		4.skewz() z轴倾斜
2D变换transform:

	就是对一个元素进行,放大,缩小,位移的一些改变,分为2D和3D空间
	2D:网页默认就是2D页面
	scale 缩放(不需要单位)
		1.取值(0-1)是缩小,1的时候不变化
			注意:缩小之后,原来的位置还在,其他元素不回去占据这个位置
		2.大于1的时候是放大
			注意:放大之后,会挡住其他元素,但是不会把其他元素挤走
	translate 位移
		1.两个值x轴和y轴(y轴向下是正方向)
			注意:两个值之间用逗号隔开
		2.单独往一个方向:
			x轴->translateX()
			y轴->translateY()
	skew 倾斜
		1.两个值x轴和y轴
			x轴上面往前拉,下面往后拉
			y轴左边往上拉,右边往下拉
		2.单独往一个方向偏移:
			x轴->skewx()
			y轴->skewy()
		取值:角度(deg)
			
	2D变换的基点:
		transform-origin
		两个值:第一个是x轴,第二个是y轴,默认的center
		1.关键词:left/top/right/bottom/center
		2.像素单位px
盒子阴影box-shadow:

	1.第一个值是x轴偏移量
	2.第二个值是y轴偏移量
	3.第三个值是模糊半径
	4.第四个值是模糊度大小
	5.第五个值是颜色
	6.第六个值是阴影的位置
		1)默认是外阴影
		2)inset内部阴影
	注意:他不会影响任何的布局
弹性盒子布局display:flex;

	注意:弹性盒子里面的元素,会自动横排显示,子元素的float,vertical-align,clear将会失效
	
	特性:只有弹性元素的宽度总和大于弹性容器盒子,才会有压缩效果
	
	1).flex-direction 弹性元素横向排列方式
		1)row(默认),从左往右
		2)row-reverse 对齐方式,倒序排列,会挨着最右边开始排列
		3)column 纵向,y轴方向上,从上往下排列
		4)column-reverse 纵向,y轴方向上,从下往上倒叙排列,紧挨着最下边
			
	2).flex-wrap 换行方式
		1)nowrap 默认,不换行
		2)wrap 换行,超出换行
		3)wrap-reverse 换行之后,每一行倒叙排列
	
	这两个属性的复合样式写法:flex-flow:flex-direction flex-wrap;
	
	3).justify-content 元素在x轴(主轴)方向上对齐方式
		1)flex-start 默认值,左对齐
		2)flex-end 右对齐,顺序是不变的,和flex-direction区分开来
		3)center 居中对齐(记住)
		4)space-between 两端对齐,两两子元素之间的间距相同(记住)
		5)space-around 每一个子元素两侧的间隔一样,所以两两之间的间隔是最左边和最右边间隔的两倍(记住)
	
	4).align-items 元素在y轴(侧轴,交叉轴)的对齐方式
		1)flex-start 默认值,上对齐
		2)flex-end 底部对齐
		3)center 上下居中对齐
		4)baseline 元素的第一行文字的基线对齐
		
	5).align-content 定义多行元素在y轴方向上的对齐方式
		1) flex-start 上对齐,从顶点依次往下
		2) flex-end 下对齐,从底部依次往上
		3) center 中点对齐
		4) space-around 上下对齐,每一行上下的间距是一样的,最上和最下边的间距是两两之间的一半(记住)
		5) space-between 上下对齐,间隔评分(记住)
	
	注意:
		弹性盒子里面的元素,也是可以定义为弹性盒子的
	
	注意:以下属性只能在弹性盒模型使用
		1.order 规定元素各自的一个排列顺序
			默认是0,按照正常从左往右布局排列
			排列顺序按照order由小到大的排列
		2.flex-grow 按照给的数值,按照比例去分剩下的部分,默认为0
		子元素的尺寸=父级盒子剩余宽度*单个子元素flex-grow的数值/所有子元素flex-grow的数值总和
		3.flex-shrink 空间不足的情况下,个元素之间的压缩距离(弹性盒子模型压缩原理)
		元素压缩后的宽度 = 元素本来的宽度-单个元素的压缩比例/所有元素的压缩比例总和*超区的部分
      p:nth-child(n){background:red}  表示p父元素中的第n个字节点
      p:nth-child(odd){background:red}/*匹配奇数行*/
      p:nth-child(even){background:red}/*匹配偶数行*/
      p:nth-child(2n){background:red}/*其中n是从0开始计算*/
