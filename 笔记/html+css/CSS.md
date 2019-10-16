## CSS

```
css样式：
   css层叠样式表（Cascading style sheets）
   特点：
      后面的相同的样式会把前面的相同样式给覆盖掉。

css样式种类：	
    1.内嵌样式/内联样式：用一对style标签包裹起来的，style标签里面放的是css样式。
    2.行内样式：css用一个style属性来引用，之后把CSS代码放入style后面的属性值里面。。
    3.外链样式/外部样式：

样式的优缺点：
    行内样式缺点：单独作用于某个标签里面吧，局限性是比较大，我们不推荐使用。
    内嵌样式缺点：只能作用于当前的这个页面；
    外链样式优点: 能够被多个样式同时去引用；一个页面同时可以使用多个外链样式。
```

## CSS兼容

```
需要添加浏览器引擎前缀的属性
@keyframes
移动和变换属性(transition-property, transition-duration, transition-timing-function, transition-delay)
动画属性 (animation-name, animation-duration, animation-timing-function, animation-delay)
border-radius
box-shadow
backface-visibility
column属性
flex属性
perspective属性
```

## 样式优先级

```
样式优先级：
    行内样式 > 内嵌样式 > 外链样式
规律：
    远亲不如近邻，
    近水楼台先得月；
!important 提升了优先级（等于王炸）    
```

## 样式初始化

```
样式初始化：
   把你所有浏览器自带的默认样式来进行处理（）；
```

## CSS选择器

```
选择器：
   通配符选择器  *{}
   class选择器   .kaidy{}
   id选择器      #wangzhejing{  }
   后代选择器     div p	两者的关系：爸爸与儿子的关系
   群组选择器 ：如果有共同的样式，可以使用群组选择器归类。
   		例
   		body,h1,h2,h3,h4,h5,h6,ul,ol,dl,dd,p{}
	子元素选择器：匹配A元素的子代B元素，两元素之间用大于隔开；
		div>p{}
	毗邻选择器：B元素紧跟随着A元素,两元素之间用+隔开；
		p + p{}
	属性的选择器：
        attr:属性
        val：属性值
        [attr]:所匹配具有这个属性的元素；
        [attr=val]:所匹配具有这个属性而且属性值为val的元素
        [attr^=val]:所匹配以attr属性值为val开头
        [attr$=val]:所匹配以attr属性值为val结尾
	伪类选择器：
        :link     未被点击过的；
        :hover    鼠标划过的样式；
        :active   鼠标点击未松开的样式；
        :visited  鼠标点击过后的样式；
```

## CSS3选择器

```
CSS3选择器：
    :first-child  表示选择到第一个子元素
    :last-child   表示选择到末尾子元素
    :nth-child(n) 读取第n个子元素，然后判断该子元素是否符合，符合就显示样式。
    odd(2n+1)：奇数
    even(2n):偶数 
```

## 选择器优先级

```
选择器优先级（权重）:
    id选择器(100)>类选择器(10)>标签选择器(1)>通配符选择器(<0.1)
规律：
    选择范围越广，优先级越低；
    选择范围越窄，优先级越高；

复杂选择器：
    如果权重相等的情况下，后来者居上；
    如果权重不相等的情况下，
        id选择器个数多的，权重大；
        如果id选择器个数相等，比较类选择器，类选择器多的权重大；
        如果id选择器个数相等，类选择也相等的情况下，比较标签选择器，标签选择多的权重大；
```

## 书写顺序

```
书写顺序：
    1.布局定位属性：
        display,position,float,clear,overflow,list-style
    2.元素自身属性：
        width,height,margin,padding,border,background,
    3.字体，文本属性：
        line-height,color,font,text,vertical-align,....
    4.其它(css3):
        border-radius,cursor,transition,background:liear-gradient;animation;box-shadow;    
```

## 盒子模型box-sizing(★)

```
   盒子的组成部分：
      width + height + padding + border
   盒子的总宽度：
      width(盒子本身的宽度) + padding-left + padding-right + border-left+ border-right
   盒子的总高度同理：
   
标准盒模型（content-box）：
	在标准模式下，一个块的总宽度= width + margin(左右) + padding(左右) + border(左右)
怪异盒子模型（border-box）:
	在怪异模式下，一个块的总宽度= width + margin(左右)
	（即width已经包含了padding和border值）
```

