// Select size input
var height, width, color, cell;
var canvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e){
    color = $('#colorPicker').val();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid();
    e.preventDefault();
});

$('#colorPicker').on('change', function(){
    color = $(this).val();
});

function makeGrid() {
    var row = "<tr></tr>";
    var col = "<td></td>";
    
    canvas.children().remove();

    for(var i=0; i<height; i++){
        canvas.append(row);
    }

    canvas.children('tr').each(function(){
        for(var j=0; j<width; j++){
            $(this).append(col);
        }
    });
    cell = canvas.find('td');
    cell.click(function(){
        $(this).attr('bgcolor',color);
    });
}
