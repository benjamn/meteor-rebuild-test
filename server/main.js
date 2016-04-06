import { Meteor } from 'meteor/meteor';
import bcrypt from "bcrypt";

const genSalt = Promise.denodeify(bcrypt.genSalt);
const hash = Promise.denodeify(bcrypt.hash);

Meteor.methods({
  computeHash(str) {
    const salt = genSalt(10).await();
    return hash(str, salt).await();
  }
});
