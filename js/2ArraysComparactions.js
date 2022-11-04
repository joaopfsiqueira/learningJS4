const productItens = [
              {
                "productId": "344860-1",
                "quantity": 1,
                "itemPrice": 1499.9,
                "currency": "BRL"
            },
            {
                "productId": "350023-1",
                "quantity": 2,
                "itemPrice": 1500.1,
                "currency": "BRL"
            }
          ]

const productName = [
            {
                "brand": "facebook",
                "category": "Vehicles & Parts > Vehicle Parts & Accessories",
                "id": "8534171516593721",
                "price": "R$399.90",
                "name": "Pneu Ecology Xbri 185/60 R14 82H - Preto",
                "url": "https://www.havan.com.br/pneu-ecology-xbri-185-60-r14-82h-preto/p",
                "description": "Os pneus Xbri para autom¢veis ou ve¡culos de passageiros tm linhas diferentes e sÆo concebidos com base nas necessidades de quem est  ao volante. Elesÿoferecem estabilidade ao caminhar, maior durabilidade e resistncia.",
                "gender": "",
                "sale_price": "R$349.90",
                "inventory": 100,
                "image_url": "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/p/n/pneu-ecology-xbri-185-60_r14-82h_566360.jpg",
                "availability": "in stock",
                "age_group": "",
                "images": [
                    "{\"url\":\"https:\/\/www.havan.com.br\/media\/catalog\/product\/cache\/73a52df140c4d19dbec2b6c485ea6a50\/p\/n\/pneu-ecology-xbri-185-60_r14-82h_566360.jpg\",\"tags\":[]}"
                ],
                "productId": "344860-1",
                "product_catalog": {
                    "id": "677170633717775",
                    "name": "Catálogo Black Friday - Liberdade (Chatbot)"
                }
            },
            {
                "brand": "facebook",
                "category": "Vehicles & Parts > Vehicle Parts & Accessories",
                "id": "5505675952843771",
                "price": "R$399.90",
                "name": "Pneu Ecology Xbri 175/75 R14 86T - Preto",
                "url": "https://www.havan.com.br/pneu-ecology-xbri-175-75-r14-86t-diversos/p",
                "description": "Os pneus Xbri para autom¢veis ou ve¡culos de passageiros tm linhas diferentes e sÆo concebidos com base nas necessidades de quem est  ao volante. Elesÿoferecem estabilidade ao caminhar, maior durabilidade e resistncia.",
                "gender": "",
                "sale_price": "R$349.90",
                "inventory": 100,
                "image_url": "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/p/n/pneu-ecology-xbri-175-75-r14-86t_680619.jpg",
                "availability": "in stock",
                "age_group": "",
                "images": [
                    "{\"url\":\"https:\/\/www.havan.com.br\/media\/catalog\/product\/cache\/73a52df140c4d19dbec2b6c485ea6a50\/p\/n\/pneu-ecology-xbri-175-75-r14-86t_680619.jpg\",\"tags\":[]}"
                ],
                "productId": "350023-1",
                "product_catalog": {
                    "id": "677170633717775",
                    "name": "Catálogo Black Friday - Liberdade (Chatbot)"
                }
            }
        ]



        productItems.map((item) => {
            let index = productName.findIndex(function(nome) {return nome.productId == item.productId})
            
            mensagem = `${mensagem}*Produto*: ${productName[index].nomeProduto}\n*Quantidade*: ${item.quantity}\n*Valor*: R$${item.itemPrice}\n*Sku*: ${item.productId}\n\n`
            valorTotal = valorTotal + (item.itemPrice * item.quantity)
        })


        console.log(mensagem)