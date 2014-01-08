$(document).keyup(function(data){
  y = parseInt($('#ninja').css('top'))
  x = parseInt($('#ninja').css('left'))

  if(doors_open)
  {
    if(data.keyCode != 38)
    {
      close_doors();
      doors_open = false;
      return false;
    }
  }
  if(y <= topBound && (x <= rightDoor || x >= leftDoor) && !doors_open)
  {
    if(data.keyCode == 38)
    {
      open_doors();
      doors_open = true;
      return false;
    }
  }

  loc = {}
  loc.top = y;
  loc.left = x;
  if(data.keyCode == 37)
  {
    if(x < leftBound)
    {
      return false;
    }
    else
    {
      loc.left = x - 13;
      direction = 'left'  
    }
  }
  else if(data.keyCode == 39)
  {
    if(x > rightBound)
    {
      return false
    }
    else
    {
      loc.left = x + 13;
      direction = 'right'  
    }
  }
  else if(data.keyCode == 38)
  {
    if(y <= topBound)
    {
      return false;
    }
    else
    {
      loc.top = y - 13;
      direction = 'top'  
    }
  }
  else if(data.keyCode == 40)
  {
    if(y >= bottomBound)
    {
      return false
    }
    else
    {
      loc.top = y + 13;
      direction = 'down'  
    }
  }

  walk = ((x + y) % 2) + 1;
  $('#ninja').css({
    top: loc.top+'px',
    left: loc.left+'px'
  })

  img_folder = 'img/'
  src = img_folder+"ninja/"+direction+walk+".png"
  $('#ninja').attr('src', src);
})