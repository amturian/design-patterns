let instance = null;

class SingletonExample {
	constructor() {
		instance = this;
		this.createdAt = new Date();
		return instance;
	}
}

function getInstance() {
	if (!instance) {
		instance = new SingletonExample();
	}
	return instance;
};

module.exports = {getInstance};