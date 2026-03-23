---
tags: misc
layout: _article.njk
title: "Scoundrel"
date: "2026-03-29"
summary: "A simple, single-player, Dungeon Crawler Card Game"
---
## Scoundrel
Roguelike games are procedurally generated, turn based games, with focus on exploring and fighting, and with permadeath. They are very popular and come in many different shapes, sizes and flavours. <br>
Scoundrel is a very simple, single player, roguelike, dungeon crawler, played with nothing but a deck of cards, and optionally a pen & paper or a D20, for keeping track of your health.

Your are an adventure who find yourself in a most peculiar dungeon. You decide to explore it, and fight your way through the hordes of baddies, to see how far you can make it. Each room you enter consists of four entities (cards). They can be monsters, weapons or health potions. You then decide how to interact with them, to be able to move on to the next room. 

## Setup and gameplay
### Preparing the game
You set up the deck, by looking through and removing all red face-cards and red aces and any jokers. Those are not used in the game. You can lay them out, off to the side, for moral support, or just put them away. <br>
Now you shuffle the rest of the deck, and put it to the left of your play area. The deck is the unexplored dungeon. Find a way to track your health, starting at 20, which is also you max. You can use a D20, or pen and paper. I also added a health tracker at the very bottom of this page. 


### Clearing rooms
To enter the first room, pull four cards from the top of the dungeon deck, and lay them face up, in front of you. To clear the room, you have to interact with three of the cards in the room. When you have done that, you move on to the next room, by pulling three new cards from the deck, to fill the room. 

**What you might find**<br>
Diamonds ♦️ are weapons you can equip. The face value is the size of the weapon<br>
Hearts ♥️ are health potions, that can heal you, for as many HP as their value, to a maximum of 20<br>
Clubs ♣️ are trolls, and the face value is the power of the troll<br>
Spades ♠️ are goblins. Their power also represented by the face value<br>

For monsters, Jacks, Queens, Kings and Aces are 11, 12, 13 and 14 points of power, respectively. 

If you pull a weapon ♦️, you can equip it, by placing it in front of you, between you and the rest of the room. You can now use the quipped weapon to fight monsters ♣️♠️. You can only ever use one weapon at a time, and weapons are binding. This means that when you grab a weapon to use, you keep it until you discard it. You can not un-equip a weapon to use later. If you get another weapon, your current one is discarded, and lost forever. You cannot discard weapons directly from the room, but are forced to pick them up first. This could force you to discard a good weapon for a weaker one, to be able to move on to the next room. <br>

If there are monsters ♣️♠️ in the room, you can fight them in two ways: With your bare hands, or with you weapon, if you have one. If you fight a monster with your bare hands, you take as many damage as the face value of the monster. Jacks are 11, Queens are 12, Kings are 13 and Aces are 14. Number cards have the value written on them. <br>
If you use a weapon to fight a monster, you subtract the value of the weapon from the value of the monster, and only take the remainder as damage. For example, if you have a level 8 sword and you are fighting a level 11 monster (A jack), you take 3 damage (11♣️ - 8♦️ = 3♥️). If your sword is more powerful than or equal to the monster, you take no damage at all. <br>
When using a weapon to defeat a monster, you place the monster card, face up, on the sword card. Make sure you can still see the number value on the weapon. The sword is now dulled, and can only be used on smaller monsters than the one it just killed. In the example above the sword can now only be used on monsters with less than 11 power. Now lets say you pull a level 5 monster, and use the sword again. Since the sword is level 8, you take no damage at all, but now the sword is only usable on monsters with level 2, 3 and 4, as those are the only monsters smaller than 5.<br>
To save your sword, you can always choose to take the monsters head on, and just eat the full damage. This way you don't waste a high level sword on a low level monster. Instead, you do take the full damage of the monster. 

To use a health ♥️ potion, you discard the card, and add the value to your health. You can only go up to 20, and any excess health is wasted.<br>
You can only get the effect of one potion per room. If you drink two potions in the same room, the second one has no effect, and is effectively wasted. 

You can chose to run from any room that you don't want to deal with, but you can never run from two rooms in a row. To flee, you scoop up all four cards in the room, and put them at the bottom of the dungeon deck. You then pull four fresh cards for the next room. You can not run from a room you already interacted with, meaning you can't take the health potion from a room and then run from the monsters. You either deal with the whole room, or run from it altogether. <br>
If you run from one room, you are stuck with the next room you get to. 

**Variation**: In some variations of the game, you shuffle the dungeon deck, after running from a room. This makes the game slightly less predictable. 

### Endgame and Score
The game ends either when you get through the entire dungeon, or you run out of health (0♥️ = 💀). Whatever monster you choose to fight, that brings your health to 0, also dies in the process. This is important for the score, as going out in a blaze of glory will give you a better score. When you know the game is about to end, fight the biggest baddest beast in the room.

You score can be either positive or negative, after the game ends, depending if you made it through, or died trying. <br>
If you made it through the whole dungeon, your score is your health, plus any remaining health potions in the deck and current room. <br>
If you were pommeled and grinded into jelly, your score is the negative sum value of all remaining monsters in the deck, and current room. This is why losing to the biggest monster possible counts! If there are a level 2 monster and a level 12 monster in the room, and you have 1 health, your are done either way. But since the monster you chose to fight also dies, you should take on the level 12. That way only the level 2 monster is left to subtract from the final score. 

## An example
Below is the first two rooms of a playthrough, to give a feel for the setup:
Room 1 has a single monster (7♣️) a small sword (5♦️) and two potions (2♥️, 9♥️)

{% image "assets/images/post-images/scoundrel/room_1.png", "Scoundrel Room 1" %}

I chose to equip the sword and fight the troll, taking two damage to the face in the process. 

{% image "assets/images/post-images/scoundrel/room_1_fought.png", "Scoundrel Room 1 after the fight" %}

I then drink the smaller of the potions, restoring my health. 

{% image "assets/images/post-images/scoundrel/room_1_potion.png", "Scoundrel Room 1 after the potion" %}

Having cleared three cards, I move to the next room. 

{% image "assets/images/post-images/scoundrel/room_2.png", "Scoundrel Room 2" %}

Here I find a level 10 claymore, the level 13 troll king and the level 11 goblin prince, and of course the health potion from the previous room. <br>
In this case, I would probably be best off dropping the level 5 short sword, and grabbing the claymore, before taking on the troll king for 3 damage and then the goblin for another 1 damage. Then I can bring the potion with me, on to the next room, and I would still have the claymore, ready to take on level 10 and lower monsters. 

{% image "assets/images/post-images/scoundrel/room_2_fight_2.png", "Scoundrel Room 2 after fights" %}


## To keep track
If you don't have a D20, or other way to keep track of your health, you can use this little gimmick:

Health:<br>
<input type="number" id="health" value="20" disabled>

<button id="btnPlus" onclick="changeHealth(1)">Add ♥️</button>
<button id="btnMinus" onclick="changeHealth(-1)">Subtract ♣️</button>

<button id="btnReset" onclick="changeHealth(20)">Reset 🔄️</button>

<script>
  const healthField = document.getElementById("health");
  const btnPlus = document.getElementById("btnPlus");
  const btnMinus = document.getElementById("btnMinus");

  function changeHealth(value) {
    var health = Number(healthField.value);
    var newHealth = health + value;
    var clamped = newHealth < 0 ? 0 : 20 < newHealth ? 20 : newHealth;
    healthField.value = clamped;
  }
</script>