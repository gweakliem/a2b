# a2b 


## Overview
The idea of this application is to enable people to ship goods from one location to another. 

* Shippers register with the site and then create shipments. 
* Shipments could have a huge number of parameters. In the interest of simplicity, we're assuming that the shipper has a pickup truck and the shipment represents one trip in a pickup truck. We'll model this along the lines of the taxi services, assuming that the priority is immediate pickup, i.e. when you request a pick up you want the shipment performed ASAP. 
* Drivers register with the site and then bid on shipments. When a shipper accepts a bid from a driver, then the driver is notified and is expected to immediately dispatch to the location for pick up.

## Modeling

Shippers own most of the editing features on shipments, creation & deletion and editing all the attributes. A driver bids on a shipment and that is noted on the shipment, but the actual edit of the shipment to designate the driver is performed as part of the shipper's acceptance of the driver's bid. 



## dev notes
would like account login dropdown to behave like a bootstrap menu item
see
http://stackoverflow.com/questions/15025621/how-to-style-meteor-js-loginbuttons
meteor remove accounts-ui
meteor add accounts-ui-unstyled
You are then left with the raw HTML, which can be styled as you choose.

