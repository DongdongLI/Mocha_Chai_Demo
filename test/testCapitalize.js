var capitalize = require('../capitalize');

var chai = require('chai');
var expect = chai.expect;


describe("capitalize", function () {
    it("capitalizes single words", function () {
        expect(capitalize("express")).to.equal("Express");
        expect(capitalize("cats")).to.equal("Cats");
    });

    it("make the rest of the string lowercase", function () {
        expect(capitalize("javaScript")).to.equal("Javascript");
    });

    it("check the empty string",function () {
        expect(capitalize("")).to.equal("");
    });
    it("expects an error", function () {
        expect(function(){capitalize(123); }).to.throw(Error);
    });
    it("reverse test", function () {
        expect(capitalize("foo")).not.to.equal("foo");
    });
});

