var pathname = location.pathname;
var pricesData = localStorage.getItem('prices');
var prices = JSON.parse(pricesData);

$(document).ready(function () {
  // console.log('prices', prices);
  $.ajax('https://ipapi.co/json')
    .then(
      function success(response) {
        if (response.timezone && (response.timezone).includes('Europe') && (response.currency !== 'GBP') && (response.currency !== 'CHF') && (response.country !== 'FR')) {
          $('.setup-fee').text(prices.setup_fee.EUR);
          $('.amazon-deposit').text(prices.amazon_deposit.EUR);
          $('#developer-monthly').text(prices.developer_monthly.EUR);
          $('#team-monthly').text(prices.team_monthly.EUR);
          $('#business-monthly').text(prices.business_monthly.EUR);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.EUR);
          $('.team-monthly-saas').text(prices.team_monthly_saas.EUR);
          $('.business-monthly-saas').text(prices.business_monthly_saas.EUR);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.EUR);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.EUR);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.EUR);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.EUR);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.EUR);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.EUR);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.EUR);

          if (pathname.includes('/fr/')) {
            $('#enterprise-monthly').text(prices.enterprise_monthly.EUR_FRENCH);
            $('.enterprise-monthly').text(prices.enterprise_monthly.EUR_FRENCH);
            $('#enterprise-yearly').text(prices.enterprise_yearly.EUR_FRENCH);
            $('.enterprise-yearly').text(prices.enterprise_yearly.EUR_FRENCH);
            $('.verification-advanced').text(prices.verification_advanced.EUR_FRENCH);
            $('.verification-complete').text(prices.verification_complete.EUR_FRENCH);
            $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.EUR_FRENCH);
            $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.EUR_FRENCH);
          }
          else {
            $('#enterprise-monthly').text(prices.enterprise_monthly.EUR);
            $('.enterprise-monthly').text(prices.enterprise_monthly.EUR);
            $('#enterprise-yearly').text(prices.enterprise_yearly.EUR);
            $('.enterprise-yearly').text(prices.enterprise_yearly.EUR);
            $('.verification-advanced').text(prices.verification_advanced.EUR);
            $('.verification-complete').text(prices.verification_complete.EUR);
            $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.EUR);
            $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.EUR);
          }

          $('.developer-monthly').text(prices.developer_monthly.EUR);
          $('.team-monthly').text(prices.team_monthly.EUR);
          $('.business-monthly').text(prices.business_monthly.EUR);

          $('#developer-yearly').text(prices.developer_yearly.EUR);
          $('#team-yearly').text(prices.team_yearly.EUR);
          $('#business-yearly').text(prices.business_yearly.EUR);

          $('.developer-yearly').text(prices.developer_yearly.EUR);
          $('.team-yearly').text(prices.team_yearly.EUR);
          $('.business-yearly').text(prices.business_yearly.EUR);

          $('.increased-repository').text(prices.increased_repository.EUR);
          $('.increased-storage').text(prices.increased_storage.EUR);
          $('.storage-selection').text(prices.storage_selection.EUR);
          $('.deposit-connections').text(prices.deposit_connections.EUR);
          $('.release-processing').text(prices.release_processing.EUR);
          $('.saas-continuity').text(prices.saas_continuity.EUR);

          $('.plan-eu').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-au').remove();
          $('.plan-sg').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }

        else if (response.timezone && (response.timezone).includes('Europe') && (response.country === 'FR')) {
          $('.setup-fee').text(prices.setup_fee.EUR);
          $('.amazon-deposit').text(prices.amazon_deposit.EUR);
          $('#developer-monthly').text(prices.developer_monthly.EUR);
          $('#team-monthly').text(prices.team_monthly.EUR);
          $('#business-monthly').text(prices.business_monthly.EUR);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.EUR);
          $('.team-monthly-saas').text(prices.team_monthly_saas.EUR);
          $('.business-monthly-saas').text(prices.business_monthly_saas.EUR);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.EUR);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.EUR);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.EUR);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.EUR);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.EUR);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.EUR);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.EUR);

          if (pathname.includes('/fr/')) {
            $('#enterprise-monthly').text(prices.enterprise_monthly.EUR_FRENCH);
            $('.enterprise-monthly').text(prices.enterprise_monthly.EUR_FRENCH);
            $('#enterprise-yearly').text(prices.enterprise_yearly.EUR_FRENCH);
            $('.enterprise-yearly').text(prices.enterprise_yearly.EUR_FRENCH);
            $('.verification-advanced').text(prices.verification_advanced.EUR_FRENCH);
            $('.verification-complete').text(prices.verification_complete.EUR_FRENCH);
            $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.EUR_FRENCH);
            $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.EUR_FRENCH);
          }
          else {
            $('#enterprise-monthly').text(prices.enterprise_monthly.EUR);
            $('.enterprise-monthly').text(prices.enterprise_monthly.EUR);
            $('#enterprise-yearly').text(prices.enterprise_yearly.EUR);
            $('.enterprise-yearly').text(prices.enterprise_yearly.EUR);
            $('.verification-advanced').text(prices.verification_advanced.EUR);
            $('.verification-complete').text(prices.verification_complete.EUR);
            $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.EUR);
            $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.EUR);
          }

          $('.developer-monthly').text(prices.developer_monthly.EUR);
          $('.team-monthly').text(prices.team_monthly.EUR);
          $('.business-monthly').text(prices.business_monthly.EUR);

          $('#developer-yearly').text(prices.developer_yearly.EUR);
          $('#team-yearly').text(prices.team_yearly.EUR);
          $('#business-yearly').text(prices.business_yearly.EUR);

          $('.developer-yearly').text(prices.developer_yearly.EUR);
          $('.team-yearly').text(prices.team_yearly.EUR);
          $('.business-yearly').text(prices.business_yearly.EUR);

          $('.increased-repository').text(prices.increased_repository.EUR);
          $('.increased-storage').text(prices.increased_storage.EUR);
          $('.storage-selection').text(prices.storage_selection.EUR);
          $('.deposit-connections').text(prices.deposit_connections.EUR);
          $('.release-processing').text(prices.release_processing.EUR);
          $('.saas-continuity').text(prices.saas_continuity.EUR);

          $('.plan-eu').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-au').remove();
          $('.plan-sg').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }


        else if (response.currency === 'GBP') {
          $('.setup-fee').text(prices.setup_fee.GBP);
          $('.amazon-deposit').text(prices.amazon_deposit.GBP);
          $('#developer-monthly').text(prices.developer_monthly.GBP);
          $('#team-monthly').text(prices.team_monthly.GBP);
          $('#business-monthly').text(prices.business_monthly.GBP);
          $('#enterprise-monthly').text(prices.enterprise_monthly.GBP);
          $('.developer-monthly').text(prices.developer_monthly.GBP);
          $('.team-monthly').text(prices.team_monthly.GBP);
          $('.business-monthly').text(prices.business_monthly.GBP);
          $('.enterprise-monthly').text(prices.enterprise_monthly.GBP);
          $('#developer-yearly').text(prices.developer_yearly.GBP);
          $('#team-yearly').text(prices.team_yearly.GBP);
          $('#business-yearly').text(prices.business_yearly.GBP);
          $('#enterprise-yearly').text(prices.enterprise_yearly.GBP);
          $('.developer-yearly').text(prices.developer_yearly.GBP);
          $('.team-yearly').text(prices.team_yearly.GBP);
          $('.business-yearly').text(prices.business_yearly.GBP);
          $('.enterprise-yearly').text(prices.enterprise_yearly.GBP);
          $('.increased-repository').text(prices.increased_repository.GBP);
          $('.increased-storage').text(prices.increased_storage.GBP);
          $('.storage-selection').text(prices.storage_selection.GBP);
          $('.deposit-connections').text(prices.deposit_connections.GBP);
          $('.release-processing').text(prices.release_processing.GBP);
          $('.saas-continuity').text(prices.saas_continuity.GBP);
          $('.verification-advanced').text(prices.verification_advanced.GBP);
          $('.verification-complete').text(prices.verification_complete.GBP);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.GBP);
          $('.team-monthly-saas').text(prices.team_monthly_saas.GBP);
          $('.business-monthly-saas').text(prices.business_monthly_saas.GBP);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.GBP);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.GBP);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.GBP);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.GBP);
          $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.GBP);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.GBP);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.GBP);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.GBP);
          $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.GBP);

          $('.plan-uk').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-eu').remove();
          $('.plan-in').remove();
          $('.plan-au').remove();
          $('.plan-sg').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }
        else if (response.currency === 'INR') {
          $('.setup-fee').text(prices.setup_fee.INR);
          $('.amazon-deposit').text(prices.amazon_deposit.INR);
          $('#developer-monthly').text(prices.developer_monthly.INR);
          $('#team-monthly').text(prices.team_monthly.INR);
          $('#business-monthly').text(prices.business_monthly.INR);
          $('#enterprise-monthly').text(prices.enterprise_monthly.INR);
          $('.developer-monthly').text(prices.developer_monthly.INR);
          $('.team-monthly').text(prices.team_monthly.INR);
          $('.business-monthly').text(prices.business_monthly.INR);
          $('.enterprise-monthly').text(prices.enterprise_monthly.INR);
          $('#developer-yearly').text(prices.developer_yearly.INR);
          $('#team-yearly').text(prices.team_yearly.INR);
          $('#business-yearly').text(prices.business_yearly.INR);
          $('#enterprise-yearly').text(prices.enterprise_yearly.INR);
          $('.developer-yearly').text(prices.developer_yearly.INR);
          $('.team-yearly').text(prices.team_yearly.INR);
          $('.business-yearly').text(prices.business_yearly.INR);
          $('.enterprise-yearly').text(prices.enterprise_yearly.INR);
          $('.increased-repository').text(prices.increased_repository.INR);
          $('.increased-storage').text(prices.increased_storage.INR);
          $('.storage-selection').text(prices.storage_selection.INR);
          $('.deposit-connections').text(prices.deposit_connections.INR);
          $('.release-processing').text(prices.release_processing.INR);
          $('.saas-continuity').text(prices.saas_continuity.INR);
          $('.verification-advanced').text(prices.verification_advanced.INR);
          $('.verification-complete').text(prices.verification_complete.INR);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.INR);
          $('.team-monthly-saas').text(prices.team_monthly_saas.INR);
          $('.business-monthly-saas').text(prices.business_monthly_saas.INR);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.INR);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.INR);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.INR);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.INR);
          $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.INR);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.INR);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.INR);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.INR);
          $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.INR);

          $('.plan-in').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-eu').remove();
          $('.plan-uk').remove();
          $('.plan-au').remove();
          $('.plan-sg').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }
        else if (response.currency === 'AUD') {
          $('.setup-fee').text(prices.setup_fee.AUD);
          $('.amazon-deposit').text(prices.amazon_deposit.AUD);
          $('#developer-monthly').text(prices.developer_monthly.AUD);
          $('#team-monthly').text(prices.team_monthly.AUD);
          $('#business-monthly').text(prices.business_monthly.AUD);
          $('#enterprise-monthly').text(prices.enterprise_monthly.AUD);
          $('.developer-monthly').text(prices.developer_monthly.AUD);
          $('.team-monthly').text(prices.team_monthly.AUD);
          $('.business-monthly').text(prices.business_monthly.AUD);
          $('.enterprise-monthly').text(prices.enterprise_monthly.AUD);
          $('#developer-yearly').text(prices.developer_yearly.AUD);
          $('#team-yearly').text(prices.team_yearly.AUD);
          $('#business-yearly').text(prices.business_yearly.AUD);
          $('#enterprise-yearly').text(prices.enterprise_yearly.AUD);
          $('.developer-yearly').text(prices.developer_yearly.AUD);
          $('.team-yearly').text(prices.team_yearly.AUD);
          $('.business-yearly').text(prices.business_yearly.AUD);
          $('.enterprise-yearly').text(prices.enterprise_yearly.AUD);
          $('.increased-repository').text(prices.increased_repository.AUD);
          $('.increased-storage').text(prices.increased_storage.AUD);
          $('.storage-selection').text(prices.storage_selection.AUD);
          $('.deposit-connections').text(prices.deposit_connections.AUD);
          $('.release-processing').text(prices.release_processing.AUD);
          $('.saas-continuity').text(prices.saas_continuity.AUD);
          $('.verification-advanced').text(prices.verification_advanced.AUD);
          $('.verification-complete').text(prices.verification_complete.AUD);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.AUD);
          $('.team-monthly-saas').text(prices.team_monthly_saas.AUD);
          $('.business-monthly-saas').text(prices.business_monthly_saas.AUD);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.AUD);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.AUD);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.AUD);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.AUD);
          $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.AUD);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.AUD);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.AUD);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.AUD);
          $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.AUD);

          $('.plan-au').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-eu').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-sg').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }

        else if (response.currency === 'SGD') {
          $('.setup-fee').text(prices.setup_fee.SGD);
          $('.amazon-deposit').text(prices.amazon_deposit.SGD);
          $('#developer-monthly').text(prices.developer_monthly.SGD);
          $('#team-monthly').text(prices.team_monthly.SGD);
          $('#business-monthly').text(prices.business_monthly.SGD);
          $('#enterprise-monthly').text(prices.enterprise_monthly.SGD);
          $('.developer-monthly').text(prices.developer_monthly.SGD);
          $('.team-monthly').text(prices.team_monthly.SGD);
          $('.business-monthly').text(prices.business_monthly.SGD);
          $('.enterprise-monthly').text(prices.enterprise_monthly.SGD);
          $('#developer-yearly').text(prices.developer_yearly.SGD);
          $('#team-yearly').text(prices.team_yearly.SGD);
          $('#business-yearly').text(prices.business_yearly.SGD);
          $('#enterprise-yearly').text(prices.enterprise_yearly.SGD);
          $('.developer-yearly').text(prices.developer_yearly.SGD);
          $('.team-yearly').text(prices.team_yearly.SGD);
          $('.business-yearly').text(prices.business_yearly.SGD);
          $('.enterprise-yearly').text(prices.enterprise_yearly.SGD);
          $('.increased-repository').text(prices.increased_repository.SGD);
          $('.increased-storage').text(prices.increased_storage.SGD);
          $('.storage-selection').text(prices.storage_selection.SGD);
          $('.deposit-connections').text(prices.deposit_connections.SGD);
          $('.release-processing').text(prices.release_processing.SGD);
          $('.saas-continuity').text(prices.saas_continuity.SGD);
          $('.verification-advanced').text(prices.verification_advanced.SGD);
          $('.verification-complete').text(prices.verification_complete.SGD);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.SGD);
          $('.team-monthly-saas').text(prices.team_monthly_saas.SGD);
          $('.business-monthly-saas').text(prices.business_monthly_saas.SGD);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.SGD);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.SGD);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.SGD);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.SGD);
          $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.SGD);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.SGD);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.SGD);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.SGD);
          $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.SGD);

          $('.plan-sg').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-eu').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-au').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }

        else if (response.currency === 'ZAR') {
          $('.setup-fee').text(prices.setup_fee.ZAR);
          $('.amazon-deposit').text(prices.amazon_deposit.ZAR);
          $('#developer-monthly').text(prices.developer_monthly.ZAR);
          $('#team-monthly').text(prices.team_monthly.ZAR);
          $('#business-monthly').text(prices.business_monthly.ZAR);
          $('#enterprise-monthly').text(prices.enterprise_monthly.ZAR);
          $('.developer-monthly').text(prices.developer_monthly.ZAR);
          $('.team-monthly').text(prices.team_monthly.ZAR);
          $('.business-monthly').text(prices.business_monthly.ZAR);
          $('.enterprise-monthly').text(prices.enterprise_monthly.ZAR);
          $('#developer-yearly').text(prices.developer_yearly.ZAR);
          $('#team-yearly').text(prices.team_yearly.ZAR);
          $('#business-yearly').text(prices.business_yearly.ZAR);
          $('#enterprise-yearly').text(prices.enterprise_yearly.ZAR);
          $('.developer-yearly').text(prices.developer_yearly.ZAR);
          $('.team-yearly').text(prices.team_yearly.ZAR);
          $('.business-yearly').text(prices.business_yearly.ZAR);
          $('.enterprise-yearly').text(prices.enterprise_yearly.ZAR);
          $('.increased-repository').text(prices.increased_repository.ZAR);
          $('.increased-storage').text(prices.increased_storage.ZAR);
          $('.storage-selection').text(prices.storage_selection.ZAR);
          $('.deposit-connections').text(prices.deposit_connections.ZAR);
          $('.release-processing').text(prices.release_processing.ZAR);
          $('.saas-continuity').text(prices.saas_continuity.ZAR);
          $('.verification-advanced').text(prices.verification_advanced.ZAR);
          $('.verification-complete').text(prices.verification_complete.ZAR);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.ZAR);
          $('.team-monthly-saas').text(prices.team_monthly_saas.ZAR);
          $('.business-monthly-saas').text(prices.business_monthly_saas.ZAR);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.ZAR);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.ZAR);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.ZAR);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.ZAR);
          $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.ZAR);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.ZAR);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.ZAR);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.ZAR);
          $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.ZAR);

          $('.plan-rsa').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-eu').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-sg').remove();
          $('.plan-au').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }

        else if (response.currency === 'CHF') {
          $('.setup-fee').text(prices.setup_fee.CHF);
          $('.amazon-deposit').text(prices.amazon_deposit.CHF);
          $('#developer-monthly').text(prices.developer_monthly.CHF);
          $('#team-monthly').text(prices.team_monthly.CHF);
          $('#business-monthly').text(prices.business_monthly.CHF);
          $('#enterprise-monthly').text(prices.enterprise_monthly.CHF);
          $('.developer-monthly').text(prices.developer_monthly.CHF);
          $('.team-monthly').text(prices.team_monthly.CHF);
          $('.business-monthly').text(prices.business_monthly.CHF);
          $('.enterprise-monthly').text(prices.enterprise_monthly.CHF);
          $('#developer-yearly').text(prices.developer_yearly.CHF);
          $('#team-yearly').text(prices.team_yearly.CHF);
          $('#business-yearly').text(prices.business_yearly.CHF);
          $('#enterprise-yearly').text(prices.enterprise_yearly.CHF);
          $('.developer-yearly').text(prices.developer_yearly.CHF);
          $('.team-yearly').text(prices.team_yearly.CHF);
          $('.business-yearly').text(prices.business_yearly.CHF);
          $('.enterprise-yearly').text(prices.enterprise_yearly.CHF);
          $('.increased-repository').text(prices.increased_repository.CHF);
          $('.increased-storage').text(prices.increased_storage.CHF);
          $('.storage-selection').text(prices.storage_selection.CHF);
          $('.deposit-connections').text(prices.deposit_connections.CHF);
          $('.release-processing').text(prices.release_processing.CHF);
          $('.saas-continuity').text(prices.saas_continuity.CHF);
          $('.verification-advanced').text(prices.verification_advanced.CHF);
          $('.verification-complete').text(prices.verification_complete.CHF);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.CHF);
          $('.team-monthly-saas').text(prices.team_monthly_saas.CHF);
          $('.business-monthly-saas').text(prices.business_monthly_saas.CHF);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.CHF);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.CHF);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.CHF);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.CHF);
          $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.CHF);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.CHF);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.CHF);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.CHF);
          $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.CHF);

          $('.plan-ch').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-eu').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-au').remove();
          $('.plan-rsa').remove();
          $('.plan-sg').remove();
          $('.plan-ca').remove();
        }

        else if (response.currency === 'CAD') {
          $('.setup-fee').text(prices.setup_fee.CAD);
          $('.amazon-deposit').text(prices.amazon_deposit.CAD);
          $('#developer-monthly').text(prices.developer_monthly.CAD);
          $('#team-monthly').text(prices.team_monthly.CAD);
          $('#business-monthly').text(prices.business_monthly.CAD);
          $('#enterprise-monthly').text(prices.enterprise_monthly.CAD);
          $('.developer-monthly').text(prices.developer_monthly.CAD);
          $('.team-monthly').text(prices.team_monthly.CAD);
          $('.business-monthly').text(prices.business_monthly.CAD);
          $('.enterprise-monthly').text(prices.enterprise_monthly.CAD);
          $('#developer-yearly').text(prices.developer_yearly.CAD);
          $('#team-yearly').text(prices.team_yearly.CAD);
          $('#business-yearly').text(prices.business_yearly.CAD);
          $('#enterprise-yearly').text(prices.enterprise_yearly.CAD);
          $('.developer-yearly').text(prices.developer_yearly.CAD);
          $('.team-yearly').text(prices.team_yearly.CAD);
          $('.business-yearly').text(prices.business_yearly.CAD);
          $('.enterprise-yearly').text(prices.enterprise_yearly.CAD);
          $('.increased-repository').text(prices.increased_repository.CAD);
          $('.increased-storage').text(prices.increased_storage.CAD);
          $('.storage-selection').text(prices.storage_selection.CAD);
          $('.deposit-connections').text(prices.deposit_connections.CAD);
          $('.release-processing').text(prices.release_processing.CAD);
          $('.saas-continuity').text(prices.saas_continuity.CAD);
          $('.verification-advanced').text(prices.verification_advanced.CAD);
          $('.verification-complete').text(prices.verification_complete.CAD);
          $('.developer-monthly-saas').text(prices.developer_monthly_saas.CAD);
          $('.team-monthly-saas').text(prices.team_monthly_saas.CAD);
          $('.business-monthly-saas').text(prices.business_monthly_saas.CAD);
          $('.enterprise-monthly-saas').text(prices.enterprise_monthly_saas.CAD);
          $('.developer-monthly-saas2').text(prices.developer_monthly_saas2.CAD);
          $('.team-monthly-saas2').text(prices.team_monthly_saas2.CAD);
          $('.business-monthly-saas2').text(prices.business_monthly_saas2.CAD);
          $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.CAD);
          $('.developer-yearly-saas2').text(prices.developer_yearly_saas2.CAD);
          $('.team-yearly-saas2').text(prices.team_yearly_saas2.CAD);
          $('.business-yearly-saas2').text(prices.business_yearly_saas2.CAD);

          if (pathname.includes('/fr/')) {
            $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.CAD_FRENCH);
            $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.CAD_FRENCH);
          }
          else {
            $('.enterprise-monthly-saas2').text(prices.enterprise_monthly_saas2.CAD);
            $('.enterprise-yearly-saas2').text(prices.enterprise_yearly_saas2.CAD);
          }


          $('.plan-ca').removeClass('d-none');
          $('.plan-us').remove();
          $('.plan-eu').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-sg').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-au').remove();
        }

        else {
          if (pathname.includes('/fr/')) {
            $('#enterprise-monthly').text(prices.enterprise_monthly.USD_FRENCH);
            $('.enterprise-monthly').text(prices.enterprise_monthly.USD_FRENCH);
            $('#enterprise-yearly').text(prices.enterprise_yearly.USD_FRENCH);
          }
          else {
            $('#enterprise-monthly').text(prices.enterprise_monthly.USD);
            $('.enterprise-monthly').text(prices.enterprise_monthly.USD);
            $('#enterprise-yearly').text(prices.enterprise_yearly.USD);
          }

          $('.plan-us').removeClass('d-none');
          $('.plan-eu').remove();
          $('.plan-uk').remove();
          $('.plan-in').remove();
          $('.plan-au').remove();
          $('.plan-sg').remove();
          $('.plan-rsa').remove();
          $('.plan-ch').remove();
          $('.plan-ca').remove();
        }
      },
      function fail(data, status) {
        console.log('Request failed.  Returned status of',
          status);
      }
    )
    .catch((e) => console.log(e))
});

