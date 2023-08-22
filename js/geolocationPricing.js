var pathname = location.pathname;

  $(document).ready(function () {
    $.ajax('https://ipapi.co/json')
      .then(
        function success(response) {
          if (response.timezone && (response.timezone).includes('Europe') && (response.currency !== 'GBP') && (response.currency !== 'CHF')) {
            $('.setup-fee').text('€199');
            $('.amazon-deposit').text('€29');
            $('#developer-monthly').text('€99');
            $('#team-monthly').text('€249');
            $('#business-monthly').text('€449');
            $('.developer-monthly-saas').text('€99');
            $('.team-monthly-saas').text('€149');
            $('.business-monthly-saas').text('€249');
            $('.enterprise-monthly-saas').text('€499');
            $('.developer-monthly-saas2').text('€198');
            $('.team-monthly-saas2').text('€398');
            $('.business-monthly-saas2').text('€698');
            $('.developer-yearly-saas2').text('€188');
            $('.team-yearly-saas2').text('€374');
            $('.business-yearly-saas2').text('€648');
            
            if (pathname.includes('/fr/')) {
              $('#enterprise-monthly').text('€1499');
              $('.enterprise-monthly').text('€1499');
              $('#enterprise-yearly').text('€1349');
              $('.enterprise-yearly').text('€1349');
              $('.verification-advanced').text('€2495');
              $('.verification-complete').text('€3995');
              $('.enterprise-monthly-saas2').text('€1998');
              $('.enterprise-yearly-saas2').text('€1848');
            }
            else {
              $('#enterprise-monthly').text('€1,499');
              $('.enterprise-monthly').text('€1,499');
              $('#enterprise-yearly').text('€1,349');
              $('.enterprise-yearly').text('€1,349');
              $('.verification-advanced').text('€2,495');
              $('.verification-complete').text('€3,995');
              $('.enterprise-monthly-saas2').text('€1,998');
              $('.enterprise-yearly-saas2').text('€1,848');
            }

            $('.developer-monthly').text('€99');
            $('.team-monthly').text('€249');
            $('.business-monthly').text('€449');

            $('#developer-yearly').text('€89');
            $('#team-yearly').text('€225');
            $('#business-yearly').text('€399');

            $('.developer-yearly').text('€89');
            $('.team-yearly').text('€225');
            $('.business-yearly').text('€399');

            $('.increased-repository').text('€19');
            $('.increased-storage').text('€5');
            $('.storage-selection').text('€9');
            $('.deposit-connections').text('€99');
            $('.release-processing').text('€199');
            $('.saas-continuity').text('€299');

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
            $('.setup-fee').text('£199');
            $('.amazon-deposit').text('£29');
            $('#developer-monthly').text('£79');
            $('#team-monthly').text('£199');
            $('#business-monthly').text('£349');
            $('#enterprise-monthly').text('£1,099');
            $('.developer-monthly').text('£79');
            $('.team-monthly').text('£199');
            $('.business-monthly').text('£349');
            $('.enterprise-monthly').text('£1,099');
            $('#developer-yearly').text('£69');
            $('#team-yearly').text('£175');
            $('#business-yearly').text('£299');
            $('#enterprise-yearly').text('£999');
            $('.developer-yearly').text('£69');
            $('.team-yearly').text('£175');
            $('.business-yearly').text('£299');
            $('.enterprise-yearly').text('£999');
            $('.increased-repository').text('£14');
            $('.increased-storage').text('£4');
            $('.storage-selection').text('£7');
            $('.deposit-connections').text('£70');
            $('.release-processing').text('£149');
            $('.saas-continuity').text('£225');
            $('.verification-advanced').text('£1,799');
            $('.verification-complete').text('£2,995');
            $('.developer-monthly-saas').text('£79');
            $('.team-monthly-saas').text('£119');
            $('.business-monthly-saas').text('£199');
            $('.enterprise-monthly-saas').text('£399');

            $('.developer-monthly-saas2').text('£158');
            $('.team-monthly-saas2').text('£318');
            $('.business-monthly-saas2').text('£548');
            $('.enterprise-monthly-saas2').text('£1,498');
            $('.developer-yearly-saas2').text('£148');
            $('.team-yearly-saas2').text('£294');
            $('.business-yearly-saas2').text('£498');
            $('.enterprise-yearly-saas2').text('£1,398');

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
            $('.setup-fee').text('₹15,000');
            $('.amazon-deposit').text('₹1,995');
            $('#developer-monthly').text('₹6,995');
            $('#team-monthly').text('₹17,995');
            $('#business-monthly').text('₹32,995');
            $('#enterprise-monthly').text('₹109,995');
            $('.developer-monthly').text('₹6,995');
            $('.team-monthly').text('₹17,995');
            $('.business-monthly').text('₹32,995');
            $('.enterprise-monthly').text('₹109,995');
            $('#developer-yearly').text('₹6,495');
            $('#team-yearly').text('₹15,995');
            $('#business-yearly').text('₹29,995');
            $('#enterprise-yearly').text('₹99,995');
            $('.developer-yearly').text('₹6,495');
            $('.team-yearly').text('₹15,995');
            $('.business-yearly').text('₹29,995');
            $('.enterprise-yearly').text('₹99,995');
            $('.increased-repository').text('₹1,415');
            $('.increased-storage').text('₹375');
            $('.storage-selection').text('₹670');
            $('.deposit-connections').text('₹7,380');
            $('.release-processing').text('₹12,500');
            $('.saas-continuity').text('₹19,995');
            $('.verification-advanced').text('₹179,995');
            $('.verification-complete').text('₹249,995');
            $('.developer-monthly-saas').text('₹7,999');
            $('.team-monthly-saas').text('₹11,999');
            $('.business-monthly-saas').text('₹19,999');
            $('.enterprise-monthly-saas').text('₹39,999');

            $('.developer-monthly-saas2').text('₹14,994');
            $('.team-monthly-saas2').text('₹29,994');
            $('.business-monthly-saas2').text('₹52,994');
            $('.enterprise-monthly-saas2').text('₹149,994');
            $('.developer-yearly-saas2').text('₹14,494');
            $('.team-yearly-saas2').text('₹27,994');
            $('.business-yearly-saas2').text('₹49,994');
            $('.enterprise-yearly-saas2').text('₹139,994');

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
            $('.setup-fee').text('A$299');
            $('.amazon-deposit').text('A$29');
            $('#developer-monthly').text('A$119');
            $('#team-monthly').text('A$299');
            $('#business-monthly').text('A$599');
            $('#enterprise-monthly').text('A$1,899');
            $('.developer-monthly').text('A$119');
            $('.team-monthly').text('A$299');
            $('.business-monthly').text('A$599');
            $('.enterprise-monthly').text('A$1,899');
            $('#developer-yearly').text('A$109');
            $('#team-yearly').text('A$249');
            $('#business-yearly').text('A$549');
            $('#enterprise-yearly').text('A$1,699');
            $('.developer-yearly').text('A$109');
            $('.team-yearly').text('A$249');
            $('.business-yearly').text('A$549');
            $('.enterprise-yearly').text('A$1,699');
            $('.increased-repository').text('A$25');
            $('.increased-storage').text('A$7');
            $('.storage-selection').text('A$12');
            $('.deposit-connections').text('A$130');
            $('.release-processing').text('A$250');
            $('.saas-continuity').text('A$349');
            $('.verification-advanced').text('A$2,995');
            $('.verification-complete').text('A$4,995');
            $('.developer-monthly-saas').text('A$139');
            $('.team-monthly-saas').text('A$209');
            $('.business-monthly-saas').text('A$359');
            $('.enterprise-monthly-saas').text('A$719');

            $('.developer-monthly-saas2').text('A$258');
            $('.team-monthly-saas2').text('A$508');
            $('.business-monthly-saas2').text('A$958');
            $('.enterprise-monthly-saas2').text('A$2,618');
            $('.developer-yearly-saas2').text('A$248');
            $('.team-yearly-saas2').text('A$458');
            $('.business-yearly-saas2').text('A$908');
            $('.enterprise-yearly-saas2').text('A$2,418');

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
            $('.setup-fee').text('$299');
            $('.amazon-deposit').text('$39');
            $('#developer-monthly').text('$119');
            $('#team-monthly').text('$299');
            $('#business-monthly').text('$599');
            $('#enterprise-monthly').text('$1,899');
            $('.developer-monthly').text('$119');
            $('.team-monthly').text('$299');
            $('.business-monthly').text('$599');
            $('.enterprise-monthly').text('$1,899');
            $('#developer-yearly').text('$109');
            $('#team-yearly').text('$275');
            $('#business-yearly').text('$549');
            $('#enterprise-yearly').text('$1,899');
            $('.developer-yearly').text('$109');
            $('.team-yearly').text('$275');
            $('.business-yearly').text('$549');
            $('.enterprise-yearly').text('$1,899');
            $('.increased-repository').text('$25');
            $('.increased-storage').text('$7');
            $('.storage-selection').text('$12');
            $('.deposit-connections').text('$130');
            $('.release-processing').text('$249');
            $('.saas-continuity').text('$399');
            $('.verification-advanced').text('$3,199');
            $('.verification-complete').text('$4,999');
            $('.developer-monthly-saas').text('$129');
            $('.team-monthly-saas').text('$199');
            $('.business-monthly-saas').text('$329');
            $('.enterprise-monthly-saas').text('$529');

            $('.developer-monthly-saas2').text('$248');
            $('.team-monthly-saas2').text('$498');
            $('.business-monthly-saas2').text('$928');
            $('.enterprise-monthly-saas2').text('$2,428');
            $('.developer-yearly-saas2').text('$238');
            $('.team-yearly-saas2').text('$474');
            $('.business-yearly-saas2').text('$878');
            $('.enterprise-yearly-saas2').text('$2,428');

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
            $('.setup-fee').text('R3,499');
            $('.amazon-deposit').text('R399');
            $('#developer-monthly').text('R1,395');
            $('#team-monthly').text('R3,345');
            $('#business-monthly').text('R5,995');
            $('#enterprise-monthly').text('R21,995');
            $('.developer-monthly').text('R1,395');
            $('.team-monthly').text('R3,345');
            $('.business-monthly').text('R5,995');
            $('.enterprise-monthly').text('R21,995');
            $('#developer-yearly').text('R1,250');
            $('#team-yearly').text('R2,950');
            $('#business-yearly').text('R5,490');
            $('#enterprise-yearly').text('R19,995');
            $('.developer-yearly').text('R1,250');
            $('.team-yearly').text('R2,950');
            $('.business-yearly').text('R5,490');
            $('.enterprise-yearly').text('R19,995');
            $('.increased-repository').text('R270');
            $('.increased-storage').text('R70');
            $('.storage-selection').text('R130');
            $('.deposit-connections').text('R1,410');
            $('.release-processing').text('R2,799');
            $('.saas-continuity').text('R3,999');
            $('.verification-advanced').text('R34,999');
            $('.verification-complete').text('R54,999');
            $('.developer-monthly-saas').text('R1,699');
            $('.team-monthly-saas').text('R2,499');
            $('.business-monthly-saas').text('R4,299');
            $('.enterprise-monthly-saas').text('R8,499');

            $('.developer-monthly-saas2').text('R3,094');
            $('.team-monthly-saas2').text('R5,844');
            $('.business-monthly-saas2').text('R10,294');
            $('.enterprise-monthly-saas2').text('R30,494');
            $('.developer-yearly-saas2').text('R2,949');
            $('.team-yearly-saas2').text('R5,449');
            $('.business-yearly-saas2').text('R9,789');
            $('.enterprise-yearly-saas2').text('R28,494');

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
            $('.setup-fee').text('CHF275');
            $('.amazon-deposit').text('CHF29');
            $('#developer-monthly').text('CHF89');
            $('#team-monthly').text('CHF225');
            $('#business-monthly').text('CHF399');
            $('#enterprise-monthly').text('CHF1,349');
            $('.developer-monthly').text('CHF89');
            $('.team-monthly').text('CHF225');
            $('.business-monthly').text('CHF399');
            $('.enterprise-monthly').text('CHF1,349');
            $('#developer-yearly').text('CHF79');
            $('#team-yearly').text('CHF199');
            $('#business-yearly').text('CHF349');
            $('#enterprise-yearly').text('CHF1,199');
            $('.developer-yearly').text('CHF79');
            $('.team-yearly').text('CHF199');
            $('.business-yearly').text('CHF349');
            $('.enterprise-yearly').text('CHF1,199');
            $('.increased-repository').text('CHF18');
            $('.increased-storage').text('CHF5');
            $('.storage-selection').text('CHF8');
            $('.deposit-connections').text('CHF99');
            $('.release-processing').text('CHF219');
            $('.saas-continuity').text('CHF329');
            $('.verification-advanced').text('CHF2,749');
            $('.verification-complete').text('CHF4,399');
            $('.developer-monthly-saas').text('CHF89');
            $('.team-monthly-saas').text('CHF139');
            $('.business-monthly-saas').text('CHF229');
            $('.enterprise-monthly-saas').text('CHF459');

            $('.developer-monthly-saas2').text('CHF178');
            $('.team-monthly-saas2').text('CHF364');
            $('.business-monthly-saas2').text('CHF628');
            $('.enterprise-monthly-saas2').text('CHF1,808');
            $('.developer-yearly-saas2').text('CHF168');
            $('.team-yearly-saas2').text('CHF338');
            $('.business-yearly-saas2').text('CHF578');
            $('.enterprise-yearly-saas2').text('CHF1,658');

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
            $('.setup-fee').text('CAD299');
            $('.amazon-deposit').text('CAD39');
            $('#developer-monthly').text('CAD119');
            $('#team-monthly').text('CAD299');
            $('#business-monthly').text('CAD499');
            $('#enterprise-monthly').text('CAD1,849');
            $('.developer-monthly').text('CAD119');
            $('.team-monthly').text('CAD299');
            $('.business-monthly').text('CAD499');
            $('.enterprise-monthly').text('CAD1,849');
            $('#developer-yearly').text('CAD109');
            $('#team-yearly').text('CAD275');
            $('#business-yearly').text('CAD449');
            $('#enterprise-yearly').text('CAD1,649');
            $('.developer-yearly').text('CAD109');
            $('.team-yearly').text('CAD275');
            $('.business-yearly').text('CAD449');
            $('.enterprise-yearly').text('CAD1,649');
            $('.increased-repository').text('CAD25');
            $('.increased-storage').text('CAD7');
            $('.storage-selection').text('CAD12');
            $('.deposit-connections').text('CAD130');
            $('.release-processing').text('CAD249');
            $('.saas-continuity').text('CAD349');
            $('.verification-advanced').text('CAD2,995');
            $('.verification-complete').text('CAD4,995');
            $('.developer-monthly-saas').text('CAD139');
            $('.team-monthly-saas').text('CAD199');
            $('.business-monthly-saas').text('CAD329');
            $('.enterprise-monthly-saas').text('CAD669');

            $('.developer-monthly-saas2').text('CAD258');
            $('.team-monthly-saas2').text('CAD498');
            $('.business-monthly-saas2').text('CAD828');
            
            $('.developer-yearly-saas2').text('CAD248');
            $('.team-yearly-saas2').text('CAD474');
            $('.business-yearly-saas2').text('CAD778');

            if (pathname.includes('/fr/')) {
              $('.enterprise-monthly-saas2').text('CAD2518');
              $('.enterprise-yearly-saas2').text('CAD2318');
            }
            else {
              $('.enterprise-monthly-saas2').text('CAD2,518');
              $('.enterprise-yearly-saas2').text('CAD2,318');
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
              $('#enterprise-monthly').text('$1499');
              $('.enterprise-monthly').text('$1499');
              $('#enterprise-yearly').text('$1349');
            }
            else {
              $('#enterprise-monthly').text('$1,499');
              $('.enterprise-monthly').text('$1,499');
              $('#enterprise-yearly').text('$1,349');
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

