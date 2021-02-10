var myArray = [
    //{'title':'TITLE', 'published':new Date('PUBLISHDATE'), 'released':new Date('RELEASEDATE'), 'score': 0, 'url':'/Reviews/TITLENOSPACES.html', 'thumb': '/img/thumbnails/review/TITLENOSPACES.png'},
    {'title':'Resident Evil 7: Biohazard', 'published':new Date('10/30/2017'), 'released':new Date('1/24/2017'), 'score': 9, 'url':'/Reviews/ResidentEvil7.html', 'thumb': '/img/thumbnails/review/ResidentEvil7.png'},
    {'title':'TITLE', 'published':new Date('1/1/2001'), 'released':new Date('1/1/2000'), 'score': 0, 'url':'/Reviews/REVIEWTEMPLATE.html', 'thumb': '/img/thumbnails/review/thumbnailsizetemplate.png'},
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