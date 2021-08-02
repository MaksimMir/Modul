const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, args) => {
    const isProd = args.mode === 'production';
    const config = {
        entry: './src/index.js',
        output: {
            filename: 'script.js'
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    use: "babel-loader"
                },
                {
                    test: /.s?css$/, 
                    use: [isProd ? miniCss.loader
                                 : 'style-loader', "css-loader", "sass-loader"]
                },
                {
                    test: /\.jpeg$/,
                    loader: 'url-loader',
                    options: {
                        limit: 9000,
                        name: '[name].[ext]',
                        outputPath: 'image',
                    },
                },
                {
                    test: /\.mp3$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'sound',
                    },
                }   
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new htmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
        devServer: {
            port: 9000,
            hot: true
        }
    };

    if (isProd) {
        config.plugins.push(
            new miniCss({
                filename: '[name].css'
            })
        )
    }

    return config;
}