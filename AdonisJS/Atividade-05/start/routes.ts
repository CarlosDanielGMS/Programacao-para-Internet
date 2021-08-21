import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ProdutosController.visualizacao').as('ProdutosViewer').middleware('auth')
Route.get('/cadastrar', 'ProdutosController.cadastro').as('ProdutoRegister').middleware('auth')
Route.post('/cadastrar', 'ProdutosController.salvamento').as('ProdutoSaver').middleware('auth')
Route.get('/alterar/:id', 'ProdutosController.alteracao').as('ProdutoChange').middleware('auth')
Route.post('/alterar/:id', 'ProdutosController.alterar').as('ProdutoAlter').middleware('auth')
Route.get('/remover/:id', 'ProdutosController.remocao').as('ProdutoRemove').middleware('auth')

Route.group(() => {
    Route.get('/', 'UsuariosController.listagem').as('listagemUsuarios').middleware('auth')
    Route.get('/cadastro', 'UsuariosController.cadastro').as('cadastroUsuario')
    Route.post('/cadastrar', 'UsuariosController.cadastrar').as('cadastrarUsuario')
    Route.get('/remover/:id', 'UsuariosController.remover').as('removerUsuario').middleware('auth')
}).prefix('/usuarios')

Route.group(() => {
    Route.get('/', 'AutenticacaoController.entrada').as('autenticacaoEntrada')
    Route.post('/entrar', 'AutenticacaoController.entrar').as('autenticacaoEntrar')
    Route.get('/sair', 'AutenticacaoController.sair').as('autenticacaoSair')
}).prefix('/autenticacao')