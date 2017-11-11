const path = require('path');

module.exports = (Franz, options) => {
  	function getMessages() {

		var indirect_badge = document.getElementsByClassName("mx_RoomSubList_badge");
		var indirect_count = 0;
		if(indirect_badge.length != 0)
			indirect_count = indirect_badge.length;

		var direct_badge = document.getElementsByClassName("mx_RoomSubList_badgeHighlight");
		var direct_count = 0;
		if(direct_badge.length != 0)
			direct_count = direct_badge.length;

    
    	// set Franz badge
    	Franz.setBadge(direct_count, indirect_count);
  	};

  	// check for new messages every second and update Franz badge
  	Franz.loop(getMessages);

};