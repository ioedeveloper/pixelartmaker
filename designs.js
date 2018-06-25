// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e){
    color = $('#colorPicker').val();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid();
    e.preventDefault();
    });

function makeGrid() {
    // Your code goes here!
    var canvas = $('#pixelCanvas');
    var row = "<tr></tr>";
    var col = "<td></td>";
    
    canvas.children().remove();
    for(var i=0; i<height; i++){
        canvas.append(row);
    }
    var rows = $('tr');
    for(var j=0; j<width; j++){
        rows.append(col);
    }

    cell = canvas.find('td');
    $(this).attr('bgcolor',color);
}
