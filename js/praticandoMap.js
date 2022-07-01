const stats = [
    {
        "base_stat": 35,
        "effort": 0,
        "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
        }
    },
    {
        "base_stat": 55,
        "effort": 0,
        "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
        }
    },
    {
        "base_stat": 40,
        "effort": 0,
        "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
        }
    },
    {
        "base_stat": 50,
        "effort": 0,
        "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
        }
    },
    {
        "base_stat": 50,
        "effort": 0,
        "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
        }
    },
    {
        "base_stat": 90,
        "effort": 2,
        "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
        }
    }
]



const nameStats = stats.map(function (stat) {
    return `${stat.stat.name} : ${stat.base_stat}`
})


console.log(nameStats)