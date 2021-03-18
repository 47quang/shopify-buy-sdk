function getVariants(products) {
  return products.map(p => p.variants.map(v => v.id))
}

const DISCOUNT_CODE = 'VIP01';
const EMAIL = 'quang.tran290699@gmail.com'
const SHIPPING_ADDRESS = {
  address1: '94 le hong phong',
  address2: '235/13/06 nguyen van cu',
  city: 'Buon Ma Thuot',
  company: null,
  country: 'Vietnam',
  firstName: 'Quang',
  lastName: 'Tran',
  phone: '0987654321',
  province: 'Daklak',
  zip: '64000',
};
const ITEMS = [
  {
    variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQzODU0MTU4NjU4NA==',
    quantity: 1,
  },
];
const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1ODcwMDMyNzMzNjg=';

async function main() {
  const products = await fetchAll();
  const product = await fetchProduct(productId);
  const collections = await fetchCollections();
  const checkout = await createCheckout();
  const checkoutId = checkout.id;
  await addLineItems(checkoutId, lineItemsToAdd);
  await removeDiscount(checkoutId);
  await updateShippingAddress(checkoutId, SHIPPING_ADDRESS);
  const data = await addDiscount(checkoutId, DISCOUNT_CODE);
  console.log(data.webUrl + `?checkout[email]=quang.tran290699@gmail.com`);
}

main();


// https://dhlteststore.myshopify.com/checkout
    // ?checkout[email]=dhl-test1@ognaliv.com
    // &checkout[shipping_address][zip]=12345
    // &checkout[shipping_address][address1]=Address&checkout[shipping_address][city]=City&checkout[shipping_address][last_name]=Last&checkout[shipping_address][first_name]=First&metafield[test1]=Test1&checkout[metafield][test2]=test2