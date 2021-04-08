'use strict';


/**
 * update orderstate to mark `deleted` from OrderList
 *
 * userWebId String user's id that inputed when sign up
 * returns Object
 **/
exports.cancelOrderPOST = function(userWebId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update orderstate to mark `deleted` from basket
 *
 * userWebId String user's id that inputed when sign up
 * menuNo Integer id number of menu
 * returns Object
 **/
exports.deleteFromBasketPOST = function(userWebId,menuNo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * to show what's in my basket
 *
 * returns inline_response_200_2
 **/
exports.getBasketGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "BasketMenuCount" : 6,
  "BasketMenuNo" : 0,
  "BasketId" : "BasketId",
  "BasketState" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Menu API
 *
 * returns inline_response_200
 **/
exports.getMenuDataGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Price" : 6,
  "MenuNo" : 0,
  "FoodNameKor" : "FoodNameKor",
  "FoodNameEng" : "FoodNameEng"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * to show Ordered list
 *
 * returns inline_response_200_4
 **/
exports.getOrderGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Menucount" : 1,
  "OrderToMenu_OrderNo" : 0,
  "OrderToMenu_MenuNo" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * put something to Basket before the order
 *
 * orderToMenu_MenuNo Integer menu number
 * orderWebId String user Web ID
 * wEBCarId String Car id that user inputed when order
 * orderPayment Integer payment
 * menuNo Integer id number of menu
 * menuCount Integer quantity of menus users ordered
 * returns inline_response_200_1
 **/
exports.insertIntoBasketPOST = function(orderToMenu_MenuNo,orderWebId,wEBCarId,orderPayment,menuNo,menuCount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OrderWebId" : "OrderWebId",
  "MenuCount" : 2,
  "Price" : 7,
  "MenuNo" : 5,
  "OrderToMenu_OrderNo" : 0,
  "WEBCarId" : 6,
  "OrderPayment" : 5,
  "OrderToMenu_MenuNo" : "OrderToMenu_MenuNo",
  "OrderState" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * to check the order-list
 *
 * returns inline_response_200_3
 **/
exports.orderGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "UserName" : "UserName",
  "MenuCount" : 6,
  "PhoneNum" : "PhoneNum",
  "OrderPayment" : 1,
  "OrderToMenu_MenuNo" : 0,
  "carId" : "carId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * clicked `paying`
 *
 * orderState Integer to note which state is it now
 * returns inline_response_200_5
 **/
exports.payingPOST = function(orderState) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "OrderState" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * post ID & Password from DB to compare DB's and Web's
 *
 * userWebId String user's id that inputed when sign up
 * pW String user's password that inputed when sign up
 * returns Object
 **/
exports.signInPOST = function(userWebId,pW) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post Member's Data API
 *
 * userWebId String users membership ID
 * userName String user name
 * pW String user's password
 * phoneNum String user's phone number
 * carId String user's car ID
 * returns Object
 **/
exports.signUPPOST = function(userWebId,userName,pW,phoneNum,carId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * to add things to Basket
 *
 * userWebId String user's id that inputed when sign up
 * menuNo Integer id number of menu
 * menuCount Integer quantity of menus users ordered
 * returns Object
 **/
exports.updateFromBasketPOST = function(userWebId,menuNo,menuCount) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

