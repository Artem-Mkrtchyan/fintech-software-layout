import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; //Обработка ошибок
import notify from "gulp-notify"; // Сообщения
import browsersync from "browser-sync";
import newer from "gulp-newer"; // Проверка обновлений
import ifPlugin from "gulp-if";
import sourcemaps from "gulp-sourcemaps";



//Экспорт объекта
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
  sourcemaps: sourcemaps

}
