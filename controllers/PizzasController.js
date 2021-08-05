const pizzas = require('../database/Pizzas.json');

module.exports = {
	index: (req, res) => {
		res.render("index", { pizzas: pizzas });
	},
	show: (req, res) => {
		// res.send("salve!!!  " + req.params.id);
		// let id = req.params.id

		let { id } = req.params
		let proximo = id
		let voltar = id
		// 1 - Carregar a pizza de id passado (pizzas.find);		
		let pizza = pizzas.find(pizza => pizza.id == id)
		// 2 - Renderizar a view pizza passando a pizza encontrada
		// {pizza:pizza}

		if (id >= pizzas.length) {
			//proximo =false
			proximo = 1
		} else {
			proximo = parseInt(id) + 1
		}

		if (id <= 1) {
			//voltar =false
			voltar = pizzas.length
		} else {
			voltar = parseInt(id) - 1
		}

		res.render("pizza", { pizza, proximo: proximo, voltar })
	},

	busca: (req, res) => {
		// res.send('oi');
		// res.send(req.query.busca);
		// 1 - guardar a string buscada em um avariavel
		const busca = req.query.busca;
		// 2 - representar em um array "encontradas" somente as pizzas que contenham a string buscada
		// const encontradas = pizzas.filter(
		// 	p => p.nome.includes == busca
		// );

		// const encontradas = pizzas.filter((p) => {
		// 	return p.nome.includes(busca);
		// })
		const encontradas = pizzas.filter(
			p => p.nome.toLowerCase().includes(busca.toLowerCase())
		)


		// 3 - retonar uma view com as pizzas encontradas
		res.render("index", {pizzas: encontradas});


		
	},

	create: (req, res) => {
		res.render('pizza-create')
	},

	store: (req,res) => {
		let pizza = {
			id: pizzas[pizzas.length -1].id + 1,
			nome: req.body.nome,
			ingredientes: req.body.ingredientes.split(","),
			preco: req.body.preco,
			img: "/img/calabresa.jpg",
			destaque: true
		}
		res.send(pizza);
	}



}