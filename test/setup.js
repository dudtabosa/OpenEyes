// Setup para testes unitários do frontend
import { config } from '@vue/test-utils';

// Configuração global para testes Vue
config.global.mocks = {
    $t: (key) => key, // Mock para i18n
    $route: {
        path: '/',
        query: {},
        params: {}
    },
    $router: {
        push: jest.fn(),
        replace: jest.fn(),
        go: jest.fn()
    }
};

// Mock para fetch global
global.fetch = jest.fn();

// Mock para console para evitar logs nos testes
global.console = {
    ...console,
    log: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
}; 