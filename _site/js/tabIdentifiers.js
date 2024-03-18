
document.addEventListener('DOMContentLoaded', function (event) {

	const hash = window.location.hash;

	// Check if hash contains any of the tab identifiers
	if (hash.includes('intro') || !hash) {
		// Add active class to the intro tab
		const introTab = document.querySelector('#intro-tab');
		const introContent = document.querySelector('#intro');
		if (introTab && introContent) {
			introTab.classList.add('active');
			introContent.classList.add('show', 'active');
		}
	} else if (hash.includes('features')) {
		// Add active class to the features tab
		const featuresTab = document.querySelector('#features-tab');
		const featuresContent = document.querySelector('#features');
		if (featuresTab && featuresContent) {
			featuresTab.classList.add('active');
			featuresContent.classList.add('show', 'active');
		}
	} else if (hash.includes('month')) {
		// Add active class to the pricing tab
		const pricingTab = document.querySelector('#pricing-tab');
		const pricingContent = document.querySelector('#pricing');
		if (pricingTab && pricingContent) {
			pricingTab.classList.add('active');
			pricingContent.classList.add('show', 'active');
			event.preventDefault();

			// Prevent scrolling
			window.scrollTo(0, 0);
		}
	} else if (hash.includes('year')) {
		// Add active class to the pricing tab
		const pricingTab = document.querySelector('#pricing-tab');
		const pricingContent = document.querySelector('#pricing');
		if (pricingTab && pricingContent) {
			pricingTab.classList.add('active');
			pricingContent.classList.add('show', 'active');
			event.preventDefault();

			// Prevent scrolling
			window.scrollTo(0, 0);
		}
	} else if (hash.includes('pricing')) {
		// Add active class to the pricing tab
		const pricingTab = document.querySelector('#pricing-tab');
		const pricingContent = document.querySelector('#pricing');
		if (pricingTab && pricingContent) {
			pricingTab.classList.add('active');
			pricingContent.classList.add('show', 'active');
			event.preventDefault();

			// Prevent scrolling
			window.scrollTo(0, 0);
		}
	}
});