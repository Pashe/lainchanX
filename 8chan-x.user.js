// ==UserScript==
// @name        Pashe's 8chanX
// @version     1.35.2
// @namespace   https://github.com/Pashe/
// @description Small userscript to improve 8chan
// @match       *://8chan.co/*
// @run-at      document-end
// @grant       none
// @require     http://timeago.yarp.com/jquery.timeago.js
// @updateURL   https://github.com/Pashe/8chan-X/raw/master/8chan-x.meta.js
// @downloadURL https://github.com/Pashe/8chan-X/raw/master/8chan-x.user.js
// @icon        data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjc2NTUxNDksLTEuNzY2NTg5OSwxLjc2NTUxNDksMS43NjY1ODk5LDcxLjI3MzI4NywyNC42MDgxOTgpIj48cGF0aCBkPSJtIC0xMy4yMTU4MiwtMTcuODQzNDg4IGMgLTAuODQzNzU1LDZlLTYgLTEuNTA3MzI5LDAuMjI1NTkyIC0xLjk5MDcyMywwLjY3Njc1OCAtMC40ODM0MDIsMC40NTExNzcgLTAuNzI1MTAxLDEuMDcyMjcgLTAuNzI1MDk4LDEuODYzMjgxIC0zZS02LDAuNzkxMDE5IDAuMjQxNjk2LDEuNDEyMTEyIDAuNzI1MDk4LDEuODYzMjgxIDAuNDgzMzk0LDAuNDUxMTc0IDEuMTQ2OTY4LDAuNjc2NzU5IDEuOTkwNzIzLDAuNjc2NzU4IDAuODQzNzQzLDFlLTYgMS41MDg3ODIsLTAuMjI3MDQ5IDEuOTk1MTE3LC0wLjY4MTE1MiAwLjQ4NjMyLC0wLjQ1NDA5OSAwLjcyOTQ4NCwtMS4wNzM3MjggMC43Mjk0OTIsLTEuODU4ODg3IC04ZS02LC0wLjc5MTAxMSAtMC4yNDE3MDcsLTEuNDEyMTA0IC0wLjcyNTA5OCwtMS44NjMyODEgLTAuNDgzNDA1LC0wLjQ1MTE2NiAtMS4xNDk5MDksLTAuNjc2NzUyIC0xLjk5OTUxMSwtMC42NzY3NTggeiBtIC0xLjc3NTM5MSwtMC43NTU4NTkgYyAtMC43NjE3MjIsLTAuMTg3NDkzIC0xLjM1NDk4MywtMC41NDE5ODUgLTEuNzc5Nzg1LC0xLjA2MzQ3NyAtMC40MjQ4MDcsLTAuNTIxNDc2IC0wLjYzNzIwOSwtMS4xNTcyMTcgLTAuNjM3MjA3LC0xLjkwNzIyNiAtMmUtNiwtMS4wNDg4MTggMC4zNzM1MzMsLTEuODc3OTE4IDEuMTIwNjA1LC0yLjQ4NzMwNSAwLjc0NzA2NywtMC42MDkzNjIgMS43NzA5OTIsLTAuOTE0MDQ5IDMuMDcxNzc4LC0wLjkxNDA2MyAxLjMwNjYzMywxLjRlLTUgMi4zMzIwMjMsMC4zMDQ3MDEgMy4wNzYxNzIsMC45MTQwNjMgMC43NDQxMzA2LDAuNjA5Mzg3IDEuMTE2MjAwNiwxLjQzODQ4NyAxLjExNjIxMDUsMi40ODczMDUgLTkuOWUtNiwwLjc1MDAwOSAtMC4yMTI0MTIsMS4zODU3NSAtMC42MzcyMDcsMS45MDcyMjYgLTAuNDI0ODEzNSwwLjUyMTQ5MiAtMS4wMTUxNDU1LDAuODc1OTg0IC0xLjc3MDk5NjUsMS4wNjM0NzcgMC44NTU0NjEsMC4xOTkyMjUgMS41MjE5NjQsMC41ODg4NzMgMS45OTk1MTIxLDEuMTY4OTQ1IDAuNDc3NTI5MSwwLjU4MDA4MyAwLjcxNjI5ODQsMS4yODkwNjcgMC43MTYzMDg2LDIuMTI2OTUzIC0xLjAyZS01LDEuMjcxNDg3IC0wLjM4ODE5MzQsMi4yNDcwNzIgLTEuMTY0NTUwOCwyLjkyNjc1OCAtMC43NzYzNzU5LDAuNjc5Njg3IC0xLjg4ODE5MDksMS4wMTk1MzEgLTMuMzM1NDQ4OSwxLjAxOTUzMSAtMS40NDcyNywwIC0yLjU1OTA4NiwtMC4zMzk4NDQgLTMuMzM1NDUsLTEuMDE5NTMxIC0wLjc3NjM2OCwtMC42Nzk2ODYgLTEuMTY0NTUyLC0xLjY1NTI3MSAtMS4xNjQ1NSwtMi45MjY3NTggLTJlLTYsLTAuODM3ODg2IDAuMjQwMjMzLC0xLjU0Njg3IDAuNzIwNzAzLC0yLjEyNjk1MyAwLjQ4MDQ2NiwtMC41ODAwNzIgMS4xNDg0MzQsLTAuOTY5NzIgMi4wMDM5MDYsLTEuMTY4OTQ1IHogbSAtMC42NTAzOTEsLTIuODAzNzExIGMgLTNlLTYsMC42Nzk2OTYgMC4yMTIzOTksMS4yMDk5NjkgMC42MzcyMDcsMS41OTA4MiAwLjQyNDgwMSwwLjM4MDg2NyAxLjAyMDk5MiwwLjU3MTI5NyAxLjc4ODU3NSwwLjU3MTI4OSAwLjc2MTcxMiw4ZS02IDEuMzU3OTAzLC0wLjE5MDQyMiAxLjc4ODU3NCwtMC41NzEyODkgMC40MzA2NTYsLTAuMzgwODUxIDAuNjQ1OTg4LC0wLjkxMTEyNCAwLjY0NTk5NiwtMS41OTA4MiAtOGUtNiwtMC42Nzk2NzcgLTAuMjE1MzQsLTEuMjA5OTUgLTAuNjQ1OTk2LC0xLjU5MDgyMSAtMC40MzA2NzEsLTAuMzgwODQ3IC0xLjAyNjg2MiwtMC41NzEyNzcgLTEuNzg4NTc0LC0wLjU3MTI4OSAtMC43Njc1ODMsMS4yZS01IC0xLjM2Mzc3NCwwLjE5MDQ0MiAtMS43ODg1NzUsMC41NzEyODkgLTAuNDI0ODA4LDAuMzgwODcxIC0wLjYzNzIxLDAuOTExMTQ0IC0wLjYzNzIwNywxLjU5MDgyMSB6IiBzdHlsZT0iZmlsbDojMjA1MDhjIiAvPjwvZz48L3N2Zz4=
// ==/UserScript==

