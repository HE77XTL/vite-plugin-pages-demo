import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Pages({
            exclude: ['**/components/*.vue'],
            dirs: [
                {dir: 'src/pages', baseRoute: ''},
                // { dir: 'src/features/**/pages', baseRoute: 'features' },
                // { dir: 'src/admin/pages', baseRoute: 'admin' },
            ],
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            dts: true,
            dirs: ['src/components'],
            resolvers: [ElementPlusResolver()],
        })
    ],
    server: {
        host: true,
        port: 8080,
        watch: {
            usePolling: true
          }
    }
});
