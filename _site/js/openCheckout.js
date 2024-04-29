var cbInstance, cart;

window.addEventListener('DOMContentLoaded', function () {
    cbInstance = Chargebee.init({
        site: "codekeeperbilling",
        isItemsModel: true,
    });

    cbInstance.setCheckoutCallbacks(function (cart) {
        return {
            success: function (hpid) {
                console.log('success', hpid)
            }
        }
    });

    cart = cbInstance.getCart();
})


function openCheckout() {
    const selectedPlan = checkoutText;
    if (!selectedPlan) return;

    const product = cbInstance.initializeProduct(selectedPlan, 1)
    cart.replaceProduct(product);

    if (checkoutAdOns) {
        checkoutAdOns.map((addon) => {
            product.addAddon({ id: addon, quantity: 1 });
        })
    }
    // Opening the checkout
    cart.proceedToCheckout();
}