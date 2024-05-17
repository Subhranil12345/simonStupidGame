var name=" ";
$("input").on("input",function(){
    name=$(this).val();
});
$(".saveButton").on("click",function(){
    var temp="Hii!! "+name+ ", press the play button to start!";
    if (name==="Aishi" || name==="aishi"){
        name=name+" baby :*";
        temp="Hii!! "+name+ ", press the play button to start!";  
    }
    $("h1").text(temp).slideUp().slideDown();
});

