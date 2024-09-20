async function fetchPoke() {
    try {
        const pokiname = document.getElementById("pokename").value;
        const pokeimg = document.getElementById("pokeimg");
        const pokeimg2 = document.getElementById("pokeimg2");
        const pokeimg3 = document.getElementById("pokeimg3");
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokiname}`);

        if (!res.ok) {
            throw new Error('oh no!');
        };
        console.log('works!');
        const data = await res.json();
        const pokeimgSrc1 = data.sprites.front_default;
        const pokeimgSrc2 = data.sprites.front_shiny;
        const pokeimgSrc3 = data.sprites.other.dream_world.front_default;

        pokeimg.src = pokeimgSrc1;
        pokeimg2.src = pokeimgSrc2;
        pokeimg3.src = pokeimgSrc3;

    } catch (error) {
        console.log(error);
    }
}

document.getElementById('pokename').addEventListener('keydown', function(event){
    if(event.key === "Enter") {
        fetchPoke();
    }
})