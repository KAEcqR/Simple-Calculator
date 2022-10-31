//zmienna ktora szuka "wyswietlacza" kalkulatora
const display = document.querySelector(".display");
//zmienna przechowojaca wszystkie przyciski
const buttons = document.querySelectorAll("button");

//dla kazdego przycisku
buttons.forEach((item) => {
  //po nacisnieciu przycisku
  item.onclick = () => {
    //sprawdzam czy nacisniety przycisk to C jak tak to czyszcze
    if (item.id == "clear") {
      display.innerText = "";
      //sprawdzam czy nacisniety backspace 
    } else if (item.id == "backspace") {
      //zmieniam zawartosc "wyswietlacza" na string
      let string = display.innerText.toString();
      //usuwam ostatnia pozycje z stringa
      display.innerText = string.substr(0, string.length - 1);
      //jeżeli zawartosc wyswietlacza nie jest pusta i zostanie nacisniety przycisk =
    } else if (display.innerText != "" && item.id == "equal") {
      //oblicz 
      display.innerText = eval(display.innerText);
      //jeżeli display jest pusty i zostanie nacisniety przycisk = wyswietli sie Empty!
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      //po dwoch sekundach tekst Empty zostanie usuniety
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      // jezeli zaden z przyciskow funkcyjnych nie zostal nacisniety to dodaj id przycisku do stringa
      display.innerText += item.id;
    }
  };
});
