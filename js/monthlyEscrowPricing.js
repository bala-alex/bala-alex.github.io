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
        $('.software-backup-monthly').text(prices.software_backup_monthly.EUR);
        $('.software-backup-yearly').text(prices.software_backup_yearly.EUR);
        $('.software-backup-certified').text(prices.software_backup_certified.EUR);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.EUR);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.EUR);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.EUR);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.EUR);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.EUR);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.EUR);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.EUR);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.EUR);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.EUR);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.EUR);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.EUR);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.EUR);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.EUR);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.EUR);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_single_compliance_support.EUR);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_multi_compliance_support.EUR);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_single_assured_recovery.EUR);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_multi_assured_recovery.EUR);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.EUR);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.EUR);
        $('.pricing-currency').text(prices.pricing_currency.EUR);
        
      }
      else if (response.currency === 'GBP') {
        
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.GBP);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.GBP);
        $('.software-backup-monthly').text(prices.software_backup_monthly.GBP);
        $('.software-backup-yearly').text(prices.software_backup_yearly.GBP);
        $('.software-backup-certified').text(prices.software_backup_certified.GBP);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.GBP);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.GBP);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.GBP);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.GBP);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.GBP);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.GBP);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.GBP);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.GBP);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.GBP);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.GBP);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.GBP);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.GBP);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.GBP);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.GBP);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_compliance_support.GBP);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_compliance_support.GBP);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_assured_recovery.GBP);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_assured_recovery.GBP);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.GBP);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.GBP);
        $('.pricing-currency').text(prices.pricing_currency.GBP);
      }
      else if (response.currency === 'INR') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.INR);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.INR);
        $('.software-backup-monthly').text(prices.software_backup_monthly.INR);
        $('.software-backup-yearly').text(prices.software_backup_yearly.INR);
        $('.software-backup-certified').text(prices.software_backup_certified.INR);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.INR);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.INR);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.INR);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.INR);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.INR);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.INR);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.INR);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.INR);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.INR);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.INR);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.INR);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.INR);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.INR);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.INR);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_compliance_support.INR);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_compliance_support.INR);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_assured_recovery.INR);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_assured_recovery.INR);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.INR);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.INR);
        $('.pricing-currency').text(prices.pricing_currency.INR);
      }
      else if (response.currency === 'AUD') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.AUD);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.AUD);
        $('.software-backup-monthly').text(prices.software_backup_monthly.AUD);
        $('.software-backup-yearly').text(prices.software_backup_yearly.AUD);
        $('.software-backup-certified').text(prices.software_backup_certified.AUD);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.AUD);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.AUD);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.AUD);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.AUD);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.AUD);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.AUD);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.AUD);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.AUD);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.AUD);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.AUD);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.AUD);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.AUD);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.AUD);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.AUD);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_compliance_support.AUD);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_compliance_support.AUD);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_assured_recovery.AUD);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_assured_recovery.AUD);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.AUD);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.AUD);
        $('.pricing-currency').text(prices.pricing_currency.AUD);
      }

      else if (response.currency === 'SGD') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.SGD);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.SGD);
        $('.software-backup-monthly').text(prices.software_backup_monthly.SGD);
        $('.software-backup-yearly').text(prices.software_backup_yearly.SGD);
        $('.software-backup-certified').text(prices.software_backup_certified.SGD);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.SGD);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.SGD);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.SGD);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.SGD);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.SGD);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.SGD);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.SGD);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.SGD);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.SGD);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.SGD);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.SGD);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.SGD);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.SGD);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.SGD);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_compliance_support.SGD);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_compliance_support.SGD);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_assured_recovery.SGD);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_assured_recovery.SGD);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.SGD);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.SGD);
        $('.pricing-currency').text(prices.pricing_currency.SGD);
      }

      else if (response.currency === 'ZAR') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.ZAR);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.ZAR);
        $('.software-backup-monthly').text(prices.software_backup_monthly.ZAR);
        $('.software-backup-yearly').text(prices.software_backup_yearly.ZAR);
        $('.software-backup-certified').text(prices.software_backup_certified.ZAR);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.ZAR);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.ZAR);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.ZAR);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.ZAR);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.ZAR);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.ZAR);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.ZAR);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.ZAR);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.ZAR);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.ZAR);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.ZAR);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.ZAR);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.ZAR);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.ZAR);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_compliance_support.ZAR);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_compliance_support.ZAR);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_assured_recovery.ZAR);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_assured_recovery.ZAR);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.ZAR);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.ZAR);
        $('.pricing-currency').text(prices.pricing_currency.ZAR);
      }

      else if (response.currency === 'CHF') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.CHF);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.CHF);
        $('.software-backup-monthly').text(prices.software_backup_monthly.CHF);
        $('.software-backup-yearly').text(prices.software_backup_yearly.CHF);
        $('.software-backup-certified').text(prices.software_backup_certified.CHF);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.CHF);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.CHF);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.CHF);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.CHF);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.CHF);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.CHF);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.CHF);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.CHF);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.CHF);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.CHF);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.CHF);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.CHF);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.CHF);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.CHF);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_compliance_support.CHF);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_compliance_support.CHF);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_assured_recovery.CHF);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_assured_recovery.CHF);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.CHF);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.CHF);
        $('.pricing-currency').text(prices.pricing_currency.CHF);
      }

      else if (response.currency === 'CAD') {
        $('.software-escrow-monthly').text(prices.software_escrow_monthly.CAD);
        $('.saas-escrow-monthly').text(prices.saas_escrow_monthly.CAD);
        $('.software-backup-monthly').text(prices.software_backup_monthly.CAD);
        $('.software-backup-yearly').text(prices.software_backup_yearly.CAD);
        $('.software-backup-certified').text(prices.software_backup_certified.CAD);
        $('.software-backup-advanced-deposits').text(prices.software_backup_advanced_deposits.CAD);
        $('.software-backup-advanced-integrations').text(prices.software_backup_advanced_integrations.CAD);
        $('.software-escrow-single-monthly').text(prices.software_escrow_single_monthly.CAD);
        $('.software-escrow-multi-monthly').text(prices.software_escrow_multi_monthly.CAD);
        $('.software-escrow-all-monthly').text(prices.software_escrow_all_monthly.CAD);
        $('.software-escrow-single-yearly').text(prices.software_escrow_single_yearly.CAD);
        $('.software-escrow-multi-yearly').text(prices.software_escrow_multi_yearly.CAD);
        $('.software-escrow-all-yearly').text(prices.software_escrow_all_yearly.CAD);

        $('.software-escrow-single-certified').text(prices.software_escrow_single_certified.CAD);
        $('.software-escrow-multi-certified').text(prices.software_escrow_multi_certified.CAD);

        $('.software-escrow-single-advanced-deposits').text(prices.software_escrow_single_advanced_deposits.CAD);
        $('.software-escrow-multi-advanced-deposits').text(prices.software_escrow_multi_advanced_deposits.CAD);

        $('.software-escrow-single-advanced-integrations').text(prices.software_escrow_single_advanced_integrations.CAD);
        $('.software-escrow-multi-advanced-integrations').text(prices.software_escrow_multi_advanced_integrations.CAD);

        $('.software-escrow-single-compliance-support').text(prices.software_escrow_compliance_support.CAD);
        $('.software-escrow-multi-compliance-support').text(prices.software_escrow_compliance_support.CAD);

        $('.software-escrow-single-assured-recovery').text(prices.software_escrow_assured_recovery.CAD);
        $('.software-escrow-multi-assured-recovery').text(prices.software_escrow_assured_recovery.CAD);

        $('.saas-escrow-single-monthly').text(prices.saas_escrow_single_monthly.CAD);
        $('.software-custodian-single-monthly').text(prices.software_custodian_single_monthly.CAD);
        $('.pricing-currency').text(prices.pricing_currency.CAD);
      }
    },
    function fail(data, status) {
        console.log('Request failed.  Returned status of',
                    status);
    }
  )
  .catch((e) => console.log(e))
});