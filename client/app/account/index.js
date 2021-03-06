'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import mongooseError from '../../components/mongoose-error/mongoose-error.directive';

import routing from './account.routes';
import login from './login';
import signup from './signup';
import forgotUsername from './forgot-username';
import resetpassword from './resetpassword';
import updatepassword from './updatepassword';

export default angular.module('statEngineApp.account', [uiRouter, login, signup, forgotUsername, resetpassword, updatepassword, mongooseError])
  .config(routing)
  .name;
