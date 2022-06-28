window.header = () => {
	return {
		scrollAtTop: true,
		mobileMenuOpen: false,

		scroll(id) {
			this.$event.preventDefault();

			const headerEL = document.querySelector('header')
			const offset = headerEL.offsetHeight - 64
			const el = document.querySelector(id)
			window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' })
		}
	}
}