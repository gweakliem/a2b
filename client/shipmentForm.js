// shipment form

Template.shipmentForm.events({
    'submit form': function(event){
      event.preventDefault();
       Meteor.call('updateShipmentInfo', event.target.recordId.value, {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
        addressExt: event.target.addressExt.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zip: event.target.zip.value,
        termsAccepted: true
      }, function(error, result) {
        if (error) {
          console.log("oops! " + error);
        } else {
          Session.set('isEditingShipment',false);
        }
      });
    },
    'click #cancelEdit': function(event) {
      Session.set('isEditingShipment', false);
    }
  });
