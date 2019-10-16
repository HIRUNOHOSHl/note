## 目录结构

```
uni.scss ---全局样式文件
pages.json ---路由,全局样式
main.js ---vue的主文件,入口
xxx.vue ---vue模板文件
store ---存放vuex文件
static ---静态资源 js css png gif
platforms ---存放各个平台专用文件
pages ---页面
hybrid ---本地网页
components ---组件
```

## upx

```
upx是uni的像素
计算方式是
	upx = 750 * 设计稿元素宽 / 设计稿宽
```

## pages.json常用基本配置

```
pages
	通过 pages 节点配置应用由哪些页面组成，pages 节点接收一个数组，数组每个项都是一个对象，每写一个页面都要在数组里添加一个
	
	常用属性
        path	String		配置页面路径(路由),写在第一条就是默认主页面
        style	Object		配置页面窗口表现
        	navigationBarBackgroundColor	导航栏背景颜色
        	navigationBarTextStyle		导航栏标题颜色及状态栏前景颜色，仅支持 black/white
        	navigationBarTitleText		导航栏标题文字内容
        	backgroundColor		窗口的背景色
        	backgroundTextStyle		下拉 loading 的样式，仅支持 dark/light
        	enablePullDownRefresh	是否开启下拉刷新	
        	onReachBottomDistance	页面上拉触底事件触发时距页面底部距离，单位只支持px(懒加载)
        	usingComponents		引用小程序组件
        	app-plus	设置编译到 App 平台的特定样式
        		titleNView	导航栏,详见:导航栏
        			searchInput	原生导航栏上的搜索框配置
        		bounce	页面回弹效果，设置为 "none" 时关闭效果。
        		
tabBar
	如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页。
        pagePath
            页面路径，必须在 pages 中先定义
        text	
            tab 上按钮文字，在 5+APP 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标
        iconPath	
            图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片，不支持字体图标
        selectedIconPath	
            选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
```

## 基础内容

```
text ---app中的span

icon ---图标

rich-text ---富文本
	通过绑定nodes来显示data中写的 HTML 节点
	
progress ---进度条
```

## uni.show

```
内置弹窗
```

## 设置自定义标签属性

```
data-xxx="值"
获取通过事件里面的属性即可获取
```

## 视图容器

```
view ---app中的div

scroll-view ---可滚动视图区域
	常用属性
	scroll-x	允许横向滚动	
	scroll-y	允许纵向滚动
	scroll-top	设置竖向滚动条位置	
	scroll-left	设置横向滚动条位置
	scroll-with-animation	在设置滚动条位置时使用动画过渡
	scroll-into-view	锚点,默认滚动到id值为x的位置
	@scrolltoupper	滚动到顶部/左边，会触发 scrolltoupper 事件	
	@scrolltolower	滚动到底部/右边，会触发 scrolltolower 事件
	@scroll	 滚动时触发
	!!!使用竖向滚动时，需要给 <scroll-view> 一个固定高度，通过 css 设置 height。!!!

swiper ---轮播
	使用竖向滚动时，需要给 <scroll-view> 一个固定高度，通过 css 设置 height。
	注意：其中只可放置 <swiper-item> 组件，否则会导致未定义的行为。
	
movable-area ---movable-view 的可移动区域
	movable-view ---可移动的视图容器，在页面中可以拖拽滑动
        movable-view 必须设置width和height属性，不设置默认为10px
        movable-view 默认为绝对定位，top和left属性为0px
        当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area
        
        常用属性
        direction	movable-view的移动方向，属性值有all、vertical、horizontal、none
        damping		阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快
        friction	摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值
        x	定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画	
	    y	定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画
	    scale	是否支持双指缩放，默认缩放手势生效区域是在movable-view内
```

## 表单组件

#### button ---按钮

```
	常用属性
	form-type	用于 <form> 组件，点击分别会触发 <form> 组件的 submit提交/reset重置 事件	
	plain	按钮是否镂空，背景色透明
	type	按钮的样式类型
	size	按钮的大小
	hover-class	指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果
```

#### 	checkbox ---多项选择器

```
	checkbox-group	多项选择器，内部由多个 checkbox 组成。
	checkbox	多项选择器
		常用属性
		@change	checkbox-group中选中项发生改变是触发 change 事件
```

#### input ---输入框

```
	常用属性
	placeholder-style	指定 placeholder 的样式	
	placeholder-class	指定 placeholder 的样式类
	focus	获取焦点。在 H5 平台聚焦后软键盘是否跟随弹出，取决于当前浏览器本身的规范（策略）。
	@confirm	点击完成按钮时触发，event.detail = {value: value}
```

