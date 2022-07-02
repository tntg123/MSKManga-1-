var bookmark = (function(){
list = [];

//Event Saving to Local Storage
function setBookmark(){
	localStorage.setItem('bookmark', JSON.stringify(list));
}

function loadBookmark() {
    list = JSON.parse(localStorage.getItem('bookmark'));
}

if (localStorage.getItem("bookmark") != null) {
    loadBookmark();
}

obj = {};
//Clear Bookmark
obj.clearALL = function() {
    list = [];
    setBookmark();
  }
  //Remove Bookmark    
obj.removeThisItem = function(id) {
    for(var item in list) {
      if(list[item].id === id) {
        list.splice(item, 1);
        break;
      }
    }
    setBookmark();
  }
  return obj;
})();

function displayIt(){
var getData = JSON.parse(localStorage.getItem('bookmark'));
  var structure = '';
  for(var i in getData){
   structure += '<article class="box" itemscope="itemscope" itemtype="http://schema.org/CreativeWork">'
			 +	'<div id="'+getData[i].id+'" class="bsx">'
			 +	'<a href="'+getData[i].link+'" itemprop="url" title="'+getData[i].name+'">'
			 +	'<div class="limit"><div class="typez '+getData[i].type+'">'+getData[i].type+'</div>'
			 +	'<div class="ply"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg></div>'
			 +	'<div class="bt"><span class="epx">'+getData[i].status+'</span></div>'
			 +	'<img src="'+getData[i].img+'" loading="lazy" itemprop="image" title="'+getData[i].name+'" alt="'+getData[i].name+'"></div>'
			 +	'<a href="'+getData[i].link+'" class="clamp toe oh block fs-14 lh-20 yt8m ck">'+getData[i].name+'<h2 itemprop="headline">'+getData[i].name+'</h2></a></a></div>'
			 +	'<div class="btnRemove flex jcc" data-id="'+getData[i].id+'"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 12 12"><path fill="currentColor" d="M5 3h2a1 1 0 0 0-2 0ZM4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1H4Zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0V6ZM5 5.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V6a.5.5 0 0 0-.5-.5Z"></path></svg> Bỏ theo dõi</div></article>';
  }
  $('.showBookmark').html(structure);
}
$('.clearAll').click(function(){
  bookmark.clearALL();
  displayIt();
});
$('.showBookmark').on("click", ".btnRemove", function(event) {
  bookmark.removeThisItem($(this).data('id'));
  displayIt();
})
displayIt();
