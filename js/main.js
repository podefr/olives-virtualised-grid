require(["Store", "OObject","Bind.plugin", "Event.plugin"],

function (Store, OObject, Bind, Event) {

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

	for (; i<100000; i++) {
		data.push({
			"tradeId" : i,
			"direction": pick(["Buy", "Sell"]),
			"baseCCY": pick(["USD", "EUR", "GBP"]),
			"variableCCY": pick(["JPY", "AUD", "CHF"]),
			"rate": "1." + Math.floor(Math.random() * 1000),
			"valueDate": (new Date().getTime())
		});
	}

	list = new OObject(new Store(data));

	bind = new Bind(list.model, {
		formatDate: function (timestamp) {
			this.innerHTML = new Date(timestamp).toISOString();
		}
	});

	list.plugins.addAll({
		"model": bind,
		"event": new Event(list)
	});

	list.alive(view);

	document.querySelector(".container").onscroll = moveToIndex;

});
