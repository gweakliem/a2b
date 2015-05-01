// shipment form

Template.shipmentForm.events({
    'submit form': function(event){
      event.preventDefault();
       Meteor.call('updateShipmentInfo', event.target.recordId.value, {
        recipientName: event.target.recipientName.value,
        recipientPhone: event.target.recipientPhone.value,
        recipientMustSign: event.target.recipientMustSign.checked,
        pickupAddress: event.target.pickupAddress.value,
        pickupCity: event.target.pickupCity.value,
        pickupState: event.target.pickupState.value,
        pickupZip: event.target.pickupZip.value,
        deliveryAddress: event.target.deliveryAddress.value,
        deliveryCity: event.target.deliveryCity.value,
        deliveryState: event.target.deliveryState.value,
        deliveryZip: event.target.deliveryZip.value,
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
