interface AbstractBenefits {
	show(): string;
}

class StaffBenefits implements AbstractBenefits {
	public show(): string {
		return 'Staff have full benefits: medical subscription, sport subscription and 5 extra annual day leaves';
	}
}

class ConsultantBenefits implements AbstractBenefits {
	public show(): string {
		return 'Consultants have 1 extra annual day';
	}
}

interface AbstractAccounts {
	show(): string;
}

class StaffAccounts implements AbstractAccounts {
	public show(): string {
		return 'Staff have Jira, BitBucket, Yammer, Pluralsight accounts';
	}
}

class ConsultantAccounts implements AbstractAccounts {
	public show(): string {
		return 'Consultants have Jira and BitBucket';
	}
}

abstract class EmployeeAbstractFactory { 
	abstract createAccounts();
	abstract createBenefits();
}

class StaffFactory extends EmployeeAbstractFactory {
	public createAccounts(): AbstractAccounts {
		return new StaffAccounts();
	}

	public createBenefits(): AbstractBenefits {
		return new StaffBenefits();
	}
}

class ConsultantFactory extends EmployeeAbstractFactory {
	public createAccounts(): AbstractAccounts {
		return new ConsultantAccounts();
	}

	public createBenefits(): AbstractBenefits {
		return new ConsultantBenefits();
	}
}

function clientCode(factory: EmployeeAbstractFactory) {
	const benefits = factory.createBenefits();
	const accounts = factory.createAccounts();

	console.log(benefits.show());
	console.log(accounts.show());
}

clientCode(new StaffFactory());
clientCode(new ConsultantFactory());