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
    apiManager.register('cloud-foundry.api.Users', new UsersApi($http));
  }

  function UsersApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(UsersApi.prototype, {

   /*
    * Associate Audited Organization with the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/associate_audited_organization_with_the_user.html
    */
    AssociateAuditedOrganizationWithUser: function (guid, audited_organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/audited_organizations/" + audited_organization_guid + "';
      config.method = 'PUT';
      return this.$http(config);
    },

   /*
    * Associate Audited Space with the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/associate_audited_space_with_the_user.html
    */
    AssociateAuditedSpaceWithUser: function (guid, audited_space_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/audited_spaces/" + audited_space_guid + "';
      config.method = 'PUT';
      return this.$http(config);
    },

   /*
    * Associate Billing Managed Organization with the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/associate_billing_managed_organization_with_the_user.html
    */
    AssociateBillingManagedOrganizationWithUser: function (guid, billing_managed_organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/billing_managed_organizations/" + billing_managed_organization_guid + "';
      config.method = 'PUT';
      return this.$http(config);
    },

   /*
    * Associate Managed Organization with the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/associate_managed_organization_with_the_user.html
    */
    AssociateManagedOrganizationWithUser: function (guid, managed_organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/managed_organizations/" + managed_organization_guid + "';
      config.method = 'PUT';
      return this.$http(config);
    },

   /*
    * Associate Managed Space with the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/associate_managed_space_with_the_user.html
    */
    AssociateManagedSpaceWithUser: function (guid, managed_space_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/managed_spaces/" + managed_space_guid + "';
      config.method = 'PUT';
      return this.$http(config);
    },

   /*
    * Associate Organization with the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/associate_organization_with_the_user.html
    */
    AssociateOrganizationWithUser: function (guid, organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/organizations/" + organization_guid + "';
      config.method = 'PUT';
      return this.$http(config);
    },

   /*
    * Associate Space with the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/associate_space_with_the_user.html
    */
    AssociateSpaceWithUser: function (guid, space_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/spaces/" + space_guid + "';
      config.method = 'PUT';
      return this.$http(config);
    },

   /*
    * Creating a User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/creating_a_user.html
    */
    CreateUser: function (value, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users';
      config.method = 'POST';
      config.data = value;
      return this.$http(config);
    },

   /*
    * Delete a Particular User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/delete_a_particular_user.html
    */
    DeleteUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Get User summary
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/get_user_summary.html
    */
    GetUserSummary: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/summary';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Audited Organizations for the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_audited_organizations_for_the_user.html
    */
    ListAllAuditedOrganizationsForUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/audited_organizations';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Audited Spaces for the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_audited_spaces_for_the_user.html
    */
    ListAllAuditedSpacesForUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/audited_spaces';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Billing Managed Organizations for the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_billing_managed_organizations_for_the_user.html
    */
    ListAllBillingManagedOrganizationsForUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/billing_managed_organizations';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Managed Organizations for the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_managed_organizations_for_the_user.html
    */
    ListAllManagedOrganizationsForUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/managed_organizations';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Managed Spaces for the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_managed_spaces_for_the_user.html
    */
    ListAllManagedSpacesForUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/managed_spaces';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Organizations for the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_organizations_for_the_user.html
    */
    ListAllOrganizationsForUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/organizations';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Spaces for the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_spaces_for_the_user.html
    */
    ListAllSpacesForUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/spaces';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Users
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/list_all_users.html
    */
    ListAllUsers: function (params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * Remove Audited Organization from the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/remove_audited_organization_from_the_user.html
    */
    RemoveAuditedOrganizationFromUser: function (guid, audited_organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/audited_organizations/" + audited_organization_guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Remove Audited Space from the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/remove_audited_space_from_the_user.html
    */
    RemoveAuditedSpaceFromUser: function (guid, audited_space_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/audited_spaces/" + audited_space_guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Remove Billing Managed Organization from the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/remove_billing_managed_organization_from_the_user.html
    */
    RemoveBillingManagedOrganizationFromUser: function (guid, billing_managed_organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/billing_managed_organizations/" + billing_managed_organization_guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Remove Managed Organization from the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/remove_managed_organization_from_the_user.html
    */
    RemoveManagedOrganizationFromUser: function (guid, managed_organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/managed_organizations/" + managed_organization_guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Remove Managed Space from the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/remove_managed_space_from_the_user.html
    */
    RemoveManagedSpaceFromUser: function (guid, managed_space_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/managed_spaces/" + managed_space_guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Remove Organization from the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/remove_organization_from_the_user.html
    */
    RemoveOrganizationFromUser: function (guid, organization_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/organizations/" + organization_guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Remove Space from the User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/remove_space_from_the_user.html
    */
    RemoveSpaceFromUser: function (guid, space_guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "/spaces/" + space_guid + "';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * Retrieve a Particular User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/retrieve_a_particular_user.html
    */
    RetrieveUser: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * Updating a User
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/195/users/updating_a_user.html
    */
    UpdateUser: function (guid, value, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/users/" + guid + "';
      config.method = 'PUT';
      config.data = value;
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();
