const path = require('path');
module.exports = {
webpack: {
    alias: {
    '@': path.join(path.resolve(__dirname, './src')),
    '@components': path.join(path.resolve(__dirname, './src/components')),
    '@data': path.join(path.resolve(__dirname, './src/data')),
    '@navigation': path.join(
    path.resolve(__dirname, '/src/components/navigation')
    ),
    '@themes': path.join(path.resolve(__dirname,'./src/themes')),
    '@hooks': path.join(path.resolve(__dirname, './srgit push --set-upstream origin mainc/hooks')),
    '@styles': path.join(path.resolve(__dirname, './src/styles')),
},
},
};