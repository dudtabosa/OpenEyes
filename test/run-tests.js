const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Iniciando execução dos testes...\n');

// Função para executar testes
function runTests(testPath, description) {
  console.log(`📋 Executando ${description}...`);
  try {
    const result = execSync(`npm test ${testPath}`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    console.log(`✅ ${description} - SUCESSO\n`);
    return true;
  } catch (error) {
    console.log(`❌ ${description} - FALHOU`);
    console.log(error.stdout || error.message);
    console.log('');
    return false;
  }
}

// Lista de testes para executar
const tests = [
  {
    path: 'test/unit/UserRegister.test.js',
    description: 'Testes unitários do componente UserRegister'
  },
  {
    path: 'test/unit/RegisterPage.test.js', 
    description: 'Testes unitários da página Register'
  },
  {
    path: 'test/backend/registerUser.test.js',
    description: 'Testes de integração da rota registerUser'
  }
];

// Executar todos os testes
let allPassed = true;

for (const test of tests) {
  const passed = runTests(test.path, test.description);
  if (!passed) {
    allPassed = false;
  }
}

// Resultado final
console.log('📊 RESUMO DOS TESTES');
console.log('====================');

if (allPassed) {
  console.log('🎉 Todos os testes passaram com sucesso!');
  console.log('✅ Funcionalidade de cadastro está funcionando corretamente');
  process.exit(0);
} else {
  console.log('⚠️  Alguns testes falharam. Verifique os erros acima.');
  console.log('🔧 Corrija os problemas antes de prosseguir.');
  process.exit(1);
} 