angular.module('phonePreview', [])

.controller('bodyController', ['$scope', '$sce', function ($scope, $sce) {
  $scope.pageData = {
    iFrameUrl: $sce.trustAsResourceUrl('http://3.145.54.150/#/')
  }
      
  $scope.updateIFrameUrl = function (newIFrameUrl) {
    $scope.pageData.iFrameUrl = $sce.trustAsResourceUrl(newIFrameUrl);
  }

  $scope.goBack = function() {
    window.history.back();
  }
}]);