## margin

```
margin:外边距
   （盒子以）外的距离
```

## padding

```
padding(内边距):  
   盒子以内与content内容之间的距离为内边距；
```

## border

```
border-style:
   solid 实线 
   dotted 点线
   dashed 虚线
   double 双实线
border-width 边框大小
border-color 边框颜色 

复合写法	border：width style color；

当盒子宽高都为0 只有border的时候 border的四个边就变成了4个相等三角形
例：一个上边的三角形
    border-top-color:red;
    border-right-color:transparent;
    border-bottom-color:transparent;
    border-left-color:transparent;
    
 border-radius 圆角
```

## 外边距合并问题(★)

```
外边距合并：
   一个元素与另一个元素之间在垂直方向上合并起来。
      
    解决方案：
       1.给父级加内边距来撑开垂直方向的内容。
       2.给父级加边框线来阻止触发BFC机制；
	
兄弟元素之间外边距合并：
   1.元素1加下外边距，元素2加上外边距；
     两者之间会产生外边距合并，外边距取两者中的最大值；

    解决方案：
       直接给一方加设定的外边距；
```

## display样式类型

```
display（样式类型）:
   block   块级样式
   inline  内联/行内样式
区分block与inline的特点：
   block   块级样式
      独占一行
      支持宽高
      支持margin,padding
   inline  内联/行内样式
      横排显示
      不支持宽高
      支持水平方向的margin,不支持垂直方向的margin.
      支持padding，垂直方向会出现诡异问题（会占位）。 
      会解析一个空格的字符；
样式转换：
   行内样式与块级样式之间可以进行样式转行

inline-block ：行内块元素
   特点：
      支持宽高
      横排显示
      支持margin
      支持padding
      会解析一个空格的字符；
```

## display:none

```
display:none;  样式消失
    样式是完全消失，不会在我们页面中占位置；
```

## 垂直对齐方式

```
vertical-align:垂直对齐方式
   baseline   基线对齐

什么情况才会产生这个垂直对齐方式的问题？
   垂直对齐：
      垂直方向上而不是水平方向；
      对齐？
         上对齐，中对齐，下对齐。
   适用范围：
      行内样式（inline）/行内块元素(inline-block)；
```

## 元素垂直居中

```
position: relative;
top: 50%; /*偏移*/
transform: translateY(-50%);
```

## background背景

```
background背景
   本属性本身包含很多样式属性，不建议单独拿出来写单个样式；

   backgournd-color  背景颜色；
   background-image  背景图片
   background-repeat:背景平铺
      no-repeat   不平铺
      repeat-X;
      repeat-Y
   background-size   背景大小（CSS3）
      有两个值
         x方向上的
         y方向上的
      100%   （背影图片）与盒子宽度高度相等；
      px      像素单位；
      cover     等比例缩放，直到铺满X轴与y轴部分，有部分内容显示不出来的。
      contain   等比例缩放x轴和y轴其中的一个方向。
   background-position  背景定位
      left center right  左 中 右
      top center bottom  上 中 下
      如果说只写一个值，那么第二个值为默认center;
      
      复合写法 background:
				颜色值 图片 是否平铺 位置/大小
```

## font

```
font:
   font-size:字体大小
      单位：
         px   像素
            12px为字体的最小字体
         %   百分比（相对于父级）
         em  倍数（相对父级）；
         rem 根倍数（相对于html根标签）
color:字体颜色           
font-family:字体类型
font-weight:字体粗细
   normal   正常字体
   bold     加粗
   100  瘦身细
   200 - 500 正常
   600至上都是  加粗

font-style 字体风格
   italic   倾斜
   oblique   倾斜
   normal    默认正常
font-variant:small-caps;  小型字体大写
line-height 行高
   当高度与行高一样的情况下，文本居中；
行高与高度的区别
   高度是元素的高度
   行高是字体的高度
```

