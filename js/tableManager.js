$('#search-input').on('keyup', function() {
    var value = $(this).val()
    console.log('Value:', value)
    var filteredData = searchTable(value, myArray)
    buildTable(filteredData)
})

$('th').on('click', function() {
    var column = $(this).data('colname')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1);

    if (order == 'desc') {
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order", "asc");
        text += '&#9660'
    } else {
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order", "desc");
        text += '&#9650'
    }

    $(this).html(text)
    buildTable(myArray)
})

//buildTable(myArray)
OrderTable()

function searchTable(value, data) {
    var filteredData = []
    for (var i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        var title = data[i].title.toLowerCase()
        var date = data[i].date.toLowerCase()
        if (title.includes(value) || date.includes(value)) {
            filteredData.push(data[i])
        }
    }
    return filteredData
}

function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
            <td> <img src="${data[i].img}" class="img-fluid mx-auto d-block" alt="Responsive image" height="300" width="300"> </td>
            <td class="text-light">${data[i].title}</td>
            <td class="text-light">${data[i].date}</td>
            <td class="text-light">${data[i].status}</td>
            </tr>`
        table.innerHTML += row
    }
}

function OrderTable() {
    myArray = myArray.sort((a, b) => a.date > b.date ? 1 : -1)
    buildTable(myArray)
}