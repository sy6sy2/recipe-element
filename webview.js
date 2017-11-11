module.exports = (Franz, options) => {
  	function getMessages() {

		var badge = document.getElementsByClassName("mx_RoomSubList_badge");
		var count = 0;
		if(badge.length != 0)
			count = badge.length;

    	// set Franz badge
    	Franz.setBadge(count);
  	};

  	// check for new messages every second and update Franz badge
  	Franz.loop(getMessages);

};