import { Meteor } from 'meteor/meteor';
import bcrypt from "bcrypt";

Meteor.methods({
  computeHash(str) {
    return new Promise(resolve => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(str, salt, (err, hash) => {
          resolve("oyez: " + hash);
        });
      });
    });
  }
});
