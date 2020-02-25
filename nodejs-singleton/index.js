const singletonExample = require('./singleton.js');

const instance = singletonExample.getInstance();
console.log('Instance was created at: ', instance.createdAt);

setTimeout(function () {
	console.log('Will attempt to create another instance...');
  	const anotherInstance = singletonExample.getInstance();
  	console.log('Another instance was created at ', anotherInstance.createdAt);
  	console.log('Look at the time. Is it really another instance?');
}, 2000);