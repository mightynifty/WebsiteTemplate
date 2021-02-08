var myArray = [
    {'title':'The Last of Us Part 2', 'published':new Date('11/10/1989'), 'released':new Date('11/10/1989'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'The Last of Us', 'published':new Date('11/10/1989'), 'released':new Date('11/10/2002'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'Jak 3', 'published':new Date('11/10/1989'), 'released':new Date('12/10/1989'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'Jak 2', 'published':new Date('11/10/1989'), 'released':new Date('02/10/1989'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'Jak and Daxter', 'published':new Date('11/10/1989'), 'released':new Date('11/10/1980'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'God of War 3', 'published':new Date('11/10/1989'), 'released':new Date('11/09/1989'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'God of War 2', 'published':new Date('11/10/1989'), 'released':new Date('11/12/1989'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    {'title':'God of War', 'published':new Date('11/10/1989'), 'released':new Date('11/10/1982'), 'url':'', 'thumb': '/img/thumbnails/thumbnailsizetemplate.png'},
    //{'title':'TITLE', 'published':new Date('DATE'), 'released':new Date('DATE'), 'url':'URL', 'thumb': '/img/thumbnails/THUMB.png'},
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