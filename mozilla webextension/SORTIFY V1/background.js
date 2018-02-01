
function showLiesureTabs() {
  var creating = browser.tabs.create({
    url:"https://www.facebook.com/"
  });
  var creating = browser.tabs.create({
    url:"https://www.twitter.com/"
  });
}
function showLearnTabs() {
  var creating = browser.tabs.create({
    url:"https://www.google.com/"
  });
  var creating = browser.tabs.create({
    url:"https://in.udacity.com/courses/all"
  });
}
function showWorkTabs() {
  var creating = browser.tabs.create({
    url:"https://www.gmail.com"
  });
  var creating = browser.tabs.create({
    url:"http://www.github.com"
  });
}
function showHappyTabs() {
  var creating = browser.tabs.create({
    url:"http://www.facebook.com"
  });
  var creating = browser.tabs.create({
    url:"http://www."
  });
}
function showSadTabs() {
  var creating = browser.tabs.create({
    url:"https://tinybuddha.com"
  });
  var creating = browser.tabs.create({
    url:"https://psychologytoday.com"
  });
}
function showCustomisedTabs() {
  url:"f1.html"
}

browser.runtime.onMessage.addListener(function(receivedMessage){
  if(receivedMessage.action=="showLiesureTabs")
  showLiesureTabs();
  else if(receivedMessage.action=="showLearnTabs")
  showLearnTabs();
  else if(receivedMessage.action=="showWorkTabs")
  showWorkTabs();
  else if(receivedMessage.action=="showHappyTabs")
  showHappyTabs();
  else if(receivedMessage.action=="showSadTabs")
  showSadTabs();
  else if(receivedMessage.action=="showCustomisedTabs")
  //alert("Hello");
  showCustomisedTabs();

});