/*********
GLOBALS
*********/
var originalPageTitle = document.title;
var unreadPosts = [];
var thisBoard = window.location.pathname.split("/")[1];
try {var thisThread = window.location.pathname.match(/([0-9]+)\.html$/)[1];} catch (e) {var thisThread = -1};
var bumpLimit = 250;
var threads = null;
var rse = null;

/**************
GENERAL / MISC
**************/
function strEndsWith(str, s) {
  return str.length >= s.length && str.substr(str.length - s.length) == s;
}
  
function isOnCatalog() {
  return active_page === "catalog";
}

function isOnBoardIndex() {
  return active_page === "index";
}

function isOnThread() {
  return active_page === "thread";
}

function wrapQRSelectionWith(str) {
  if ($(document.activeElement)[0].id != "body")
    return;
  var txtarea = document.getElementById("body");
  var start = txtarea.selectionStart;
  var finish = txtarea.selectionEnd;
  var sel = txtarea.value.substring(start, finish);
  sel = str + sel + str;
  var fulltext = txtarea.value.substring(0, start) + sel + txtarea.value.substring(finish);
  txtarea.value = fulltext;
}

function getThreadPage(threadId, boardId, cached) {
	if ((!cached) || (threads == null)) {
		var threadsRq = $.getJSON("https://8chan.co/" + boardId + "/threads.json");
		threads = threadsRq.responseJSON;
	}
	var threadPage = -1;

	for (var tIdx=0; tIdx<threads.length; tIdx++) {
		posts = threads[tIdx]['threads'];
		for (pIdx=0; pIdx<posts.length; pIdx++){
			tno = posts[pIdx]['no'];
			if (tno == threadId) {threadPage = threads[tIdx]['page']+1};
		}
	}
	return threadPage;
}

