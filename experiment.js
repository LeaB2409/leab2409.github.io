
function reqListener () {
    var obj = JSON.parse(this.responseText);
    consoleText(obj.Greetings, obj.Entry, obj.Category);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "vals.json");
oReq.send();

// function([string1, string2],target id,[color1,color2])
function consoleText(greetings, words, category) {
  const day = new Date();
  var first_day = new Date('02/12/2020');
  var difference = new Date().getTime() - new Date('02/12/2020').getTime();
  var days = Math.ceil(difference / (1000 * 3600 * 24));
  var word_entry = days % words.length;
  var greeting_entry = days % greetings.length;
  var greeting = "Hello ".concat(greetings[greeting_entry]);
  var word = words[word_entry];
  var cat = category[word_entry]
  // cat[0] = cat[0].toLowerCase()
  // cat = "Here is ".concat(cat);
  cat = cat.concat(":")
  var colors = ["#2191fb","#2191fb","#ef3c2d"];
  var visible1 = true;
  var visible2 = false;
  var visible3 = false;
  var console1 = false;
  var console2 = false;
  var console3 = false;
  var target1 = document.getElementById("text1");
  var target2 = document.getElementById("text2");
  var target3 = document.getElementById("text3");
  target1.setAttribute('style', 'color:' + colors[0]);
  target2.setAttribute('style', 'color:' + colors[1]);
  target3.setAttribute('style', 'color:' + colors[2]);
  var con1 = document.getElementById('console1');
  var con2 = document.getElementById('console2');
  var con3 = document.getElementById('console3');
  var letterCount1 = 1;
  var letterCount2 = 1;
  var letterCount3 = 1;
  var x = 1;
  var waiting = false;
  var console2_wait = true;
  var console3_wait = true;
  var go  = false;
  window.setTimeout(function() {
    go = true;
    }, 4000) 
  window.setInterval(function() {
    if (go && !console1){
        if (letterCount1 === 0 && waiting === false) {
          waiting = true;
          target1.innerHTML = greeting.substring(0, letterCount1)
          window.setTimeout(function() {
            x = 1;
            letterCount1 += x;
            waiting = false;
          }, 1000)
        } else if (letterCount1 === greeting.length + 1 && waiting === false) {
          console1 = true;
            visible1 = false;
            waiting = true
            window.setTimeout(function() {
              console2_wait = false;
              }, 2000) 
            window.setTimeout(function() {
              waiting = false;
              }, 3000)
        } else if (waiting === false) {
          target1.innerHTML = greeting.substring(0, letterCount1)
          letterCount1 += x;
        }
      } else if (go && console1 && !console2) {
      if (letterCount2 === 0 && waiting === false) {
          waiting = true;
          target2.innerHTML = cat.substring(0, letterCount2)
          window.setTimeout(function() {
            x = 1;
            letterCount2 += x;
            waiting = false;
          }, 1000)
        } else if (letterCount2 === cat.length + 1 && waiting === false) {
          console2 = true;
            waiting = true
            
            window.setTimeout(function() {
              console3_wait = false;
              }, 2000) 
            window.setTimeout(function() {
              waiting = false;
              }, 3000) 
        } else if (waiting === false) {
          target2.innerHTML = cat.substring(0, letterCount2)
          letterCount2 += x;
        }
    } else if (go) {
      if (letterCount3 === 0 && waiting === false) {
        waiting = true;
        target3.innerHTML = word.substring(0, letterCount3)
        window.setTimeout(function() {
          x = 1;
          letterCount3 += x;
          waiting = false;
        }, 1000)
      } else if (letterCount3 === word.length + 1 && waiting === false) {
        if (console3) {
          console.log("Reversing")
          waiting = true;
          window.setTimeout(function() {
          x = -1;
          letterCount3 += x;
          waiting = false;
          }, 1000) 
        }
        else {
          console.log("Hello")
          console3 = true;
          waiting = true
          window.setTimeout(function() {
            waiting = false;
            }, 3000) 
        }
        
      } else if (waiting === false) {
        target3.innerHTML = word.substring(0, letterCount3)
        letterCount3 += x;
      }
    }
  }, 120)
  window.setInterval(function() {
    if (visible1 === true) {
      con1.className = 'console-underscore hidden'
      if (!console1) {
        visible1 = false;
      }

    } else if (visible1 == false){
      con1.className = 'console-underscore'

      visible1 = true;
      
    }
    if (visible2 === true) {
      con2.className = 'console-underscore hidden'
      if (!console2) {
        visible2 = false;
      }

    } else if (console1 && !console2_wait){
      con2.className = 'console-underscore'

      visible2 = true;
      
    }
    if (visible3 === true) {
      con3.className = 'console-underscore hidden'
      if (!console3) {
        visible3 = false;
      }

    } else if (console2 && !console3_wait){
      con3.className = 'console-underscore'

      visible3 = true;
      
    }
  }, 400)
  
}
