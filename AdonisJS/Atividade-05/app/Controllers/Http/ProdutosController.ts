import Produto from 'App/Models/Produto'

export default class ProdutosController {
    public async visualizacao({ view }) {
        //Buscar informações
        const produtos = await Produto.all()

        //Exibir a tela
        return view.render('ProdutosViewer', {
            produtos: produtos
        })
    }

    public async cadastro({ view }) {
        return view.render('ProdutoRegister')
    }

    public async salvamento({ request, response }) {
        await Produto.create(
            request.only([
                'nome',
                'descricao',
                'especificacoes',
                'categoria',
                'valor',
                'quantidade'
            ])
        )

        response.redirect().toRoute('ProdutosViewer')
    }
}
