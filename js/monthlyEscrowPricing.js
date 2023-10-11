var pathname = location.pathname;
var pricesData = localStorage.getItem('prices');
var prices = JSON.parse(pricesData);

$( document ).ready(function() {
  $.ajax('https://ipapi.co/json')
  .then(
    function success(response) {
      if (response.timezone && (response.timezone).includes('Europe') && (response.currency !== 'GBP') && (response.currency !== 'CHF')) {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.EUR);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.EUR);
      }
      else if (response.currency === 'GBP') {
        
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.GBP);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.GBP);
      }
      else if (response.currency === 'INR') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.INR);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.INR);
      }
      else if (response.currency === 'AUD') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.AUD);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.AUD);
      }

      else if (response.currency === 'SGD') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.SGD);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.SGD);
      }

      else if (response.currency === 'ZAR') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.ZAR);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.ZAR);
      }

      else if (response.currency === 'CHF') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.CHF);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.CHF);
      }

      else if (response.currency === 'CAD') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.CAD);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.CAD);
      }
    },
    function fail(data, status) {
        console.log('Request failed.  Returned status of',
                    status);
    }
  )
  .catch((e) => console.log(e))
});