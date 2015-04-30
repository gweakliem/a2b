Template.shipments.helpers({
	isCreatingShipment: function() {
		return Session.get('isEditingShipment') === true;
	}
});

Template.shipments.events({
	  'click #create': function(event) {
    Session.set('isEditingShipment',true);
  },

});