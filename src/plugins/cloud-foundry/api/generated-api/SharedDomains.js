/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'app.api.apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.SharedDomains', new SharedDomainsApi($http));
  }

  function SharedDomainsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(SharedDomainsApi.prototype, {

   /*
    * Create a Shared Domain
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/shared_domains/create_a_shared_domain.html
    */
    CreateSharedDomain: function (value, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/shared_domains';
      config.method = 'POST';
      config.data = value;
      return this.$http(config);
    },

   /*
    * Delete a Particular Shared Domain
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/shared_domains/delete_a_particular_shared_domain.html
    */
    DeleteSharedDomain: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/shared_domains/" + guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Filtering Shared Domains by name
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/shared_domains/filtering_shared_domains_by_name.html
    */
    FilterSharedDomainsByName: function (params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/shared_domains';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Shared Domains
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/shared_domains/list_all_shared_domains.html
    */
    ListAllSharedDomains: function (params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/shared_domains';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * Retrieve a Particular Shared Domain
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/shared_domains/retrieve_a_particular_shared_domain.html
    */
    RetrieveSharedDomain: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/shared_domains/" + guid + "';
      config.method = 'GET';
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
