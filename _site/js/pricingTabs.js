document.addEventListener('DOMContentLoaded', function () {
    // Get the path from the URL
    const path = window.location.pathname;

    // If path is not empty
    if (path !== '/') {
        // Activate the corresponding tab
        const tabLink = document.querySelector(`.nav-link[href="${path}"]`);
        if (tabLink) {
            tabLink.classList.add('active');
            // Show the corresponding tab content
            const tabContent = document.querySelector(path);
            if (tabContent) {
                tabContent.classList.add('show', 'active');
            }
        }
    } else {
        // If no specific tab is in the URL, trigger click on the intro tab
        const introTab = document.querySelector('.nav-link[href="#intro"]');
        if (introTab) {
            introTab.classList.add('active');
            const introContent = document.querySelector('#intro');
            if (introContent) {
                introContent.classList.add('show', 'active');
            }
        }
    }
});

// Get all the tab links
const tabLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each tab link
tabLinks.forEach(tab => {
    tab.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the href attribute of the clicked tab
        const tabHref = tab.getAttribute('href');

        // Construct the new URL
        const baseUrl = window.location.href.split('#')[0]; // Get the base URL without hash
        const newPath = baseUrl + tabHref;

        // Update the URL with the active tab
        window.history.pushState(null, null, newPath);
    });
});

function refreshPage(link) {
    var href = link.getAttribute('href');
    window.location.href = href;
    window.scrollTo({
        top: 150,
        behavior: 'auto'
    });
    window.onload = function () {
        window.location.reload(true);
    }

    if (window.location.hash === '#pricing') {
        $('#intro-tab').removeClass('active');
        $('#intro').removeClass('active').removeClass('show');
        $('#pricing-tab').addClass('active');
        $('#pricing').addClass('active').addClass('show');
        $('#features-tab').removeClass('active');
        $('#features').removeClass('active').removeClass('show');

        $('html, body').animate({
            scrollTop: 150
        }, 'fast');


    } else if (window.location.hash === '#features') {
        $('#intro-tab').removeClass('active');
        $('#intro').removeClass('active').removeClass('show');
        $('#pricing-tab').removeClass('active');
        $('#pricing').removeClass('active').removeClass('show');
        $('#features-tab').addClass('active');
        $('#features').addClass('active').addClass('show');

        $('html, body').animate({
            scrollTop: 150
        }, 'slow');
    } else {
        $('#intro-tab').addClass('active');
        $('#pricing-tab').removeClass('active');
        $('#features-tab').removeClass('active');
        $('#intro').addClass('active').addClass('show');
        $('#pricing').removeClass('active').removeClass('show');
        $('#features').removeClass('active').removeClass('show');

        $('html, body').animate({
            scrollTop: 150
        }, 'slow');
    }
}