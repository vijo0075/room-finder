import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.roomNumber.onCreated(
  function helloOnCreated() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://daresay-dev.eu-gb.cf.appdomain.cloud/innovativa/A81758FFFE03BC34/2019:12:03%2013:00:00/2019:12:03%2013:55:00/10/139kTnm10ksR', true);

    request.onload = function() {
      var data = JSON.parse(this.response);

      data.forEach(object => {
        console.log(object.temperature)
      })
    }

    request.send();
});
