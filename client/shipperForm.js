
Template.shipperForm.events({
    'submit form': function(event){
      event.preventDefault();
      if (event.target.acceptTerms.checked != true) {
        Session.set('termsRefused', true);
        return;
      }
       Meteor.call('updateShipperInfo', event.target.recordId.value, {
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
          Session.set('termsRefused',false);
          Session.set('isEditingShipper',false);
        }
      });
    },
    'click #cancelEdit': function(event) {
      Session.set('isEditingShipper', false);
    }
  });
