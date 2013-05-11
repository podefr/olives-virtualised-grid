require(["Store", "OObject","Bind.plugin", "Event.plugin"],

function (Store, OObject, Bind, Event) {

	var data = [],
		bind,
		i = 0,
		ptr = 0,
		list,
		move = function (idx) {
			ls = bind.getItemRenderer("list");
			ls.setStart(idx);
			ls.render();
		},
		view = document.querySelector(".container");

	for (; i<100000; i++) {
		data.push("row #" + i);
	}

	list = new OObject(new Store(data));

	bind = new Bind(list.model);

	list.plugins.addAll({
		"model": bind,
		"event": new Event(list)
	});

	list.alive(view);

	list.moveUp = function moveUp() {
		move(++ptr);
	};

	list.moveDown = function moveDown() {
		(ptr > 0) && move(--ptr);
	};

	list.jump = function jump(event) {
		event.preventDefault();
		move(ptr = view.querySelector("input[type='text']").value);
	};

});
