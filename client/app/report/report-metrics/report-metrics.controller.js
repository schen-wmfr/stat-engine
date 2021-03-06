'use strict';

import moment from 'moment-timezone';

let _;

export default class ReportMetricsController {
  /*@ngInject*/
  constructor($state, $stateParams, currentPrincipal, report, reportMetrics, fireDepartmentUsers) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.FireDepartment = currentPrincipal.FireDepartment;
    this.report = report;
    this.reportMetrics = reportMetrics;
    this.fireDepartmentUsers = fireDepartmentUsers;
  }

  async loadModules() {
    _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  }

  async $onInit() {
    await this.loadModules();

    const allUsers = [];
    const viewers = [];
    this.fireDepartmentUsers.Users.forEach(u => allUsers.push(u.name));

    if(this.reportMetrics) {
      const viewerTableData = [];
      this.reportMetrics.metrics.forEach(metric => {
        viewers.push(metric.User.name);
        viewerTableData.push({
          user: metric.User.name,
          views: metric.views
        });
      });
      this.viewerTableOptions = {
        data: viewerTableData,
      };

      const unviewed = _.difference(allUsers, viewers);
      const unviewedTableData = [];
      unviewed.forEach(name => unviewedTableData.push({ name }));
      this.unviewedTableOptions = {
        data: unviewedTableData
      };

      this.initialized = true;
    }
  }

  pageBack() {
    const dest = moment(this.$stateParams.name, 'YYYY-MM-DD')
      .subtract(1, 'day')
      .format('YYYY-MM-DD');
    this.$state.go('site.report.metrics', {
      type: this.$stateParams.type,
      name: dest
    });
  }

  pageForward() {
    const dest = moment(this.$stateParams.name, 'YYYY-MM-DD')
      .add(1, 'day')
      .format('YYYY-MM-DD');
    this.$state.go('site.report.metrics', {
      type: this.$stateParams.type,
      name: dest
    });
  }

  view() {
    this.$state.go('site.report.view', {
      type: this.$stateParams.type,
      name: this.$stateParams.name,
    });
  }
}
