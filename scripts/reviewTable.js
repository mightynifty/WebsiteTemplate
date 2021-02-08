var myArray = [
    {'title':'The Last of Us Part 2', 'published':new Date('11/10/1989'), 'released':new Date('11/10/1989'), 'score': 10, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'The Last of Us', 'published':new Date('11/10/1989'), 'released':new Date('11/10/2002'), 'score': 9, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'Jak 3', 'published':new Date('11/10/1989'), 'released':new Date('12/10/1989'), 'score': 7.5, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'Jak 2', 'published':new Date('11/10/1989'), 'released':new Date('02/10/1989'), 'score': 5.5, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'Jak and Daxter', 'published':new Date('11/10/1989'), 'released':new Date('11/10/1980'), 'score': 9, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'God of War 3', 'published':new Date('11/10/1989'), 'released':new Date('11/09/1989'), 'score': 9, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'God of War 2', 'published':new Date('11/10/1989'), 'released':new Date('11/12/1989'), 'score': 9.5, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'God of War', 'published':new Date('11/10/1989'), 'released':new Date('11/10/1982'), 'score': 7, 'url':'/Reviews/URL.html', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'Cyberpunk 2077', 'published':new Date('11/10/1989'), 'released':new Date('11/10/1982'), 'score': 2, 'url':'/Reviews/Cyberpunk2077Review.html', 'thumb': '/img/thumbnails/CyberpunkThumb.jpg'},
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