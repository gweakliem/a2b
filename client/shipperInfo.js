    Template.shipperInfo.helpers({
    termsRefused: function() {
      return Session.get('termsRefused') === true;
    },
  isEditingShipper: function() {
    return Session.get('isEditingShipper') === true;
  },
  shippers: function () {
    return Shippers.find();
  },
  hasRegisteredShipper: function() {
    return Shippers.find().count() > 0;
  }
});

Template.shipperInfo.events({
  'click #editShipper': function(event) {
    Session.set('isEditingShipper',true);
  },
});
