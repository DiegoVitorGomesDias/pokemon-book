const form__pokemon = document.querySelector('.form');
const pokemon__info = document.querySelector('.info__pokemon');
const pokemon__id = document.querySelector('.id__pokemon');
const pokemon__name = document.querySelector('.name__pokemon');
const pokemon__image = document.querySelector('.image__pokemon');
const input__pokemon = document.querySelector('.search__pokemon');
const prev__pokemon = document.querySelector('.btn-left');
const next__pokemon = document.querySelector('.btn-right');

let id__pokemon = 1;

const fecht__pokemon__api = async (name__pokemon = "error") =>
{
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${name__pokemon}`)
    .then( (data) => data ).then( async (data) => await data.json() )
    .catch( (err) => "error" )
}

const handle__pokemon = async (name__pokemon) =>
{
    pokemon__id.innerHTML = "";
    pokemon__image.style.display = "none";
    pokemon__name.innerHTML = "...";

    name__pokemon = name__pokemon.toString().trim().replace(/^0+(?=\d)/, '').toLocaleLowerCase();
    name__pokemon = name__pokemon == "" ? id__pokemon : name__pokemon;

    await fecht__pokemon__api(name__pokemon)
    .then( (pokemon) => 
    {
        id__pokemon = pokemon.id;
        pokemon__id.innerHTML = pokemon.id;
        pokemon__name.innerHTML = pokemon.name;
        pokemon__image.setAttribute("alt", pokemon.name)
        pokemon__image.setAttribute("title", pokemon.name)
        pokemon__image.style.display = "block";
        
        pokemon__image.src = 
            pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
            ? pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
            : pokemon["sprites"]["versions"]["generation-v"]["black-white"]["front_default"]
        ;

        if(pokemon__name.textContent.length > 10) pokemon__info.style.fontSize = "clamp(0.1em, 4vw, 1.2em)";
    })
    .catch( () => 
    {
        pokemon__id.innerHTML = "";
        pokemon__name.innerHTML = "não encontrado";
        pokemon__image.style.display = "none";
    })
    .finally( () =>  
    {
        input__pokemon.value = "";
        input__pokemon.focus();
    })
}

form__pokemon.addEventListener("submit", (e) => { e.preventDefault(); handle__pokemon(input__pokemon.value); })

prev__pokemon.addEventListener("click", prev = () =>
{
    if(id__pokemon > 1) { id__pokemon --; handle__pokemon(id__pokemon); }
})

next__pokemon.addEventListener("click", next = () =>
{
    if(id__pokemon <= 905) { id__pokemon ++; handle__pokemon(id__pokemon); }
})

document.body.addEventListener("keydown", (e) =>
{
    e.code === "ArrowUp" ? next() : e.code === "ArrowDown" ? prev() : false;

    if(document.activeElement.name !== "search__pokemon" || input__pokemon.value === "")
    e.code === "ArrowRight" ? next() : e.code === "ArrowLeft" ? prev() : input__pokemon.focus();
})

handle__pokemon(id__pokemon);