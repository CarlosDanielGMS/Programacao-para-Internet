// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AutenticacaoController {
    public async entrada({ view }) {
        return view.render('autenticacao/entrada')
    }
    
    public async entrar({ auth, request, response }) {
        const email = request.input('email')
        const senha = request.input('senha')

        try {
            await auth.use('web').attempt(email, senha)

            response.redirect().toRoute('listagemProdutos')
        } catch {
            response.redirect().toRoute('entradaAutenticacao')
        }
    }
    
    public async sair({ auth, response }) {
        await auth.use('web').logout()
        
        response.redirect().toRoute('entradaAutenticacao')
    }
}
