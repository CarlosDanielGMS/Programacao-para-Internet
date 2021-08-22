import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'AutenticacaoController.entrada')

Route.group(() => {
    Route.get('/listagem', 'ProdutosController.listagem').as('listagemProdutos').middleware('auth')
    Route.get('/cadastro', 'ProdutosController.cadastro').as('cadastroProduto').middleware('auth')
    Route.post('/cadastrar', 'ProdutosController.cadastrar').as('cadastrarProduto').middleware('auth')
    Route.get('/alteracao/:id', 'ProdutosController.alteracao').as('alteracaoProduto').middleware('auth')
    Route.post('/alterar/:id', 'ProdutosController.alterar').as('alterarProduto').middleware('auth')
    Route.get('/remover/:id', 'ProdutosController.remover').as('removerProduto').middleware('auth')
}).prefix('/produtos')

Route.group(() => {
    Route.get('/listagem', 'UsuariosController.listagem').as('listagemUsuarios').middleware('auth')
    Route.get('/cadastro', 'UsuariosController.cadastro').as('cadastroUsuario')
    Route.post('/cadastrar', 'UsuariosController.cadastrar').as('cadastrarUsuario')
    Route.get('/remover/:id', 'UsuariosController.remover').as('removerUsuario').middleware('auth')
}).prefix('/usuarios')

Route.group(() => {
    Route.get('/entrada', 'AutenticacaoController.entrada').as('entradaAutenticacao')
    Route.post('/entrar', 'AutenticacaoController.entrar').as('entrarAutenticacao')
    Route.get('/sair', 'AutenticacaoController.sair').as('sairAutenticacao')
}).prefix('/autenticacao')