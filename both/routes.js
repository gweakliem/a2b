Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'shipperInfo', path: '/'});
Router.route('shipments', {
	path: '/shipments',
  name: 'shipments',
	waitOn: function () {
        return [
            Meteor.subscribe('shippers'),
            Meteor.subscribe('shipments'),
            ]},
	onBeforeAction: function () {
  		if (!Shippers.findOne()) {
  			Router.go('shipperInfo');
  		}
  		this.next();
    }
});
