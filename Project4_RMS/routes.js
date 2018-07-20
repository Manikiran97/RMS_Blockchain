const routes = require('next-routes')();


routes
      .add('/rent/newRent', '/rent/newRent')
      .add('/tenants/newTenant', '/tenants/newTenant')
     .add('/tenants/:tenantId', '/tenants/showTenant')
     .add('/edittenant/:tenantId', '/tenants/editTenant')
     /*.add('/campaigns/:address/requests', '/campaigns/requests/index')
      .add('/campaigns/:address/newrequest','/campaigns/requests/newRequest')*/;
                                            

          
module.exports = routes;