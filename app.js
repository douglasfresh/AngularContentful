var client = contentful.createClient({
  // ID of Space
  space: 'bhbl6r0rag31',

  // A valid access token within the Space
  accessToken: '9249ff3590642679bcf612864e139395ad456fdad79e3870b78f9221da8d4726',

  // Enable or disable SSL. Enabled by default.
  secure: true,

  // Set an alternate hostname, default shown.
  host: 'cdn.contentful.com',

  // Resolve links to entries and assets
  resolveLinks: true,

});

function ContentfulCtrl($scope, $q) {
  var entries = $q.when(client.entries());

  entries.then(function(entries) {
    entries.forEach(function(entry) {
      switch(entry.sys.contentType.sys.id) {
        case "brand":
          $scope.brand = entry.fields;
          break;
        case "contact":
          $scope.contact = entry.fields;
          break;
        case "design":
          $scope.design = entry.fields;
          break;
        case "section":
          $scope.sections.push(entry.fields);
          break;
        default:
          break;
      } 
    });
  });
}

angular.module('contentful', []).
  controller('ContentCtrl', ContentCtrl);