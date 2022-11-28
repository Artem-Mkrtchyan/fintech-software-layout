export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.build.html}` //базовая папка из которой запускаются файлы
    },
    notify: false,
    port: 3000,
  });
}
