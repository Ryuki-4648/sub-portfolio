module.exports = {
  webpack: (config, { isServer }) => {
    // .ts/.tsxファイルをsrcディレクトリから読み込むための設定
    config.resolve.alias['@'] = __dirname;
    return config;
  },
  // _app.tsx を含むファイルを src ディレクトリに移動するための設定
  pages: {
    // pagesディレクトリ内にある _app.tsx は無視する
    exclude: [
      /_app.tsx$/,
    ],
    // srcディレクトリから読み込むファイルを指定する
    files: [
      'src/pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
}