/**************
SETTINGS
**************/
if (typeof _ == 'undefined') {
  var _ = function (a) {
    return a;
  };
}
var tempSettings = {
};
var defaultSettings = {
  'relativetime': true,
  'revealspoilers': false,
  'revealimagespoilers': false,
  'imagehover': true,
  'catalogimagehover': true,
  'cataloglinks': false,
  'threadnewtab': false
  //'inlineposts': false
};
var settingsMenu = document.createElement('div');
var prefix = '',suffix = '',style = '';
if (window.Options) {
  var tab = Options.add_tab('8chan X', 'times', _('8chan X'));
  $(settingsMenu) .appendTo(tab.content);
} 
settingsMenu.innerHTML = prefix
+ '<div style="' + style + '">'
+ '<label><input type="checkbox" name="relativetime">' + _('Use relative post times') + '</label><br>'
+ '<label><input type="checkbox" name="revealspoilers">' + _('Reveal text spoilers') + '</label><br>'
+ '<label><input type="checkbox" name="revealimagespoilers">' + _('Reveal image spoilers') + '</label><br>'
+ '<label><input type="checkbox" name="imagehover">' + _('Show full images on hover') + '</label><br>'
+ '<label><input type="checkbox" name="catalogimagehover">' + _('Show full images on hover on catalog') + '</label><br>'
+ '<label><input type="checkbox" name="cataloglinks">' + _('Link to the catalog in the menu') + '</label><br>'
+ '<label><input type="checkbox" name="threadnewtab">' + _('Open threads in a new tab') + '</label><br>'
//+ '<label><input type="checkbox" name="inlineposts">' + _('Inline quoted posts on click') + '</label><br>'
+ suffix;
function setting(name) {
  if (localStorage) {
    if (localStorage[name] === undefined) return defaultSettings[name];
    return JSON.parse(localStorage[name]);
  } else {
    if (tempSettings[name] === undefined) return defaultSettings[name];
    return tempSettings[name];
  }
}
function changeSetting(name, value) {
  if (localStorage) {
    localStorage[name] = JSON.stringify(value);
  } else {
    tempSettings[name] = value;
  }
}
function refreshSettings() {
  var settingsItems = settingsMenu.getElementsByTagName('input');
  for (var i = 0; i < settingsItems.length; i++) {
    var control = settingsItems[i];
    if (control.type == 'checkbox')
      control.checked = setting(control.name);
  }
}
function setupControl(control) {
  if (control.addEventListener) control.addEventListener('change', function (e) {
    if (control.type == 'checkbox')
      changeSetting(control.name, control.checked);
  }, false);
}
refreshSettings();
var settingsItems = settingsMenu.getElementsByTagName('input');
for (var i = 0; i < settingsItems.length; i++) {
  setupControl(settingsItems[i]);
}
if (settingsMenu.addEventListener && !window.Options) {
  settingsMenu.addEventListener('mouseover', function (e) {
    refreshSettings();
    settingsMenu.getElementsByTagName('a') [0].style.fontWeight = 'bold';
    settingsMenu.getElementsByTagName('div') [0].style.display = 'block';
  }, false);
  settingsMenu.addEventListener('mouseout', function (e) {
    settingsMenu.getElementsByTagName('a') [0].style.fontWeight = 'normal';
    settingsMenu.getElementsByTagName('div') [0].style.display = 'none';
  }, false);
}

/*************************************************************************
RELATIVE TIME
*************************************************************************/
$(document).ready(function() {
  if (setting('relativetime'))
    $("time").timeago();
});

// Show the relative time for new posts
$(document).on('new_post', function (e, post) {
  if (setting('relativetime'))
    $("time").timeago();
});


/**************************************
MENU BAR
**************************************/
function getMenuStats() {
	var nPosts = document.getElementsByClassName("post reply").length;
	var nImages = document.getElementsByClassName("post-image").length;
  var hlStyle = "<span style='color:#f00;font-weight:bold;'>";
    
  if (nPosts >= bumpLimit) {nPosts = hlStyle + nPosts + "</span>";}

	var threadPage = getThreadPage(thisThread, thisBoard, false);
	if (threadPage < 0) {threadPage = "<span style='opacity: 0.5'>???</span>"}
    
  return "[<abbr title='Posts' style='border:none'>" + nPosts + "</abbr> / <abbr title='Images' style='border:none'>" + nImages + "</abbr> / <abbr title='Page' style='border:none'>" + threadPage + "</abbr>]"; //I feel like there's a cleaner way to to the hover text

}

function updateMenuStyle() {
	if (rse == null) {rse = document.createElement("div"); rse.className = "post reply";}
	var menu = document.getElementsByClassName("boardlist")[0];
	var rseBgColor = window.getComputedStyle(rse).backgroundColor;
	var rseBorderColor = window.getComputedStyle(rse).borderBottomColor;
	menu.style.backgroundColor = rseBgColor;
	menu.style.borderBottom = "1pt solid " + rseBorderColor;
}

function updateMenuStats() {
  var stats = document.getElementById("menuStats");
  var nPosts = document.getElementsByClassName("post reply").length;
  var nImages = document.getElementsByClassName("post-image").length;
  stats.innerHTML = getMenuStats();
}

function initMenu() {
  // Customize the menu
  var menu = document.getElementsByClassName("boardlist")[0];
  menu.style.textAlign = 'center';
  menu.style.position = 'fixed';
  menu.style.top = '0px';
  menu.style.left = '-3px';
  menu.style.width = "100%";
  menu.style.marginTop = "0px";
  menu.style.padding = "1pt";
  menu.style.zIndex='50';
  $("html").css("margin-top","15px");
  updateMenuStyle();
  document.querySelector('[data-description="1"]').style.display = 'none';
  document.querySelector('[data-description="2"]').style.display = 'none';
	
  if (isOnCatalog())
    add_favorites();
  
  if (setting('cataloglinks'))
  {
    $('.favorite-boards a').each( function (index, data) {
      $(this).attr("href", $(this).attr("href")+"/catalog.html");
    });
  }
  
  if (isOnThread())
  {
    $('#update_secs').remove();
    $('#update_thread').html("[Update thread]");
    var updateNode=document.createElement("SPAN");
    var updateTextNode=document.createTextNode('0');
    updateNode.appendChild(updateTextNode);
    updateNode.id = 'update_secs';
		updateNode.style.fontFamily = "'Source Code Pro', monospace";
		updateNode.style.paddingLeft = "1.5pt";
    menu.appendChild(updateNode);
    $('#update_secs').attr("title","Update thread");
    $('#update_secs').click(function() { 
      $('#update_thread').click();
    });
    
    var statsNode=document.createElement("SPAN");
    statsNode.innerHTML = getMenuStats();
    statsNode.id = 'menuStats';
		statsNode.style.paddingLeft = "3pt";
    menu.appendChild(statsNode);
  }
  
  // Hook style changes to update the menu's style
  var styles = document.getElementsByClassName("styles")[0].childNodes;
  for(i=0; i<styles.length; i++) {
    styles[i].onclick = function () {
      changeStyle(this.innerHTML.substring(1, this.innerHTML.length - 1), this);
      updateMenuStyle();
    };
  }
}

