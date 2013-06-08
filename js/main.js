require(["Store", "OObject","Bind.plugin"],

function (Store, OObject, Bind) {

	var data = [],
		bind,
		i = 0,
		ptr = 0,
		list,
		view = document.querySelector(".container");

	function move(idx) {
		var ls = bind.getItemRenderer("list");
		ls.setStart(idx);
		ls.render();
	}

	function moveToIndex() {
		move(Math.floor(this.scrollTop / 20));
	}

	function pick(array) {
		return array[Math.floor(Math.random() * array.length)]
	}

	for (; i<=1000000; i++) {
		data.push({
			"id" : i,
			"continent": pick(["North America", "Europe", "South America", "Africa", "Antartica", "Australia", "Asia"]),
			"color": pick(["yellow", "red", "lightblue"]),
			"quantity1": Math.floor(Math.random() * 100000),
			"quantity2": Math.floor(Math.random() * 100000),
			"quantity3": Math.floor(Math.random() * 100000),
			"quantity4": Math.floor(Math.random() * 100000),
			"date": (new Date().getTime()),
			"fruit": pick(["banana", "apple", "pear"]),
			"name": pick(["olivier", "pierre", "lucien"])
		});
	}

	list = new OObject(new Store(data));

	bind = new Bind(list.model, {
		formatDate: function (timestamp) {
			this.innerHTML = new Date(timestamp).toISOString();
		}
	});

	list.plugins.addAll({
		"model": bind
	});

	list.alive(view);

	document.querySelector(".container").onscroll = moveToIndex;

});
