/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be 
  implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at 
  the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  //Game Object
function GameObject(attributes){
  this.name=attributes.name;
  this.createdAt= attributes.createdAt;
  this.dimensions=attributes.dimensions;
}
GameObject.prototype.destroy = function(){
  return (`${this.name} was removed from the game.`)
}

//Character Stats
function CharacterStats(charAttributes){
  GameObject.call(this,charAttributes);
  this.healthPoints=charAttributes.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return (`${this.name} took damage.`)
}

//Humanoid 
 function Humanoid(humanoidAttributes){
   CharacterStats.call(this,humanoidAttributes);
   this.team=humanoidAttributes.team;
   this.weapons=humanoidAttributes.weapons;
   this.language=humanoidAttributes.language;
 }

Humanoid.prototype=Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`
}
//Villain
function Villain(villainAttributes){
  Humanoid.call(this,villainAttributes);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.failsteal = function (){
  return `${this.name} tried and failed to steal from you.`
}
Villain.prototype.stoleKitty = function(){
  return `${this.name} stole the pocket kitten.`
}
//Hero
function Hero (heroAttributes){
  Humanoid.call(this,heroAttributes);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.feed = function(){
  return `${this.name} has fed you.`
}
Hero.prototype.returnKitty = function (){
  return `${this.name} retrieved the stolen pocket kitten!`
}
Hero.prototype.kill= function(){
  return `The hero, ${this.name}, accidentally killed you.`
}

const pocketKitty = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 1,
  },
  healthPoints: 9,
  name: 'Pocket Kitten',
  team: 'Likes to Swat Guild',
  weapons: [
    'Teeth',
    'Claws',
  ],
  language: 'Meow',
});

const billy = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 2,
  },
  healthPoints: 12,
  name: 'Dr. Horrible',
  team: 'Evil League of Evil',
  weapons: [
    'Freeze Ray',
    'Transmatter Ray',
  ],
  language: 'The Common Tongue',
});

const hammer = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 8,
  name: 'Captain Hammer',
  team: 'Himself',
  weapons: [
    'Fists',
    'Hammer',
  ],
  language: 'The Common Tongue',
});

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(billy.stoleKitty());
  console.log(hammer.kill());
   console.log(mage.createdAt); // Today's date
   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
   console.log(swordsman.healthPoints); // 15
   console.log(mage.name); // Bruce
   console.log(swordsman.team); // The Round Table
   console.log(mage.weapons); // Staff of Shamalama
   console.log(archer.language); // Elvish
   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
   console.log(mage.takeDamage()); // Bruce took damage.
   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
/*
  === GameObject ===

  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

  // GameObject.prototype.test = function(){
//   console.log(`Name: ${this.name}, created at ${this.createdAt}, dimensions ${this.dimensions}.`)
// }
// const testObj = new GameObject({name:'testName',createdAt:'creationDate', dimensions:'Large'})
// console.log(testObj.destroy());
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

