Template.shipments.helpers({
	shipments: function() {
		return Shipments.find();
	},
	isCreatingShipment: function() {
		return Session.get('isEditingShipment') === true;
	}
});

Template.shipments.events({
	  'click #create': function(event) {
    Session.set('isEditingShipment',true);
  },

});
