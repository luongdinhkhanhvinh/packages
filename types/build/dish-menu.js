"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodType = exports.cuisineType = exports.mealType = void 0;
var mealType;
(function (mealType) {
    mealType["breakfast"] = "breakfast";
    mealType["lunch"] = "lunch";
    mealType["dinner"] = "dinner";
})(mealType || (exports.mealType = mealType = {}));
var cuisineType;
(function (cuisineType) {
    cuisineType["vietnamese"] = "vietnamese";
    cuisineType["italian"] = "italian";
    cuisineType["chinese"] = "chinese";
})(cuisineType || (exports.cuisineType = cuisineType = {}));
var foodType;
(function (foodType) {
    foodType["veg"] = "veg";
    foodType["non_veg"] = "non_veg";
    foodType["vegan"] = "vegan";
})(foodType || (exports.foodType = foodType = {}));