/*********************
IMPROVED PAGE TITLES
*********************/
function initImprovedPageTitles() {
  if (isOnCatalog())
    originalPageTitle = document.location.pathname.replace("catalog.html", " - Catalog");
  else if (isOnThread())
  {
    try {
      originalPageTitle = document.location.pathname.match(/\/(.*?)\//)[0] + " - " + (function(){
        var op = document.getElementsByClassName("op")[0];
        var subject = op ? op.getElementsByClassName("subject")[0] : null;
        var body = op ? op.getElementsByClassName("body")[0] : null;
        return subject ? subject.textContent : body ? body.textContent.length > 70 ? body.textContent.substr(0, 70) + "..." : body.textContent : "8chan";
      })();
    } catch (e) { }
  }
  
  document.title = originalPageTitle;
}

/*********************
CATALOG THREAD LINKS
*********************/

function initThreadLinks() {
  if (!setting("threadnewtab"))
    return;
  if (isOnCatalog())
  {
    var threads = document.getElementsByClassName("thread");
    for (i in threads)
    {
      if (typeof threads[i] === "object")
        threads[i].getElementsByTagName("a")[0].target = "_blank";
    }
  }
}

/*********************
REVEAL TEXT SPOILERS
*********************/

function initRevealSpoilers() {
  if (!setting('revealspoilers'))
    return;
  $('.spoiler').each(function() {
    $(this).css('color','white');
  });
}

// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  if (!setting('revealspoilers'))
    return;
  $('#'+$(post).attr('id')+' .spoiler').each(function() {
    $(this).css('color','white');
  });
  
  
});

/*********************
REVEAL IMAGE SPOILERS
*********************/

function initRevealImageSpoilers() {
  if (!setting('revealimagespoilers'))
    return;
  $('.post-image').each(function() {
    var pic;
    if ($(this)[0].tagName == "IMG")
      pic = $(this);
    else if ($(this)[0].tagName == "CANVAS")
      pic = $(this).next();
    var picUrl = pic.attr("src");
    if (picUrl.indexOf('spoiler.png') >= 0)
    {
      pic.attr("src", $(this).parent().attr("href"));
      pic.addClass("8chanx-spoilered-image");
    }
  });
}

// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  if (!setting('revealimagespoilers'))
    return;
  $('#'+$(post).attr('id')+' .post-image').each(function() {
    var pic;
    if ($(this)[0].tagName == "IMG")
      pic = $(this);
    else if ($(this)[0].tagName == "CANVAS")
      pic = $(this).next();
    var picUrl = pic.attr("src");
    if (picUrl.indexOf('spoiler.png') >= 0)
    {
      pic.attr("src", $(this).parent().attr("href"));
      pic.addClass("8chanx-spoilered-image");
    }
  })
});

/***********************
UNANIMATE GIFS
***********************/
// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  if (localStorage.no_animated_gif === 'false')
    return;
  $('#'+$(post).attr('id')+' .post-image').each(function() {
    var pic;
    var pic;
    if ($(this)[0].tagName == "IMG")
      pic = $(this);
    else if ($(this)[0].tagName == "CANVAS")
      pic = $(this).next();
    var picUrl = pic.attr("src");
    if (picUrl.match(".gif$"))
    {
      unanimate_gif(pic.get(0));
    }
  });
});

/***********************
UNREAD POSTS
***********************/
// Returns true if we've just read a new post, and remove it
function checkFirstUnread() {
  if (unreadPosts.length == 0)
    return false;
  
  if (!document.hasFocus())
    return false;
  
  var postId = unreadPosts[0];
  var post = $("#reply_"+postId);
  if ($(window).scrollTop() + $(window).height() >= post.position().top + post.height())
  {
    unreadPosts.shift();
    return true;
  }
  else
    return false;
}

function checkUnreadPosts() {  
  while (checkFirstUnread());
  
  if (isOnThread())
  {
    if (unreadPosts.length != 0)
      document.title = "("+unreadPosts.length+") "+originalPageTitle;
    else
      document.title = originalPageTitle;
  }
}

$(window).focus(function(){
  if (unreadPosts.length)
    checkUnreadPosts();
});

// Handler when a new post is fetched by the inline extension
$(document).on('new_post', function (e, post) {
  var postId = $(post).attr('id').replace(/^reply_/, '');
  unreadPosts[unreadPosts.length] = postId;
  //alert(unreadPosts);
  updateMenuStats();
  checkUnreadPosts();
});

// Prepare initial unread posts
function initUnreadPosts() {
  // First mark all posts as unread
  $('.post.reply').each( function (index, data) {
    var postId = $(this).attr('id').replace(/^reply_/, '');
    unreadPosts[unreadPosts.length] = postId;
  });
  checkUnreadPosts();
  
  $(window).scroll(function() {
   checkUnreadPosts();
  });
}

