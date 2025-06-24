exports.up = function(knex) {
    return knex.schema.table('user', function(table) {
        table.string('nome', 255).notNullable().defaultTo('');
        table.string('cpf', 14).notNullable().defaultTo('').unique();
        table.string('email', 255).notNullable().defaultTo('').unique();
        table.string('cnpj', 18).nullable();
        table.string('razao_social', 255).nullable();
        table.string('forma_pagamento', 32).notNullable().defaultTo('');
    });
};

exports.down = function(knex) {
    return knex.schema.table('user', function(table) {
        table.dropColumn('nome');
        table.dropColumn('cpf');
        table.dropColumn('email');
        table.dropColumn('cnpj');
        table.dropColumn('razao_social');
        table.dropColumn('forma_pagamento');
    });
}; 