import Produto from 'App/Models/Produto'

export default class ProdutosController {
    public async index({ view }) {
        //Buscar informações
        const produtos = await Produto.all()

        //Exibir a tela
        return view.render('ProdutosViewer', {
            produtos: produtos
        })
    }
}
