Meteor.publish('shippers', function(){
    var currentUserId = this.userId;
    return Shippers.find({ownedBy: currentUserId});
  });

Meteor.publish('shipments', function() {
	var currentUserId = this.userId;
	return Shipments.find({ownedBy: currentUserId});
})