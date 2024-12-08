const container = document.querySelector(".container")
const calculator = document.querySelector(".calculator")
const themeButton = document.querySelector(".theme-button")
const moonIcon = document.querySelector(".button-icon-moon")
const sunIcon = document.querySelector(".button-icon-sun")
const keys = document.querySelectorAll(".key")
const functionKeys = document.querySelectorAll(".function-key")
const operationKeys = document.querySelectorAll(".operation-key")

export class ThemeController {
	constructor() {
		this.nightTheme = false
	}

	changeTheme() {
		this.nightTheme = !this.nightTheme
		localStorage.setItem("theme", this.nightTheme ? "dark" : "light")

		moonIcon.classList.toggle("button-icon-moon_hidden")
		sunIcon.classList.toggle("button-icon-sun_hidden")
		container.classList.toggle("container_dark-theme")
		calculator.classList.toggle("calculator_dark-theme")
		themeButton.classList.toggle("theme-button_dark-theme")

		keys.forEach((key) => {
			key.classList.toggle("key_dark-theme")
		})
		functionKeys.forEach((key) => {
			key.classList.toggle("function-key_dark-theme")
		})
		operationKeys.forEach((key) => {
			key.classList.toggle("operation-key_dark-theme")
		})
	}
}
