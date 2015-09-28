import Ember from 'ember';

export function bodyDisplay(params) {
  var str = params[0];
  str=str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link: $1) ");
  str=str.replace(/<(?:.|\s)*?>/g, "");
  str=str.replace(/b##/gi, "<strong>");
  str=str.replace(/##b/gi, "</strong>");
  str=str.replace(/i##/gi, "<em>");
  str=str.replace(/##i/gi, "</em>");
  str=str.replace(/\n/gi, "<br>")
  return str;
}

export default Ember.Helper.helper(bodyDisplay);
