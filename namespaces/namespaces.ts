namespace Validation {

	export interface StringValidator {
		isAcceptable(s: string): boolean
	}

	/* Match any null terminated non-space separated string */
	const lettersRegexp = /^[A-Za-z]+$/;
	/* Match any number in a null terminated non-space separated string*/
	const numberRegexp = /^[0-9]+$/

	export class LettersOnlyValidator implements StringValidator {
		isAcceptable(s: string) {
			return lettersRegexp.test(s);
		}
	}

	export class ZipCodeValidator implements StringValidator {
		isAcceptable(s: string) {
			return s.length === 5 && numberRegexp.test(s);
		}
	}

}

let strings = ["Hello", "98052", "101"];

let validators: { [s: string]: Validation.StringValidator; } = {};

validators["zipCode"] = new Validation.ZipCodeValidator();
validators["lettersOnly"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
	for (let name in validators) {
		let isMatch = validators[name].isAcceptable(s);
		console.log(`'${s}' ${ isMatch ? "matches" : "doesn't match" } '${ name }'`);
		}
}


