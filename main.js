function hipuch() {
    var x=document.getElementById("text").value;
    var y="";
    for (let i = 0; i < x.length; i++) {
        y+=x.charAt(x.length-i)
    }
document.getElementById("text").value=y;
}
