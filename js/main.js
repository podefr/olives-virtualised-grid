require(["Store", "Olives/OObject","Olives/Model-plugin"],
		
function (Store, OObject, ModelPlugin) {

	var data = [],
		modelPlugin,
		i = 0,
		list;
	
	for (; i<100000; i++) {
		data.push("row #" + i);
	}

	list = new OObject(new Store(data));
	
	modelPlugin = new ModelPlugin(list.model);

	list.plugins.add("model", modelPlugin);
	
	list.alive(document.querySelector(".container"));

	/**
	 * ls = modelPlugin.getItemRenderer("list")
	 * ls.setStart( increase value )
	 * ls.render();
	 * 
	 * 
	 */
	
});