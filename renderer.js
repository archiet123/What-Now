document.addEventListener('DOMContentLoaded', async () => {
    console.log("Renderer > DOMContentLoaded");

    let Names = window.Test.doThing()

    let DivNames = document.getElementById("test");
    let String = Names.map((elem) => {
        return elem.Name;
    }).join("<br/>");
    DivNames.innerText = String;
});

function ColourSwitch() {
    document.body.classList.toggle("DarkScheme");
}



