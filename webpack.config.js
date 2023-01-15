const path = require('path')
module.exports = {
    // 支持wasm
    experiments: {
        asyncWebAssembly: true
    },
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./app.js",
    },
    mode: "development",
    devServer: {
        static: { // static: ['assets']
            directory: path.join(__dirname, 'dist')
        },
        //publicPath: '/dist/',
        host: '0.0.0.0',
        port: 7070,
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtim: "automatic" }]
                        ]
                    },
                },
            },
        ],
    }
};