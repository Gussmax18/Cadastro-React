const cadastroForm = document.getElementById('cadastroForm');
const usuariosBody = document.getElementById('usuariosBody');
 
let usuarios = [];
 
function adicionarUsuario(event) {
    event.preventDefault();
 
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
 
    if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
 
    const usuario = { nome, email, telefone };
    usuarios.push(usuario);
    atualizarTabela();
 
    cadastroForm.reset();
}
 
function atualizarTabela() {
    usuariosBody.innerHTML = '';
 
    usuarios.forEach((usuario, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td >${usuario.nome}</td>
            <td>${usuario.email}</td>                
            <td>${usuario.telefone}</td>
             
            <td><button class="delete-button" onclick="excluirUsuario(${index})">Excluir</button></td>
        `;
        usuariosBody.appendChild(row);
    });
}
 
function excluirUsuario(index) {
    usuarios.splice(index, 1);
    atualizarTabela();
}
 
cadastroForm.addEventListener('submit', adicionarUsuario);
