Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'ship', path: '/'});
Router.route('/drive', {
    name: 'drive',
    path: '/drive',
    waitOn: function () {
      return [
          Meteor.subscribe('drivers'),
          Meteor.subscribe('shipments'),
          ]},
  onBeforeAction: function () {
    if (!Shippers.findOne()) {
      Router.go('drive');
    }
    this.next();
  }
});
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
  			Router.go('ship');
  		}
  		this.next();
    }
});
