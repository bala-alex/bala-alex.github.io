var totalSum = 0;
var checkoutText = [];
var checkoutAdOns = [];
var duration = 'Monthly';
const selectPlanTextTranslated = window.location.pathname.includes('/ro/') ? 'Selectează Plan' : window.location.pathname.includes('/de/') ? 'Plan auswählen' : window.location.pathname.includes('/es/') ? 'Seleccionar plan' : window.location.pathname.includes('/fr/') ? 'Sélectionnez le forfait' : window.location.pathname.includes('/nl/') ? 'Selecteer pakket' : 'Select plan';
const selectedPlanTextTranslated = window.location.pathname.includes('/ro/') ? 'Selectat' : window.location.pathname.includes('/de/') ? 'Ausgewählt' : window.location.pathname.includes('/es/') ? 'Seleccionado' : window.location.pathname.includes('/fr/') ? 'Sélectionné' : window.location.pathname.includes('/nl/') ? 'Geselecteerd' : 'Selected';
const selectAddOnTextTranslated = window.location.pathname.includes('/ro/') ? 'Adaugă' : window.location.pathname.includes('/de/') ? 'Hinzufügen' : window.location.pathname.includes('/es/') ? 'Agregar' : window.location.pathname.includes('/fr/') ? 'Ajouter' : window.location.pathname.includes('/nl/') ? 'Toevoegen' : 'Add';
const selectedAddOnTextTranslated = window.location.pathname.includes('/ro/') ? 'Adăugat' : window.location.pathname.includes('/de/') ? 'Hinzugefügt' : window.location.pathname.includes('/es/') ? 'Agregado' : window.location.pathname.includes('/fr/') ? 'Ajouté' : window.location.pathname.includes('/nl/') ? 'Toegevoegd' : 'Added';
const yearlyPeriodTextTranslated = window.location.pathname.includes('/ro/') ? 'pe an' : window.location.pathname.includes('/de/') ? 'pro Jahr' : window.location.pathname.includes('/es/') ? 'por año' : window.location.pathname.includes('/fr/') ? 'par an' : window.location.pathname.includes('/nl/') ? 'per jaar' : 'per year';
const monthlyPeriodTextTranslated = window.location.pathname.includes('/ro/') ? 'pe lună' : window.location.pathname.includes('/de/') ? 'pro Monat' : window.location.pathname.includes('/es/') ? 'al mes' : window.location.pathname.includes('/fr/') ? 'par mois' : window.location.pathname.includes('/nl/') ? 'per maand' : 'per month';
const addonsTextTranslated = window.location.pathname.includes('/ro/') ? 'Add onuri' : window.location.pathname.includes('/de/') ? 'Add-ons' : window.location.pathname.includes('/es/') ? 'Complementos' : window.location.pathname.includes('/fr/') ? 'Modules complémentaires' : window.location.pathname.includes('/nl/') ? 'Add-ons' : 'Addons';
const monthlyPlanTextTranslated = window.location.pathname.includes('/ro/') ? 'Backup Software (Lunar)' : window.location.pathname.includes('/de/') ? 'Software-Backup (Monatlich)' : window.location.pathname.includes('/es/') ? 'Copia de seguridad de software (Mensual)' : window.location.pathname.includes('/fr/') ? 'Sauvegarde de logiciel (Mensuellement)' : window.location.pathname.includes('/nl/') ? 'Software Backup (Maandelijks)' : 'Software Backup (Monthly)';
const yearlyPlanTextTranslated = window.location.pathname.includes('/ro/') ? 'Backup Software (Anual)' : window.location.pathname.includes('/de/') ? 'Software-Backup (Jährlich)' : window.location.pathname.includes('/es/') ? 'Copia de seguridad de software (Anual)' : window.location.pathname.includes('/fr/') ? 'Sauvegarde de logiciel (Annuellement)' : window.location.pathname.includes('/nl/') ? 'Software Backup (Jaarlijks)' : 'Software Backup (Yearly)';

