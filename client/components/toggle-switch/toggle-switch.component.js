'use strict';

import angular from 'angular';

export class ToggleSwitchComponent {
  on;
  onChange;

  $onInit() {
    if(this.on == null) {
      this.on = false;
    }
    if(!this.knobClass) {
      this.knobClass = 'knob-on-off';
    }
  }

  handleToggleClick() {
    this.on = !this.on;

    if(this.onChange) {
      this.onChange({ on: this.on });
    }
  }
}

export default angular.module('toggleSwitch', [])
  .component('toggleSwitch', {
    template: require('./toggle-switch.html'),
    controller: ToggleSwitchComponent,
    controllerAs: 'vm',
    bindings: {
      on: '=?',
      onChange: '&?',
      knobClass: '@',
    },
  })
  .name;