## color文字颜色

```
颜色：
   1.英文单:yellow,red, pink,black,deepink
   2.十六进制：
      1234567890abcdef 
   3.rgb:
      r:red 红色
      g:green 绿色
      b:blue  蓝色
      取值情况：
         0-255
   4.rgba:
      rgb
      a:Alpha :透明度
         取值在0-1 
            0是完全透明
            1是完全不透明
```

## text

```
text-align: 水平对齐方式
   left 左对齐(默认)
   center   居中
   right    右对齐
   justify  两端对齐
text-indent   首项缩进
text-decoration: 样式修饰
   underline    下划线
   none          去除修饰符
   line-through  中线
   overline      上划线
letter-spacing  字（字母）间距 
word-spacing   词（单词）间距
white-space: 是否换行
   nowrap    不换行
   wrap      换行（默认）
word-break:break-all;   强行换行
```

## 清除浮动

```
清除浮动：
    1.overflow:hidden;超出的部分隐藏；
    2.在子级尾部加一个块元素，添加clear元素；
    3.伪元素
        :after{
            content:''; /* 固定写法 */
            clear:both;
            display: block;
        }
```

## position定位

```
position:
    方位值：
        top   上
        bottom  下 
        left    左
        right   右
    static   静态定位
        方位值是不起作用   
    relative   相对定位
        方位值是起作用；
    absolute   绝对定位
        方位值是起作用；
        参考系：
            除了静态定位之后，其它都可以作为参考；
            如果没有参考系，默认为body来进行参考；
        作为参考物需要满足的要求：
            1.是必须为直系父级关系；
            2.除了静态定位之后，其它都可以作为参考；
        注意：
            如果直系父级有多个都作为参考系，只取离元素最近的元素作为参考系；    
            （就近原则）
    fixed  固定定位：
        方位值是起作用；  
        参考系：
            以页面的可视区域作为参考系（不受页面的实际高度限制）；
                        
定位特征
relative:
1.不脱离文档流
2.不会对元素的高度造成影响；
3.不会使行内元素支持宽高；
4.根据样式类型定论是否支持margin,padding！
5.不会对inline-block，vertical-align ,float造成影响；
absolute:
1.脱离文档流（完全）
2.使用后默认由内容撑开宽高；
3.会使行内元素支持宽高；
4.支持margin,padding;
5.不支持margin:auto; 
6.会对inline-block，vertical-align ,float造成影响；
```

## z-index层级

```
5.层级问题（使用了定位[除了静态定位]元素）
    后来者居上：
    默认层级：
        如果使用>0 居上
        等于0  默认值
        小于0  底部
    如果层级样式相等，后来者具上。
```

## BFC(★)

```
BFC（块级格式化上下文）:
           Block Formatting Context
           指页面中一个指定的区域，并且给一个套渲染规则，他会去决定子元素如何去定位；    
       触发BFC机制：
           1.overflow:非visiable;
           2.display:inline-block;
           3.float:left/right;
           4.position:absolute/fixed;
       
       解决什么样的问题：
           1.防止外边距合并的情况；
           2.解决浮动造成的高度坍塌的情况    
	  外边距合并：
		一个元素与另一个元素之间在垂直方向上合并起来。
      
          解决方案：
            1.给父级加内边距来撑开垂直方向的内容。
            2.给父级加边框线来阻止触发BFC机制；

          兄弟元素之间外边距合并：
            1.元素1加下外边距，元素2加上外边距；
            两者之间会产生外边距合并，外边距取两者中的最大值；

          解决方案：
            直接给一方加设定的外边距；
```

## form

```
action  规定表单提交到哪个地址；
target  规定链接地址在哪个窗口打开
    _self    在本窗口打开
    _blank   新窗口打开
name   表单的名字
method 表单的提交方式
    get 
    post

input 表单
    type类型    
        text   文本    
        password   密码
        radio    单选按钮
            name   组合（是一组单选的内容，只能选一个）    
                checked 默认选中
            label标签
                for  关联（用id与之关联起来）
        checkbox  多选框
            checked   默认选中
            disabled   禁止     
        submit    按钮
        button标签按钮
        前两都用可以放到form表单，会生效。
        type:button  按钮   结合js生效
        reset  重置
        color  调色
        
placeholder：提示内容
        value 默认输入的内容 
        focus 焦点
        
outline  外轮廓
    outline与border的区别：
    outline是表单内容自带的。
```

