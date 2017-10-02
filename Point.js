var Point = function(initIn, y, z) {
	var init = {}
	if(typeof init === 'undefined')
	{
		init.x = 0;
		init.y = 0;
		init.z = 0;
	}
	else if(typeof z !== 'undefined')
	{
		var obj = {x:initIn, y:y, z:z};
		init = obj;
	}
	else {
		init.x = initIn.x;
		init.y = initIn.y;
		init.z = initIn.z;
	}
	var exports = {
		x:init.x,y:init.y,z:init.z,
		type: 'Point',
		distance: function(p) {
			if(typeof p === 'undefined')
				return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
			if(typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number')
				return Math.sqrt((p.x-this.x)*(p.x-this.x) + (p.y-this.y)*(p.y-this.y) + (p.z-this.z)*(p.z-this.z));
			return {message: 'invalid input to distance function', name:'input'};
		},
		add: function(p) {
			if(typeof p !== 'object' || p.type !== 'Point')
				return {message: 'invalid input to distance function', name:'input'};
			return Point(this.x+p.x,this.y+p.y,this.z+p.z);
		},
		subtract: function(p) {
			if(typeof p !== 'object' || p.type !== 'Point')
				return {message: 'invalid input to distance function', name:'input'};
			return Point(this.x-p.x,this.y-p.y,this.z-p.z);
		},
		multiply: function(c) {
			if(typeof c != 'number')
				return {message: 'invalid input to distance function', name:'input'};
			return Point(this.x*c, this.y*c, this.z*c);
		},
		toString: function() {
			return "(" + this.x + "," + this.y + "," + this.z + ")";
		}
	};
	return exports;
};
