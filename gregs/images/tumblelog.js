function flashVersion(){if(navigator.plugins&&navigator.plugins.length>0){var a=navigator.mimeTypes;if(a&&a["application/x-shockwave-flash"]&&a["application/x-shockwave-flash"].enabledPlugin&&a["application/x-shockwave-flash"].enabledPlugin.description){return parseInt(a["application/x-shockwave-flash"].enabledPlugin.description.split(" ")[2].split(".")[0],10)}}else{if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");var b=c.GetVariable("$version");return b.split(",")[0].split(" ")[1]}catch(d){}return 0}}}function replaceIfFlash(b,a,c){if(flashVersion()>=b){document.getElementById(a).innerHTML=c}}function renderVideo(c,g,e,a,b){var d=navigator.userAgent.toLowerCase();var f=(d.indexOf("iphone")!=-1);if(f){document.getElementById(c).innerHTML='<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" width="'+e+'" height="'+a+'" codebase="http://www.apple.com/qtactivex/qtplugin.cab"><param name="src" value="'+g+'"><param name="qtsrc" value="'+g+'"><param name="autoplay" value="false"><embed src="'+g+'" qtsrc="'+g+'" width="'+e+'" height="'+a+'" pluginspage="http://www.apple.com/quicktime/"></embed></object>'}else{replaceIfFlash(10,c,'<embed type="application/x-shockwave-flash" src="http://assets.tumblr.com/swf/video_player.swf?22" bgcolor="#000000" quality="high" class="video_player" allowfullscreen="true" height="'+a+'" width="'+e+'" flashvars="file='+encodeURIComponent(g)+(b?"&amp;"+b:"")+'"></embed>')}};