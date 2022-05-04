export default function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  throw new Error('string\'s length must be between 1 and 10');
}
