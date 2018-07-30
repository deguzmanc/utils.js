var utils = require('../dist/utils.js');
var test = utils.test;
var type = utils.type;

describe('type', function() {
    describe('isArray', function() {
        it('test isArray against all types', function() {
            var f = type.isArray;
            test.assertTrue(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isBase64', function() {
        it('TODO', function() {
            test.assertTrue(true);
        });
    });
    describe('isBoolean', function() {
        it('test isBoolean against all types', function() {
            var f = type.isBoolean;
            test.assertFalse(f([]));
            test.assertTrue(f(true));
            test.assertTrue(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isDate', function() {
        it('test isDate against all types', function() {
            var f = type.isDate;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertTrue(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isError', function() {
        it('test isError against all types', function() {
            var f = type.isError;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertTrue(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isFunction', function() {
        it('test isFunction against all types', function() {
            var f = type.isFunction;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertTrue(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isJSON', function() {
        it('TODO', function() {
            test.assertTrue(true);
        });
    });
    describe('isNone', function() {
        it('test isNone against all types', function() {
            var f = type.isNone;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertTrue(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertTrue(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertTrue(f(undefined));
        });
    });
    describe('isNumber', function() {
        it('test isNumber against all types', function() {
            var f = type.isNumber;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertTrue(f(0));
            test.assertTrue(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
            for (var i = -10; i <= 10; i++) {
                test.assertTrue(type.isNumber(i));
            }
        });
    });
    describe('isNull', function() {
        it('test isNull against all types', function() {
            var f = type.isNull;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertTrue(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isObject', function() {
        it('test isObject against all types', function() {
            var f = type.isObject;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertTrue(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isRegExp', function() {
        it('test isRegExp against all types', function() {
            var f = type.isRegExp;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertTrue(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isSetAndNotEmpty', function() {
        it('test isSetAndNotEmpty against all types', function() {
            var f = type.isSetAndNotEmpty;
            test.assertFalse(f([]));
            test.assertTrue(f([true]));
            test.assertTrue(f(true));
            test.assertTrue(f(false));
            test.assertTrue(f(new Date()));
            test.assertTrue(f(new Error()));
            test.assertTrue(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertTrue(f(0));
            test.assertTrue(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertTrue(f({ a:true }));
            test.assertTrue(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertTrue(f('0'));
            test.assertTrue(f('1'));
            test.assertTrue(f('true'));
            test.assertTrue(f('false'));
            test.assertTrue(f('NaN'));
            test.assertTrue(f('null'));
            test.assertTrue(f('undefined'));
            test.assertFalse(f(undefined));
        });
    });
    describe('isType', function() {
        it('test isType against all types', function() {
            var f = type.isType;
            test.assertTrue(f(type.ARRAY));
            test.assertTrue(f(type.BOOLEAN));
            test.assertTrue(f(type.DATE));
            test.assertTrue(f(type.ERROR));
            test.assertTrue(f(type.FUNCTION));
            test.assertTrue(f(type.NAN));
            test.assertTrue(f(type.NUMBER));
            test.assertTrue(f(type.NULL));
            test.assertTrue(f(type.OBJECT));
            test.assertTrue(f(type.REGEXP));
            test.assertTrue(f(type.STRING));
            test.assertTrue(f(type.UNDEFINED));
            test.assertTrue(f(type.UNKNOWN));
            test.assertTrue(f(type.XML));
            test.assertFalse(f(''));
        });
    });
    describe('isUndefined', function() {
        it('test isUndefined against all types', function() {
            var f = type.isUndefined;
            test.assertFalse(f([]));
            test.assertFalse(f(true));
            test.assertFalse(f(false));
            test.assertFalse(f(new Date()));
            test.assertFalse(f(new Error()));
            test.assertFalse(f(function(){}));
            test.assertFalse(f(NaN));
            test.assertFalse(f(0));
            test.assertFalse(f(1));
            test.assertFalse(f(null));
            test.assertFalse(f({}));
            test.assertFalse(f(/^[a-z]+$/));
            test.assertFalse(f(''));
            test.assertFalse(f('0'));
            test.assertFalse(f('1'));
            test.assertFalse(f('true'));
            test.assertFalse(f('false'));
            test.assertFalse(f('NaN'));
            test.assertFalse(f('null'));
            test.assertFalse(f('undefined'));
            test.assertTrue(f(undefined));
        });
    });
    describe('isXML', function() {
        it('TODO', function() {
            test.assertTrue(true);
        });
    });
    describe('of', function(){
        it('test of against all types', function(){
            var f = type.of;
            test.assertEquals(f([]), type.ARRAY);
            test.assertEquals(f(true), type.BOOLEAN);
            test.assertEquals(f(false), type.BOOLEAN);
            test.assertEquals(f(new Date()), type.DATE);
            test.assertEquals(f(new Error()), type.ERROR);
            test.assertEquals(f(function(){}), type.FUNCTION);
            test.assertEquals(f(NaN), type.NAN);
            test.assertEquals(f(0), type.NUMBER);
            test.assertEquals(f(1), type.NUMBER);
            test.assertEquals(f(null), type.NULL);
            test.assertEquals(f({}), type.OBJECT);
            test.assertEquals(f(/^[a-z]+$/), type.REGEXP);
            test.assertEquals(f(''), type.STRING);
            test.assertEquals(f('0'), type.STRING);
            test.assertEquals(f('1'), type.STRING);
            test.assertEquals(f('true'), type.STRING);
            test.assertEquals(f('false'), type.STRING);
            test.assertEquals(f('NaN'), type.STRING);
            test.assertEquals(f('null'), type.STRING);
            test.assertEquals(f('undefined'), type.STRING);
            test.assertEquals(f(undefined), type.UNDEFINED);
        });
    });
});