## 伪元素

```
:after		在后面
:before	在前面
:checked	选中
:selection		鼠标拖动选中
ele1 ~ ele2   表示选中元素1后面所有的兄弟元素2
```

## cursor鼠标样式

```
cursor鼠标样式：
      pointer;   小手指样式
      auto      自动
      default    默认样式
      move     移动
      text     文本样式
      wait     等待
      help     帮助
```

## opacity

```
opacity:透明度
    0-1 
        0是完全透明
        1是完全不透明
    两者区别：
        rgba不会继承 父透子不透
        opacity会继承 父透子也透
```

## box-shadow

```
box-shadow:盒子阴影
    x-shadow   水平的偏移量
        负值的时候水平偏左移动
        正值的时候水平偏右移动
    y-shadow   垂直的偏移量
        正值的时候垂直偏下移动
        负值的时候垂直偏上移动
    blur
        模糊的半径
    spread 阴影的尺寸大小
    color 阴影的颜色     
```

## 渐变

```
线性渐变
	渐变(linear-gradient)：
        background-image:来作为属性
        渐变样式是从上往下的：
        确定方向：
            确定单方向
                to right,to top,to left,to bottom
            确定对角方向；
                to right bottom,to right top,to bottom left,to left top
    单位：
        %，px

    线性渐变平铺效果(repeating-linear-gradient)：
    
 径向渐变（radial-gradient）：
            circle      圆状
            ellipse     椭圆状
            正方形时默认是圆形，长方形时默认是椭圆

        方位值：
            closest-side： 圆心到最近的边
            closest-corner：圆心到最近的角
            farthest-side： 圆心到离圆心最远的边
            farthest-corner(默认)： 圆心到离圆心最远
```

## 倒影效果

```
-webkit-box-reflect: below;		倒转
-webkit-box-reflect: below 0 linear-gradient( pink , transparent);
-webkit-box-reflect: below 0 repeating-linear-gradient( pink , transparent);
```

## transition(★)

```
transition-timing-function 运动形式 ：(速度曲线)
    ease： （默认值） 慢快慢
    linear： 匀速
    ease-in： 慢入
    ease-out： 慢出
    ease-in-out： 慢入慢出
    cubic-bezier  贝塞尔曲线

transition-delay:过渡延迟    

综合写法transition:随便结合起来写，但是时间方法，第一个值为过渡时间，第二个值这延迟的时间；
```

## transform(★)

```
transform(变换):
    rotate:旋转  
        deg为旋转角度，旋转值可以正值也可以为负值；
    scale:缩放
        值可以为负值；
        scale（number）:一个值的时候，x与y方向同时进行缩放
        scale（number,number）:两个值的时候，单独对应的值控制对应的方向;
    translate:位移
        translate(number) 单独控制X轴的方向；
        translate(num1,num2):单独控制水平方向num1和垂直方向num2;
        translateX(num1):单独控制水平方向
        translateY(num1)：单独控制垂直方向
    skew():倾斜；
        skew(deg) 单独控制X轴的方向；
        skew(deg1,deg2):单独控制水平方向deg1和垂直方向deg2;
        skew(deg):单独控制水平方向
        traskewnslateY(deg)：单独控制垂直方向
        
  transform-origin:变换的基点
                默认为（center ,center）
                结合方位值来使用：
                    top , center , bottom
                    left, center , right
                可以使用百分比和像素做为单位；       
```

## 2D变换transform:(★)

```
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
```

## 3D变换transform:(★)

```
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

translate 位移
	1.多一个z轴
	translateZ
rotate 旋转
	1.rotatex() rotatey() rotatez()
	2.scalez() z轴缩放
	3.translatez() z轴位移
	4.skewz() z轴倾斜
```

## 动画

