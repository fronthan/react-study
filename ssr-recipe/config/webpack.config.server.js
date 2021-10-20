const nodeExternals = require('webpack-node-externals'); //서버를 위해 번들링할 때, node_modules에서 불러오는 것을 제외한다
const paths = require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');//css module의 고유 클래명을 만들 때 필요
const webpack = require('webpack'); 
const getClientEnvironment = require('./env'); //환경변수를 위해서

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const publicUrl = paths.publicUrlOrPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
    mode: 'production', //프로덕션 모드로 최적화 옵션들을 활성화
    entry: paths.ssrIndexJs,//엔트리 경로
    target:'node', //node 환경에서 실행될 것임
    output: {
        path: paths.ssrBuild, //빌드 경로
        filename: 'server.js', //파일명
        chunkFilename: 'js/[name].chunk.js', //청크 파일 이름
        publicPath: paths.servedPath, //정적 파일이 제공될 경로
    },
    module: {
        rules: [
            {
                oneOf: [
                    //자바스크립트를 위한 처리. 기존 webpack.config.js를 참고해 작성
                    {
                        test: /\.(js|mjs|jsx|ts|cjs|es6|es|tsx)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options:{
                            customize:require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            plugins: [
                                [
                                    require.resolve('babel-plugin-named-asset-import'), {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent: '@svgr/webpack?-svgo![path]'
                                            }
                                        }
                                    }
                                ]
                            ],
                            cacheDirectory: true,
                            cacheCompression:false,
                            compact:false
                        }
                    },
                    //css를 위한 처리
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        //exportOnlyLocals:true 옵션을 설정해야 실제 css 파일을 생성하지 않는다
                        loader: require.resolve('css-loader'),
                        options:{
                            onlyLocals:true
                        }
                    },
                    //css 모듈을 위한 처리
                    {
                        test: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options:{
                            modules:true,
                            onlyLocals:true,
                            getLocalIdent:getCSSModuleLocalIdent
                        }
                    },
                    //sass를 위한 처리
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: [
                            {
                                loader:require.resolve('css-loader'),
                                options: {
                                    onlyLocals: true
                                }
                            },
                            require.resolve('sass-loader')
                        ]
                    },
                    //sass + css module 을 위한 처리
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    modules:true,
                                    onlyLocals:true,
                                    getLocalIdent: getCSSModuleLocalIdent
                                }
                            },
                            require.resolve('sass-loader')
                        ]
                    },
                    //url-loader를 위한 설정
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options:{
                            emitFile:false,//파일을 따로 저장하지 않는 옵션
                            limit: 10000, //원래는 9.76kb가 넘어가면 파일로 저장하는데, emitFile 값이 false 일 때는 경로만 준비하고 파일은 저장하지 않는다. 
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    //위에서 설정된 확장자를 제외한 파일들은 file-loader를 사용한다. 
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                        options: {
                            emitFile:false, 
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }

                ]
            }
        ]
    },
    resolve: {
        modules: ['node-modules']
    },
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin(env.stringified) //환경변수를 주입한다. 프로젝트 내에서 process.env.NODE_ENV 값을 참조해서 개발 환경인지 아닌지 알 수 있다. 
    ]
}