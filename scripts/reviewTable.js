var myArray = [
    //{'title':'TITLE', 'published':new Date('PUBLISHDATE'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Cyberpunk 2077', 'published':new Date('12/31/2020'), 'released':new Date('12/10/2020'), 'score': 6.5, 'url':'/Reviews/Cyberpunk2077.html', 'thumb': '/img/thumbnails/review/Cyberpunk2077.png'},
    {'title':'Shady Part of Me', 'published':new Date('12/30/2020'), 'released':new Date('12/10/2020'), 'score': 8, 'url':'/Reviews/ShadyPartOfMe.html', 'thumb': '/img/thumbnails/review/ShadyPartOfMe.png'},
    {'title':'Crumble', 'published':new Date('12/29/2020'), 'released':new Date('12/4/2020'), 'score': 5, 'url':'/Reviews/Crumble.html', 'thumb': '/img/thumbnails/review/Crumble.png'},
    {'title':'Worms Rumble', 'published':new Date('12/28/2020'), 'released':new Date('12/1/2020'), 'score': 8, 'url':'/Reviews/WormsRumble.html', 'thumb': '/img/thumbnails/review/WormsRumble.png'},
    {'title':'Bugsnax', 'published':new Date('12/27/2020'), 'released':new Date('11/12/2020'), 'score': 7.5, 'url':'/Reviews/Bugsnax.html', 'thumb': '/img/thumbnails/review/Bugsnax.png'},
    {'title':'Sackboy: A Big Adventure', 'published':new Date('12/26/2020'), 'released':new Date('11/12/2020'), 'score': 7, 'url':'/Reviews/SackboyABigAdventure.html', 'thumb': '/img/thumbnails/review/SackboyABigAdventure.png'},
    {'title':'Spider-Man: Miles Morales', 'published':new Date('12/25/2020'), 'released':new Date('11/12/2020'), 'score': 9.5, 'url':'/Reviews/SpiderManMilesMorales.html', 'thumb': '/img/thumbnails/review/SpiderManMilesMorales.png'},
    {'title':'Astro\'s Playroom', 'published':new Date('12/24/2020'), 'released':new Date('11/12/2020'), 'score': 9, 'url':'/Reviews/AstrosPlayroom.html', 'thumb': '/img/thumbnails/review/AstrosPlayroom.png'},
    {'title':'Pumpkin Jack', 'published':new Date('12/23/2020'), 'released':new Date('10/23/2020'), 'score': 7.5, 'url':'/Reviews/PumpkinJack.html', 'thumb': '/img/thumbnails/review/PumpkinJack.png'},
    {'title':'I AM DEAD', 'published':new Date('12/22/2020'), 'released':new Date('10/8/2020'), 'score': 8, 'url':'/Reviews/IAmDead.html', 'thumb': '/img/thumbnails/review/IAmDead.png'},
    {'title':'Star Wars Squadrons', 'published':new Date('12/21/2020'), 'released':new Date('10/2/2020'), 'score': 8, 'url':'/Reviews/StarWarsSquadrons.html', 'thumb': '/img/thumbnails/review/StarWarsSquadrons.png'},
    {'title':'When The Past Was Around', 'published':new Date('12/20/2020'), 'released':new Date('9/22/2020'), 'score': 7.5, 'url':'/Reviews/WhenThePastWasAround.html', 'thumb': '/img/thumbnails/review/WhenThePastWasAround.png'},
    {'title':'Hades', 'published':new Date('12/19/2020'), 'released':new Date('9/17/2020'), 'score': 9, 'url':'/Reviews/Hades.html', 'thumb': '/img/thumbnails/review/Hades.png'},
    {'title':'BPM: Bullets Per Minute', 'published':new Date('12/18/2020'), 'released':new Date('9/15/2020'), 'score': 7.5, 'url':'/Reviews/BPMBulletsPerMinute.html', 'thumb': '/img/thumbnails/review/BPMBulletsPerMinute.png'},
    {'title':'There Is No Game: Wrong Dimension', 'published':new Date('12/17/2020'), 'released':new Date('8/6/2020'), 'score': 6.5, 'url':'/Reviews/ThereIsNoGameWrongDimension.html', 'thumb': '/img/thumbnails/review/ThereIsNoGameWrongDimension.png'},
    {'title':'Fall Guys: Ultimate Knockout', 'published':new Date('12/16/2020'), 'released':new Date('8/4/2020'), 'score': 8, 'url':'/Reviews/FallGuys.html', 'thumb': '/img/thumbnails/review/FallGuys.png'},
    {'title':'Ghost of Tsushima', 'published':new Date('12/15/2020'), 'released':new Date('7/17/2020'), 'score': 9.5, 'url':'/Reviews/GhostOfTsushima.html', 'thumb': '/img/thumbnails/review/GhostOfTsushima.png'},
    {'title':'Rocket Arena', 'published':new Date('12/14/2020'), 'released':new Date('7/14/2020'), 'score': 6.5, 'url':'/Reviews/RocketArena.html', 'thumb': '/img/thumbnails/review/RocketArena.png'},
    {'title':'Primal Light', 'published':new Date('12/13/2020'), 'released':new Date('7/8/2020'), 'score': 7, 'url':'/Reviews/PrimalLight.html', 'thumb': '/img/thumbnails/review/PrimalLight.png'},
    {'title':'Iron Man VR', 'published':new Date('12/12/2020'), 'released':new Date('7/3/2020'), 'score': 7.5, 'url':'/Reviews/IronManVR.html', 'thumb': '/img/thumbnails/review/IronManVR.png'},
    {'title':'Clubhouse Games: 51 Worldwide Classics', 'published':new Date('12/11/2020'), 'released':new Date('6/5/2020'), 'score': 6, 'url':'/Reviews/ClubhouseGames.html', 'thumb': '/img/thumbnails/review/ClubhouseGames.png'},
    {'title':'Sludge Life', 'published':new Date('12/10/2020'), 'released':new Date('5/28/2020'), 'score': 5, 'url':'/Reviews/SludgeLife.html', 'thumb': '/img/thumbnails/review/SludgeLife.png'},
    {'title':'A Fold Apart', 'published':new Date('12/9/2020'), 'released':new Date('4/16/2020'), 'score': 7, 'url':'/Reviews/AFoldApart.html', 'thumb': '/img/thumbnails/review/AFoldApart.png'},
    {'title':'Resident Evil 3 Remake', 'published':new Date('12/8/2020'), 'released':new Date('4/3/2020'), 'score': 8, 'url':'/Reviews/ResidentEvil3Remake.html', 'thumb': '/img/thumbnails/review/ResidentEvil3Remake.png'},
    {'title':'Totally Reliable Delivery Service', 'published':new Date('12/7/2020'), 'released':new Date('4/1/2020'), 'score': 3, 'url':'/Reviews/TotallyReliableDeliveryService.html', 'thumb': '/img/thumbnails/review/TotallyReliableDeliveryService.png'},
    {'title':'Paper Beast', 'published':new Date('12/6/2020'), 'released':new Date('3/24/2020'), 'score': 7.5, 'url':'/Reviews/PaperBeast.html', 'thumb': '/img/thumbnails/review/PaperBeast.png'},
    {'title':'Animal Crossing: New Horizons', 'published':new Date('12/5/2020'), 'released':new Date('3/20/2020'), 'score': 8, 'url':'/Reviews/AnimalCrossingNewHorizons.html', 'thumb': '/img/thumbnails/review/AnimalCrossingNewHorizons.png'},
    {'title':'DOOM Eternal', 'published':new Date('12/4/2020'), 'released':new Date('3/20/2020'), 'score': 8, 'url':'/Reviews/DoomEternal.html', 'thumb': '/img/thumbnails/review/DoomEternal.png'},
    {'title':'Stela', 'published':new Date('12/3/2020'), 'released':new Date('3/13/2020'), 'score': 8, 'url':'/Reviews/Stela.html', 'thumb': '/img/thumbnails/review/Stela.png'},
    {'title':'Dreams', 'published':new Date('12/2/2020'), 'released':new Date('2/14/2020'), 'score': 9, 'url':'/Reviews/Dreams.html', 'thumb': '/img/thumbnails/review/Dreams.png'},
    {'title':'The Pedestrian', 'published':new Date('12/1/2020'), 'released':new Date('1/29/2020'), 'score': 7.5, 'url':'/Reviews/ThePedestrian.html', 'thumb': '/img/thumbnails/review/ThePedestrian.png'},
    {'title':'Celeste', 'published':new Date('2/1/2019'), 'released':new Date('1/25/2018'), 'score': 9.5, 'url':'/Reviews/Celeste.html', 'thumb': '/img/thumbnails/review/Celeste.png'},
    {'title':'PitterPot', 'published':new Date('10/24/2018'), 'released':new Date('9/25/2018'), 'score': 4, 'url':'/Reviews/PitterPot.html', 'thumb': '/img/thumbnails/review/PitterPot.png'},
    {'title':'Detroit Become Human', 'published':new Date('8/21/2018'), 'released':new Date('4/24/2018'), 'score': 8, 'url':'/Reviews/DetroitBecomeHuman.html', 'thumb': '/img/thumbnails/review/DetroitBecomeHuman.png'},
    {'title':'Q.U.B.E. 2', 'published':new Date('8/13/2018'), 'released':new Date('3/13/2018'), 'score': 7.5, 'url':'/Reviews/QUBE2.html', 'thumb': '/img/thumbnails/review/QUBE2.png'},
    {'title':'Forgotton Anne', 'published':new Date('8/6/2018'), 'released':new Date('5/15/2018'), 'score': 5.5, 'url':'/Reviews/ForgottonAnne.html', 'thumb': '/img/thumbnails/review/ForgottonAnne.png'},
    {'title':'Super Seducer', 'published':new Date('7/31/2018'), 'released':new Date('3/6/2018'), 'score': 1.5, 'url':'/Reviews/SuperSeducer.html', 'thumb': '/img/thumbnails/review/SuperSeducer.png'},
    {'title':'Shape of the World', 'published':new Date('7/16/2018'), 'released':new Date('6/5/2018'), 'score': 4.5, 'url':'/Reviews/ShapeOfTheWorld.html', 'thumb': '/img/thumbnails/review/ShapeOfTheWorld.png'},
    {'title':'Mario Tennis Aces', 'published':new Date('7/11/2018'), 'released':new Date('6/22/2018'), 'score': 7.5, 'url':'/Reviews/MarioTennisAces.html', 'thumb': '/img/thumbnails/review/MarioTennisAces.png'},
    {'title':'Fe', 'published':new Date('6/26/2018'), 'released':new Date('2/16/2018'), 'score': 5.5, 'url':'/Reviews/Fe.html', 'thumb': '/img/thumbnails/review/Fe.png'},
    {'title':'Minit', 'published':new Date('6/18/2018'), 'released':new Date('4/3/2018'), 'score': 7.5, 'url':'/Reviews/Minit.html', 'thumb': '/img/thumbnails/review/Minit.png'},
    {'title':'God of War 2018', 'published':new Date('5/29/2018'), 'released':new Date('4/20/2018'), 'score': 9, 'url':'/Reviews/GodOfWar2018.html', 'thumb': '/img/thumbnails/review/GodOfWar2018.png'},
    {'title':'Bubsy: The Woolies Strike Back', 'published':new Date('5/21/2018'), 'released':new Date('10/31/2017'), 'score': 3, 'url':'/Reviews/BubsyTheWooliesStrikeBack.html', 'thumb': '/img/thumbnails/review/BubsyTheWooliesStrikeBack.png'},
    {'title':'Cuphead', 'published':new Date('3/26/2018'), 'released':new Date('9/29/2017'), 'score': 9.5, 'url':'/Reviews/Cuphead.html', 'thumb': '/img/thumbnails/review/Cuphead.png'},
    {'title':'Gorogoa', 'published':new Date('3/19/2018'), 'released':new Date('12/14/2017'), 'score': 8.5, 'url':'/Reviews/Gorogoa.html', 'thumb': '/img/thumbnails/review/Gorogoa.png'},
    {'title':'Cypher', 'published':new Date('3/5/2018'), 'released':new Date('2/20/2018'), 'score': 7.5, 'url':'/Reviews/Cypher.html', 'thumb': '/img/thumbnails/review/Cypher.png'},
    {'title':'Shadow of the Colossus Remastered', 'published':new Date('2/19/2018'), 'released':new Date('2/6/2018'), 'score': 8.5, 'url':'/Reviews/ShadowOfTheColossus.html', 'thumb': '/img/thumbnails/review/ShadowOfTheColossus.png'},
    {'title':'Dragon Ball FighterZ', 'published':new Date('2/5/2018'), 'released':new Date('1/26/2018'), 'score': 8.5, 'url':'/Reviews/DragonBallFighterZ.html', 'thumb': '/img/thumbnails/review/DragonBallFighterZ.png'},
    {'title':'AER - Memories of Old', 'published':new Date('1/29/2018'), 'released':new Date('10/25/2017'), 'score': 6.5, 'url':'/Reviews/AER.html', 'thumb': '/img/thumbnails/review/AER.png'},
    {'title':'Nioh', 'published':new Date('1/22/2018'), 'released':new Date('2/7/2017'), 'score': 8, 'url':'/Reviews/Nioh.html', 'thumb': '/img/thumbnails/review/Nioh.png'},
    {'title':'Sonic Forces', 'published':new Date('1/8/2018'), 'released':new Date('11/7/2017'), 'score': 4, 'url':'/Reviews/SonicForces.html', 'thumb': '/img/thumbnails/review/SonicForces.png'},
    {'title':'Gravity Rush 2', 'published':new Date('12/25/2017'), 'released':new Date('1/18/2017'), 'score': 7.5, 'url':'/Reviews/GravityRush2.html', 'thumb': '/img/thumbnails/review/GravityRush2.png'},
    {'title':'Horizon Zero Dawn', 'published':new Date('12/11/2017'), 'released':new Date('2/28/2017'), 'score': 8.5, 'url':'/Reviews/HorizonZeroDawn.html', 'thumb': '/img/thumbnails/review/HorizonZeroDawn.png'},
    {'title':'The Sexy Brutale', 'published':new Date('11/27/2017'), 'released':new Date('4/11/2017'), 'score': 7.5, 'url':'/Reviews/TheSexyBrutale.html', 'thumb': '/img/thumbnails/review/TheSexyBrutale.png'},
    {'title':'A Hat In Time', 'published':new Date('11/13/2017'), 'released':new Date('10/5/2017'), 'score': 9, 'url':'/Reviews/AHatInTime.html', 'thumb': '/img/thumbnails/review/AHatInTime.png'},
    {'title':'Resident Evil 7: Biohazard', 'published':new Date('10/30/2017'), 'released':new Date('1/24/2017'), 'score': 9, 'url':'/Reviews/ResidentEvil7.html', 'thumb': '/img/thumbnails/review/ResidentEvil7.png'},
    {'title':'Danganronpa V3: Killing Harmony', 'published':new Date('10/16/2017'), 'released':new Date('1/12/2017'), 'score': 9.5, 'url':'/Reviews/DanganronpaV3.html', 'thumb': '/img/thumbnails/review/DanganronpaV3.png'},
    {'title':'Little Nightmares', 'published':new Date('10/2/2017'), 'released':new Date('4/28/2017'), 'score': 8, 'url':'/Reviews/LittleNightmares.html', 'thumb': '/img/thumbnails/review/LittleNightmares.png'},
    {'title':'Danganronpa 2: Goodbye Despair', 'published':new Date('9/18/2017'), 'released':new Date('7/26/2012'), 'score': 8, 'url':'/Reviews/Danganronpa2.html', 'thumb': '/img/thumbnails/review/Danganronpa2.png'},
    {'title':'Yooka-Laylee', 'published':new Date('9/4/2017'), 'released':new Date('4/11/2017'), 'score': 6.5, 'url':'/Reviews/YookaLaylee.html', 'thumb': '/img/thumbnails/review/YookaLaylee.png'},
    {'title':'Persona 5', 'published':new Date('6/12/2017'), 'released':new Date('4/4/2017'), 'score': 8, 'url':'/Reviews/Persona5.html', 'thumb': '/img/thumbnails/review/Persona5.png'},
    {'title':'Danganronpa: Trigger Happy Havoc', 'published':new Date('5/29/2017'), 'released':new Date('11/25/2010'), 'score': 8.5, 'url':'/Reviews/Danganronpa.html', 'thumb': '/img/thumbnails/review/Danganronpa.png'},
    {'title':'SEUM: Speedrunners From Hell', 'published':new Date('5/15/2017'), 'released':new Date('7/28/2016'), 'score': 8, 'url':'/Reviews/SeumSpeedrunnersFromHell.html', 'thumb': '/img/thumbnails/review/SeumSpeedrunnersFromHell.png'},
    {'title':'What Remains of Edith Finch', 'published':new Date('5/1/2017'), 'released':new Date('4/25/2017'), 'score': 9.5, 'url':'/Reviews/EdithFinch.html', 'thumb': '/img/thumbnails/review/EdithFinch.png'},
    {'title':'Titan Souls', 'published':new Date('4/17/2017'), 'released':new Date('4/14/2015'), 'score': 8, 'url':'/Reviews/TitanSouls.html', 'thumb': '/img/thumbnails/review/TitanSouls.png'},
    {'title':'Uncharted 4: A Thief\'s End', 'published':new Date('4/3/2017'), 'released':new Date('5/10/2016'), 'score': 9.5, 'url':'/Reviews/Uncharted4.html', 'thumb': '/img/thumbnails/review/Uncharted4.png'},
    {'title':'Playdead\'s Inside', 'published':new Date('3/20/2017'), 'released':new Date('6/29/2016'), 'score': 8.5, 'url':'/Reviews/Inside.html', 'thumb': '/img/thumbnails/review/Inside.png'},
    {'title':'The Legend of Zelda: Breath of the Wild', 'published':new Date('3/15/2017'), 'released':new Date('3/3/2017'), 'score': 9.5, 'url':'/Reviews/BreathOfTheWild.html', 'thumb': '/img/thumbnails/review/BreathOfTheWild.png'},
    {'title':'Fumiko!', 'published':new Date('2/20/2017'), 'released':new Date('2/13/2017'), 'score': 7.5, 'url':'/Reviews/Fumiko.html', 'thumb': '/img/thumbnails/review/Fumiko.png'},
    {'title':'Chameleon Twist', 'published':new Date('2/6/2017'), 'released':new Date('11/30/1997'), 'score': 3, 'url':'/Reviews/ChameleonTwist.html', 'thumb': '/img/thumbnails/review/ChameleonTwist.png'},
    {'title':'Gravity Rush Remastered', 'published':new Date('1/24/2017'), 'released':new Date('2/9/2012'), 'score': 9, 'url':'/Reviews/GravityRushRemastered.html', 'thumb': '/img/thumbnails/review/GravityRushRemastered.png'},
    {'title':'100ft Robot Golf', 'published':new Date('1/9/2017'), 'released':new Date('10/10/2016'), 'score': 6, 'url':'/Reviews/100FtRobotGolf.html', 'thumb': '/img/thumbnails/review/100FtRobotGolf.png'},
    {'title':'Clustertruck', 'published':new Date('12/19/2016'), 'released':new Date('9/27/2016'), 'score': 7.5, 'url':'/Reviews/Clustertruck.html', 'thumb': '/img/thumbnails/review/Clustertruck.png'},
    {'title':'Pokemon Sun and Moon', 'published':new Date('11/21/2016'), 'released':new Date('11/18/2016'), 'score': 9.5, 'url':'/Reviews/PokemonSunAndMoon.html', 'thumb': '/img/thumbnails/review/PokemonSunAndMoon.png'},
    {'title':'Puppeteer', 'published':new Date('10/31/2016'), 'released':new Date('9/5/2013'), 'score': 8.5, 'url':'/Reviews/Puppeteer.html', 'thumb': '/img/thumbnails/review/Puppeteer.png'},
    {'title':'ICO', 'published':new Date('10/10/2016'), 'released':new Date('9/24/2001'), 'score': 7.5, 'url':'/Reviews/Ico.html', 'thumb': '/img/thumbnails/review/Ico.png'},
    {'title':'The Gem Collector', 'published':new Date('9/27/2016'), 'released':new Date('9/8/2016'), 'score': 3.5, 'url':'/Reviews/TheGemCollector.html', 'thumb': '/img/thumbnails/review/TheGemCollector.png'},
    {'title':'Worms 2007', 'published':new Date('9/12/2016'), 'released':new Date('3/7/2007'), 'score': 7.5, 'url':'/Reviews/Worms2007.html', 'thumb': '/img/thumbnails/review/Worms2007.png'},
    {'title':'Shaq Fu', 'published':new Date('8/15/2016'), 'released':new Date('10/28/1994'), 'score': 2.5, 'url':'/Reviews/ShaqFu.html', 'thumb': '/img/thumbnails/review/ShaqFu.png'},
    {'title':'Pokemon Puzzle League', 'published':new Date('7/25/2016'), 'released':new Date('9/25/2000'), 'score': 8.5, 'url':'/Reviews/PokemonPuzzleLeague.html', 'thumb': '/img/thumbnails/review/PokemonPuzzleLeague.png'},
    {'title':'Yoshi\'s Story', 'published':new Date('7/11/2016'), 'released':new Date('12/21/1997'), 'score': 7.5, 'url':'/Reviews/YoshisStory.html', 'thumb': '/img/thumbnails/review/YoshisStory.png'},
    {'title':'LIMBO', 'published':new Date('6/13/2016'), 'released':new Date('7/21/2010'), 'score': 9.5, 'url':'/Reviews/Limbo.html', 'thumb': '/img/thumbnails/review/Limbo.png'},
    {'title':'De Blob', 'published':new Date('5/30/2016'), 'released':new Date('6/8/2008'), 'score': 6, 'url':'/Reviews/DeBlob.html', 'thumb': '/img/thumbnails/review/DeBlob.png'},
    {'title':'Lovely Planet', 'published':new Date('5/16/2016'), 'released':new Date('7/31/2014'), 'score': 4, 'url':'/Reviews/LovelyPlanet.html', 'thumb': '/img/thumbnails/review/LovelyPlanet.png'},
    {'title':'Borderlands 2', 'published':new Date('5/3/2016'), 'released':new Date('9/18/2012'), 'score': 7, 'url':'/Reviews/Borderlands2.html', 'thumb': '/img/thumbnails/review/Borderlands2.png'},
    {'title':'Super Mario 3D World', 'published':new Date('4/18/2016'), 'released':new Date('11/21/2013'), 'score': 8.5, 'url':'/Reviews/SuperMario3DWorld.html', 'thumb': '/img/thumbnails/review/SuperMario3DWorld.png'},
    {'title':'The Perplexing Orb', 'published':new Date('4/4/2016'), 'released':new Date('1/14/2016'), 'score': 1, 'url':'/Reviews/ThePerplexingOrb.html', 'thumb': '/img/thumbnails/review/ThePerplexingOrb.png'},
    {'title':'Katamari Damacy', 'published':new Date('3/21/2016'), 'released':new Date('9/21/2004'), 'score': 8.5, 'url':'/Reviews/KatamariDamacy.html', 'thumb': '/img/thumbnails/review/KatamariDamacy.png'},
    {'title':'Batman: Arkham Origins', 'published':new Date('2/29/2016'), 'released':new Date('10/25/2013'), 'score': 7, 'url':'/Reviews/BatmanArkhamOrigins.html', 'thumb': '/img/thumbnails/review/BatmanArkhamOrigins.png'},
    {'title':'Donkey Kong 64', 'published':new Date('2/15/2016'), 'released':new Date('11/22/1999'), 'score': 7, 'url':'/Reviews/DonkeyKong64.html', 'thumb': '/img/thumbnails/review/DonkeyKong64.png'},
    {'title':'Hitman: Absolution', 'published':new Date('2/8/2016'), 'released':new Date('11/20/2012'), 'score': 7, 'url':'/Reviews/HitmanAbsolution.html', 'thumb': '/img/thumbnails/review/HitmanAbsolution.png'},
]