```
animation-name：动画名字
animation-duration：动画执行时间

animation-iteration-count:动画执行次数
    initial/1 默认
    infinite 无限循环
    Number    执次多少次；
    
animation-direction:
    ormal： （默认） 正常方向
    reverse： 反方向运行
    alternate： 动画先正后反方向运行
    alternate-reverse： 先反后正方向
    
animation-fill-mode
	none （默认） 原始状态>动画>原始状态
    forwards 原始状态>动画>停在动画帧100%
    backwards (忽略原始状态)进入动画帧0%>动画>原始状态
    both (忽略原始状态)进入动画帧0%>动画>停在动画帧10
    
animation-play-state:paused 动画暂停

综合使用nimation : name duration timing-function delay iteration-count direction fill-mode play-state

@keyframes 动画名 {
	form{属性名:属性值}
	to{属性名:属性值}
}

@keyframes 动画名 {
	0%{属性名:属性值}
	25%{属性名:属性值}
	......
	100%{属性名:属性值}
}
```

## H5 HSL（色彩模式）

```
颜色 HSL（色彩模式）
    h:hue           色调
    S:Saturation    饱和度
    L:Lightness     明度(纯度)
```

## currentColor

```
currentColor :当前颜色
当前颜色以color字体颜色为标准；
```

## text-shadow

```
文字的阴影
```

## 弹性盒子模型(★)

```
弹性盒子模型(flex容器)：定义弹性伸缩盒容器类型 
    用法：
        display:flex;   将对象作为块级弹性弹性盒模型
        display:inline-flex;  将对象作为内联块级弹性弹性盒模型
    学过display:block/inline-block;

flex容器：
    采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。
flex项目：    
    它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”，
任何一个元素都可以指定为Flex布局

        flex-direction :排列盒子方向
            row(默认)： 横向从左到右排列（横向 ）。 
            row-reverse： 对齐方式与row相反。 （倒序排列） 
            column： 纵向从上往下排列（纵向）。 
            column-reverse：对齐方式与column相反。 （倒序排列）

        主轴与交叉轴：
            容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end； 
            交叉轴的开始位置叫做cross start，结束位置叫做cross end。 
            项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。


flex-wrap 换行方式
    nowrap（默认）：不换行。
    wrap：换行，第一行在上方。
    wrap-reverse：换行，第一行在下方。

复合写法flex-flow: flex-direction flex-wrap;

justify-content: 定义了项目在主轴上的对齐方式
    flex-start（默认值）： 左对齐 
    flex-end： 右对齐 
    center： 居中 
    space-between： 两端对齐，项目之间的间隔都相等。 
    space-around： 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

align-items:属性定义项目在交叉轴上如何对齐
    flex-start： 交叉轴的起点对齐。 
    flex-end： 交叉轴的终点对齐。 
    center： 交叉轴的中点对齐。 
    baseline: 项目的第一行文字的基线对齐。 
    stretch（默认值）：如果项目未设置宽高或设为auto，将沿交叉轴占满整个容器的高度或宽度。
            
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
            可以负值
            
flex-grow 放大当子元素比父元素小使用就会填充并瓜分父元素
flex-shrink 缩小当子元素比父元素大使用就会缩小并瓜分父元素
```

## text-overflow

```
text-overflow 属性规定当文本溢出包含元素时发生的事情。
clip	修剪文本。
ellipsis	显示省略符号来代表被修剪的文本。
string	使用给定的字符串来代表被修剪的文本。
```

## white-space

```
white-space 属性设置如何处理元素内的空白。
normal	默认。空白会被浏览器忽略。
pre	空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
nowrap	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
pre-wrap	保留空白符序列，但是正常地进行换行。
pre-line	合并空白符序列，但是保留换行符。
inherit	规定应该从父元素继承 white-space 属性的值。
```

## 多行超出隐藏

```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;/*最大行数*/
overflow: hidden;/*超出部分隐藏*/
```

## 单行超出隐藏

```
overflow: hidden;/*超出部分隐藏*/
text-overflow:ellipsis;/* 超出部分显示省略号 */
white-space: nowrap;/*规定段落中的文本不进行换行 */
```

