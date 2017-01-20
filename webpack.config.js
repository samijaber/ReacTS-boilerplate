const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [
        // activates Hot Module Replacement
        "react-hot-loader/patch",

        // bundles client for web-dev-server and hot reloading
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",

        "./src/index.tsx"
    ],
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, 'dist'),

        // necessary for HMR to know where to load the hot update chunks
        publicPath: "/dist/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // this should be required for hot reloading but actually breaks it...
    // devServer: {
    //     // enable HMR on the server
    //     hot: true,

    //     // match the output path
    //     contentBase: resolve(__dirname, 'dist'),

    //     // match the output `publicPath`
    //     publicPath: '/dist/'
    // },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
    ],

    module: {
        rules: [
            {
                // load '.ts' and '.tsx files'
                test: /\.tsx?$/,
                use: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],
                exclude: resolve(__dirname, 'node_modules'),
                include: resolve(__dirname, "src")
            },
            {
                // re-processed sourcemaps for '.js' files
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
