/**/// Description: Sets theme
/**///
/**/// Dependencies: None
/**///
/**/// Author: angyrancor
/**///
/**/// Notes: Sets the theme.  Usage: settheme <theme>
exports.trigger = 'settheme';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) 
{
  boombot.bot.roomInfo(true, function(data) 
	{
        var modArray = data.room.metadata.moderator_id
		if (modArray.indexOf(uid) !== -1) 
		{
			boombot.theme = text.substring(9);
			boombot.respond(uid, 'Current theme: '+boombot.theme+'.', private);
		}
	})
}
