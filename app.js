
var pagepointer = 0;

var Page = {
    date: "",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    a5: "",
    a6: "",
    a7: "",

    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",
};

var pages = Array(10);


for(var i = 0;i<pages.length;i++){
    pages[i] = Object.create(Page);
}



function update() {

    document.getElementById("pageno").innerHTML = "Week " + (pagepointer+1).toString();

    document.getElementById("date").value = pages[pagepointer].date;
    document.getElementById("a1").value = pages[pagepointer].a1;
    document.getElementById("a2").value = pages[pagepointer].a2;
    document.getElementById("a3").value = pages[pagepointer].a3;
    document.getElementById("a4").value = pages[pagepointer].a4;
    document.getElementById("a5").value = pages[pagepointer].a5;
    document.getElementById("a6").value = pages[pagepointer].a6;
    document.getElementById("a7").value = pages[pagepointer].a7;

    document.getElementById("b1").value = pages[pagepointer].b1;
    document.getElementById("b2").value = pages[pagepointer].b2;
    document.getElementById("b3").value = pages[pagepointer].b3;
    document.getElementById("b4").value = pages[pagepointer].b4;
    document.getElementById("b5").value = pages[pagepointer].b5;
    document.getElementById("b6").value = pages[pagepointer].b6;
    document.getElementById("b7").value = pages[pagepointer].b7;
};


function savestate() {

    pages[pagepointer].date = document.getElementById("date").value;
    pages[pagepointer].a1 = document.getElementById("a1").value;
    pages[pagepointer].a2 = document.getElementById("a2").value;
    pages[pagepointer].a3 = document.getElementById("a3").value;
    pages[pagepointer].a4 = document.getElementById("a4").value;
    pages[pagepointer].a5 = document.getElementById("a5").value;
    pages[pagepointer].a6 = document.getElementById("a6").value;
    pages[pagepointer].a7 = document.getElementById("a7").value;
    
    pages[pagepointer].b1 = document.getElementById("b1").value;
    pages[pagepointer].b2 = document.getElementById("b2").value;
    pages[pagepointer].b3 = document.getElementById("b3").value;
    pages[pagepointer].b4 = document.getElementById("b4").value;
    pages[pagepointer].b5 = document.getElementById("b5").value;
    pages[pagepointer].b6 = document.getElementById("b6").value;
    pages[pagepointer].b7 = document.getElementById("b7").value;
}


function previous() {
    if(pagepointer>0){
        savestate();
        pagepointer--;
        update();

    }
}

function next() {
    if(pagepointer<9){
        savestate();
        pagepointer++;
        update();
    }
}

function savefile() {
    
    savestate();
    var data = "";

    for(var i =0; i<pages.length; i++){
        data+= pages[i].date + "\n";
        data+= pages[i].a1 + "\n";
        data+= pages[i].a2 + "\n";
        data+= pages[i].a3 + "\n";
        data+= pages[i].a4 + "\n";
        data+= pages[i].a5 + "\n";
        data+= pages[i].a6 + "\n";
        data+= pages[i].a7 + "\n";

        data+= pages[i].b1 + "\n";
        data+= pages[i].b2 + "\n";
        data+= pages[i].b3 + "\n";
        data+= pages[i].b4 + "\n";
        data+= pages[i].b5 + "\n";
        data+= pages[i].b6 + "\n";
        data+= pages[i].b7 + "\n";
    }

    localStorage.setItem("data",data);

    alert("Save successful.");
}

function loadfile() {

    var data = localStorage.getItem("data");

    if(data){
        var lines = data.split("\n");
        var index = 0;

        for(var i = 0; i<pages.length;i++){
            pages[i].date = lines[index++];
            pages[i].a1= lines[index++];
            pages[i].a2 = lines[index++];
            pages[i].a3 = lines[index++];
            pages[i].a4 = lines[index++];
            pages[i].a5 = lines[index++];
            pages[i].a6 = lines[index++];
            pages[i].a7 = lines[index++];

            pages[i].b1= lines[index++];
            pages[i].b2 = lines[index++];
            pages[i].b3 = lines[index++];
            pages[i].b4 = lines[index++];
            pages[i].b5 = lines[index++];
            pages[i].b6 = lines[index++];
            pages[i].b7 = lines[index++];
        }
    }

}

function clear() {
    for(var i =0; i<pages.length; i++){
        pages[i].date = "";

        pages[i].a1 = "";
        pages[i].a2 = "";
        pages[i].a3 = "";
        pages[i].a4 = "";
        pages[i].a5 = "";
        pages[i].a6 = "";
        pages[i].a7 = "";
        
        pages[i].b1 = "";
        pages[i].b2 = "";
        pages[i].b3 = "";
        pages[i].b4 = "";
        pages[i].b5 = "";
        pages[i].b6 = "";
        pages[i].b7 = "";
    }

    update();

    alert("Clear successful");
}

loadfile();


document.getElementById("prev").addEventListener("click",previous);
document.getElementById("next").addEventListener("click",next);
document.getElementById("savebtn").addEventListener("click",savefile);
document.getElementById("clearbtn").addEventListener("click",clear);

update();