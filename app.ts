import { App } from "astal/gtk4";
import style from "./style.scss";
import Bar from "./widget/Bar";

App.start({
  css: style,
  main() {
    for (let i of App.get_monitors()) {
      //if (i.is_valid()) {
      //  if (i.get_connector() == "DP-1") {
      //    Bar(i);
      //  } else {
      //  }
      //}
      Bar(i);
    }
  },
});
