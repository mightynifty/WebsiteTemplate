var myArray = [
    //{'title':'TITLE', 'type': 'TYPE', 'published':new Date('DATE'), 'url':'/Articles/URL.html', 'thumb': '/img/thumbnails/article/thumbnailsizetemplate.png'},
    
    {'title':'Ranking Every Game I Played in 2020', 'type': 'List', 'published':new Date('1/2/2021'), 'url':'/Articles/List2020.html', 'thumb': '/img/thumbnails/article/List2020.png'},
    {'title':'Ultimate Epic Battle Simulator', 'type': 'Indie Spotlight', 'published':new Date('9/11/2017'), 'url':'/Articles/ISUltimateEpicBattleSimulator.html', 'thumb': '/img/thumbnails/article/ISUltimateEpicBattleSimulator.png'},
    {'title':'How Cuphead Uses Music To Mess With Your Head', 'type': 'Essay', 'published':new Date('4/2/2018'), 'url':'/Articles/EssayCuphead.html', 'thumb': '/img/thumbnails/article/EssayCuphead.png'},
    {'title':'TITLE', 'type': 'TYPE', 'published':new Date('1/1/0001'), 'url':'/Articles/ARTICLETEMPLATE.html', 'thumb': '/img/thumbnails/article/thumbnailsizetemplate.png'}
]

$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if(column == 'title' || column == 'type')
    {
        console.log(column);
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
                        <td><a href="${data[i].url}"><img src="${data[i].thumb}" class="thumb-article"></a></td>
                        <td><a href="${data[i].url}">${data[i].title}</a></td>
                        <td>${data[i].type}</td>
                        <td>${formatDate(data[i].published)}</td>
                  </tr>`
        table.innerHTML += row


    }
}

function formatDate(date){
    return (date.getMonth() + 1) + 
    "/" +  date.getDate() +
    "/" +  date.getFullYear();
}