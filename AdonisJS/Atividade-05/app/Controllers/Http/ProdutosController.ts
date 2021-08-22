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

    public async cadastro({ bouncer, view }) {
        await bouncer.authorize('gerenciarProdutos')

        return view.render('ProdutoRegister')
    }

    public async salvamento({ bouncer, request, response }) {
        await bouncer.authorize('gerenciarProdutos')

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

    public async remocao({ bouncer, params, response }) {
        await bouncer.authorize('gerenciarProdutos')

        const produto = await Produto.find(params.id)

        if (produto)
        {
            await produto.delete()
        }

        response.redirect().toRoute('ProdutosViewer')
    }

    public async alteracao({ bouncer, view, params, response }) {
        await bouncer.authorize('alterarProdutos')

        const produto = await Produto.find(params.id)

        if (produto)
        {
            return view.render('ProdutoChange', {produto})
        }

        response.redirect().back()
    }

    public async alterar({ bouncer, params, request, response }) {
        await bouncer.authorize('alterarProdutos')

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
