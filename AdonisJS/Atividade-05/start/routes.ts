import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ProdutosController.visualizacao').as('ProdutosViewer')
Route.get('/cadastrar', 'ProdutosController.cadastro').as('ProdutoRegister')
Route.post('/cadastrar', 'ProdutosController.salvamento').as('ProdutoSaver')