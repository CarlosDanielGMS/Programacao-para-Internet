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

    public async remocao({ params, response }) {
        const produto = await Produto.find(params.id)

        if (produto)
        {
            await produto.delete()
        }

        response.redirect().toRoute('ProdutosViewer')
    }

    public async alteracao({ view, params, response }) {
        const produto = await Produto.find(params.id)

        if (produto)
        {
            return view.render('ProdutoChange', {produto})
        }

        response.redirect().back()
    }

    public async alterar({ params, request, response }) {
        const produto = await Produto.find(params.id)

        if (produto)
        {
            produto.merge(
                request.only([
                    'nome',
                    'descricao',
                    'especificacoes',
                    'categoria',
                    'valor',
                    'quantidade'
                ])
            )

            await produto.save()
        }

        response.redirect().toRoute('ProdutosViewer')
    }
}
