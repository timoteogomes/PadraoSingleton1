class SistemaSeguranca {
  constructor() {
    this.baseSecretaSenha = 'senhaSuperSecreta123'; // Senha da base secreta
    this.logAcesso = [];
  }

  acessarBaseSecreta(senha) {
    if (senha === this.baseSecretaSenha) {
      this.logAcesso.push({ status: 'Acesso concedido', timestamp: new Date() });
      return 'Acesso concedido à Base Secreta.';
    } else {
      this.logAcesso.push({ status: 'Acesso negado', timestamp: new Date() });
      return 'Acesso negado. Senha incorreta.';
    }
  }

  mostrarLogAcesso() {
    console.log('Log de Acessos:');
    this.logAcesso.forEach((log) => {
      console.log(`${log.status} - ${log.timestamp}`);
    });
  }
}

class SingletonSistemaSeguranca {
  constructor() {
    if (!SingletonSistemaSeguranca.instance) {
      SingletonSistemaSeguranca.instance = new SistemaSeguranca();
    }
  }

  getInstance() {
    return SingletonSistemaSeguranca.instance;
  }
}

// Exemplo de uso no programa principal
const agenteSecreto = () => {
  const sistemaSeguranca = new SingletonSistemaSeguranca().getInstance();

  // Tentativa de acesso à Base Secreta
  console.log(sistemaSeguranca.acessarBaseSecreta('senhaIncorreta')); // Tentativa com senha incorreta
  console.log(sistemaSeguranca.acessarBaseSecreta('senhaSuperSecreta123')); // Tentativa com senha correta

  // Mostrar log de acessos
  sistemaSeguranca.mostrarLogAcesso();
};

// Execução do programa principal
agenteSecreto();
