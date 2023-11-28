const DataTest = require("./DataBaseFiles/GetDataTest.js");
const { contextBridge } = require('electron');

// 
if (DataTest) {
    console.log("true");
} else {
    console.log("false");
}

const GetNames = () => {
    return DataTest.GetNames();
}

contextBridge.exposeInMainWorld("api", {
    GetNames: GetNames
})

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
    // we can also expose variables, not just functions
})