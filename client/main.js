import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    const newCount = instance.counter.get() + 1;
    instance.counter.set(newCount);
    Meteor.call("computeHash", String(newCount), function (err, hash) {
      console.log("hash of", newCount, hash);
    });
  },
});
