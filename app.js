function phonepricequantityhandle(product, incriment) {
    const productInput = document.getElementById(product + "-quantity");
    const productCount = parseInt(productInput.value);
    // let quantity = phoneQuantitynew - 1;
    let productquantity = productCount;
    if (incriment == true) {
        productquantity = productCount + 1;
    } else if (incriment == false && productquantity > 1) {
        productquantity = productCount - 1;
    }
    productInput.value = productquantity;
    // const totalmobileprice = productquantity * 1200;
    let totalprice = productquantity;
    if (product == "phone") {
        totalprice = productquantity * 1000;
    }
    if (product == "cover") {
        totalprice = productquantity * 50;
    }
    document.getElementById(product + "-price").innerText = totalprice;
    calculataTotal();
}
calculataTotal();
//calculate total
function calculataTotal() {
    // const phoneprice = document.getElementById("phone-price").innerText;
    // const phonepricecount = parseInt(phoneprice);
    const phonecount = getNumberValue("phone");
    const totalphoneprice = phonecount * 1000;

    const coverCount = getNumberValue("cover");
    const totalcoverPrice = coverCount * 50;

    const subTotal = totalphoneprice + totalcoverPrice;
    document.getElementById("sub-total").innerText = subTotal;

    const taxvalue = getnumvalueInnertext("tax");
    const tax = Math.round((subTotal * 15) / 100);
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = subTotal + tax;
}

function getNumberValue(product) {
    const phoneQuantity = document.getElementById(product + "-quantity").value;
    const phonecount = parseInt(phoneQuantity);
    return phonecount;
}

function getnumvalueInnertext(id) {
    const maintag = document.getElementById(id).innerText;
    const valueCount = parseInt(maintag);
    return valueCount;
}

// // functionality for cover
// function quantityPricehandle(incriment) {
//     const coverquantity = document.querySelector("#cover-quantity");
//     const covercount = parseInt(coverquantity.value);
//     // const coverCountNew = covercount - 1;
//     let coverCountNew = covercount;
//     if (incriment == true) {
//         coverCountNew = covercount + 1;
//     } else if (incriment == false && coverCountNew > 1) {
//         coverCountNew = covercount - 1;
//     }
//     coverquantity.value = coverCountNew;
//     const coverprice = coverCountNew * 59;
//     document.getElementById("coverprice").innerText = coverprice;
// }
// // functionality for phone
// function phonepricequantityhandle(incriment) {
//     const phoneQuantity = document.getElementById("mobile-quantity");
//     const phoneQuantitynew = parseInt(phoneQuantity.value);
//     // let quantity = phoneQuantitynew - 1;
//     let quantity = phoneQuantitynew;
//     if (incriment == true) {
//         quantity = phoneQuantitynew + 1;
//     } else if (incriment == false && quantity > 1) {
//         quantity = phoneQuantitynew - 1;
//     }
//     phoneQuantity.value = quantity;
//     const totalmobileprice = quantity * 1200;
//     document.querySelector("#pricephone").innerText = totalmobileprice;
// }

// let plus = document.getElementById("coverplus");
// plus.addEventListener("click", () => {
//     const coverquantity = document.querySelector("#cover-quantity");
//     const covercount = parseInt(coverquantity.value);
//     const coverCountNew = covercount + 1;
//     coverquantity.value = coverCountNew;
//     const coverprice = coverCountNew * 59;
//     document.getElementById("coverprice").innerText = coverprice;
// });

// let minus = document.querySelector("#cover-minus");
// minus.addEventListener("click", () => {
//     const coverquantity = document.querySelector("#cover-quantity");
//     const covercount = parseInt(coverquantity.value);
//     const coverCountNew = covercount - 1;
//     coverquantity.value = coverCountNew;
//     const coverprice = coverCountNew * 59;
//     document.getElementById("coverprice").innerText = coverprice;
// // });
// const pricephone = document.getElementById("pricephone").innerText;
//     const pricephoneNumber = parseInt(pricephone);