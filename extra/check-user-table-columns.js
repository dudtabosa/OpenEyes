const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/kuma.db');

db.all("SELECT name FROM sqlite_master WHERE type='table';", [], (err, rows) => {
    if (err) {
        console.error('Erro ao consultar tabelas:', err.message);
        process.exit(1);
    }
    if (!rows || rows.length === 0) {
        console.log('Nenhuma tabela encontrada no banco de dados.');
    } else {
        console.log('Tabelas encontradas no banco de dados:');
        rows.forEach(row => {
            console.log(`- ${row.name}`);
        });
    }
    db.close();
}); 