export default interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: string;
}

/* incluir todos os atributos que "faltam" ao realizar o Login, 
uma vez que pede apenas o usuario e a senha */