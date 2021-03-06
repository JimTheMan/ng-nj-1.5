export function LoginBar() {
  'ngInject';

  let directive = {
    restrict: '',
    templateUrl: 'app/header/login-bar/login-bar.template.html',
    scope: {},
    controller: LoginBarController,
    controllerAs: 'self',
    bindToController: true
  };

  return directive;

  /** @ngInject */
  function LoginBarController(AuthenticationService, $log) {
  // function LoginBarController( $log) {
    var self = this;
    self.loginUser = '';
    self.feedbackMessage = '';
    self.authenticatedUser = "";
    self.userLoggedIn = false;

    self.login = function () {


      // self.poop = AuthenticationService.getPoop();
      // $log.log('poop is ' + self.poop);

      self.feedbackMessage = AuthenticationService.login(self.loginUser)
        .then(function (data) {

          self.userLoggedIn = true;
          self.authenticatedUser = data;

        }, function (error) {
          $log.log("promise rejected!" + error);
          self.feedbackMessage = error;
        });

      $log.log("feedbackMessage is :" + self.feedbackMessage);

    }

  }
}


