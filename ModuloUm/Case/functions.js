const pedidos = require("./data.json");
let regexItem = /item.+/;
let regexMerchant = /merchant.+/;
let regexCustomer = /customer.+/;

//Funções da parte 4
function itemTotalPrice(obj) {
  const quantity = obj.item_quantity;
  const unitPrice = obj.item_unitPrice;
  let totalPrice = (unitPrice * quantity).toFixed(2);
  obj.item_totalPrice = totalPrice;
  return totalPrice;
}

// vamos encurtar com arrowFaction
function cartSubtotal(obj) {
  obj.cart_subtotal = itemTotalPrice(obj);
  return itemTotalPrice(obj);
}

function cartTotal(obj) {
  const totalPrice = itemTotalPrice(obj);
  const discount = obj.item_discount;
  let cartTotal = (totalPrice - discount).toFixed(2);
  obj.cart_total = cartTotal;
  return cartTotal;
}

function paymentValue(obj) {
  const percentageOneValue = 0.33;
  const percentageTwoValue = 0.67;
  const cartValue = cartTotal(obj);
  let paymentOneValue = cartValue * percentageOneValue;
  let paymentTwoValue = cartValue * percentageTwoValue;
  obj["payments_payment[1]_value"] = paymentOneValue.toFixed(2);
  obj["payments_payment[2]_value"] = paymentTwoValue.toFixed(2);
  return [paymentOneValue, paymentTwoValue];
}

function paymentChangeFor(obj) {
  let contCash = 0;
  const valueForOne = paymentValue(obj)[0];
  const valueForTwo = paymentValue(obj)[1];
  const percentageOne = 0.07;
  const percentageTwo = 0.11;
  let paymentOneChangeFor = 0;
  let paymentTwoChangeFor = 0;
  // isso está muito "engeçado" já que você esta partido da pre-condição que sempre terão dois metodos de pagamentos e não é bem assim. Como resolveria isso?
  if (obj["payments_payment[1]_method"] === "CASH" && obj["payments_payment[2]_method"] === "CASH") {
    contCash = valueForOne + valueForTwo;
    paymentOneChangeFor = (valueForOne + valueForOne * percentageOne).toFixed(2);
    paymentTwoChangeFor = (valueForTwo + valueForTwo * percentageTwo).toFixed(2);
    obj["payments_payment[1]_changeFor"] = paymentOneChangeFor;
    obj["payments_payment[2]_changeFor"] = paymentTwoChangeFor;
    return [paymentOneChangeFor, paymentTwoChangeFor, contCash.toFixed(2)];
  } else if (obj["payments_payment[1]_method"] === "CASH" && obj["payments_payment[2]_method"] !== "CASH") {
    contCash = valueForOne;
    paymentOneChangeFor = (valueForOne + valueForOne * percentageOne).toFixed(2);
    obj["payments_payment[1]_changeFor"] = paymentOneChangeFor;
    obj["payments_payment[2]_changeFor"] = paymentTwoChangeFor;
    return [paymentOneChangeFor, paymentTwoChangeFor, contCash.toFixed(2)];
  } else if (obj["payments_payment[1]_method"] !== "CASH" && obj["payments_payment[2]_method"] === "CASH") {
    contCash = valueForTwo;
    paymentTwoChangeFor = (valueForTwo + valueForTwo * percentageTwo).toFixed(2);
    obj["payments_payment[1]_changeFor"] = paymentOneChangeFor;
    obj["payments_payment[2]_changeFor"] = paymentTwoChangeFor;
    return [paymentOneChangeFor, paymentTwoChangeFor, contCash.toFixed(2)];
  } else {
    obj["payments_payment[1]_changeFor"] = paymentOneChangeFor;
    obj["payments_payment[2]_changeFor"] = paymentTwoChangeFor;
    return [paymentOneChangeFor, paymentTwoChangeFor, contCash];
  }
}

//Função para toda a parte de charges
function chargesValues(obj) {
  let chargesChange = 0;
  const changeOne = paymentValue(obj)[0] * 0.07;
  const changeTwo = paymentValue(obj)[1] * 0.11;

  obj["payments_charges_subTotal"] = cartSubtotal(obj);
  obj["payments_charges_total"] = cartTotal(obj);
  obj["payments_charges_totalDiscounts"] = obj.item_discount;
  obj["payments_charges_totalInCash"] = paymentChangeFor(obj)[2];
  // isso está muito "engeçado" já que você esta partido da pre-condição que sempre terão dois metodos de pagamentos e não é bem assim. Como resolveria isso?
  if (obj["payments_payment[1]_method"] === "CASH" && obj["payments_payment[2]_method"] === "CASH") {
    chargesChange = changeOne + changeTwo;
    obj["payments_charges_change"] = chargesChange.toFixed(2);
    return chargesChange;
  } else if (obj["payments_payment[1]_method"] === "CASH" && obj["payments_payment[2]_method"] !== "CASH") {
    chargesChange = changeOne;
    obj["payments_charges_change"] = chargesChange.toFixed(2);
    return chargesChange;
  } else if (obj["payments_payment[1]_method"] !== "CASH" && obj["payments_payment[2]_method"] === "CASH") {
    chargesChange = changeTwo;
    obj["payments_charges_change"] = chargesChange.toFixed(2);
    return chargesChange;
  } else {
    obj["payments_charges_change"] = chargesChange;
    return 0;
  }
}

//Função para parte 1,2 e 3
// Muito bom!
function formatObject(regex) {
  let newObject = {};
  let newRequest = [];
  pedidos.forEach((obj) => {
    for (let key in obj) {
      if (key.match(regex)) {
        newObject[key] = obj[key];
      }
    }
    newRequest.push(newObject);
  });
  return newRequest;
}

// Chamando e imprimindo as funções de 1,2 e 3
console.log(formatObject(regexItem));
console.log(formatObject(regexMerchant));
console.log(formatObject(regexCustomer));

// ForEach para as funções da parte 4
function addValues(pedidos) {
  pedidos.forEach((obj) => {
    itemTotalPrice(obj);
    cartSubtotal(obj);
    cartTotal(obj);
    paymentValue(obj);
    paymentChangeFor(obj);
    chargesValues(obj);
  });
  return pedidos;
}

//Testando e imprimindo os pedidos do json após a chamada das funções da parte 4
console.log(addValues(pedidos));
