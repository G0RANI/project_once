function initMoving(target, position, topLimit, btmLimit) {
	if (!target)
		return false;

	var obj = target;
	var initTop = position;
	var bottomLimit = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - btmLimit - obj.offsetHeight;
	var top = initTop;

	obj.style.position = 'absolute';

	if (typeof(window.pageYOffset) == 'number') {	//WebKit
		var getTop = function() {
			return window.pageYOffset;
		}
	} else if (typeof(document.documentElement.scrollTop) == 'number') {
		var getTop = function() {
			return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
		}
	} else {
		var getTop = function() {
			return 0;
		}
	}

	if (self.innerHeight) {	//WebKit
		var getHeight = function() {
			return self.innerHeight;
		}
	} else if(document.documentElement.clientHeight) {
		var getHeight = function() {
			return document.documentElement.clientHeight;
		}
	} else {
		var getHeight = function() {
			return 500;
		}
	}

	function move() {
		if (initTop > 0) {
			pos = getTop() + initTop;
		} else {
			pos = getTop() + getHeight() + initTop;
		}

		if (pos > bottomLimit)
			pos = bottomLimit;
		if (pos < topLimit)
			pos = topLimit;

		interval = top - pos;
		top = top - interval / 3;
		obj.style.top = top + 'px';

		window.setTimeout(function () {
			move();
		}, 25);
	}

	function addEvent(obj, type, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(type, fn, false);
		} else if (obj.attachEvent) {
			obj['e' + type + fn] = fn;
			obj[type + fn] = function() {
				obj['e' + type + fn](window.event);
			}
			obj.attachEvent('on' + type, obj[type + fn]);
		}
	}

	addEvent(window, 'load', function () {
		move();
	});
}