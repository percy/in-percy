// Returns true if executing in the Percy rendering environment
module.exports = function() {
  var hasHostname = typeof window === 'object' && window.location && window.location.hostname;
  return hasHostname && window.location.hostname.match('proxyme.percy.io');
}