/************
IMAGE HOVER
************/
var imghoverMMove = function(e) {
  if (!setting('imagehover') && !setting('catalogimagehover'))
    return;
  var pic;
  if ($(this)[0].tagName == "IMG")
    pic = $(this);
  else if ($(this)[0].tagName == "CANVAS")
    pic = $(this).next();
  var picUrl = pic.attr("src");
  if (picUrl.indexOf('spoiler.png') >= 0)
    picUrl = $(this).parent().attr("href");
  pic.parent().removeData("expanded");
  if (pic.parent().data("expanded"))
    return;
  picUrl = picUrl.replace("/src/","/thumb/");
  if (picUrl.indexOf('/thumb/') == -1)
    return;
  var picTimestamp = picUrl.substr(picUrl.indexOf("/thumb/")+7);
  var picTimestamp = picTimestamp.substr(0, picTimestamp.lastIndexOf("."));
  var picId = "post-image-"+picTimestamp;
  var hoverPic = $("#"+picId);
  // Create the hovering image if needed, otherwise just update it's position
  if (!hoverPic.length)
  {
    var newpic = pic.clone();
    newpic.attr("id",picId);
    newpic.css('display', 'block').css('position', 'absolute').css('z-index', '200');
    newpic.attr("src",picUrl.replace("/thumb/","/src/"));
    newpic.css('left', e.pageX).css('top', top);
    newpic.css('width', 'auto').css('height', 'auto');
    newpic.css('pointer-events','none');
    newpic.css('max-height',$(window).height());
    newpic.css('max-width',$(window).width());
    newpic.insertAfter(pic);
  }
  else
  {
    var scrollTop = $(window).scrollTop();
    var epy = e.pageY;
    var top = epy;
    if (epy < scrollTop + 15) {
      top = scrollTop;
    } else if (epy > scrollTop + $(window).height() - hoverPic.height() - 15) {
      top = scrollTop + $(window).height() - hoverPic.height() - 15;
    }
    hoverPic.css('left', e.pageX).css('top', top);
  }
};

var imghoverMOut = function(e) {
  // Delete the hovering image
  var pic;
  if ($(this)[0].tagName == "IMG")
    pic = $(this);
  else if ($(this)[0].tagName == "CANVAS")
    pic = $(this).next();
  var picUrl = pic.attr("src");
  if (picUrl.indexOf('spoiler.png') >= 0)
    picUrl = $(this).parent().attr("href");
  picUrl = picUrl.replace("/src/","/thumb/");
  var picTimestamp = picUrl.substr(picUrl.indexOf("/thumb/")+7);
  var picTimestamp = picTimestamp.substr(0, picTimestamp.lastIndexOf("."));
  var picId = "post-image-"+picTimestamp;
  var hoverPic = $("#"+picId);
  if (hoverPic.length)
    hoverPic.remove();
  if ($(this).hasClass('unanimated'))
  {
    $($(this).parent().children()).each( function (index, data) {
    if ($(this).parent().data("expanded") != "true")
    {
      $(this).mousemove(imghoverMMove);
      $(this).mouseout(imghoverMOut);
      $(this).click(imghoverMOut);
    }
  });
  }
};

function initImageHover() {
  if (!setting('imagehover') && !setting('catalogimagehover'))
    return;
  
  var selector = '';
  
  if (setting('imagehover'))
    selector += 'img.post-image, canvas.post-image';
  
  if (setting('catalogimagehover') && isOnCatalog())
  {
    if (selector != '')
      selector += ', ';
    selector += '.thread-image';
    $('.theme-catalog div.thread').each(function() {
      $(this).css('position','inherit');
    });
  }
  
  $(selector).each( function (index, data) {
    if ($(this).parent().data("expanded") != "true")
    {
      $(this).mousemove(imghoverMMove);
      $(this).mouseout(imghoverMOut);
      $(this).click(imghoverMOut);
    }
  });
}

$(document).on('new_post', function (e, post) {
  if (!setting('imagehover'))
    return;
  $('#'+$(post).attr('id')+' .post-image').each( function (index, data) {
    if ($(this).parent().data("expanded") != "true")
    {
      $(this).mousemove(imghoverMMove);
      $(this).mouseout(imghoverMOut);
      $(this).click(imghoverMOut);
    }
  });
});

