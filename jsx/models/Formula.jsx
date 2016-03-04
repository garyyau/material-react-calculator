'use strict';


class Formula {
	constructor() {
		this.formula = "";
	}
	getFormula() {
		return this.formula;
	}
	updateFormula(formula) {
		this.formula = formula;
	}
	toString() {
		return "2 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1";
	}
}

export default Formula;