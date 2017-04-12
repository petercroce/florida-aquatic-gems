RegExp.escape = function(str)
{
  return (str+'').replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}

function sanitizeHttpDomain(str, domain)
{
  // domain is stripped of subdomain (www)
  var re = new RegExp(RegExp.escape("http://") + domain, "gi");
  str = str.replace(re, "https://" + domain);

  var reWWW = new RegExp(RegExp.escape("http://www.") + domain, "gi");
  str = str.replace(reWWW, "https://www." + domain);

  return str;
}

function sanitizeHttpCurrentDomain(str)
{
  var currentDomain = window.location.hostname;
  if(currentDomain.startsWith("www."))
    currentDomain = currentDomain.substring(4);

  return sanitizeHttpDomain(str, currentDomain)
}
