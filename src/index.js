// Returns true if executing in the Percy rendering environment
module.exports = function() {
  var hasHostname = typeof window === 'object' && window.location && window.location.hostname;
  return hasHostname && /proxyme\.percy\.io|renderer\.percy\.local/.test(window.location.hostname);
}
