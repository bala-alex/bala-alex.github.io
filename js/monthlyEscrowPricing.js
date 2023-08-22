
  $( document ).ready(function() {
    $.ajax('https://ipapi.co/json')
    .then(
      function success(response) {
        if (response.timezone && (response.timezone).includes('Europe') && (response.currency !== 'GBP') && (response.currency !== 'CHF')) {
          $('.software-escrow-monthly').text('€89');
          $('.saas-escrow-monthly').text('€199');
        }
        else if (response.currency === 'GBP') {
          
          $('.software-escrow-monthly').text('£79');
          $('.saas-escrow-monthly').text('£149');
        }
        else if (response.currency === 'INR') {
          $('.software-escrow-monthly').text('₹6,995');
          $('.saas-escrow-monthly').text('₹12,500');
        }
        else if (response.currency === 'AUD') {
          $('.software-escrow-monthly').text('A$109');
          $('.saas-escrow-monthly').text('A$250');
        }

        else if (response.currency === 'SGD') {
          $('.software-escrow-monthly').text('$109');
          $('.saas-escrow-monthly').text('$249');
        }

        else if (response.currency === 'ZAR') {
          $('.software-escrow-monthly').text('R1,395');
          $('.saas-escrow-monthly').text('R2,799');
        }

        else if (response.currency === 'CHF') {
          $('.software-escrow-monthly').text('CHF89');
          $('.saas-escrow-monthly').text('CHF219');
        }

        else if (response.currency === 'CAD') {
          $('.software-escrow-monthly').text('CAD119');
          $('.saas-escrow-monthly').text('CAD299');
        }
      },
      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
    )
    .catch((e) => console.log(e))
  });