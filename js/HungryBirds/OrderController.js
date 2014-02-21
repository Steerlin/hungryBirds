'use strict';

HungryBirdsApp.controller('OrderController',
    [
        '$scope',
        function ($scope) {

            $scope.orders = [];
            $scope.selectedProducts = [];

            $scope.availableProducts = [
                'Kleintje',
                'Grote',
                'Frikandel',
                'Bicky Burger',
                'Stoofvleessaus',
                'Mayonaise'
            ];

            $scope.clearOrders = function () {
                $scope.orders = [];
            };

            function clearFormVariables() {
                $scope.name = null;
                $scope.remarks = null;
                $scope.selectedProducts = [];
            }

            $scope.addOrder = function (name, products, remarks) {

                var order = {
                    'name': name,
                    'products': products,
                    'remarks': remarks
                };

                $scope.orders.push(order);

                clearFormVariables();
            };

            $scope.removeOrder = function (order) {

                $scope.orders = _.without($scope.orders, order);

            };

            $scope.ivoCannotCarryOrders = function () {
                return $scope.orders.length > 2;
            };

            $scope.selectProduct = function (product) {
                $scope.selectedProducts.push(product);
            }

        }]);