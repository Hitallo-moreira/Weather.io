function changeLanguage(lang) {
    var elements = [...document.querySelectorAll('.translate')];
    var translations;

    if (lang === 'pt-br') {
        translations = {
            'Enter the desired city:': 'Digite a cidade desejada:',
            'Search': 'Pesquisar'
        };
    } else if (lang === 'en-us') {
        translations = {
            'Enter the desired city:': 'Enter the desired city:',
            'Search': 'Search' 
        };
    }

    elements.forEach(function(element) {
        var key = element.getAttribute('data-translate');
        if (translations.hasOwnProperty(key)) {
            element.textContent = translations[key];
        }
    });
}
