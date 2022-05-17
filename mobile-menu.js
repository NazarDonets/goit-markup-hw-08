(() => {
	const menuBtnRef = document.querySelector('[data-menu-button]');
	const mobileMenuRef = document.querySelector('[data-menu]');
	const body = document.querySelector('[data-body]');

	menuBtnRef.addEventListener('click', () => {
		const expanded =
			menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

		menuBtnRef.classList.toggle('is-open');
		menuBtnRef.setAttribute('aria-expanded', !expanded);

		mobileMenuRef.classList.toggle('mobile-menu--is-open');

		body.addEventListener('click', toggleScrollOff);

		function toggleScrollOff() {
			body.classList.toggle('body--scroll-hidden');
		}
	});
})();
