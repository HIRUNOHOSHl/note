/*滚动函数
	两个参数
		第一个参数	dom 传入节点对象
		第二个参数  传入回调函数
				回调函数的形参 evnt 	direction
				event是事件对象 direction是方向和滚动速度
				回调函数return false 阻止默认事件
*/
function mouseWheel(dom, eFn){
	function fn(e){
		e = e || window.event;
		var direction = e.wheelDelta / 120 || -e.detail / 3;
		eFn.call(dom,e,direction) === false && dom.addEventListener?e.preventDefault():e.returnValue = false;
	}
	var type = dom.onmousewheel === null ? "mousewheel":"DOMMouseScroll";
	dom.addEventListener?dom.addEventListener(type, fn):dom.attachEvent("on"+type, fn);
}
