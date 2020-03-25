# problemformulering

Vi har valgt opgave 2: __Arkade__

##### Opgavebeskrivelse:
Lav en rekreation af en arkade klassiker ved hjælp af programmering. Ved mere komplicerede spil er det tilladt at lave dele af spillet, men resten skal beskrives f. eks. via flowchart eller lignende for at sikre en samlet forståelse


Vi har valgt at rekreere super mario bros fra 1985<br/>
![ Her burde der være et billede af første bane fra super mario bros](smb1-1.jpg "Første bane fra super mario bros") <br/>
*Første bane fra __SUPER MARIO BROS__, billedet er delt i tre for lettere at vise det* <br/>
Spillet går

In _Super Mario Bros_., the player takes on the role of Mario, the protagonist of the series. The objective is to race through the Mushroom Kingdom, survive the main antagonist Bowser's forces, and save Princess Toadstool. The game is a side-scrolling platformer; the player moves from the left side of the screen to the right side in order to reach the flag pole at the end of each level.

The game world features coins scattered around for Mario to collect and special bricks marked with a question mark (?), which when hit from below by Mario may reveal more coins or a special item. Other "secret", often invisible, bricks may contain more coins or rare items. If the player gains a Super Mushroom, Mario grows to double his size and gains the ability to break bricks above him. If Mario gets hit in this mode, then instead of dying he turns back to regular Mario. Players start with a certain number of lives and may gain additional lives by picking up green spotted orange 1-Up mushrooms hidden in bricks, or by collecting 100 coins. Mario loses a life if he takes damage while small, falls in a bottomless pit, or runs out of time. The game ends when the player runs out of lives, although a button input can be used on the game over screen to continue from the first level of the world in which the player died.

Mario's primary attack is jumping on top of enemies, though many enemies have differing responses to this. For example, a Goomba will flatten and be defeated, while a Koopa Troopa will temporarily retract into its shell, allowing Mario to use it as a projectile. These shells may be deflected off a wall to destroy other enemies, though they can also bounce back against Mario, which will hurt or kill him. Mario may also acquire the Fire Flower from certain "?" blocks that when picked up changes the color of Super Mario's outfit and allows him to throw fireballs. A less common item is the Starman, which often appears when Mario hits certain concealed or otherwise invisible blocks. This item makes Mario temporarily invincible to most hazards and capable of defeating enemies on contact.

# sssssssssssssssssssssssssssssssssssssssssssssssssssssssss
I Super Mario Bros. tager spilleren rollen som Mario, seriens hovedperson. Målet er at komme gennem Mushroom Kingdom, overleve den største antagonist Bowsers styrker og redde Princess Toadstool. Spillet er en sidescrollende platformspil; spilleren bevæger sig fra venstre side af skærmen til højre for at nå flagstangen i slutningen af ​​hvert niveau.

Spillets verden har mønter spredt rundt som Mario kan samle og specielle mursten markeret med et spørgsmålstegn (?), som kan afsløre flere mønter eller en speciel vare når Mario rammer den nedefra. Andre "hemmeligheder", ofte usynlige, mursten kan indeholde flere mønter eller sjældne genstande. Hvis spilleren får en _magic mushroom_, vokser Mario til at dobblet sin størrelse og får evnen til at bryde mursten over Mario. Hvis Mario bliver ramt i denne tilstand, vender han tilbage til almindelige Mario i stedet for at dø. Spillere starter med et vist antal liv og kan få flere liv ved at finde grøne _1-up mushrooms_ skjult i mursten eller ved at samle 100 mønter. Der mistes et liv, hvis Mario tager skade, imens han er lille, falder i et bundløst hul eller løber tør for tid. Spillet slutter, når spilleren løber tør for liv.

Marios primære angreb springer oven på fjender, skønt mange fjender har forskellige reaktioner på dette. For eksempel vil en Goomba flade ud og blive besejret, mens en Koopa Troopa midlertidigt trækkes ind i sin skal, så Mario kan bruge den som et projektil. Disse skaller kan afbøjes fra en væg for at ødelægge andre fjender, skønt de også kan hoppe tilbage mod Mario, som vil skade eller dræbe ham. Mario kan også købe ildblomsten fra visse "?" blokerer, at når han afhent, skifter farven på Super Marios tøj og giver ham mulighed for at kaste ildkugler. Et mindre almindeligt emne er Starman, der ofte vises, når Mario rammer visse skjulte eller på anden måde usynlige blokke. Denne vare gør Mario midlertidigt uovervindelig for de fleste farer og er i stand til at besejre fjender ved kontakt.



* lave terræn
  * ground
  * trappe ground
  * pipes
  * blocks man smadre
  * block med powerups
  * man dør hvis man falder i hullerne
* lave en kontrollerbar spillerkarakter ![][smallmario]
  * hoppe
  * sidelæns bevægelse
  * kunne falde
  * interagere med fjender
  * interagere med terræn
  * powerups ![][superMario] ![][fireMario] ![][smallInvincibleMario] ![][invincibleMario]
* lave fjender
  * interagere med terræn
  * interagere med spilleren
  * Little Goomba ![](https://www.mariowiki.com/images/c/c6/Goomba_SMB.png)
  * koopa troopas ![](https://www.mariowiki.com/images/e/eb/SMB_NES_Blue_Koopa_Troopa_Walking.gif)
* lave powerups
  * magic mushroom ![magic mushroom](https://www.mariowiki.com/images/6/66/SMB_Supermushroom.png)
  * (evt) fire flower ![](https://www.mariowiki.com/images/b/b3/Fire_Flower_SMB.gif)
  * (evt) star man ![](https://www.mariowiki.com/images/d/db/Starman.gif)
  * 1-up mushroom ![](https://www.mariowiki.com/images/0/02/SMB_1-up_Mushroom_Sprite.png)
* level design
  * slutning på banen
  * end castle
* pointsystem
  * coins ![coin](https://www.mariowiki.com/images/0/04/SMBCoin.gif)
  * timer


* # BUG FIXING

[smallMario]: https://www.mariowiki.com/images/0/02/SMB_Smallmario.png
[superMario]: https://www.mariowiki.com/images/f/f7/SMB_Supermario.png
[fireMario]: https://www.mariowiki.com/images/4/47/SMB_Firemario.png
[smallInvincibleMario]: https://www.mariowiki.com/images/f/f8/SmallinvincibleMario.gif
[invincibleMario]: https://www.mariowiki.com/images/6/62/Invincible_Mario.gif
