var pathname = location.pathname;

  if (pathname.includes('/es/')) {
    $('.english-guide').remove();
    $('.dutch-guide').remove();
    $('.german-guide').remove();
    $('.romanian-guide').remove();
    $('.french-guide').remove();
  }
  else if (pathname.includes('/nl/')) {
    $('.english-guide').remove();
    $('.spanish-guide').remove();
    $('.german-guide').remove();
    $('.romanian-guide').remove();
    $('.french-guide').remove();
  }

  else if (pathname.includes('/de/')) {
    $('.english-guide').remove();
    $('.dutch-guide').remove();
    $('.spanish-guide').remove();
    $('.romanian-guide').remove();
    $('.french-guide').remove();
  }

  else if (pathname.includes('/ro/')) {
    $('.english-guide').remove();
    $('.dutch-guide').remove();
    $('.spanish-guide').remove();
    $('.german-guide').remove();
    $('.french-guide').remove();
  }

  else if (pathname.includes('/fr/')) {
    $('.english-guide').remove();
    $('.dutch-guide').remove();
    $('.spanish-guide').remove();
    $('.german-guide').remove();
    $('.romanian-guide').remove();
  }

  else {
    $('.spanish-guide').remove();
    $('.dutch-guide').remove();
    $('.german-guide').remove();
    $('.romanian-guide').remove();
    $('.french-guide').remove();
  }