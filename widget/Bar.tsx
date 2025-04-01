import { App, Astal, Gdk } from "astal/gtk4"
import { Variable } from "astal"

const time = Variable("").poll(5000, 'date +"%R %d"')

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, LEFT } = Astal.WindowAnchor

  return <window
    visible
    cssClasses={["Bar"]}
    gdkmonitor={gdkmonitor}
    //exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={BOTTOM | LEFT}
    application={App}>
    <box cssName="centerbox">
      <label label={time()} />
    </box>
  </window>
}
