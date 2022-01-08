var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
var url = 'www.google.com';

if (url.match(regex)) {
  alert("Successful match");
} else {
  alert("No match");
}