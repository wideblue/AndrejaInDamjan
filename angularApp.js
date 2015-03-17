/**
 * Created by damjandvorsek on 16/03/2015.
 */

'use strict';

/* App Module */

var porokaApp = angular.module('porokaApp', [

    'porokaControllers'

]);

/* Controllers */

var porokaControllers = angular.module('porokaControllers', []);

porokaControllers.controller('udelezbaFormCtrl', ['$scope', '$http',
    function($scope, $http) {
        console.log("Udeležba Angular controler");

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

            // posting to google spreadshit
            $http.post('https://docs.google.com/forms/d/1lWsTyjTo8Y8gZm4_Fv7l9Xk_u_bBDUqag9AStP1zWwc/formResponse', dataSvat).
                success(function(data, status, headers, config) {
                    console.log("successs" + status)
                }).
                error(function(data, status, headers, config) {
                    console.log("error" + status)
                });

        }


    }]);