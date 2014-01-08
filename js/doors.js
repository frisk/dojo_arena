$(document).ready(function(){
  doors_open = false;

  rightInner = 320;
  rightOuter = 120;
  leftInner = 310;
  leftOuter = rightOuter;
  middle = 510;

  rightBound = 1159;
  leftBound = 4;
  bottomBound = 601;
  topBound = 447;
  leftDoor = 114;
  rightDoor = 1049;

  set_defaults = function(){
    $('.right-inner').css({ right: rightInner });
    $('.left-inner').css({ left: leftInner });
    $('.left-outer').css({ left: leftOuter });
    $('.right-outer').css({ right: rightOuter });
    $('.middle').css({ right: middle });
  }
  
  move_door = function(stop, position, identifier, cb){
    value = $(identifier).css(position, function(index, value){
      val = parseInt(value)
      if((val > stop && stop == 0) || (val < stop && stop != 0))
      {
        value = stop == 0 ? val - 3 : val + 3;
        return value;
      }
      else
      {
        return false;
      }
    }).css(position)

    value = parseInt(value)

    if((val > stop && stop == 0) || (val < stop && stop != 0))
    {
        setTimeout(function() { move_door(stop, position, identifier, cb); }, 10)
    }
    else
    {
      if(typeof cb === 'function')
      {
        cb(true)
      }
    }
  }

  fadeLogo = function(show){
    if(show)
    {
      $('.dojo-logo').fadeIn()  
    }
    else
    {
      $('.dojo-logo').fadeOut()
    }
  }
  
  open_doors = function() {
    $('.dojo-logo').hide();
    move_door(0,'right','.middle',fadeLogo);
    move_door(0,'left','.left-inner');
    move_door(0,'left','.left-outer');
    move_door(0,'right','.right-inner');
    move_door(0,'right','.right-outer');
  }

  close_doors = function() {
    fadeLogo(false);
    move_door(middle,'right','.middle');
    move_door(leftInner,'left','.left-inner');
    move_door(leftOuter,'left','.left-outer');
    move_door(rightInner,'right','.right-inner');
    move_door(rightOuter,'right','.right-outer');
  }
})