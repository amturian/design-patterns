/**
* Employee "class" definition 
* Be aware that there are no classes in JavaScript, in the way that they are defined in OOP languages
* In JavaScript classes are just "special functions"
* DOCS: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
* https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
*/
function Employee(id, firstName, lastName) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
}

/**
* Employee LDAP Adapter
* @param {object} ldapEmployee - employee from LDAP whose format has to be converted to be understood by the client application
* @returns {Employee} - employee
*/
function EmployeeAdapter(ldapEmployee) {
	let [firstName, lastName] = ldapEmployee.name.split(' ');
	return new Employee(ldapEmployee.cn, firstName, lastName);
} 

/**
* Retrieve employees from BE
* Employees from BE are in a desired format understood by the client application
* @returns {Employee[]} - list of employees 
*/
function getEmployeesFromBE() {
	return [
		new Employee('123qwe', 'Samantha', 'Beck'),
		new Employee('456tyu', 'Sigmund', 'Dune')
	];
}

/**
* Retrieve employees from LDAP
* Employees from LDAP are not in the desired format, they will have to be converted to fit the client application
* @returns {object[]} - list of employees from LDAP
*/
function getEmployeesFromLdap() {
	return [
		{cn: '45', name: 'Logan Bay'},
		{cn: '67', name: 'Frank Joseph'}
	];
}

// client code; has business logic

let employeesFromBe = getEmployeesFromBE();
let employeesFromLdap = getEmployeesFromLdap();

// put together all employees using concat function
// map all employees to have the same format that the client application understands
let employees = employeesFromBe.concat(employeesFromLdap).map(e => e instanceof Employee ? e : EmployeeAdapter(e))

// employees is an array of Employees, can be processed further (e.g.: show employees in a list using HTML)
console.log(employees);

