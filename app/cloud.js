/**
 * Created by xiadd on 6/30/16.
 */
var AV = require('leanengine');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function (request, response) {
  response.success('Hello world!');
});

AV.Cloud.define('getUsers', function (req, res) {

});

module.exports = AV.Cloud;
