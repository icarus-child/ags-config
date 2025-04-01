import { App, Astal, Gdk, Gtk } from "astal/gtk4"
import { Variable, bind } from "astal"
import Tray from "gi://AstalTray"

function SysTray() {
    const tray = Tray.get_default()

    return <box cssName="SysTray">
        {bind(tray, "items").as(items => items.map(item => (
            <menubutton
                direction={Gtk.ArrowType.UP}
                tooltipMarkup={bind(item, "tooltipMarkup")}
                //usePopover={false}
                actionGroup={bind(item, "actionGroup").as(ag => ["dbusmenu", ag])}
                menuModel={bind(item, "menuModel")}>
            </menubutton>
        )))}
    </box>
}

export default function Tray(gdkmonitor: Gdk.Monitor) {
  const { BOTTOM, RIGHT } = Astal.WindowAnchor

  return <window
    visible
    cssClasses={["Bar"]}
    gdkmonitor={gdkmonitor}
    //exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={BOTTOM | RIGHT}
    application={App}>
      <SysTray />
  </window>
}