/*************
QUICK REPLY
*************/
var settings = new script_settings('quick-reply');
var doQRCSS = function () {
    $('#quick-reply-css') .remove();
    var dummy_reply = $('<div class="post reply"></div>') .appendTo($('body'));
    var reply_background = dummy_reply.css('backgroundColor');
    var reply_border_style = dummy_reply.css('borderStyle');
    var reply_border_color = dummy_reply.css('borderColor');
    var reply_border_width = dummy_reply.css('borderWidth');
    dummy_reply.remove();
    $('<style type="text/css" id="quick-reply-css">\t\t#quick-reply {\t\t\tposition: fixed;\t\t\tright: 5%;\t\t\ttop: 5%;\t\t\tfloat: right;\t\t\tdisplay: block;\t\t\tpadding: 0 0 0 0;\t\t\twidth: 300px;\t\t\tz-index: 100;\t\t}\t\t#quick-reply table {\t\t\tborder-collapse: collapse;\t\t\tbackground: '
    + reply_background + ';\t\t\tborder-style: '
    + reply_border_style + ';\t\t\tborder-width: '
    + reply_border_width + ';\t\t\tborder-color: '
    + reply_border_color + ';\t\t\tmargin: 0;\t\t\twidth: 100%;\t\t}\t\t#quick-reply tr td:nth-child(2) {\t\t\twhite-space: nowrap;\t\t\ttext-align: right;\t\t\tpadding-right: 4px;\t\t}\t\t#quick-reply tr td:nth-child(2) input[type="submit"] {\t\t\twidth: 100%;\t\t}\t\t#quick-reply th, #quick-reply td {\t\t\tmargin: 0;\t\t\tpadding: 0;\t\t}\t\t#quick-reply th {\t\t\ttext-align: center;\t\t\tpadding: 2px 0;\t\t\tborder: 1px solid #222;\t\t}\t\t#quick-reply th .handle {\t\t\tfloat: left;\t\t\twidth: 100%;\t\t\tdisplay: inline-block;\t\t}\t\t#quick-reply th .close-btn {\t\t\tfloat: right;\t\t\tpadding: 0 5px;\t\t}\t\t#quick-reply input[type="text"], #quick-reply select {\t\t\twidth: 100%;\t\t\tpadding: 2px;\t\t\tfont-size: 10pt;\t\t\tbox-sizing: border-box;\t\t\t-webkit-box-sizing:border-box;\t\t\t-moz-box-sizing: border-box;\t\t}\t\t#quick-reply textarea {\t\t\twidth: 100%;\t\t\tbox-sizing: border-box;\t\t\t-webkit-box-sizing:border-box;\t\t\t-moz-box-sizing: border-box;\t\t\tfont-size: 10pt;\t\t\tresize: vertical;\t\t}\t\t#quick-reply input, #quick-reply select, #quick-reply textarea {\t\t\tmargin: 0 0 1px 0;\t\t}\t\t#quick-reply input[type="file"] {\t\t\tpadding: 5px 2px;\t\t}\t\t#quick-reply .nonsense {\t\t\tdisplay: none;\t\t}\t\t#quick-reply td.submit {\t\t\twidth: 1%;\t\t}\t\t#quick-reply td.recaptcha {\t\t\ttext-align: center;\t\t\tpadding: 0 0 1px 0;\t\t}\t\t#quick-reply td.recaptcha span {\t\t\tdisplay: inline-block;\t\t\twidth: 100%;\t\t\tbackground: white;\t\t\tborder: 1px solid #ccc;\t\t\tcursor: pointer;\t\t}\t\t#quick-reply td.recaptcha-response {\t\t\tpadding: 0 0 1px 0;\t\t}\t\t@media screen and (max-width: 800px) {\t\t\t#quick-reply {\t\t\t\tdisplay: none !important;\t\t\t}\t\t}\t\t</style>'
    ) .appendTo($('head'));
  };
