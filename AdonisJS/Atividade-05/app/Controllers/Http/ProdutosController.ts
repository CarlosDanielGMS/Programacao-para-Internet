import Produto from 'App/Models/Produto'

export default class ProdutosController {
    public async listagem({ view }) {
        const produtos = await Produto.all()
        
        return view.render('produtos/listagem', {
            produtos: produtos
        })
    }

    public async cadastro({ bouncer, view }) {
        await bouncer.authorize('gerenciarProdutos')

        return view.render('produtos/cadastro')
    }

    public async cadastrar({ bouncer, request, response }) {
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

        response.redirect().toRoute('listagemProdutos')
    }

    public async alteracao({ bouncer, view, params, response }) {
        await bouncer.authorize('alterarProdutos')

        const produto = await Produto.find(params.id)

        if (produto)
        {
            return view.render('produtos/alteracao', {produto})
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

        response.redirect().toRoute('listagemProdutos')
    }

    public async remover({ bouncer, params, response }) {
        await bouncer.authorize('gerenciarProdutos')

        const produto = await Produto.find(params.id)

        if (produto)
        {
            await produto.delete()
        }

        response.redirect().toRoute('listagemProdutos')
    }
}
