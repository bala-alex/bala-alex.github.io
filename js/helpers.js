// Description: Helper functions for the application.

var Helpers = (function () {
  var mapCurrencyWithSymbol = function (currency) {
    const currencyMap = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      INR: "₹",
      AUD: "A$",
      SGD: "$",
      ZAR: "R",
      CHF: "CHF",
      CAD: "CAD",
    };

    return currencyMap[currency];
  };

  return {
    mapCurrencyWithSymbol: mapCurrencyWithSymbol,
  };
})();
