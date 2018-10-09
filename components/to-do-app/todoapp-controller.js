"use strict";
{
    angular.module('app')
     .controller('ToDoController', function(){
         const $ctrl = this;
         $ctrl.shop = [
            {list: 'Walk The Dog', done: false},
            {list: 'Go to the store', done: false},
            {list:'Get gas', done: false},
            {list: 'Wash the car', done: false},
            ];
            
        $ctrl.addTask = function() {
            $ctrl.shop.push({list: $ctrl.newTask, done: false});
            $ctrl.newTask = '';
        }
 
        $ctrl.completeTask = (index) => {
            $ctrl.shop[index].done = true;
        }

        $ctrl.removeTask = function(index) {
            $ctrl.shop.splice(index,1)  
        }
        

        
     })
}