var showQR = function () {
  if ($('div.banner') .length == 0)
    return ;
  if ($('#quick-reply') .length != 0)
    return ;
  doQRCSS();
  var $postForm = $('form[name="post"]') .clone();
  $postForm.clone();
  $dummyStuff = $('<div class="nonsense"></div>') .appendTo($postForm);
  $postForm.find('table tr') .each(function () {
    var $th = $(this) .children('th:first');
    var $td = $(this) .children('td:first');
    if ($th.length && $td.length) {
      $td.attr('colspan', 2);
      if ($td.find('input[type="text"]') .length) {
        $td.find('input[type="text"]') .removeAttr('size') .attr('placeholder', $th.clone() .children() .remove() .end() .text());
      }
      $th.contents() .filter(function () {
        return this.nodeType == 3;
      }) .remove();
      $th.contents() .appendTo($dummyStuff);
      $th.remove();
      if ($td.find('input[name="password"]') .length) {
        $(this) .hide();
      }
      if ($td.find('input[type="submit"]') .length) {
        $td.removeAttr('colspan');
        $('<td class="submit"></td>') .append($td.find('input[type="submit"]')) .insertAfter($td);
      }
      if ($td.find('#recaptcha_widget_div') .length) {
        var $captchaimg = $td.find('#recaptcha_image img');
        $captchaimg.removeAttr('id') .removeAttr('style') .addClass('recaptcha_image') .click(function () {
          $('#recaptcha_reload') .click();
        });
        $('#recaptcha_response_field') .focus(function () {
          if ($captchaimg.attr('src') != $('#recaptcha_image img') .attr('src')) {
            $captchaimg.attr('src', $('#recaptcha_image img') .attr('src'));
            $postForm.find('input[name="recaptcha_challenge_field"]') .val($('#recaptcha_challenge_field') .val());
            $postForm.find('input[name="recaptcha_response_field"]') .val('') .focus();
          }
        });
        $postForm.submit(function () {
          setTimeout(function () {
            $('#recaptcha_reload') .click();
          }, 200);
        });
        var $newRow = $('<tr><td class="recaptcha-response" colspan="2"></td></tr>');
        $newRow.children() .first() .append($td.find('input') .removeAttr('style'));
        $newRow.find('#recaptcha_response_field') .removeAttr('id') .addClass('recaptcha_response_field') .attr('placeholder', $('#recaptcha_response_field') .attr('placeholder'));
        $('#recaptcha_response_field') .addClass('recaptcha_response_field')
        $td.replaceWith($('<td class="recaptcha" colspan="2"></td>') .append($('<span></span>') .append($captchaimg)));
        $newRow.insertAfter(this);
      }
      if ($td.find('input[type="file"]') .length) {
        if ($td.find('input[name="file_url"]') .length) {
          $file_url = $td.find('input[name="file_url"]');
          if (settings.get('show_remote', false)) {
            var $newRow = $('<tr><td colspan="2"></td></tr>');
            $file_url.clone() .attr('placeholder', _('Upload URL')) .appendTo($newRow.find('td'));
            $newRow.insertBefore(this);
          }
          $file_url.parent() .remove();
          $td.find('label') .remove();
          $td.contents() .filter(function () {
            return this.nodeType == 3;
          }) .remove();
          $td.find('input[name="file_url"]') .removeAttr('id');
        }
        if ($(this) .find('input[name="spoiler"]') .length) {
          $td.removeAttr('colspan');
        }
      }
      if (!settings.get('show_embed', false) && $td.find('input[name="embed"]') .length) {
        $(this) .remove();
      }
      if ($(this) .is('#oekaki')) {
        $(this) .remove();
      }
      if ($td.is('#upload_selection')) {
        $(this) .remove();
      }
      if ($td.find('input[type="checkbox"]') .length) {
        var tr = this;
        $td.find('input[type="checkbox"]') .each(function () {
          if ($(this) .attr('name') == 'spoiler') {
            $td.find('label') .remove();
            $(this) .attr('id', 'q-spoiler-image');
            $postForm.find('input[type="file"]') .parent() .removeAttr('colspan') .after($('<td class="spoiler"></td>') .append(this, ' ', $('<label for="q-spoiler-image">') .text(_('Spoiler Image'))));
          } else if ($(this) .attr('name') == 'no_country') {
            $td.find('label,input[type="checkbox"]') .remove();
          } else {
            $(tr) .remove();
          }
        });
      }
      $td.find('small') .hide();
    }
  });
  $postForm.find('textarea[name="body"]') .removeAttr('id') .removeAttr('cols') .attr('placeholder', _('Comment'));
  $postForm.find('textarea:not([name="body"]),input[type="hidden"]') .removeAttr('id') .appendTo($dummyStuff);
  $postForm.find('br') .remove();
  $postForm.find('table') .prepend('<tr><th colspan="2">\t\t\t<span class="handle">\t\t\t\t<a class="close-btn" href="javascript:void(0)">X</a>\t\t\t\t'
                                   + _('Quick Reply') + '\t\t\t</span>\t\t\t</th></tr>'
                                  );
  $postForm.attr('id', 'quick-reply');
  $postForm.appendTo($('body')) .hide();
  $origPostForm = $('form[name="post"]:first');
  $origPostForm.find('textarea[name="body"]') .on('change input propertychange', function () {
    $postForm.find('textarea[name="body"]') .val($(this) .val());
  });
  $postForm.find('textarea[name="body"]') .on('change input propertychange', function () {
    $origPostForm.find('textarea[name="body"]') .val($(this) .val());
  });
  $postForm.find('textarea[name="body"]') .focus(function () {
    $origPostForm.find('textarea[name="body"]') .removeAttr('id');
    $(this) .attr('id', 'body');
  });
  $origPostForm.find('textarea[name="body"]') .focus(function () {
    $postForm.find('textarea[name="body"]') .removeAttr('id');
    $(this) .attr('id', 'body');
  });
  $origPostForm.find('input[type="text"],select') .on('change input propertychange', function () {
    $postForm.find('[name="' + $(this) .attr('name') + '"]') .val($(this) .val());
  });
  $postForm.find('input[type="text"],select') .on('change input propertychange', function () {
    $origPostForm.find('[name="' + $(this) .attr('name') + '"]') .val($(this) .val());
  });
  if (typeof $postForm.draggable != 'undefined') {
    if (localStorage.quickReplyPosition) {
      var offset = JSON.parse(localStorage.quickReplyPosition);
      if (offset.top < 0)
        offset.top = 0;
      if (offset.right > $(window) .width() - $postForm.width())
        offset.right = $(window) .width() - $postForm.width();
      if (offset.top > $(window) .height() - $postForm.height())
        offset.top = $(window) .height() - $postForm.height();
      $postForm.css('right', offset.right) .css('top', offset.top);
    }
    $postForm.draggable({
      handle: 'th .handle',
      containment: 'window',
      distance: 10,
      scroll: false,
      stop: function () {
        var offset = {
          top: $(this) .offset() .top - $(window) .scrollTop(),
          right: $(window) .width() - $(this) .offset() .left - $(this) .width(),
        };
        localStorage.quickReplyPosition = JSON.stringify(offset);
        $postForm.css('right', offset.right) .css('top', offset.top) .css('left', 'auto');
      }
    });
    $postForm.find('th .handle') .css('cursor', 'move');
  }
  $postForm.find('th .close-btn') .click(function () {
    $origPostForm.find('textarea[name="body"]') .attr('id', 'body');
    $postForm.remove();
    floating_link();
  });
  $postForm.show();
  $postForm.width($postForm.find('table') .width());
  $postForm.hide();
  $(window) .trigger('quick-reply');
  $(window) .ready(function () {
    if (settings.get('hide_at_top', true)) {
      $(window) .scroll(function () {
        if ($(this) .width() <= 800)
          return ;
        if ($(this) .scrollTop() < $origPostForm.offset() .top + $origPostForm.height() - 100)
          $postForm.fadeOut(100);
        else
          $postForm.fadeIn(100);
      }) .scroll();
    } else {
      $postForm.show();
    }
    $(window) .on('stylesheet', function () {
      doQRCSS();
      if ($('link#stylesheet') .attr('href')) {
        $('link#stylesheet') [0].onload = doQRCSS;
      }
    });
  });
};

