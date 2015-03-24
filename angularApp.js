/**
 * Created by damjandvorsek on 16/03/2015.
 */

'use strict';

/* for switchery in the form*/
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
    var switchery = new Switchery(html);
});

/* App Module */

var porokaApp = angular.module('porokaApp', ['porokaControllers'],
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('[{[').endSymbol(']}]');
    }
);

/* Controllers */

var porokaControllers = angular.module('porokaControllers', []);

porokaControllers.controller('udelezbaFormCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location ) {
        console.log("Udeležba Angular controler");


        $scope.$on('$locationChangeSuccess', function(next, current) {

            var locationSearch = $location.search();
            if (locationSearch.submitted == "true") {
                $scope.svat.ime = null;
                $scope.svat.priimek = null;
                $scope.svat.spremljevalecIme = null;
                $scope.svat.otrociStevilo= null;
                $scope.zahvala = "Hvala za informacijo o udeležbi!";
                console.log("location submitted true  ");
            }
        });

        $scope.svat = {};
        $scope.svat.udelezba = true;

        $scope.update = function(svat) {
            console.log(svat);
            var dataSvat = {};
            if ('ime' in svat) {
               dataSvat["entry.1877724574"] = svat.ime;
            }
            if ('priimek' in svat) {
                dataSvat["entry.1189026553"] = svat.priimek;
            }

            if ('udelezba' in svat) {
                dataSvat["entry.1759000815"] = svat.udelezba;
            }

            // posting to google spreadsheet
            $http.post('https://docs.google.com/forms/d/1lWsTyjTo8Y8gZm4_Fv7l9Xk_u_bBDUqag9AStP1zWwc/formResponse', dataSvat).
                success(function(data, status, headers, config) {
                    console.log("successs" + status)
                }).
                error(function(data, status, headers, config) {
                    console.log("error" + status)
                });

        }


    }]);


porokaControllers.controller('ExampleController', ['$scope', function($scope) {
        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
    }]);