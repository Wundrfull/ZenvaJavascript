/**
 * Will go over data types
 *
 * Numbers
 * Booleans
 * Strings
 * Constants
 */

// Variables are data values that are stored in a memory location.

var age = 27;
var money = 50.05;

age = 69;

var isUserLoggedIn = true;

var name = 'Bungtown';
name = 'UpdatedBungtown';

const sucky = 'meh';

// Arrays
var shoppingList = ['Butter', 'Milk', 'Eggs'];
console.log(shoppingList);
console.log(shoppingList[0]);

shoppingList[0] = 'Not Butter';
console.log(shoppingList[0]);

var listLength = shoppingList.length;
console.log(listLength);

shoppingList.push('Butter');
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

var gameChar = {
  name: 'wew',
  pos: 2,
  health: 200,
  move: function (byAmount) {
    pos += byAmount;
  },
};

gameChar.name = 'Updated Name';
