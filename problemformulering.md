# problemformulering

Vi har valgt opgave 2: __Arkade__

##### Opgavebeskrivelse:
Lav en rekreation af en arkade klassiker ved hjælp af programmering. Ved mere komplicerede spil er det tilladt at lave dele af spillet, men resten skal beskrives f. eks. via flowchart eller lignende for at sikre en samlet forståelse


Vi har valgt at rekreere super mario bros fra 1985<br/>
![ Her burde der være et billede af første bane fra super mario bros](smb1-1.jpg "Første bane fra super mario bros") <br/>
*Første bane fra __SUPER MARIO BROS__, billedet er delt i tre for lettere at vise det* <br/>

I Super Mario Bros. tager spilleren rollen som Mario, seriens hovedperson. Målet er at komme gennem Mushroom Kingdom, overleve den største antagonist Bowsers styrker og redde Princess Toadstool. Spillet er en sidescrollende platformspil; spilleren bevæger sig fra venstre side af skærmen til højre for at nå flagstangen i slutningen af ​​hvert niveau.

Spillets verden har mønter spredt rundt for Mario for at samle og specielle mursten markeret med et spørgsmålstegn (?), Som når Mario ramt nedenunder af Mario kan afsløre flere mønter eller en speciel vare. Andre "hemmeligheder", ofte usynlige, mursten kan indeholde flere mønter eller sjældne genstande. Hvis spilleren får en Super-svamp, vokser Mario til at fordoble sin størrelse og får evnen til at bryde mursten over ham. Hvis Mario bliver ramt i denne tilstand, vender han sig tilbage til almindelige Mario i stedet for at dø. Spillere starter med et vist antal liv og kan få flere liv ved at hente grøn plettet orange 1-Up-svampe skjult i mursten eller ved at samle 100 mønter. Mario mister et liv, hvis han tager skade, mens han er lille, falder i en bundløs pit eller løber tør for tid. Spillet slutter, når spilleren løber tør for liv, selvom en knapinput kan bruges på spillet over skærmen for at fortsætte fra det første niveau i den verden, hvor spilleren døde.

Marios primære angreb er at lande oven på fjender, de forskellige fjender i spillet har forskellige reaktioner på dette angreb. For eksempel vil en Goomba flade ud og dø, mens en Koopa Troopa midlertidigt trækker sig ind i sin skal, så Mario kan bruge den som et projektil. Disse skaller kan afbøjes fra en væg for at ødelægge andre fjender, skønt de også kan hoppe tilbage mod Mario, som vil skade eller dræbe ham. Mario kan også købe _fire flower_ fra visse "?" blokerer, at når han afhent, skifter farven på Super Marios tøj og giver ham mulighed for at kaste ildkugler. Et mindre almindeligt emne er _Starman_, der ofte vises, når Mario rammer visse skjulte eller på anden måde usynlige blokke. Denne vare gør Mario midlertidigt uovervindelig for de fleste farer og er i stand til at besejre fjender ved kontakt.



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
  * 1up mushroom ![](https://www.mariowiki.com/images/0/02/SMB_1-up_Mushroom_Sprite.png)
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
