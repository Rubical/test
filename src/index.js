import "./styles/reset.css"
import "./styles/styles.css"
import "./js/theme.js"
import "./js/calculator.js"
import { Calculator } from "./js/calculator.js"
import { ThemeController } from "./js/theme"

const keypad = document.querySelector(".keypad")
const themeButton = document.querySelector(".theme-button")
const calculator = new Calculator({
	currentSelector: ".display-current",
	previousSelector: ".display-previous-result"
})
const themeController = new ThemeController()

// Theme setting

window.addEventListener("load", () => {
	const savedTheme = localStorage.getItem("theme")
	const systemPrefersDark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches

	if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
		themeController.changeTheme()
	}
})

themeButton.addEventListener("click", () => {
	themeController.changeTheme()
	themeButton.blur()
})

// Calculator functionality with buttons from screen

keypad.addEventListener("click", e => {
	if (!e.target.dataset.action) {
		const value = e.target.dataset.value
		calculator.updateValue(value)
	} else if (e.target.dataset.action === "doArithmetic") {
		const actionValue = e.target.dataset.value
		calculator.doArithmetic(actionValue)
	} else {
		const action = e.target.dataset.action
		calculator[action]()
	}
})

// Calculator functionality with buttons from keyboard

document.addEventListener("keydown", e => {
	const key = e.key

	if (!isNaN(parseInt(key))) {
		calculator.updateValue(key)
	}

	if (key === "." || key === ",") {
		calculator.updateValue(".")
	}

	if (key === "Backspace") {
		calculator.clear()
	}

	if (key === "%") {
		calculator.getPercent()
	}

	const operatorMap = {
		"+": "+",
		"-": "-",
		"*": "*",
		"/": "/"
	}

	if (operatorMap[key]) {
		calculator.doArithmetic(operatorMap[key])
	}

	if (key === "=") {
		calculator.calculate()
	}
})
