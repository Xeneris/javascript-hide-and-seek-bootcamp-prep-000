function getFirstSelector(selector){
  var elt = document.querySelector(selector);
  return elt;
}
function nestedTarget(){
  var elt = document.getElementById('nested').querySelector('.target');
  return elt;
}
function increaseRankBy(n){
var li = document.querySelectorAll('ul.ranked-list li');
for (var i=0; i < li.length; i++){
  var temp = li[i].innerHTML;
  var rank = parseInt(temp, 10);
  li[i].innerHTML = rank + n;
}
}
function deepestChild(){
  var li = document.getElementById('grand-node').querySelectorAll('div');
  console.log(li);
  return li[li.length-1];
}
