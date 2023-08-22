$(document).ready(function () {
  $.ajax('https://ipapi.co/json')
    .then(
      function success(response) {
        if (response.timezone && (response.timezone).includes('Europe') && (response.country_name === 'Germany')) {

          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'GuardIT' ||
              competitorName === 'Continew' ||
              competitorName === 'Escrow London' ||
              competitorName === 'FGE' ||
              competitorName === 'Praxis' ||
              competitorName === 'Escrow4all' ||
              competitorName === 'L1Escrow' ||
              competitorName === 'LE AS' ||
              competitorName === 'Swiss Escrow' ||
              competitorName === 'National Software Escrow' ||
              competitorName === 'Ses Escrow' ||
              competitorName === 'Vaultinum') {
              $(this).hide();
            }
          })
        }

        else if (response.timezone && (response.timezone).includes('Europe') && (response.country_name === 'Netherlands')) {

          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'GuardIT' ||
              competitorName === 'Continew' ||
              competitorName === 'Escrow London' ||
              competitorName === 'Escrowtech' ||
              competitorName === 'FGE' ||
              competitorName === 'Praxis' ||
              competitorName === 'eCambria' ||
              competitorName === 'Swiss Escrow' ||
              competitorName === 'Denic Digital' ||
              competitorName === 'L1Escrow' ||
              competitorName === 'LE AS' ||
              competitorName === 'National Software Escrow' ||
              competitorName === 'Ses Escrow' ||
              competitorName === 'Vaultinum') {
              $(this).hide();
            }
          })
        }

        else if (response.timezone && (response.timezone).includes('Europe') && (response.currency !== 'GBP') && (response.country_name !== 'Netherlands') && (response.country_name !== 'Germany')) {

          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'GuardIT' ||
              competitorName === 'InnovaSafe' ||
              competitorName === 'Continew' ||
              competitorName === 'Escrow London' ||
              competitorName === 'Escrowtech' ||
              competitorName === 'FGE' ||
              competitorName === 'Denic Digital' ||
              competitorName === 'Praxis' ||
              competitorName === 'L1Escrow' ||
              competitorName === 'LE AS' ||
              competitorName === 'National Software Escrow' ||
              competitorName === 'Ses Escrow' ||
              competitorName === 'Vaultinum') {
              $(this).hide();
            }
          })
        }
        
        else if (response.currency === 'GBP') {

          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'GuardIT' ||
              competitorName === 'Continew' ||
              competitorName === 'FGE' ||
              competitorName === 'Softcrow' ||
              competitorName === 'Swiss Escrow' ||
              competitorName === 'Denic Digital' ||
              competitorName === 'Escrow4all' ||
              competitorName === 'National Software Escrow' ||
              competitorName === 'eCambria') {
              $(this).hide();
            }
          })
        }

        else if (response.currency === 'AUD') {

          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'GuardIT' ||
              competitorName === 'Continew' ||
              competitorName === 'eCambria' ||
              competitorName === 'Escrow Alliance' ||
              competitorName === 'Escrow London' ||
              competitorName === 'Escrow4all' ||
              competitorName === 'FGE' ||
              competitorName === 'NCC' ||
              competitorName === 'L1Escrow' ||
              competitorName === 'Denic Digital' ||
              competitorName === 'LE AS' ||
              competitorName === 'National Software Escrow' ||
              competitorName === 'Softcrow' ||
              competitorName === 'Swiss Escrow' ||
              competitorName === 'Vaultinum') {
              $(this).hide();
            }
          })
        }

        else if (response.currency === 'CAD') {

          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'GuardIT' ||
              competitorName === 'eCambria' ||
              competitorName === 'Continew' ||
              competitorName === 'L1Escrow' ||
              competitorName === 'LE AS' ||
              competitorName === 'Denic Digital' ||
              competitorName === 'National Software Escrow' ||
              competitorName === 'Escrow Alliance' ||
              competitorName === 'Escrow4all' ||
              competitorName === 'FGE' ||
              competitorName === 'NCC' ||
              competitorName === 'Softcrow' ||
              competitorName === 'Swiss Escrow') {
              $(this).hide();
            }
          })
        }

        else if (response.currency === 'USD') {

          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'eCambria' ||
              competitorName === 'Continew' ||
              competitorName === 'L1Escrow' ||
              competitorName === 'LE AS' ||
              competitorName === 'Denic Digital' ||
              competitorName === 'Escrow4all' ||
              competitorName === 'Softcrow' ||
              competitorName === 'Swiss Escrow' ||
              competitorName === 'FGE') {
              $(this).hide();
            }
          })
        }

        else {
          $('.competitor-name').each(function () {
            const competitorName = $(this).attr('data-competitor');

            if (competitorName === 'GuardIT' ||
              competitorName === 'L1Escrow' ||
              competitorName === 'LE AS' ||
              competitorName === 'Ses Escrow' ||
              competitorName === 'Denic Digital' ||
              competitorName === 'National Software Escrow' ||
              competitorName === 'Vaultinum') {
              $(this).hide();
            }
          })
        }

      },
      function fail(data, status) {
        console.log('Request failed.  Returned status of',
          status);
      }
    )
    .catch((e) => console.log(e))
});