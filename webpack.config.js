const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist') // 현재 경로 하위에 있는 dist 폴더를 의미
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html" // index.html을 기본 템플릿으로 반영할 수 있도록 설정
		}),
		new MiniCssExtractPlugin({
			filename: "common.css", // 빌드된 css 파일 이름 설정
		}),
		new CleanWebpackPlugin() // 불필요한 build 파일 삭제
],
	module: {
		rules: [
			{
				test: /\.css$/, // 확장자자 .css일 때 use를 사용
				// use: ["style-loader", "css-loader"] // use 배열은 뒤에서부터 적용된다.
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				use: ['file-loader'],
			}
		]
	},
	devServer: {
		// 개발 서버가 dist 폴더를 제공할 수 있도록 설정
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 8080
	}
}