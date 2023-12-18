const DataTest = require("./GetDataTest.js");
const { contextBridge, ipcRenderer } = require('electron');
// // 

contextBridge.exposeInMainWorld(
    'Test',
    {
        doThing: () => GetNames()
        // GetNames: () => {
        //     // return DataTest.GetNames()
        //     ipcRenderer.send(DataTest.GetNames())
        //     // doThing: () => ipcRenderer.send('do-a-thing')
        // }
    }
)

const GetNames = () => {
    return DataTest.GetNames()
    //ipcRenderer.send('do-a-thing')
}

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