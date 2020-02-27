const Tile = function(name, type='') {
	this.name = name;
	this.type = type;
}

// any tile, regardless of the content or the name has to pe expanded, dragged/dropped in the same in the UI
// all tiles will load data based on their types: if empty, all bils will be loaded from BE, else only bills with given type will be retrieved 

Tile.prototype.expand = function() {
	console.log('Write some code here to expand the tile.');
}

Tile.prototype.drag = function() {
	console.log('Start dragging the tile.');
}

Tile.prototype.drop = function() {
	console.log('Stop dragging and drop tile here.');
}

// UI will decide when to load data; for instance, if you're using React, you can load data for all tiles on componentDidMount hook
Tile.prototype.loadData = function() {
	console.log('Load data from server with query param type=this.type');
}

// in order not to have an empty dashboard, user can pe presented a default tile
// default tile should be saved in UI 
function createDefaultTile() {
	this.defaultTile = new Tile('All pending utilities bills');
	return this.defaultTile; 
}

// function should be called when user confirms the adding of a new tile; can be done through a modal
function createNewTile(name='', type='') {
	let tile = Object.create(this.defaultTile); // similar to clone method from Clonable interface in Java
	if (name) { // will be taken from UI input (e.g. 'Electricity bill')
		tile.name = name;
	} 
	if (type) { // will be taken from UI dropdown (e.g. 'electricity'); will be used as a query param when loading data from server
		tile.type = type;
	}
	// will have default name and type if none given
	// see prototype inheritance in JavaScript
	// if a property is not found on first level object properties (see hasOwnProperty), will take the value from prototype (__proto__) if exists
	return tile;
}

let defaultTile = createDefaultTile();
let electricityTile = createNewTile('My electricity bills', 'electricity');
let defaultTileClone = createNewTile();

console.log('Both tile have the same reference to method drag', defaultTile.drag === electricityTile.drag);
console.log('Same instances? ' , defaultTileClone === defaultTile, ' Same name? ' , defaultTileClone.name === defaultTile.name);

// TODO: create UI for this script, in chosen framwork or using plain HTML and CSS