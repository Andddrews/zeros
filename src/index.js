module.exports = function getZerosCount(number) {
  var count = 0;
  var devider = 5;
  do {
    var c = Math.floor(number/devider);
    count += c;
    devider *= 5;
  } while (c);
  return count;
}
