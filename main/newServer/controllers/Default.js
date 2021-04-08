'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.cancelOrderPOST = function cancelOrderPOST (req, res, next, userWebId) {
  Default.cancelOrderPOST(userWebId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFromBasketPOST = function deleteFromBasketPOST (req, res, next, userWebId, menuNo) {
  Default.deleteFromBasketPOST(userWebId, menuNo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasketGET = function getBasketGET (req, res, next) {
  Default.getBasketGET()
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

module.exports.getOrderGET = function getOrderGET (req, res, next) {
  Default.getOrderGET()
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

module.exports.updateFromBasketPOST = function updateFromBasketPOST (req, res, next, userWebId, menuNo, menuCount) {
  Default.updateFromBasketPOST(userWebId, menuNo, menuCount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