/***************************************
KEYBOARD EVENTS
***************************************/
// Seems like only firefox has those handy defines
if (typeof KeyEvent == "undefined") {
    var KeyEvent = {
        DOM_VK_ESCAPE: 27,
        DOM_VK_A: 65,
        DOM_VK_B: 66,
        DOM_VK_C: 67,
        DOM_VK_D: 68,
        DOM_VK_E: 69,
        DOM_VK_F: 70,
        DOM_VK_G: 71,
        DOM_VK_H: 72,
        DOM_VK_I: 73,
        DOM_VK_J: 74,
        DOM_VK_K: 75,
        DOM_VK_L: 76,
        DOM_VK_M: 77,
        DOM_VK_N: 78,
        DOM_VK_O: 79,
        DOM_VK_P: 80,
        DOM_VK_Q: 81,
        DOM_VK_R: 82,
        DOM_VK_S: 83,
        DOM_VK_T: 84,
        DOM_VK_U: 85,
        DOM_VK_V: 86,
        DOM_VK_W: 87,
        DOM_VK_X: 88,
        DOM_VK_Y: 89,
        DOM_VK_Z: 90
    };
}

window.addEventListener('keydown', function(event) {
  var activeElem = document.activeElement;
  if (event.keyCode === KeyEvent.DOM_VK_ESCAPE) {
    $origPostForm.find('textarea[name="body"]').attr('id', 'body');
    $origPostForm.find('textarea[name="body"]').val('');
    $('#quick-reply').remove();
  }
  
  // Some shortcuts should only work inside the QR box, some only outside it
  if (activeElem.nodeName == "INPUT"
     || activeElem.nodeName == "TEXTAREA")
  {
    if ((event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_S) {
      event.preventDefault();
      wrapQRSelectionWith('**');
    } else if ((event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_I) {
      event.preventDefault();
      wrapQRSelectionWith("''");
    } else if ((event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_B) {
      event.preventDefault();
      wrapQRSelectionWith("'''");
    } else if ((event.ctrlKey || event.metaKey) && event.keyCode === KeyEvent.DOM_VK_R) {
      event.preventDefault();
      wrapQRSelectionWith('==');
    }
    return;
  }

  if (event.keyCode === KeyEvent.DOM_VK_R) {
    document.location.reload();
  } else if (event.keyCode === KeyEvent.DOM_VK_Q) {
    showQR();
    $("#quick-reply textarea").focus();
    event.preventDefault();
  } else if (event.keyCode === KeyEvent.DOM_VK_E) {
    var shrink = $('#shrink-all-images a');
    if (shrink.length)
    shrink.click();
    else
    $('#expand-all-images a').click();
  }
});

/*********
CATALOG
*********/
function initCatalog() {
	if (isOnCatalog()) {
		addCatalogPages();
		setCatalogTitle();
		highlightCatalogAutosage();
	}
}

function addCatalogPages() {
	var threadElements = document.getElementsByClassName("thread");

	for (i=0;i<threadElements.length;i++) {
		var threadId = threadElements[i].innerHTML.match(/<a href="[^0-9]*([0-9]+).html?">/)[1];
		var threadPage = getThreadPage(threadId, thisBoard, true);
		
		if (threadPage >= 0) {
			threadElements[i].children[1].children[0].children[0].innerHTML += " / P: " + threadPage; //I know this is awful, but it works (for now)
		}
	}
}

function setCatalogTitle() {
	document.title = "/" + thisBoard + "/ - " + "Catalog";
}

function highlightCatalogAutosage() {
	replyElements = document.getElementsByClassName("replies");

	for (i=0;i<replyElements.length;i++) {
		eReplies = replyElements[i].innerHTML.match(/R: ([0-9]+)/)[1];
		if (eReplies>bumpLimit) {replyElements[i].innerHTML = replyElements[i].innerHTML.replace(/R: ([0-9]+)/, "<span style='color:#f00;'>R: $1</span>")};
	}
}

/*********
INIT
*********/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
// When all is loaded
//addLoadEvent(initMenu);
// As soon as the DOM is ready
$(document).ready(function() {
	$.ajaxSetup({async: false});
  initMenu();
  initImprovedPageTitles();
  initThreadLinks();
  initUnreadPosts();
  initImageHover();
  initRevealSpoilers();
  initRevealImageSpoilers();
	initCatalog();
});