##An example of infinite scroll using Olives

Demo page : file:///Users/olivierscherrer/Documents/workspace/olives-infinite-scroll/index.html


This is a simple example of an application using the virtualisation feature of the data-binding plugin.

It's based on Emily, Olives, and require.js for loading each module.

### The html for generating the grid

```html
<table>
	<thead>
		<tr>
			<td>#ID</td>
			<td>Continent</td>
			<td>Color</td>
			<td>Quantity</td>
			<td>Date</td>
		</tr>
	</thead>
	<tbody data-model="foreach: list,0,9">
		<tr>
			<td data-model="bind: innerHTML, id"></td>
			<td data-model="bind: innerHTML, continent"></td>
			<td data-model="bind: innerHTML, color"></td>
			<td data-model="bind: innerHTML, quantity"></td>
			<td data-model="bind: formatDate, date"></td>
		</tr>
	</tbody>
</table>
```

### The 100,000 rows

```js
for (; i<100000; i++) {
	data.push({
		"id" : i,
		"continent": pick(["North America", "Europe", "South America", "Africa", "Antartica", "Australia", "Asia"]),
		"color": pick(["yellow", "red", "lightblue"]),
		"quantity": Math.floor(Math.random() * 100000),
		"date": (new Date().getTime())
	});
}
```

### The js for applying the data to the HTML

```js
new Bind(list.model, {
	formatDate: function (timestamp) {
		this.innerHTML = new Date(timestamp).toISOString();
	}
});
```


