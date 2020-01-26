const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
    module: {
        rules: [
            // {
            //     test: /\.stories\.js?$/,
            //     loaders: [require.resolve('@storybook/addon-storysource/loader')],
            //     enforce: 'pre',
            // },
            // {
            //     test: /\.(woff|woff2|ttf|svg)(\?.*)?$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //         },
            //     ]
            // },
            // {
            //     test: /\.(otf|eot|jpe?g|png|gif|svg)(\?.*)?$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         },
            //     ]
            // },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                // include: [path.resolve(__dirname), 'node_modules' ]
            },
            {
                test: /\.scss$/,
                sideEffects: true,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // importLoaders: 1,
                            // localIdentName: '[name]-[local]-[hash:base64:3]',
                            // modules: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: true,
                        },
                    },
                    // {
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         resources: [
                    //             '../css/index.scss',
                    //         ],
                    //         rootPath
                    //     }
                    // },
                ],
                // include: path.resolve(__dirname, '../components')
                include: path.resolve(__dirname, '../')
            },
        ]
    }
}