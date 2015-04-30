Shippers = new Mongo.Collection('shippers');
Shipments = new Mongo.Collection('shipments');

Meteor.methods({
    'updateShipperInfo': function(id, shipperInfo){
        if (shipperInfo.termsAccepted != true) {
          throw new Meteor.Error("invalid-parameters","Terms must be accepted");
        }

        // TODO: server side validation of all input

        var currentUserId = Meteor.userId();
        shipperInfo.ownedBy = currentUserId;
        shipperInfo.termsAcceptedOn = new Date();
        shipperInfo.termsVersion = 1; // TODO: increment T&C version with dynamic T&C
        
        if (id) {
        Shippers.update({_id:shipperInfo.id},shipperInfo, function(error, record) {
          if (error) {
            console.log("error " + error);
            throw new Meteor.error("server-error",error);
          } 
        });
      } else  {
        Shippers.insert(shipperInfo, function(error, record) {
          if (error) {
            console.log("error " + error);
            throw new Meteor.error("server-error",error);
          } 
        });
      }
    },
    'updateShipmentInfo': function(id, shipmentInfo) {

    }
  });
