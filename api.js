const fetch = require('node-fetch');
const Client = require('shopify-buy');
global.fetch = fetch;

const client = Client.buildClient({
  domain: 'test-flutter.myshopify.com',
  storefrontAccessToken: '02107e02a55465ec3f850d59befa7db3',
});

export function fetchAll() {
  return new Promise((resolve, reject) => {
    try {
      client.product.fetchAll().then((products) => {
        resolve(products);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchProduct(productId) {
  return new Promise((resolve, reject) => {
    try {
      client.product.fetch(productId).then((product) => {
        // Do something with the product
        resolve(product);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchCollections() {
  return new Promise((resolve, reject) => {
    try {
      client.collection.fetchAllWithProducts().then((collections) => {
        // Do something with the collections
        resolve(collections);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function createCheckout() {
  return new Promise((resolve, reject) => {
    try {
      client.checkout.create().then((checkout) => {
        // Do something with the checkout
        resolve(checkout);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function removeDiscount(checkoutId) {
  return new Promise((resolve, reject) => {
    try {
      client.checkout.removeDiscount(checkoutId).then((checkout) => {
        // Do something with the updated checkout
        resolve(checkout);
      });
    } catch (err) {
      reject(err);
    }
  });
}

export function addLineItems(checkoutId, lines) {
  return new Promise((resolve, reject) => {
    try {
      client.checkout.addLineItems(checkoutId, lines).then((checkout) => {
        resolve(checkout);
      });
    } catch (err) {
      reject(err);
    }
  });
}

export function addDiscount(checkoutId, code) {
  return new Promise((resolve, reject) => {
    try {
      client.checkout.addDiscount(checkoutId, code).then((checkout) => {
        resolve(checkout);
      });
    } catch (err) {
      reject(err);
    }
  });
}

export function updateShippingAddress(checkoutId, shippingAddress) {
  return new Promise((resolve, reject) => {
    try {
      client.checkout
        .updateShippingAddress(checkoutId, shippingAddress)
        .then((checkout) => {
          resolve(checkout);
        });
    } catch (err) {
      reject(err);
    }
  });
}