;(() => {
	"use strict"
	var t = {
			993: (t, n, e) => {
				e.d(n, { A: () => s })
				var r = e(601),
					o = e.n(r),
					i = e(314),
					a = e.n(i)()(o())
				a.push([
					t.id,
					'/* Reset and base styles  */\n* {\n\tpadding: 0px;\n\tmargin: 0px;\n\tborder: none;\n}\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n:focus,\n:active {\n\t/*outline: none;*/\n}\n\na:focus,\na:active {\n\t/* outline: none;*/\n}\n\n/* Links */\n\na,\na:link,\na:visited {\n\t/* color: inherit; */\n\ttext-decoration: none;\n\t/* display: inline-block; */\n}\n\na:hover {\n\t/* color: inherit; */\n\ttext-decoration: none;\n}\n\n/* Common */\n\naside,\nnav,\nfooter,\nheader,\nsection,\nmain {\n\tdisplay: block;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n\tfont-size: inherit;\n\tfont-weight: inherit;\n}\n\nul,\nul li {\n\tlist-style: none;\n}\n\nimg {\n\tvertical-align: top;\n}\n\nimg,\nsvg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\naddress {\n\tfont-style: normal;\n}\n\n/* Form */\n\ninput,\ntextarea,\nbutton,\nselect {\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tcolor: inherit;\n\tbackground-color: transparent;\n}\n\ninput::-ms-clear {\n\tdisplay: none;\n}\n\nbutton,\ninput[type="submit"] {\n\tdisplay: inline-block;\n\tbox-shadow: none;\n\tbackground-color: transparent;\n\tbackground: none;\n\tcursor: pointer;\n}\n\ninput:focus,\ninput:active,\nbutton:focus,\nbutton:active {\n\toutline: none;\n}\n\nbutton::-moz-focus-inner {\n\tpadding: 0;\n\tborder: 0;\n}\n\nlabel {\n\tcursor: pointer;\n}\n\nlegend {\n\tdisplay: block;\n}\n',
					""
				])
				const s = a
			},
			159: (t, n, e) => {
				e.d(n, { A: () => s })
				var r = e(601),
					o = e.n(r),
					i = e(314),
					a = e.n(i)()(o())
				a.push([
					t.id,
					".container {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-family: Roboto, sans-serif;\n}\n\n.container_dark-theme {\n\tbackground-color: #333;\n}\n\n.calculator {\n\theight: 500px;\n\twidth: 350px;\n\tbox-sizing: content-box;\n\tbackground-color: #535353;\n\tbox-shadow: 0 0 30px #0000009c;\n\tborder: 1px solid #585858;\n\tborder-radius: 20px;\n\tuser-select: none;\n}\n\n.calculator_dark-theme {\n\tbackground-color: #7d7d7d;\n}\n\n.theme-button {\n\theight: 30px;\n\twidth: 70px;\n\tmargin: 20px 0 0 20px;\n\tbackground-color: #00000036;\n\tborder-radius: 20px;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\toverflow: hidden;\n}\n\n.theme-button_dark-theme {\n\tbackground-color: #636363ab;\n}\n\n.button-icon {\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 5px;\n\tbackground-color: #00000036;\n\tborder-radius: 20px;\n\ttransition: all 0.5s ease-in-out;\n\tposition: absolute;\n}\n\n.button-icon-moon {\n\tright: 0;\n\tcolor: white;\n}\n\n.button-icon-moon_hidden {\n\topacity: 0;\n\ttransform: translateX(-70px) rotate(-360deg);\n}\n\n.button-icon-sun {\n\tleft: 0;\n\tcolor: white;\n}\n\n.button-icon-sun_hidden {\n\topacity: 0;\n\ttransform: translateX(70px) rotate(360deg);\n}\n\n.display {\n\theight: 100px;\n\twidth: 350px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: flex-end;\n\tpadding: 0 10px;\n\tcolor: white;\n\twhite-space: nowrap;\n\toverflow: hidden;\n}\n\n.display-previous-result {\n\theight: 20px;\n\tfont-size: 15px;\n}\n\n.display-current {\n\theight: 80px;\n\tfont-size: 60px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.display-current-medium {\n\tfont-size: 40px;\n}\n\n.display-current-small {\n\tfont-size: 28px;\n}\n\n.keypad {\n\theight: 350px;\n\twidth: 350px;\n\tdisplay: grid;\n\tgrid-template: repeat(5, 1fr) / repeat(4, 1fr);\n}\n\n.key {\n\tbackground-color: #7d7d7d;\n\tborder: 1px solid #585858;\n\tcolor: white;\n\tfont-size: 30px;\n\tgrid-column: span 1;\n}\n\n.key_dark-theme {\n\tbackground-color: #6b6b6b;\n\tborder: 1px solid #474747;\n}\n\n.key:hover {\n\topacity: 0.8;\n}\n\n.key:active {\n\topacity: 0.5;\n}\n\n.zero-key {\n\tgrid-column: span 2;\n\tborder-bottom-left-radius: 20px;\n}\n\n.equals-key {\n\tborder-bottom-right-radius: 20px;\n}\n\n.function-key {\n\tbackground-color: #646464;\n}\n\n.function-key_dark-theme {\n\tbackground-color: #595959;\n}\n\n.operation-key {\n\tbackground-color: #ff9f0a;\n}\n\n.operation-key_dark-theme {\n\tbackground-color: #fc8b04;\n}\n",
					""
				])
				const s = a
			},
			314: (t) => {
				t.exports = function (t) {
					var n = []
					return (
						(n.toString = function () {
							return this.map(function (n) {
								var e = "",
									r = void 0 !== n[5]
								return (
									n[4] && (e += "@supports (".concat(n[4], ") {")),
									n[2] && (e += "@media ".concat(n[2], " {")),
									r && (e += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")),
									(e += t(n)),
									r && (e += "}"),
									n[2] && (e += "}"),
									n[4] && (e += "}"),
									e
								)
							}).join("")
						}),
						(n.i = function (t, e, r, o, i) {
							"string" == typeof t && (t = [[null, t, void 0]])
							var a = {}
							if (r)
								for (var s = 0; s < this.length; s++) {
									var c = this[s][0]
									null != c && (a[c] = !0)
								}
							for (var u = 0; u < t.length; u++) {
								var l = [].concat(t[u])
								;(r && a[l[0]]) ||
									(void 0 !== i &&
										(void 0 === l[5] ||
											(l[1] = "@layer"
												.concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
												.concat(l[1], "}")),
										(l[5] = i)),
									e &&
										(l[2]
											? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")), (l[2] = e))
											: (l[2] = e)),
									o &&
										(l[4]
											? ((l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}")), (l[4] = o))
											: (l[4] = "".concat(o))),
									n.push(l))
							}
						}),
						n
					)
				}
			},
			601: (t) => {
				t.exports = function (t) {
					return t[1]
				}
			},
			72: (t) => {
				var n = []
				function e(t) {
					for (var e = -1, r = 0; r < n.length; r++)
						if (n[r].identifier === t) {
							e = r
							break
						}
					return e
				}
				function r(t, r) {
					for (var i = {}, a = [], s = 0; s < t.length; s++) {
						var c = t[s],
							u = r.base ? c[0] + r.base : c[0],
							l = i[u] || 0,
							d = "".concat(u, " ").concat(l)
						i[u] = l + 1
						var h = e(d),
							p = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] }
						if (-1 !== h) n[h].references++, n[h].updater(p)
						else {
							var m = o(p, r)
							;(r.byIndex = s), n.splice(s, 0, { identifier: d, updater: m, references: 1 })
						}
						a.push(d)
					}
					return a
				}
				function o(t, n) {
					var e = n.domAPI(n)
					return (
						e.update(t),
						function (n) {
							if (n) {
								if (
									n.css === t.css &&
									n.media === t.media &&
									n.sourceMap === t.sourceMap &&
									n.supports === t.supports &&
									n.layer === t.layer
								)
									return
								e.update((t = n))
							} else e.remove()
						}
					)
				}
				t.exports = function (t, o) {
					var i = r((t = t || []), (o = o || {}))
					return function (t) {
						t = t || []
						for (var a = 0; a < i.length; a++) {
							var s = e(i[a])
							n[s].references--
						}
						for (var c = r(t, o), u = 0; u < i.length; u++) {
							var l = e(i[u])
							0 === n[l].references && (n[l].updater(), n.splice(l, 1))
						}
						i = c
					}
				}
			},
			659: (t) => {
				var n = {}
				t.exports = function (t, e) {
					var r = (function (t) {
						if (void 0 === n[t]) {
							var e = document.querySelector(t)
							if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
								try {
									e = e.contentDocument.head
								} catch (t) {
									e = null
								}
							n[t] = e
						}
						return n[t]
					})(t)
					if (!r)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						)
					r.appendChild(e)
				}
			},
			540: (t) => {
				t.exports = function (t) {
					var n = document.createElement("style")
					return t.setAttributes(n, t.attributes), t.insert(n, t.options), n
				}
			},
			56: (t, n, e) => {
				t.exports = function (t) {
					var n = e.nc
					n && t.setAttribute("nonce", n)
				}
			},
			825: (t) => {
				t.exports = function (t) {
					if ("undefined" == typeof document)
						return { update: function () {}, remove: function () {} }
					var n = t.insertStyleElement(t)
					return {
						update: function (e) {
							!(function (t, n, e) {
								var r = ""
								e.supports && (r += "@supports (".concat(e.supports, ") {")),
									e.media && (r += "@media ".concat(e.media, " {"))
								var o = void 0 !== e.layer
								o && (r += "@layer".concat(e.layer.length > 0 ? " ".concat(e.layer) : "", " {")),
									(r += e.css),
									o && (r += "}"),
									e.media && (r += "}"),
									e.supports && (r += "}")
								var i = e.sourceMap
								i &&
									"undefined" != typeof btoa &&
									(r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
										btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
										" */"
									)),
									n.styleTagTransform(r, t, n.options)
							})(n, t, e)
						},
						remove: function () {
							!(function (t) {
								if (null === t.parentNode) return !1
								t.parentNode.removeChild(t)
							})(n)
						}
					}
				}
			},
			113: (t) => {
				t.exports = function (t, n) {
					if (n.styleSheet) n.styleSheet.cssText = t
					else {
						for (; n.firstChild; ) n.removeChild(n.firstChild)
						n.appendChild(document.createTextNode(t))
					}
				}
			}
		},
		n = {}
	function e(r) {
		var o = n[r]
		if (void 0 !== o) return o.exports
		var i = (n[r] = { id: r, exports: {} })
		return t[r](i, i.exports, e), i.exports
	}
	;(e.n = (t) => {
		var n = t && t.__esModule ? () => t.default : () => t
		return e.d(n, { a: n }), n
	}),
		(e.d = (t, n) => {
			for (var r in n)
				e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: n[r] })
		}),
		(e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
		(e.nc = void 0)
	var r = e(72),
		o = e.n(r),
		i = e(825),
		a = e.n(i),
		s = e(659),
		c = e.n(s),
		u = e(56),
		l = e.n(u),
		d = e(540),
		h = e.n(d),
		p = e(113),
		m = e.n(p),
		f = e(993),
		g = {}
	;(g.styleTagTransform = m()),
		(g.setAttributes = l()),
		(g.insert = c().bind(null, "head")),
		(g.domAPI = a()),
		(g.insertStyleElement = h()),
		o()(f.A, g),
		f.A && f.A.locals && f.A.locals
	var y = e(159),
		v = {}
	;(v.styleTagTransform = m()),
		(v.setAttributes = l()),
		(v.insert = c().bind(null, "head")),
		(v.domAPI = a()),
		(v.insertStyleElement = h()),
		o()(y.A, v),
		y.A && y.A.locals && y.A.locals
	const b = document.querySelector(".container"),
		x = document.querySelector(".calculator"),
		k = document.querySelector(".theme-button"),
		V = document.querySelector(".button-icon-moon"),
		w = document.querySelector(".button-icon-sun"),
		S = document.querySelectorAll(".key"),
		A = document.querySelectorAll(".function-key"),
		L = document.querySelectorAll(".operation-key"),
		E = document.querySelector(".keypad"),
		T = document.querySelector(".theme-button"),
		_ = new (class {
			constructor({ currentSelector: t, previousSelector: n }) {
				;(this.current = document.querySelector(t)),
					(this.previous = document.querySelector(n)),
					(this.currentValue = "0"),
					(this.previousValue = "")
			}
			#t(t, n) {
				;(this.currentValue = t),
					(this.current.textContent = this.currentValue),
					void 0 !== n &&
						((this.previousValue = n), (this.previous.textContent = this.previousValue))
			}
			#n(t) {
				let n = t.toString()
				if (
					(n.length >= 7 && this.current.classList.add("display-current-medium"),
					n.length >= 14 &&
						((n = Number(n).toExponential().toString()),
						this.current.classList.add("display-current-small")),
					!(n.length >= 23))
				)
					return n
			}
			#e() {
				this.current.classList.remove("display-current-medium"),
					this.current.classList.remove("display-current-small")
			}
			#r() {
				"Ошибка" === this.currentValue && this.clear()
			}
			#o(t) {
				return /[+\-*/]$/.test(t)
			}
			#i(t) {
				return (
					null != t &&
					this.currentValue.length < 14 &&
					!(this.currentValue.includes(".") && "." === t)
				)
			}
			updateValue(t) {
				if ((this.#r(), !this.#i(t))) return
				this.previousValue.includes("=") && this.clear()
				const n = "0" === this.currentValue && "." !== t ? t : this.currentValue + t
				this.#t(n),
					this.currentValue.length >= 9 && this.current.classList.add("display-current-medium")
			}
			clear() {
				this.#t("0", ""), this.#e()
			}
			changeSign() {
				this.#r(), "0" !== this.currentValue && this.#t(String(-this.currentValue))
			}
			getPercent() {
				this.#r(), this.#t(this.#n(this.currentValue / 100), this.currentValue + "%")
			}
			doArithmetic(t) {
				this.#r(),
					this.#e(),
					this.currentValue && this.previousValue
						? (this.calculate(), this.#t("0", this.currentValue + t))
						: this.previousValue.includes("=")
							? this.#t("0", this.currentValue + t)
							: this.#o(this.previousValue)
								? this.#t(this.currentValue, this.previousValue.slice(0, -1) + t)
								: this.#t("0", (this.currentValue += t))
			}
			calculate() {
				if ((this.#r(), this.previousValue.endsWith("=") || this.previousValue.endsWith("%")))
					return
				if (this.previousValue.endsWith("/") && "0" === this.currentValue)
					return void this.#t("Ошибка", "")
				this.#e()
				const t = new Function(
					`return ${(this.previousValue + this.currentValue).replace(/--/g, "+")}`
				)()
				this.#t(this.#n(t), this.previousValue + this.currentValue + "=")
			}
		})({ currentSelector: ".display-current", previousSelector: ".display-previous-result" }),
		q = new (class {
			constructor() {
				this.nightTheme = !1
			}
			changeTheme() {
				;(this.nightTheme = !this.nightTheme),
					localStorage.setItem("theme", this.nightTheme ? "dark" : "light"),
					V.classList.toggle("button-icon-moon_hidden"),
					w.classList.toggle("button-icon-sun_hidden"),
					b.classList.toggle("container_dark-theme"),
					x.classList.toggle("calculator_dark-theme"),
					k.classList.toggle("theme-button_dark-theme"),
					S.forEach((t) => {
						t.classList.toggle("key_dark-theme")
					}),
					A.forEach((t) => {
						t.classList.toggle("function-key_dark-theme")
					}),
					L.forEach((t) => {
						t.classList.toggle("operation-key_dark-theme")
					})
			}
		})()
	window.addEventListener("load", () => {
		const t = localStorage.getItem("theme"),
			n = window.matchMedia("(prefers-color-scheme: dark)").matches
		;("dark" === t || (!t && n)) && q.changeTheme()
	}),
		T.addEventListener("click", () => {
			q.changeTheme(), T.blur(), console.log("clicked")
		}),
		E.addEventListener("click", (t) => {
			if (t.target.dataset.action)
				if ("doArithmetic" === t.target.dataset.action) {
					const n = t.target.dataset.value
					_.doArithmetic(n)
				} else {
					const n = t.target.dataset.action
					_[n]()
				}
			else {
				const n = t.target.dataset.value
				_.updateValue(n)
			}
		}),
		document.addEventListener("keydown", (t) => {
			const n = t.key
			isNaN(parseInt(n)) || _.updateValue(n),
				("." !== n && "," !== n) || _.updateValue("."),
				"Backspace" === n && _.clear(),
				"%" === n && _.getPercent()
			const e = { "+": "+", "-": "-", "*": "*", "/": "/" }
			e[n] && _.doArithmetic(e[n]), "=" === n && _.calculate()
		})
})()
