const timestamp = '1639510170';
const apiKey = 'a1a1ecf2fe9ec34a04197c95fe6f91e9';
const md5 = 'c22cbd68bb703ed2e50271817c0d385a';

fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=6`).then((response) => {
  return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector("#herois");
    
    jsonParsed.data.results.forEach(element => {
      const srcImage = element.thumbnail.path + "." + element.thumbnail.extension
      const nameHero = element.name

      createDivHero(srcImage, nameHero, divHero);
    });
  

  console.log(jsonParsed);
  })

  function createDivHero(srcImage, nameHero, divToAppend) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)
    
    divPai.classList.add("personagem");
  }

