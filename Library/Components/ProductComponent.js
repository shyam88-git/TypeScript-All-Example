"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductComponent = void 0;
var ProductTemplate_1 = require("../Templates/ProductTemplate");
var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Samsung TV";
        _this.Price = 45000.0;
        _this.Qty = 2;
        _this.CategoryName = "Electronics";
        return _this;
    }
    ProductComponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    ProductComponent.prototype.Print = function () {
        console.log("Name=".concat(this.Name, " \n Price=").concat(this.Price, " \n \n    Qty=").concat(this.Qty, "\n CategoryName=").concat(this.CategoryName, "\n\n    Total=").concat(this.Total(), "\n"));
    };
    return ProductComponent;
}(ProductTemplate_1.ProductTemplate));
exports.ProductComponent = ProductComponent;
