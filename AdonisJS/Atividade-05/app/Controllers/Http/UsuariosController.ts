import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
    public async listagem({ view }) {
        const usuarios = await Usuario.all()

        return view.render('usuarios/listagem', {
            usuarios: usuarios
        })
    }

    public async cadastro({ view }) {
        return view.render('usuarios/cadastro')
    }

    public async cadastrar({ request, response }) {
        await Usuario.create(
            request.only([
                'nome',
                'email',
                'senha'
            ])
        )

        response.redirect().toRoute('listagemUsuarios')
    }

    public async remover({ params, response }) {
        const usuario = await Usuario.find(params.id)

        if (usuario)
        {
            await usuario.delete()
        }

        response.redirect().toRoute('listagemUsuarios')
    }
}
