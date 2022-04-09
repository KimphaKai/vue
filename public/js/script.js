/// firebase ///
var firebaseConfig = {
  databaseURL: "https://vue-chartroom-default-rtdb.firebaseio.com/",
};
firebase.initializeApp(firebaseConfig);

/// 要寫入的資料物件 ///
var postData = {};

function newMessage(postData) {
  /// 每次寫入資料庫都產生一組 key ///
  var newPostKey = firebase.database().ref().child('posts').push().key;
  var updates = {};
  updates[newPostKey] = postData;

  /// 寫入資料 ///
  firebase.database().ref().update(updates);
}

// function write(){
//   var date = new Date();
//   var h = date.getHours();
//   var m = date.getMinutes();
//   var s = date.getSeconds();
//   if(h<10){
//     h = '0'+h;
//   }
//   if(m<10){
//     m = '0' + m;
//   }
//   if(s<10){
//     s = '0' + s;
//   }
//   var now = h+':'+m+':'+s; //獲取按下按鈕或 enter 的當下時間
//   //記得一開始要先宣告 ms = new Date().getTime()
//   var postData = {
//     name:$('#name').val(),
//     content:$('#content').val(),
//     time:now,
//     id:'id'+ms
//   };
//   database.push(postData);
//   $content.val('');
// }

$("#btn").on("click", function () {

  postData = {
    content: $("#content").val(),
    name: $("#name").val(),
  }

  /// 清空輸入 ///
  $('#content').val('');
  newMessage(postData);

})


firebase.database().ref().on('value', function (firebasedata) {

  /// 將畫面填入 ///
  console.log(firebasedata.val());
});

