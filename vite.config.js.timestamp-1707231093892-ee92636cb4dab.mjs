// vite.config.js
import handlebars from "file:///C:/dev/pizzalink/node_modules/vite-plugin-handlebars/dist/index.js";

// config.json
var config_default = {
  links: {
    url: "https://cafecombobagens.netlify.app",
    site: "https://cafecombobagens.saipos.com/",
    instagram: "https://www.instagram.com/cafecombobagensrr",
    facebook: "https://www.facebook.com/cafecombobagensrr",
    whatsapp: "https://wa.me/5595991211637?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es."
  },
  meta: {
    title: "Caf\xE9 com Bobagens - Boa Vista / RR",
    description: "A melhor doceria de Boa Vista, localizada na Avenida Major Willians, n 857 - Centro. Venha tomar um caf\xE9zinho e conhecer nossas del\xEDcias"
  },
  display: {
    title: "Caf\xE9 com Bobagens",
    subtitle: "A melhor doceria de Boa Vista, localizada na Avenida Major Willians, n 857 - Centro. Venha tomar um caf\xE9zinho e conhecer nossas del\xEDcias",
    footer_text: "Caf\xE9 com Bobagens \u2013 CNPJ: 37.138.865/0001-29",
    copyright: "Todos os direitos reservados \xAE 2024"
  },
  info: {
    phone: "5595991211637",
    phone_read: "(95) 9 9121-1637",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.962395433641!2d-60.67068948954948!3d2.8270995971378117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93077a6e730383%3A0x268721df8fb4eeda!2sCaf%C3%A9%20com%20Bobagens!5e0!3m2!1spt-BR!2sbr!4v1707153228496!5m2!1spt-BR!2sbr"
  }
};

