// document.addEventListener('DOMContentLoaded', async () => {
//     console.log("Renderer > DOMContentLoaded");

//     let Names = window.Test.doThing()

//     let DivNames = document.getElementById("test");
//     let String = Names.map((elem) => {
//         return elem.Name;
//     }).join("<br/>");
//     DivNames.innerText = String;
// });

function ColourSwitch() {
    document.body.classList.toggle("DarkScheme");
}

function SubmitClicked(){
    
    const Name = document.getElementById("fname").value;

    if (Name != ''){
        console.log(Name);
    }else{
        console.log("Error, please enter name");
    }
    
}



