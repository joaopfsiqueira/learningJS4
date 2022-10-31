const data = [
    {
        "key": "cliente",
        "value": "sim"
    },
    {
        "key": "telefone",
        "value":"12982630081"
    },
    {
        "key": "Produto",
        "value":"Iphone"
    },
    {
        "key": "Problema",
        "value":"Null"
    },
    {
        "key": "Nome",
        "value":"João"
    },
    {
        "key": "Email",
        "value":"joaopfsiqueiraa@gmail.com"
    }
]


async function exemploAssign(data) {

    const result = data.map(item => ({
        [item.key]: item.value
    }))

    return (console.log(result))
}


exemploAssign(data)