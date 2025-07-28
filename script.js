document.getElementById('login-btn').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    
    // Verificação simples - qualquer email + senha "Jesus"
    if (password === 'Jesus') {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar para outra página
        // window.location.href = "dashboard.html";
    } else {
        alert('Senha incorreta. A senha deve ser "Jesus" (case sensitive).');
    }
});
