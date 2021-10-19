import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, ""),
        filename: "md5.min.js",
        library: "MD5",
    },
};
export default config;
