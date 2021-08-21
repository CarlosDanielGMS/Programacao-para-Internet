import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ProdutosController.visualizacao').as('ProdutosViewer')

Route.get('/cadastrar', 'ProdutosController.cadastro').as('ProdutoRegister')
Route.post('/cadastrar', 'ProdutosController.salvamento').as('ProdutoSaver')

Route.get('/alterar/:id', 'ProdutosController.alteracao').as('ProdutoChange')
Route.post('/alterar/:id', 'ProdutosController.alterar').as('ProdutoAlter')

Route.get('/remover/:id', 'ProdutosController.remocao').as('ProdutoRemove')