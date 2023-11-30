const DataTest = require("./DataBaseFiles/GetDataTest");
const { contextBridge, ipcRenderer } = require('electron');
// // 

contextBridge.exposeInMainWorld(
    'electron',
    {
        // doThing: () => ipcRenderer.DataTest.GetNames()
        GetNames: () => {
            return DataTest.GetNames()
            // ipcRenderer.send(DataTest.GetNames())
        }
    }
)

// const GetNames = () => {
//     return DataTest.GetNames()
//     //ipcRenderer.send('do-a-thing')
// }

// if (DataTest) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// contextBridge.exposeInMainWorld("api", {
//     GetNames: GetNames
// })

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
    // we can also expose variables, not just functions
})