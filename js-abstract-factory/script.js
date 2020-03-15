const MEDICAL_INSURANCE_PER_MONTH = 200;
const SPORT_MEMBERSHIP_PER_MONTH = 100;

function Staff(name, hourlyRate) {
	this.name = name; 
	this.hourlyRate = hourlyRate;
	this.benefits = "staff benefits"; 

	this.getSalary = () => {
		const workHours = getWorkHours();
		console.log('Being a staff, the salary includes sport membership and medical insurance costs, besides the normal rate.')
		return hourlyRate * workHours + SPORT_MEMBERSHIP_PER_MONTH + MEDICAL_INSURANCE_PER_MONTH;
	}

	this.getBenefits = () => {
		console.log('sport', 'medical insurance', '5 extra days for annual leave');
	}
}

function Consultant(name, hourlyRate) {
	this.name = name; 
	this.hourlyRate = hourlyRate;

	this.getSalary = () => {
		const workHours = getWorkHours();
		console.log('Being a consultant, the salary does not include sport membership or medical insurance costs.')
		return hourlyRate * workHours;
	}

	this.getBenefits = () => {
		console.log('1 extra day for annual leave');
	}
}

// abstract factory; based on external configuration, it can instantiate a factory or another
class EmployeeFactory {
	constructor(type) {
		if (type === 'staff') return new StaffFactory();
		if (type === 'consultant') return new ConsultantFactory();
	}
	create() { throw new Error('Abstract method create is not implemented.')}
}

// concrete factory for staff
class StaffFactory extends EmployeeFactory {
	create = function(name, hourlyRate) {
		return new Staff(name, hourlyRate);
	}
}

// concrete factory for consultants
class ConsultantFactory extends EmployeeFactory {
	create = function(name, hourlyRate) {
		return new Consultant(name, hourlyRate);
	}
}

// returns how many working hours the employee had in the current month
function getWorkHours(employee) {
	// TODO: implement a way to compute how many hours the employee worked, including public holidays, medical leave, annual leave
	// Will use a random number just to have a simple example
	return 20;
}

let employeeFactory = new EmployeeFactory('staff'); // handle staff employees
// let employeeFactory = new EmployeeFactory('consultant'); // handle consultant employees

let employees = [];
employees.push(employeeFactory.create('John Michell', 20));
employees.push(employeeFactory.create('Alexandra Turian', 15));

employees.forEach(e => e.getSalary());
