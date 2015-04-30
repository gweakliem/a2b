Router.configure({
  layoutTemplate: 'layout'
});
 
Router.route('/', {name: 'shipperInfo'});
Router.route('/shipments', 'shipments');