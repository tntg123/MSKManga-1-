window.addEventListener("load",function(){(function(b){var a={items:{},container:null,totalPages:1,perPage:3,currentPage:0,createNavigation:function(){this.totalPages=Math.ceil(this.items.length/this.perPage);b(".pagination",this.container.parent()).remove();var g=b('<div class="pagination cdp"></div>').append('<a class="nav prev disabled" data-next="false">«</a>');for(var f=0;f<this.totalPages;f++){var e="page";if(!f){e="page current"}var d='<a class="cdp_i '+e+'" data-page="'+(f+1)+'">'+(f+1)+"</a>";g.append(d)}g.append('<a class="nav next" data-next="true">»</a>');this.container.after(g);var c=this;b("body").off("click",".nav");this.navigator=b("body").on("click",".nav",function(){var h=b(this);c.navigate(h.data("next"))});b("body").off("click",".page");this.pageNavigator=b("body").on("click",".page",function(){var h=b(this);c.goToPage(h.data("page"))})},navigate:function(c){if(isNaN(c)||c===undefined){c=true}b(".pagination .nav").removeClass("disabled");if(c){this.currentPage++;if(this.currentPage>(this.totalPages-1)){this.currentPage=(this.totalPages-1)}if(this.currentPage==(this.totalPages-1)){b(".pagination .nav.next").addClass("disabled")}}else{this.currentPage--;if(this.currentPage<0){this.currentPage=0}if(this.currentPage==0){b(".pagination .nav.prev").addClass("disabled")}}this.showItems()},updateNavigation:function(){var c=b(".pagination .page");c.removeClass("current");b('.pagination .page[data-page="'+(this.currentPage+1)+'"]').addClass("current")},goToPage:function(c){this.currentPage=c-1;b(".pagination .nav").removeClass("disabled");if(this.currentPage==(this.totalPages-1)){b(".pagination .nav.next").addClass("disabled")}if(this.currentPage==0){b(".pagination .nav.prev").addClass("disabled")}this.showItems()},showItems:function(){this.items.hide();var c=this.perPage*this.currentPage;this.items.slice(c,c+this.perPage).show();this.updateNavigation()},init:function(e,d,c){this.container=e;this.currentPage=0;this.totalPages=1;this.perPage=c;this.items=d;this.createNavigation();this.showItems()}};b.fn.pagify=function(c,f){var e=b(this);var d=b(f,e);if(isNaN(c)||c===undefined){c=3}if(d.length<=c){return true}a.init(e,d,c)}})(jQuery);$("#Update").pagify(18,"div.bookItem")});
