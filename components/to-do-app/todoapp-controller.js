"use strict";
{
    angular.module('app')
     .controller('ToDoController', function(){
         const $ctrl = this;
         $ctrl.shop = [
             {list: 'Walk The Dog', done: false},
            {list: 'Go to the store', done: true},
            {list:'Get gas', done: false},
            {list: 'Wash the car', done: false},
            ];
     })
}