function selectPlan(button, planType, priceString, planID) {
    checkoutAdOns = [];
    checkoutText = [];
    totalSum = 0;
    $('#hubspot-messages-iframe-container').attr("style", "display: none !important");

    if (duration === 'Yearly') {
        $('#checkout-period').text(yearlyPeriodTextTranslated);
    } else {
        $('#checkout-period').text(monthlyPeriodTextTranslated);
    }

    const currency = localStorage.getItem('currency');
    checkoutText = planID + '-' + currency + '-' + duration;

    // const setupFeeAmount = JSON.parse(localStorage.getItem(`prices`))?.setup_fee_number?.[currency];
    const price = JSON.parse(localStorage.getItem(`prices`))?.[`${priceString}_number`]?.[currency];

    // Extract the numeric part from the string
    $('#adds').addClass('d-none')
    $('.btn-primary-small2').removeClass('-is-selected').text(selectAddOnTextTranslated)
    $('.btn-yellow-small2').removeClass('-is-selected').text(selectAddOnTextTranslated)
    // var price = parseInt(priceString.replace(/[^\d]/g, ''), 10);

    totalSum = price
    $('#totalSum').text(totalSum.toLocaleString());

    if ($(button).hasClass('-is-selected')) { // Check if button is already selected
        $(button).removeClass('-is-selected').html(`<img src="" alt="" /><span>${selectPlanTextTranslated}</span>`);
        $('#planType').text('');
        $('.single, .multiple').removeClass('-is-selected');
        $('.single-extra, .multiple-extra').addClass('d-none');
        $('#checkout-cart').attr("style", "display: none");
    } else {
        // Apply selected classes and logic
        $('.btn-bondi-blue4.valid-plan').removeClass('-is-selected').text(selectPlanTextTranslated);
        $(button).addClass('-is-selected').html(`<img class="mr-1" src="/images/software-escrow/icons/checked-circle.svg" alt="Checked Circle Icon" /><span>${selectedPlanTextTranslated}</span>`);
        $('#checkout-cart').attr("style", "display: flex");

        $('#planType').text(planType === 'single' ? monthlyPlanTextTranslated : planType === 'multiple' ? yearlyPlanTextTranslated : planType)

        // if (planType === 'single') {
        $('.single').addClass('-is-selected');
        $('.multiple').removeClass('-is-selected');
        $('.single-extra').removeClass('d-none');
        $('.multiple-extra').addClass('d-none');
        // } else if (planType === 'multiple') {
        //   $('.multiple').addClass('-is-selected');
        //   $('.single').removeClass('-is-selected');
        //   $('.single-extra').addClass('d-none');
        //   $('.multiple-extra').removeClass('d-none');
        // }
        $('#checkout-snippet').attr('data-cb-item-0', checkoutText);
    }
}

function selectDuration(value) {
    $('#hubspot-messages-iframe-container').attr("style", "display: none !important");

    $('#adds').addClass('d-none')
    $('.btn-primary-small2').removeClass('-is-selected').text(selectAddOnTextTranslated)

    $('.btn-bondi-blue4.valid-plan').removeClass('-is-selected').html(`<img src="" alt="" /><span>${selectPlanTextTranslated}</span>`);
    $('#planType').text('');
    $('.single, .multiple').removeClass('-is-selected');
    $('.single-extra, .multiple-extra').addClass('d-none');
    $('#checkout-cart').attr("style", "display: none");

    duration = value;
}

function add(button, priceString, addonID) {
    const currency = localStorage.getItem('currency');
    let price = JSON.parse(localStorage.getItem(`prices`))?.[`${priceString}_number`]?.[currency];

    if (duration === 'Yearly') {
        price *= 12;
    }

    $('#hubspot-messages-iframe-container').attr("style", "display: none !important");
    if (button.classList.contains('-is-selected')) {
        totalSum -= price;
        button.textContent = selectAddOnTextTranslated;
        button.classList.remove('-is-selected');
        checkoutAdOns = checkoutAdOns.filter(item => item !== `${addonID + '-' + currency + '-' + 'Monthly'}`);
    } else {
        totalSum += price;
        button.textContent = selectedAddOnTextTranslated;
        button.classList.add('-is-selected');
        checkoutAdOns.push(`${addonID + '-' + currency + '-' + 'Monthly'}`); // addons only have monthly pricing
    }

    const addOns = document.querySelectorAll(".btn-primary-small2.-is-selected, .btn-yellow-small2.-is-selected").length;

    if (!addOns) {
        document.getElementById('adds').classList.add('d-none');
    } else {
        const addsElement = document.getElementById('adds');
        addsElement.classList.remove('d-none');
        addsElement.textContent = `${addonsTextTranslated}: ${addOns}`;
    }

    document.getElementById('totalSum').textContent = totalSum.toLocaleString();
}