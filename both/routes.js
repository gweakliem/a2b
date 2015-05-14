Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'default',
  path: '/'
})
Router.route('/ship',{
  name: 'ship',
  path: '/ship',
  waitOn: function() {
    return [
      Meteor.subscribe('shippers')
    ];
  },
});
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
Router.route('newDriver', {
  path: '/newShipper',
  name: 'newShipper',
  template: 'newAccount',
  onBeforeAction: function() {
    this.next();
  }
});
Router.route('newDriver', {
  path: '/newDriver',
  name: 'newDriver',
  template: 'newAccount',
  onBeforeAction: function() {
    this.next();
  }
});
