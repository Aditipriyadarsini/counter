var count = 0 ;
document.getElementById("counter").onclick = function() {
    count += 1 ;
    document.getElementById("count").innerHTML = "The number of count is:  " +count ;
}