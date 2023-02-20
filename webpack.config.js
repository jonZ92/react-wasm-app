const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 支持wasm
    experiments: {
        asyncWebAssembly: true,
        //syncWebAssembly: true,
    },
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./app.js",
    },
    mode: "production",
    devServer: {
        static: {
            // static: ['assets']
            directory: path.join(__dirname, "dist"),
        },
        //publicPath: '/dist/',
        host: "0.0.0.0",
        port: 7070,
        proxy: {
            '/app': {
                target: 'http://appServer',
                pathRewrite: { '^/app': '/app' }
            }
        } ,
        // proxy: {
        //     '/app': {
        //         target: 'http://127.0.0.1:7080',
        //         pathRewrite: { '^/app': '/app' }
        //     }
        // },
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtim: "automatic" }],
                        ],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
};
