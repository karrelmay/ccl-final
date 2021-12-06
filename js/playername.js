document.getElementById('button-name-submit').onclick = function(){
  let playerName = document.getElementById('name-input').value;
  console.log("hello", playerName);
  exports = playerName;
}
