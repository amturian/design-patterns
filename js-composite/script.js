// This example can easily be converted into a small react application
// For simplicity, I used JavaScript, please feel free to extend it

// Handle a file explorer component 
// File structure can be obtained using this npm package: https://www.npmjs.com/package/dree
// I am going to use a hardcoded value taken from the package documentation 

// Files are leafs
function File(file) {
	this.file = file;
	this.render = () => {
		console.log('Render file icon.');
		console.log('Render filename', file.name);
	}
}

// Directories are composites
function Directory(directory) {
	this.children = directory.children;
	this.render = () => {
		console.log('Render directory icon.');
		console.log('Render directory name', directory.name);
		console.log('Render files and subdirectories...');
		this.children.forEach(node => {
			if (node.type === 'directory') {
				let directory = new Directory(node);
				directory.render();
			} else {
				let file = new File(node);
				file.render();
			}
		});
	}
}

// Main component
let component = new Directory(dirTree);
component.render();

const dirTree = {
  "name": "sample",
  "path": "D:/Github/dree/test/sample",
  "relativePath": ".",
  "type": "directory",
  "isSymbolicLink": false,
  "size": "1.79 MB",
  "children": [
    {
      "name": "backend",
      "path": "D:/Github/dree/test/sample/backend",
      "relativePath": "backend",
      "type": "directory",
      "isSymbolicLink": false,
      "size": "1.79 MB",
      "children": [
        {
          "name": "firebase.json",
          "path": "D:/Github/dree/test/sample/backend/firebase.json",
          "relativePath": "backend/firebase.json",
          "type": "file",
          "isSymbolicLink": false,
          "extension": "json",
          "size": "29 B"
        }, 
        {
          "name": "server",
          "path": "D:/Github/dree/test/sample/backend/server",
          "relativePath": "backend/server",
          "type": "directory",
          "isSymbolicLink": false,
          "size": "1.79 MB",
          "children": [
            {
              "name": "server.ts",
              "path": "D:/Github/dree/test/sample/backend/server/server.ts",
              "relativePath": "backend/server/server.ts",
              "type": "file",
              "isSymbolicLink": false,
              "extension": "ts",
              "size": "1.79 MB"
            }
          ]
        }
      ]
    }
  ]
};