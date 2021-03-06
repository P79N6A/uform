"use strict";

exports.__esModule = true;
exports.zip = exports.date = exports.zh = exports.money = exports.taodomain = exports.idcard = exports.phone = exports.qq = exports.integer = exports.number = exports.ipv4 = exports.ipv6 = exports.email = exports.url = void 0;

/* eslint-disable no-useless-escape */
var url = new RegExp( // protocol identifier
'^(?:(?:(?:https?|ftp):)?//)' + // user:pass authentication
'(?:\\S+(?::\\S*)?@)?' + '(?:' + // IP address exclusion - private & local networks
// Reference: https://www.arin.net/knowledge/address_filters.html
// filter 10.*.*.* and 127.*.*.* adresses
'(?!(?:10|127)(?:\\.\\d{1,3}){3})' + // filter 169.254.*.* and 192.168.*.*
'(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' + // filter 172.16.0.0 - 172.31.255.255
// TODO: add test to validate that it invalides address in 16-31 range
'(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' + // IP address dotted notation octets
// excludes loopback network 0.0.0.0
// excludes reserved space >= 224.0.0.0
// excludes network & broacast addresses
// (first & last IP address of each class)
// filter 1. part for 1-223
'(?:22[0-3]|2[01]\\d|[1-9]\\d?|1\\d\\d)' + // filter 2. and 3. part for 0-255
'(?:\\.(?:25[0-5]|2[0-4]\\d|1?\\d{1,2})){2}' + // filter 4. part for 1-254
'(?:\\.(?:25[0-4]|2[0-4]\\d|1\\d\\d|[1-9]\\d?))' + '|' + // host name
"(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" + // domain name
"(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" + // TLD identifier
"(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + ')' + // port number
'(?::\\d{2,5})?' + // resource path
'(?:/\\S*)?$');
exports.url = url;
var email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
exports.email = email;
var ipv6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
exports.ipv6 = ipv6;
var ipv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/;
exports.ipv4 = ipv4;
var number = /^[+-]?\d+(\.\d+)?$/;
exports.number = number;
var integer = /^[+-]?\d+$/;
exports.integer = integer;
var qq = /^(\+?[1-9]\d*|0)$/;
exports.qq = qq;
var phone = /^\d{3}-\d{8}$|^\d{4}-\d{7}$|^\d{11}$/;
exports.phone = phone;
var idcard = /^\d{15}$|^\d{18}$/;
exports.idcard = idcard;
var taodomain = /^(https?\:)?\/\/[a-zA-Z0-9\.\-]+\.(taobao|tmall|alitrip|yao\.95095)(\.daily)?\.(com|net|hk(\/hk)?)/;
exports.taodomain = taodomain;
var money = /^([\u0024\u00A2\u00A3\u00A4\u20AC\u00A5\u20B1\20B9\uFFE5]\s*)(\d+,?)+\.?\d*\s*$/;
exports.money = money;
var zh = /^[\u4e00-\u9fa5]+$/;
exports.zh = zh;
var date = /^(?:(?:1[6-9]|[2-9][0-9])[0-9]{2}([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:(?:1[6-9]|[2-9][0-9])(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)([-/.]?)0?2\2(?:29))(\s+([01][0-9]:|2[0-3]:)?[0-5][0-9]:[0-5][0-9])?$/;
exports.date = date;
var zip = /^[0-9]{6}$/;
exports.zip = zip;