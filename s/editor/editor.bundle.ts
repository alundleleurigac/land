
import {dom} from "@e280/sly"
import {EditorApp} from "./ui/app/component.js"
import {EditorContext} from "./context/context.js"

const context = await EditorContext.setup()

dom.register({EditorApp: EditorApp(context)})

