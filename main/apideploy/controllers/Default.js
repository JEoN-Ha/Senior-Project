// 'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

const db = mysql.createPool({
  host: 'milkthistle.mysql.database.azure.com',
  user: 'toeic@milkthistle',
  password: 'Jeonha12#',
  database: 'untactdt',
  port: 3306,
  ssl: false
})

module.exports.cancelOrderFromBasketPOST = function cancelOrderFromBasketPOST (req, res, next, userWebId, menuNo) {
  Default.cancelOrderFromBasketPOST(userWebId, menuNo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelOrderPOST = function cancelOrderPOST (req, res, next, userWebId) {
  Default.cancelOrderPOST(userWebId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMenuDataGET = function getMenuDataGET (req, res, next) {
  Default.getMenuDataGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertIntoBasketPOST = function insertIntoBasketPOST (req, res, next, orderToMenu_MenuNo, orderWebId, wEBCarId, orderPayment, menuNo, menuCount) {
  Default.insertIntoBasketPOST(orderToMenu_MenuNo, orderWebId, wEBCarId, orderPayment, menuNo, menuCount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderGET = function orderGET (req, res, next) {
  Default.orderGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.payingPOST = function payingPOST (req, res, next, orderState) {
  Default.payingPOST(orderState)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signInPOST = function signInPOST (req, res, next, userWebId, pW) {
  Default.signInPOST(userWebId, pW)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signUPPOST = function signUPPOST (req, res, next, userWebId, userName, pW, phoneNum, carId) {
  Default.signUPPOST(userWebId, userName, pW, phoneNum, carId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