// vite.config.js
var vite_config_default = {
  plugins: [
    handlebars({
      context: config_default,
      partialDirectory: "./partials"
    })
  ],
  server: {
    open: "./index.html",
    port: 3116
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html"
        //another: resolve(__dirname, './src/another.html')
      }
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAiY29uZmlnLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxkZXZcXFxccGl6emFsaW5rXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxkZXZcXFxccGl6emFsaW5rXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9kZXYvcGl6emFsaW5rL3ZpdGUuY29uZmlnLmpzXCI7XHJcbmltcG9ydCBoYW5kbGViYXJzIGZyb20gJ3ZpdGUtcGx1Z2luLWhhbmRsZWJhcnMnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIGhhbmRsZWJhcnMoe1xyXG4gICAgICAgICAgICBjb250ZXh0OiBjb25maWcsXHJcbiAgICAgICAgICAgIHBhcnRpYWxEaXJlY3Rvcnk6Jy4vcGFydGlhbHMnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIG9wZW46ICcuL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgIHBvcnQ6IDMxMTYsXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICBtYWluOicuL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgLy9hbm90aGVyOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fub3RoZXIuaHRtbCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCAie1xyXG4gIFwibGlua3NcIjoge1xyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2NhZmVjb21ib2JhZ2Vucy5uZXRsaWZ5LmFwcFwiLFxyXG4gICAgXCJzaXRlXCI6IFwiaHR0cHM6Ly9jYWZlY29tYm9iYWdlbnMuc2FpcG9zLmNvbS9cIixcclxuICAgIFwiaW5zdGFncmFtXCI6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9jYWZlY29tYm9iYWdlbnNyclwiLFxyXG4gICAgXCJmYWNlYm9va1wiOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jYWZlY29tYm9iYWdlbnNyclwiLFxyXG4gICAgXCJ3aGF0c2FwcFwiOiBcImh0dHBzOi8vd2EubWUvNTU5NTk5MTIxMTYzNz90ZXh0PU9sJUMzJUExJTJDJTIwdmltJTIwZG8lMjBzaXRlJTIwZSUyMHF1ZXJvJTIwbWFpcyUyMGluZm9ybWElQzMlQTclQzMlQjVlcy5cIlxyXG4gIH0sXHJcbiAgXCJtZXRhXCI6IHtcclxuICAgIFwidGl0bGVcIjogXCJDYWZcdTAwRTkgY29tIEJvYmFnZW5zIC0gQm9hIFZpc3RhIC8gUlJcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIG1lbGhvciBkb2NlcmlhIGRlIEJvYSBWaXN0YSwgbG9jYWxpemFkYSBuYSBBdmVuaWRhIE1ham9yIFdpbGxpYW5zLCBuIDg1NyAtIENlbnRyby4gVmVuaGEgdG9tYXIgdW0gY2FmXHUwMEU5emluaG8gZSBjb25oZWNlciBub3NzYXMgZGVsXHUwMEVEY2lhc1wiXHJcbiAgfSxcclxuICBcImRpc3BsYXlcIjoge1xyXG4gICAgXCJ0aXRsZVwiOiBcIkNhZlx1MDBFOSBjb20gQm9iYWdlbnNcIixcclxuICAgIFwic3VidGl0bGVcIjogXCJBIG1lbGhvciBkb2NlcmlhIGRlIEJvYSBWaXN0YSwgbG9jYWxpemFkYSBuYSBBdmVuaWRhIE1ham9yIFdpbGxpYW5zLCBuIDg1NyAtIENlbnRyby4gVmVuaGEgdG9tYXIgdW0gY2FmXHUwMEU5emluaG8gZSBjb25oZWNlciBub3NzYXMgZGVsXHUwMEVEY2lhc1wiLFxyXG4gICAgXCJmb290ZXJfdGV4dFwiOiBcIkNhZlx1MDBFOSBjb20gQm9iYWdlbnMgXHUyMDEzIENOUEo6IDM3LjEzOC44NjUvMDAwMS0yOVwiLFxyXG4gICAgXCJjb3B5cmlnaHRcIjogXCJUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zIFx1MDBBRSAyMDI0XCJcclxuICB9LFxyXG4gIFwiaW5mb1wiOiB7XHJcbiAgICBcInBob25lXCI6IFwiNTU5NTk5MTIxMTYzN1wiLFxyXG4gICAgXCJwaG9uZV9yZWFkXCI6IFwiKDk1KSA5IDkxMjEtMTYzN1wiLFxyXG4gICAgXCJtYXBcIjogXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzOTg0Ljk2MjM5NTQzMzY0MSEyZC02MC42NzA2ODk0ODk1NDk0OCEzZDIuODI3MDk5NTk3MTM3ODExNyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4OGQ5MzA3N2E2ZTczMDM4MyUzQTB4MjY4NzIxZGY4ZmI0ZWVkYSEyc0NhZiVDMyVBOSUyMGNvbSUyMEJvYmFnZW5zITVlMCEzbTIhMXNwdC1CUiEyc2JyITR2MTcwNzE1MzIyODQ5NiE1bTIhMXNwdC1CUiEyc2JyXCJcclxuICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxnQkFBZ0I7OztBQ0R2QjtBQUFBLEVBQ0UsT0FBUztBQUFBLElBQ1AsS0FBTztBQUFBLElBQ1AsTUFBUTtBQUFBLElBQ1IsV0FBYTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osVUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLE1BQVE7QUFBQSxJQUNOLE9BQVM7QUFBQSxJQUNULGFBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsU0FBVztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsVUFBWTtBQUFBLElBQ1osYUFBZTtBQUFBLElBQ2YsV0FBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQVE7QUFBQSxJQUNOLE9BQVM7QUFBQSxJQUNULFlBQWM7QUFBQSxJQUNkLEtBQU87QUFBQSxFQUNUO0FBQ0Y7OztBRG5CQSxJQUFPLHNCQUFRO0FBQUEsRUFDWCxTQUFTO0FBQUEsSUFDTCxXQUFXO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxrQkFBaUI7QUFBQSxJQUNyQixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILGVBQWU7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNILE1BQUs7QUFBQTtBQUFBLE1BRVQ7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
