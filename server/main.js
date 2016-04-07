import { Meteor } from 'meteor/meteor';
import bcrypt from "bcrypt";

const salt = Promise.denodeify(bcrypt.genSalt)(10);
const hash = Promise.denodeify(bcrypt.hash);

Meteor.methods({
  computeHash(str) {
    return hash(str, salt.await()).await();
  }
});
