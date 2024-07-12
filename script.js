
let attempts = 0;
const solution = 'ilvinobianco';
const hints = [
    '_ _ _ _ _ _ _ _ _ _ ', // 0 lettere
    '_ _ c _ _ _ _ _ _ _ ', // 1 lettera
    '_ _ c a _ _ _ _ _ _ ', // 2 lettere
    '_ _ c a _ _ r _ _ _ ', // 3 lettere
    '_ _ c a _ _ r _ o _ ', // 4 lettere
    '_ s c a _ _ r _ o _ ', // 5 lettere
    '_ s c a _ e r _ o _ ', // 6 lettere
    '_ s c a p e r _ o _ ', // 7 lettere
    'e s c a p e r _ o _ ', // 8 lettere
    'e s c a p e r _ o m ', // 9 lettere
    'e s c a p e r o o m', // 10 lettere
	
];

function verificaRisposta() {
    const risposta = document.getElementById('risposta').value.toLowerCase().trim();
    const result = document.getElementById('result');
    
    if (risposta === solution) {
        result.innerHTML = `<p>Brava Alli! Ti sei guadagnata un <a href="Regalo_Alli_esc.pdf" target="_blank">regalo</a></p>`;
    } else {
        if (attempts < hints.length - 2) {
            attempts++;
			result.innerHTML = `<p>"${hints[attempts]}"</p>`;
			result.innerHTML += `<p>Risposta sbagliata. Riprova!</p>`;
        }
		else{
			attempts++;
			result.innerHTML = `<p>Sei imbarazzante, era "${hints[attempts]}". Tieni il tuo <a href="Regalo_Alli_esc.pdf" target="_blank">regalo</a></p>`;
		}
        
    }
}
