var myArray = [
    //{'title':'TITLE', 'published':new Date('PUBLISHDATE'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Cyberpunk 2077', 'published':new Date('12/31/2020'), 'released':new Date('11/10/1982'), 'score': 2, 'url':'/Reviews/Cyberpunk2077.html', 'thumb': '/img/thumbnails/review/Cyberpunk2077.png'},
    {'title':'Shady Part of Me', 'published':new Date('12/30/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/ShadyPartOfMe.html', 'thumb': '/img/thumbnails/review/ShadyPartOfMe.png'},
    {'title':'Crumble', 'published':new Date('12/29/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/Crumble.html', 'thumb': '/img/thumbnails/review/Crumble.png'},
    {'title':'Worms Rumble', 'published':new Date('12/28/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/WormsRumble.html', 'thumb': '/img/thumbnails/review/WormsRumble.png'},
    {'title':'Bugsnax', 'published':new Date('12/27/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/Bugsnax.html', 'thumb': '/img/thumbnails/review/Bugsnax.png'},
    {'title':'Sackboy: A Big Adventure', 'published':new Date('12/26/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/SackboyABigAdventure.html', 'thumb': '/img/thumbnails/review/SackboyABigAdventure.png'},
    {'title':'Spider-Man: Miles Morales', 'published':new Date('12/25/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/SpiderManMilesMorales.html', 'thumb': '/img/thumbnails/review/SpiderManMilesMorales.png'},
    {'title':'Astro\'s Playroom', 'published':new Date('12/24/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/AstrosPlayroom.html', 'thumb': '/img/thumbnails/review/AstrosPlayroom.png'},
    {'title':'Pumpkin Jack', 'published':new Date('12/23/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/PumpkinJack.html', 'thumb': '/img/thumbnails/review/PumpkinJack.png'},
    {'title':'I AM DEAD', 'published':new Date('12/22/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/IAmDead.html', 'thumb': '/img/thumbnails/review/IAmDead.png'},
    {'title':'Star Wars Squadrons', 'published':new Date('12/21/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/StarWarsSquadrons.html', 'thumb': '/img/thumbnails/review/StarWarsSquadrons.png'},
    {'title':'When The Past Was Around', 'published':new Date('12/20/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/WhenThePastWasAround.html', 'thumb': '/img/thumbnails/review/WhenThePastWasAround.png'},
    {'title':'Hades', 'published':new Date('12/19/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/Hades.html', 'thumb': '/img/thumbnails/review/Hades.png'},
    {'title':'BPM: Bullets Per Minute', 'published':new Date('12/18/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/BPMBulletsPerMinute.html', 'thumb': '/img/thumbnails/review/BPMBulletsPerMinute.png'},
    {'title':'There Is No Game: Wrong Dimension', 'published':new Date('12/17/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/ThereIsNoGameWrongDimension.html', 'thumb': '/img/thumbnails/review/ThereIsNoGameWrongDimension.png'},
    {'title':'Fall Guys', 'published':new Date('12/16/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/FallGuys.html', 'thumb': '/img/thumbnails/review/FallGuys.png'},
    {'title':'Ghost of Tsushima', 'published':new Date('12/15/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/GhostOfTsushima.html', 'thumb': '/img/thumbnails/review/GhostOfTsushima.png'},
    {'title':'Rocket Arena', 'published':new Date('12/14/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/RocketArena.html', 'thumb': '/img/thumbnails/review/RocketArena.png'},
    {'title':'Primal Light', 'published':new Date('12/13/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/PrimalLight.html', 'thumb': '/img/thumbnails/review/PrimalLight.png'},
    {'title':'Iron Man VR', 'published':new Date('12/12/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/IronManVR.html', 'thumb': '/img/thumbnails/review/IronManVR.png'},
    {'title':'Clubhouse Games: 51 Worldwide Classics', 'published':new Date('12/11/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/ClubhouseGames.html', 'thumb': '/img/thumbnails/review/ClubhouseGames.png'},
    {'title':'Sludge Life', 'published':new Date('12/10/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/SludgeLife.html', 'thumb': '/img/thumbnails/review/SludgeLife.png'},
    {'title':'A Fold Apart', 'published':new Date('12/9/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/AFoldApart.html', 'thumb': '/img/thumbnails/review/AFoldApart.png'},
    {'title':'Resident Evil 3 Remake', 'published':new Date('12/8/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/ResidentEvil3Remake.html', 'thumb': '/img/thumbnails/review/ResidentEvil3Remake.png'},
    {'title':'Totally Reliable Delivery Service', 'published':new Date('12/7/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TotallyReliableDeliveryService.html', 'thumb': '/img/thumbnails/review/TotallyReliableDeliveryService.png'},
    {'title':'Paper Beast', 'published':new Date('12/6/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/PaperBeast.html', 'thumb': '/img/thumbnails/review/PaperBeast.png'},
    {'title':'Animal Crossing: New Horizons', 'published':new Date('12/5/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/AnimalCrossingNewHorizons.html', 'thumb': '/img/thumbnails/review/AnimalCrossingNewHorizons.png'},
    {'title':'DOOM Eternal', 'published':new Date('12/4/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/DoomEternal.html', 'thumb': '/img/thumbnails/review/DoomEternal.png'},
    {'title':'Stela', 'published':new Date('12/3/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/Stela.html', 'thumb': '/img/thumbnails/review/Stela.png'},
    {'title':'Dreams', 'published':new Date('12/2/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/Dreams.html', 'thumb': '/img/thumbnails/review/Dreams.png'},
    {'title':'The Pedestrian', 'published':new Date('12/1/2020'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/ThePedestrian.html', 'thumb': '/img/thumbnails/review/ThePedestrian.png'},
    {'title':'Pitterpot', 'published':new Date('10/24/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Detroit Become Human', 'published':new Date('8/21/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Q.U.B.E. 2', 'published':new Date('8/13/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Forgotton Anne', 'published':new Date('8/6/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Super Seducer', 'published':new Date('7/31/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Shape of the World', 'published':new Date('7/16/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Mario Tennis Aces', 'published':new Date('7/11/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Fe', 'published':new Date('6/26/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Minit', 'published':new Date('6/18/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'God of War 2018', 'published':new Date('5/29/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Bubsy: The Woolies Strike Back', 'published':new Date('5/21/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Cuphead', 'published':new Date('3/26/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Gorogoa', 'published':new Date('3/19/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Cypher', 'published':new Date('3/5/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Shadow of the Colossus Remastered', 'published':new Date('2/19/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Dragon Ball FighterZ', 'published':new Date('2/5/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'AER - Memories of Old', 'published':new Date('1/29/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Nioh', 'published':new Date('1/22/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Sonic Forces', 'published':new Date('1/8/2018'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Gravity Rush 2', 'published':new Date('12/25/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Horizon Zero Dawn', 'published':new Date('12/11/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'The Sexy Brutale', 'published':new Date('11/27/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'A Hat In Time', 'published':new Date('11/13/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Resident Evil 7', 'published':new Date('10/30/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Danganronpa V3: Killing Harmony', 'published':new Date('10/16/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Little Nightmares', 'published':new Date('10/2/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Danganronpa 2: Goodbye Despair', 'published':new Date('9/18/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Yooka-Laylee', 'published':new Date('9/4/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Persona 5', 'published':new Date('6/12/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Danganronpa: Trigger Happy Havoc', 'published':new Date('5/29/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'SEUM: Speedrunners From Hell', 'published':new Date('5/15/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'What Remains of Edith Finch', 'published':new Date('5/1/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Titan Souls', 'published':new Date('4/17/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Uncharted 4: A Thief\'s End', 'published':new Date('4/3/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Playdead\'s Inside', 'published':new Date('3/20/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'The Legend of Zelda: Breath of the Wild', 'published':new Date('3/15/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Fumiko!', 'published':new Date('2/20/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Chameleon Twist', 'published':new Date('2/6/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Gravity Rush Remastered', 'published':new Date('1/24/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'100ft Robot Golf', 'published':new Date('1/9/2017'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Clustertruck', 'published':new Date('12/19/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Pokemon Sun and Moon', 'published':new Date('11/21/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Puppeteer', 'published':new Date('10/31/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'ICO', 'published':new Date('10/10/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'The Gem Collector', 'published':new Date('9/27/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Worms 2007', 'published':new Date('9/12/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Shaq Fu', 'published':new Date('8/15/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Pokemon Puzzle League', 'published':new Date('7/25/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Yoshi\'s Story', 'published':new Date('7/11/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'LIMBO', 'published':new Date('6/13/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'De Blob', 'published':new Date('5/30/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Lovely Planet', 'published':new Date('5/16/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Borderlands 2', 'published':new Date('5/3/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Super Mario 3D World', 'published':new Date('4/18/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'The Perplexing Orb', 'published':new Date('4/4/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Katamari Damacy', 'published':new Date('3/21/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Batman: Arkham Origins', 'published':new Date('2/29/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Donkey Kong 64', 'published':new Date('2/15/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Hitman: Absolution', 'published':new Date('2/8/2016'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
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