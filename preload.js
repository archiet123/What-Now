const DataTest = require("./DataBaseFiles/GetDataTest");
// const { contextBridge } = require('electron');

const GetNames = () => {
    return DataTest.GetNames();
}

contextBridge.exposeInMainWorld("api", { GetNames: GetNames })