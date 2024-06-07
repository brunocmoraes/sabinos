
import handlebars from 'vite-plugin-handlebars';
import config from './config.json';

export default {
    plugins: [
        handlebars({
            context: config,
            partialDirectory:'./partials',
        }),
    ],
    server: {
        open: './index.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main:'./index.html',
                //another: resolve(__dirname, './src/another.html')
            }
        }
    }
}