#### 	radio ---单选项目。

```
	radio-group ---单项选择器，内部由多个 <radio> 组成。
	常用属性
	color	radio的颜色，同css的color
	@change	<radio-group> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}
```

#### slider ---滑动选择器。

```
	常用属性
	min	最小值
	max	最大值
	show-value	是否显示当前 value
	step	步长，取值必须大于 0，并且可被(max - min)整除
	activeColor	各个平台不同，详见下	滑块左侧已选择部分的线条颜色
	backgroundColor	#e9e9e9	滑块右侧背景条的颜色	
	block-size	滑块的大小，取值范围为 12 - 28
	@change	完成一次拖动后触发的事件，event.detail = {value: value}
	@changing	拖动过程中触发的事件，event.detail = {value: value}
```

#### switch ---开关选择器

```
	常用属性
	type	样式，有效值：switch, checkbox	
	@change		checked 改变时触发 change 事件，event.detail={ value:checked}	
	color	switch 的颜色，同 css 的 color
```

#### picker ---从底部弹起的滚动选择器

```
	range	mode为 selector 或 multiSelector 时，range 有效
    range-key	当 range 是一个 Array＜Object＞ 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
    value	value 的值表示选择了 range 中的第几个（下标从 0 开始）
    @change	value 改变时触发 change 事件，event.detail = {value: value}
    disabled	是否禁用
    @cancel	E取消选择或点遮罩层收起 picker 时触发
    
    在使用时必须要在里面写一个view或者其他标签,才能够使用
```

## 扩展组件

```
去插件市场下载将,组件包放入项目中
```

## 导航

```
navigator
	常用属性
	url	应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 .vue 后缀
    animation-type	当 open-type 为 navigate、navigateBack 时有效，窗口的显示/关闭动画效果，详见：窗口动画
    animation-duration	当 open-type 为 navigate、navigateBack 时有效，窗口显示/关闭动画的持续时间。
    
    open-type
        navigate	对应 uni.navigateTo 的功能	
        redirect	对应 uni.redirectTo 的功能	
        switchTab	对应 uni.switchTab 的功能	
        reLaunch	对应 uni.reLaunch 的功能	头条小程序不支持
        navigateBack	对应 uni.navigateBack 的功能	 	
```

## 路由api

```
uni.navigateTo	保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面
uni.redirectTo	关闭当前页面，跳转到应用内的某个页面，重定向
uni.reLaunch	关闭所有页面，打开到应用内的某个页面
uni.switchTab	跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
uni.navigateBack	关闭当前页面，返回上一页面或多级页面
	delta	Number	返回的页面数，如果 delta 大于现有页面数，则返回到首页。	
	animationType	String	pop-out	窗口关闭的动画效果，详见：窗口动画	5+App
	animationDuration	Number	300	窗口关闭动画的持续时间，单位为 ms
```

## 生命周期

```
应用生命周期
    onLaunch	当uni-app 初始化完成时触发（全局只触发一次）
    onShow	当 uni-app 启动，或从后台进入前台显示
    onHide	当 uni-app 从前台进入后台
    onUniNViewMessage	对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯
页面生命周期
	onLoad	监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考示例		
    onShow	监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面		
    onReady	监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发		
    onHide	监听页面隐藏		
    onUnload	监听页面卸载		
    onResize	监听窗口尺寸变化	5+App、微信小程序	
    onPullDownRefresh	监听用户下拉动作，一般用于下拉刷新，参考示例		
    onReachBottom	页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。如使用scroll-view导致页面级没有滚动，则触底事件不会被触发		
    onTabItemTap	点击 tab 时触发，参数为Object，具体见下方注意事项	微信小程序、百度小程序、H5、5+App（自定义组件模式）	
    onShareAppMessage	用户点击右上角分享	微信小程序、百度小程序、头条小程序、支付宝小程序	
    onPageScroll	监听页面滚动，参数为Object		
    onNavigationBarButtonTap	监听原生标题栏按钮点击事件，参数为Object	5+ App、H5	
    onBackPress	监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：onBackPress 详解	5+App、H5	
    onNavigationBarSearchInputChanged	监听原生标题栏搜索输入框输入内容变化事件	5+App、H5	1.6.0
    onNavigationBarSearchInputConfirmed	监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。	5+App、H5	1.6.0
    onNavigationBarSearchInputClicked	监听原生标题栏搜索输入框点击事件	5+App、H5	1.6.0
```

## 媒体

#### 照片选取

