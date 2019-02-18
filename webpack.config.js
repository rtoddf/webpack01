const path = require('path');
const SassPlugin = require('sass-webpack-plugin');

module.exports = function (prod) {
    let config = {
        entry: {
            index: './src/js/index.js',
            story: './src/js/story.js',
        },
        plugins: [
            new SassPlugin({'./src/scss/index.scss': 'css/index.css'}),
            new SassPlugin({'./src/scss/story.scss': 'css/story.css'}),
            new SassPlugin({'./src/scss/layouts.scss': 'css/layouts.css'}),
            // new SassPlugin({'./src/section/_section.scss': 'css/section.css'}),
            // new SassPlugin({'./src/media/_media.scss': 'css/media.css'}),
            // new SassPlugin({'./src/components/footer/_footer.scss': 'css/footer.css'}),
            // new SassPlugin({'./src/components/weather/_weather.scss': 'css/weather.css'}),
            // new SassPlugin({'./src/utils/ie11.scss': 'css/ie11.css'})
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].min.js'
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 8080
        },
        // module: {
        //     rules: [{
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         use: {
        //             loader: 'babel-loader',
        //             options: {
        //                 presets: ['@babel/preset-env']

        //             }
        //         }
        //     }]
        // },
        mode: prod ? 'production' : 'development'
    };

    if (!prod) {
        config.devtool = 'source-map';
    }

    return config;
};