const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpack = require('optimize-css-assets-webpack-plugin');

const optimization = () => {
    const config = {};

    if (!isDev) {
        config.minimizer = [
            new OptimizeCssAssetsWebpack(),
            new TerserWebpackPlugin()
        ]
    }
    return config;
};

const isDev = process.env.NODE_ENV === 'development';
console.log('IS DEV:',isDev);

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    };

    if (preset) {
        opts.presets.push(preset)
    }
    return opts;
};

module.exports = {
    //context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry:
        {main: ['@babel/polyfill', './src/index.js']},
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|ico)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://evening-ravine-56495.herokuapp.com',
                secure: false,
                changeOrigin: true
            }
        }
    },
    optimization: optimization(),
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebPackPlugin([
            {
                from: path.resolve(__dirname, 'src/assets/logo192.png'),
                to: path.resolve(__dirname, 'dist')
            },
            {
                from: path.resolve(__dirname, 'src/assets/manifest.json'),
                to: path.resolve(__dirname, 'dist')
            },
            {
                from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: '[hash].css'
        })
    ]
};