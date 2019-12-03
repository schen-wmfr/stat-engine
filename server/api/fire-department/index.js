'use strict';

import {Router} from 'express';
import bodyParser from 'body-parser';

import * as auth from '../../auth/auth.service';

import * as controller from './fire-department.controller';

import imageUploadMiddleware from '../../util/image-upload-middleware';

const router = new Router();

router.get(
  '/',
  controller.search
);

router.get(
  '/:id',
  auth.isApiAuthenticated,
  auth.hasRole('user'),
  controller.get
);

router.get(
  '/:id/users',
  auth.isApiAuthenticated,
  auth.hasRole('user'),
  auth.hasFireDepartment,
  auth.hasActiveSubscription,
  controller.getUsers
);

router.post(
  '/',
  auth.isApiAuthenticated,
  bodyParser.json(),
  auth.hasRole('admin'),
  controller.create
);

router.put(
  '/:id',
  auth.isApiAuthenticated,
  bodyParser.json(),
  auth.hasRole('admin'),
  controller.edit
);

router.get(
  '/:id/:type/data-quality',
  auth.isApiAuthenticated,
  auth.hasRole('user'),
  controller.hasAdminPermission,
  controller.dataQuality
);

router.get(
  '/:id/:type/nfpa',
  auth.isApiAuthenticated,
  auth.hasRole('user'),
  controller.hasReadPermission,
  controller.nfpa
);

router.post(
  '/:id/refreshSubscription',
  auth.isApiAuthenticated,
  auth.hasRole('user'),
  auth.hasFireDepartment,
  controller.refreshSubscription,
);

router.post(
  '/:id/logo',
  auth.isApiAuthenticated,
  auth.hasRole('department_admin'),
  auth.hasFireDepartment,
  auth.hasActiveSubscription,
  controller.hasAdminPermission,
  imageUploadMiddleware,
);

router.param('id', controller.loadFireDepartment);

module.exports = router;
