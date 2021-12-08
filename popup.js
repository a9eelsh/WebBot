
document.addEventListener('DOMContentLoaded', function () {
test();
document.getElementById("myBtn").addEventListener("click", function() {
  Submit();
});


});
if(localStorage.getItem("task") == null ){
  var taskData = [];
}else{
var taskData = JSON.parse(localStorage.getItem("task"));
}

var i = null;
// Check browser support
function test(){
  chrome.storage.sync.get('task', function(items) {
t= JSON.parse(items.task);
console.log(t.length);
 });
if(localStorage.getItem("task") != null){
  var taskData = JSON.parse(localStorage.getItem("task"));
  for ( i = 0; i < taskData.length; ++i) {

      var rowCount = table.rows.length;
   var row = table.insertRow(rowCount);
      row.insertCell(0).innerHTML= i+1;
    row.insertCell(1).innerHTML= taskData[i].msg;
    row.insertCell(2).innerHTML= taskData[i].replay;
  i=i;
}
}
}

function Submit(){
    if(taskData.length > 0){
        var msg = document.getElementById('msg').value;
        var replay = document.getElementById('replay').value;
        const obj = { "msg": msg , "replay": replay}
        var stored = JSON.parse(localStorage.getItem("task"));
        stored.push(obj);
    }
    var msg = document.getElementById('msg').value;
    var replay = document.getElementById('replay').value;
    const obj = { "msg": msg , "replay": replay}
    taskData.push(obj);

    localStorage.setItem("task", JSON.stringify(taskData));
    chrome.storage.sync.set({
        "task": JSON.stringify(taskData)
    }, function() {
       console.log('Settings saved');
    });
  //  document.getElementById("result").innerHTML = localStorage.getItem("task");

        if(i==null){
            i= 0;
        }

    for ( i = i; i < taskData.length; ++i) {

        var rowCount = table.rows.length;
     var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= i+1;
    row.insertCell(1).innerHTML= taskData[i].msg;
    row.insertCell(2).innerHTML= taskData[i].replay;
    i=i;

    }

}
