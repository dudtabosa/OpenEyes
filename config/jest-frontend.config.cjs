module.exports = {
    "rootDir": "..",
    "testEnvironment": "jsdom",
    "testRegex": "./test/unit/.*\\.test\\.js$",
    "moduleFileExtensions": ["js", "json", "vue"],
    "transform": {
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\.js$": "babel-jest"
    },
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": ["<rootDir>/test/setup.js"],
    "collectCoverageFrom": [
        "src/**/*.{js,vue}",
        "!src/main.js",
        "!src/router.js"
    ],
    "testPathIgnorePatterns": [
        "/node_modules/"
    ]
}; 