```
uni.chooseImage
	count	最多可以选择的图片张数，默认9	见下方说明
    sizeType	original 原图，compressed 压缩图，默认二者都有	5+App、微信小程序、支付宝小程序、百度小程序
    sourceType	album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项	
    success	成功则返回图片的本地文件路径列表 tempFilePaths	
    fail	接口调用失败的回调函数	小程序、5+App
    complete	接口调用结束的回调函数（调用成功、失败都会执行）
```

#### 照片预览

```
uni.previewImage
```

#### 保存图片

```
uni.saveImageToPhotosAlbum
```

## 网络请求

```
uni.request
类似ajax
```

## 文件

#### 保存文件---uni.saveFile

```
	tempFilePath	需要保存的文件的临时路径
    success	返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
    	success 返回参数
    		savedFilePath	文件的保存路径
    fail	接口调用失败的回调函数
    complete	接口调用结束的回调函数（调用成功、失败都会执行）
```

#### 获取本地已保存的文件列表---uni.getSavedFileList

```
success	接口调用成功的回调函数，返回结果见 success 返回参数说明
		success 返回参数
            errMsg	接口调用结果
            fileList	文件列表
            	fileList 中的项目说明
            	    filePath	文件的本地路径
				   createTime	文件的保存时的时间戳，从 1970/01/01 08:00:00 到该时刻的秒数。
				   size	文件大小，以字节为单位。
	fail	接口调用失败的回调函数
	complete	接口调用结束的回调函数（调用成功、失败都会执行）
```

#### 获取本地文件的文件信息---uni.getSavedFileInfo

```
获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件
filePath	String	是	文件路径
success	Function	否	接口调用成功的回调函数，返回结果见 success 返回参数说明
fail	Function	否	接口调用失败的回调函数
complete	Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
```

#### 删除本地存储文件---uni.removeSavedFile

```
filePath	需要删除的文件路径
success		接口调用成功的回调函数
fail	接口调用失败的回调函数
complete	接口调用结束的回调函数（调用成功、失败都会执行）
```

#### 获取文件信息---uni.getFileInfo

```
filePath	String		是	本地文件路径	
digestAlgorithm	String	md5	否	计算文件摘要的算法，可取值 md5、sha1。
success	Function		否	接口调用成功的回调函数	
fail	Function		否	接口调用失败的回调函数	
complete	Function		否	接口调用结束的回调函数（调用成功、失败都会执行）
```

#### 打开文档---uni.openDocument

```
filePath	文件路径，可通过 downFile 获得	
fileType	文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx	微信小程序
success	接口调用成功的回调函数	
fail	接口调用失败的回调函数	微信小程序
complete	接口调用结束的回调函数（调用成功、失败都会执行）
```

#### uni.getFileSystemManager()

```
获取全局唯一的文件管理器
```

## 上传/下载文件

```
uni.uploadFile
uni.downloadFile

onProgressUpdate监听上传或者下载的进度,可以配合进度条显示进度
```

## 数据缓存

```
要使用同步代码要使用try和catch

同步是加Sync的函数

设置缓存
uni.setstorage()
uni.setStorageSync()

获取本地缓存指定key对应的内容
uni.getStorage
uni.getStorageSync()

获取当前 storage 的相关信息
uni.getStorageInfo()
uni.getStorageInfoSync()

本地缓存中异步移除指定 key。
uni.removeStorage
uni.removeStorageSync

清理本地数据缓存。
uni.clearStorage()
uni.clearStorageSync()
```

## 设置导航条

```
uni.setNavigationBarTitle
动态设置当前页面的标题。
uni.setNavigationBarColor
设置页面导航条颜色。
uni.showNavigationBarLoading
在当前页面显示导航条加载动画。
uni.hideNavigationBarLoading
在当前页面隐藏导航条加载动画。
```

## 上拉加载

```
首先需要在pages.json中找到当前页面的pages节点并在style中讲enablePullDownRefresh设置为true
监听下拉刷新
	onPullDownRefresh()
关闭下拉刷新特效,一般用于数据获取成功后关闭刷新特效
	uni.stopPullDownRefresh()
```

## 下拉刷新

```

```

## 跨端兼容方案

```
使用条件编译
```

## 交互反馈

```
uni.showToast
	显示消息提示框。
uni.hideToast
	隐藏消息提示框。
uni.showLoading
	显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框。
uni.hideLoading
	隐藏 loading 提示框。
uni.showModal
	显示模态弹窗，类似于标准 html 的消息框：alert、confirm。
uni.showActionSheet
	显示操作菜单
```

## 分享

```
https://uniapp.dcloud.io/api/plugins/share
```

## 使用iconfont字体库

```

```

