/**/// Description: Gets theme
/**///
/**/// Dependencies: None
/**///
/**/// Author: angyrancor
/**///
/**/// Notes: Shows the theme.  Usage: showtheme
exports.trigger = 'showtheme';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) {
  boombot.respond(uid, 'Current theme: '+boombot.theme+'.', private);
}
