document.addEventListener('DOMContentLoaded', async () => {
    console.log("Renderer > DOMContentLoaded");

    let Names = window.api.GetNames();

    let DivNames = document.getElementById("test");
    let String = Names.map((elem) => {
        return elem.Name;
    }).join("<br/>");
    DivNames.innerHTML = String;
});

