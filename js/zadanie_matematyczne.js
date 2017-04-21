//Instrukcja zwracająca wynik działania (a*a)+(2*a*b)-(b*b)

alert('Witaj poproszę Cię o kilka zmiennych potrzebnych do wykonania zadania');
var a = prompt('podaj pierwszą zmienna, bedzie to "a" ');
var b = prompt('podaj drugą zmienną, bedzie to "b" ');
alert('podane zmienne to a=' +a+ ' b=' +b);
var wynik = (a*a)+(2*a*b)-(b*b);
alert('wynik działania (' +a+ '*' +a+ ')+(2*' +a+ '*' +b+ ')+(' +b+ '*' +b+ ') wynosi: ' +wynik);
console.log('wynik działania (' +a+ '*' +a+ ')+(2*' +a+ '*' +b+ ')+(' +b+ '*' +b+ ') wynosi: ' +wynik);
if (wynik > 0){
	alert('wynik działania dodatni');
	console.log('wynik działania dodatni');
}
else {
	if (wynik == 0) {
	alert('wynik działania równy "0"');
	console.log('wynik działania równy "0"');
	}
	else {
	alert('wynik działania ujemny');
	console.log('wynik działania ujemny');
	}
}
alert('Koniec, wykonałes proste działanie matematyczne.');