$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if(column == 'title' || column == 'score')
    {
        if(order == 'desc'){
            $(this).data('order', "asc")
            myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
            text += '&#9660'
    
        }else{
            $(this).data('order', "desc")
            myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
            text += '&#9650'
    
        }
    }
    else
    {
        if(order == 'desc'){
            $(this).data('order', "asc")
            myArray = myArray.slice().sort((a,b) => a[column] > b[column] ? 1 : -1)
            text += '&#9660'
    
        }else{
            $(this).data('order', "desc")
            myArray = myArray.slice().sort((a,b) => a[column] < b[column] ? 1 : -1)
            text += '&#9650'
    
        }
    }
    
    $(this).html(text)
    buildTable(myArray)
})

buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td><a href="${data[i].url}"><img src="${data[i].thumb}" class="thumb"></a></td>
                        <td><a href="${data[i].url}">${data[i].title}</a></td>
                        <td>${formatDate(data[i].published)}</td>
                        <td>${formatDate(data[i].released)}</td>
                        <td><img src='/img/scores/${data[i].score}.png' class="score"></td>
                  </tr>`
        table.innerHTML += row


    }
}

function formatDate(date){
    return (date.getMonth() + 1) + 
    "/" +  date.getDate() +
    "/" +  date.getFullYear();
}