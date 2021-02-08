var myArray = [
    {'title':'The Last of Us Part 2', 'published':new Date('11/23/2020'), 'released':new Date('6/19/2020'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/LastOfUs2.png'},
    {'title':'The Last of Us', 'published':new Date('10/26/2020'), 'released':new Date('6/14/2013'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/LastOfUs.png'},
    {'title':'Jak 3', 'published':new Date('4/3/2020'), 'released':new Date('11/9/2004'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/Jak3.png'},
    {'title':'Jak 2', 'published':new Date('2/5/2020'), 'released':new Date('10/14/2003'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/Jak2.png'},
    {'title':'Jak and Daxter', 'published':new Date('2/13/2019'), 'released':new Date('2/3/2001'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/JakAndDaxter.png'},
    {'title':'God of War 3', 'published':new Date('5/2/2018'), 'released':new Date('3/16/2010'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/GodOfWar3.png'},
    {'title':'God of War 2', 'published':new Date('4/28/2018'), 'released':new Date('3/13/2007'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/GodOfWar2.png'},
    {'title':'God of War', 'published':new Date('4/16/2018'), 'released':new Date('3/22/2005'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/retrospective/GodOfWar.png'},
    //{'title':'TITLE', 'published':new Date('DATE'), 'released':new Date('DATE'), 'url':'/Retrospectives/URL.html', 'thumb': '/img/thumbnails/THUMB.png'},
]

$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if(column == 'title')
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
                  </tr>`
        table.innerHTML += row


    }
}

function formatDate(date){
    return (date.getMonth() + 1) + 
    "/" +  date.getDate() +
    "/" +  date.getFullYear();
}