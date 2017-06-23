# Zombie Apocalypse

### Demo

https://beusekampers.github.io/zombie-apocalypse/docs/

### Handleiding

Door op de play button te klikken start het spel. Met het linker en rechter pijltje kan er bewogen worden, met de spatiebalk kan er aangevallen worden. De zombies komen van links en rechts, probeer het zo lang mogelijk vol te houden, na een x aantal zombies is de apocalypse overleefd en is het spel uitgespeeld. In het spel heeft een speler 5 levens.

### Installatiehandleiding

- Download of fork het project.
- Verplaats de docs file naar een gewenste locatie.
- Klik 2 keer op het bestand 'index.html' in de docs map, de game start dan vanzelf.

### Instances 

Door gebruik te maken van instances kan ik vanuit game, elementen uit andere classes oproepen en visueel zichtbaar maken zoals een zombie en hero.

### Classes

Door gebruik te maken van classes splits ik mijn code op waarbij elk game element zijn eigen class heeft. Door dit te doen wordt de code overzichtelijk en gestructureerd. Voor elk los onderdeel van de game heb ik een class gemaakt waarin zijn eigen functie beschreven wordt. 

### Composition 

Met behulp van composition heb ik er voor gezorgd dat ik uit bepaalde classes een andere class kan aanmaken. Binnen de game wordt bijvoorbeeld een hero en een zombie aangemaakt. 

### Encapsulation 

Omdat ik gebruik maak van encapsulation zorg ik er voor dat mijn variabele in classes correct worden afgeschermd. Zodra iemand anders in mijn code zit te werken weet hij/zij welke variabele er gebruikt kunnen worden. 

### Inherticance

De class character heeft meerdere classes die deze class extenden zoals; zombie en hero. De zombie en hero class gebruiken allebei onderdelen van de character class, alleen de zombie en hero class kunnen gebruik maken van deze onderdelen. Door dit te doen zorg ik ervoor dat ik code niet twee keer hoef te schrijven. 

### UML van de game

![uml-game](https://user-images.githubusercontent.com/6570176/27303263-8dae11b2-553a-11e7-8bb2-1a683808287c.png)
