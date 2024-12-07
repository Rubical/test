export class Calculator {
	constructor({ currentSelector, previousSelector }) {
		this.current = document.querySelector(currentSelector)
		this.previous = document.querySelector(previousSelector)
		this.currentValue = "0"
		this.previousValue = ""
	}

	#updateDisplay(newCurrentValue, newPreviousValue) {
		this.currentValue = newCurrentValue
		this.current.textContent = this.currentValue

		if (newPreviousValue !== undefined) {
			this.previousValue = newPreviousValue
			this.previous.textContent = this.previousValue
		}
	}

	#formatLongNumber(value) {
		let strValue = value.toString()

		if (strValue.length >= 7) {
			this.current.classList.add("display-current-medium")
		}

		if (strValue.length >= 14) {
			strValue = Number(strValue).toExponential().toString()
			this.current.classList.add("display-current-small")
		}

		if (strValue.length >= 23) {
			return
		}

		return strValue
	}

	#formatField() {
		this.current.classList.remove("display-current-medium")
		this.current.classList.remove("display-current-small")
	}

	#checkForError() {
		if (this.currentValue === "Ошибка") {
			this.clear()
		}
	}

	#endsWithArithmeticSign(value) {
		return /[+\-*/]$/.test(value)
	}

	#isValidValue(value) {
		return (
			value !== undefined &&
			value !== null &&
			this.currentValue.length < 14 &&
			!(this.currentValue.includes(".") && value === ".")
		)
	}

	updateValue(value) {
		this.#checkForError()

		if (!this.#isValidValue(value)) return

		if (this.previousValue.includes("=")) {
			this.clear()
		}

		const newValue =
			this.currentValue === "0" && value !== "."
				? value
				: this.currentValue + value

		this.#updateDisplay(newValue)

		this.currentValue.length >= 9
			? this.current.classList.add("display-current-medium")
			: null
	}

	clear() {
		this.#updateDisplay("0", "")
		this.#formatField()
	}

	changeSign() {
		this.#checkForError()

		if (this.currentValue !== "0") {
			this.#updateDisplay(String(-this.currentValue))
		}
	}

	getPercent() {
		this.#checkForError()
		this.#updateDisplay(
			this.#formatLongNumber(this.currentValue / 100),
			this.currentValue + "%"
		)
	}

	doArithmetic(value) {
		this.#checkForError()
		this.#formatField()

		if (this.currentValue && this.previousValue) {
			this.calculate()
			this.#updateDisplay("0", this.currentValue + value)
		} else if (this.previousValue.includes("=")) {
			this.#updateDisplay("0", this.currentValue + value)
		} else if (this.#endsWithArithmeticSign(this.previousValue)) {
			this.#updateDisplay(
				this.currentValue,
				this.previousValue.slice(0, -1) + value
			)
		} else {
			this.#updateDisplay("0", (this.currentValue += value))
		}
	}

	calculate() {
		this.#checkForError()

		if (this.previousValue.endsWith("=") || this.previousValue.endsWith("%")) {
			return
		}

		if (this.previousValue.endsWith("/") && this.currentValue === "0") {
			this.#updateDisplay("Ошибка", "")
			return
		}

		const result = new Function(
			`return ${(this.previousValue + this.currentValue).replace(/--/g, "+")}`
		)()

		this.#updateDisplay(
			this.#formatLongNumber(result),
			this.previousValue + this.currentValue + "="
		)
	}
}
