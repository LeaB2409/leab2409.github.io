
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
  var to_writes = [greeting, cat, word];
  var colors = ["#2191fb","#2191fb","#ef3c2d"];
  // var writing1 = true;
  // var writing2 = true;
  // var writing3 = true;
  // var visible1 = true;
  // var visible2 = false;
  // var visible3 = false;
  // var console1 = false;
  // var console2 = false;
  // var console3 = false;
  var targets = [document.getElementById("text1"), document.getElementById("text2"), document.getElementById("text3")]
  // var target1 = document.getElementById("text1");
  // var target2 = document.getElementById("text2");
  // var target3 = document.getElementById("text3");
  targets[0].setAttribute('style', 'color:' + colors[0]);
  targets[1].setAttribute('style', 'color:' + colors[1]);
  targets[2].setAttribute('style', 'color:' + colors[2]);
  cons = [document.getElementById('console1'), document.getElementById('console2'), document.getElementById('console3')]
  // var con1 = document.getElementById('console1');
  // var con2 = document.getElementById('console2');
  // var con3 = document.getElementById('console3');
  // var letterCount1 = 1;
  // var letterCount2 = 1;
  // var letterCount3 = 1;
  var visible = true;
  var lettercounts = [1, 1, 1];
  var console_wait = true;
  var x = 1;
  var waiting = false;
  // var console2_wait = true;
  // var console3_wait = true;
  var go  = false;

  var write_count = 0;
  var writing = true;
  console.log(go)
  
  window.setTimeout(function() {
    go = true;
    
    }, 4000) 
  window.setTimeout(function() {
    console_wait = false;
      
  }, 2000)   

  window.setInterval(function() {
  if (go){
      if (lettercounts[write_count] == 0 && !waiting) {
        // If we have deleted the last row we need to wait, then reverse
        // and start writing again
        targets[write_count].innerHTML = to_writes[write_count].substring(0, lettercounts[write_count]);
        lettercounts[write_count] = 1;
        if (write_count == 0){
          console.log("Starting the writing again")
          x = 1;
          lettercounts[write_count] += x;
          console.log(lettercounts[write_count])
          waiting = true;
          console_wait = true;
          cons[write_count].className = 'console-underscore hidden';
          window.setTimeout(function() {
            console_wait = false;
          }, 4000) ;
          window.setTimeout(function() {
            waiting = false;
            }, 5000);
        }
        // Otherwise, we step back one row, hide the underscore below
        // and continue
        else{
          console.log("reverse")
          write_count -= 1;
          lettercounts[write_count] += x;
          cons[write_count+1].className = 'console-underscore hidden';
          console.log(lettercounts[write_count])
          console.log(to_writes[write_count].length + 1)
        }
      }

      else if (lettercounts[write_count] == to_writes[write_count].length + 1 && !waiting) {
        // If we have written the whole sentence and are at the end
        // we need to reverse
        if (write_count == 2){
          console.log()
          x = -1
          lettercounts[write_count] += x;
          waiting = true;
          console_wait = true;
          window.setTimeout(function() {
            console_wait = false;
          }, 4000) ;
          window.setTimeout(function() {
            waiting = false;
            }, 5000);

        }
        // Otherwise, we just hide this underscore and continue on the
        // next row
        else {
          waiting = true;
          console_wait = true;
          write_count += 1;
          cons[write_count-1].className = 'console-underscore hidden';
          window.setTimeout(function() {
                console_wait = false;
            }, 2000) ;
              window.setTimeout(function() {
                waiting = false;
                }, 3000);
        }
      }
      else if (!waiting){
        targets[write_count].innerHTML = to_writes[write_count].substring(0, lettercounts[write_count]);
        lettercounts[write_count] += x;
      }
    }
  }, 120)
    window.setInterval(function() {
      if (visible === true && !console_wait) {
        cons[write_count].className = 'console-underscore hidden'
        visible = false;
  
      } else if (!console_wait){
        cons[write_count].className = 'console-underscore'
  
        visible = true;
        
      }
    }, 400)
  

  // window.setInterval(function() {
  //   if (go && !console1){
  //       if (letterCount1 === 0 && waiting === false) {
  //         console1 = false
  //       } else if (letterCount1 === greeting.length + 1 && waiting === false) {
  //         console1 = true;
  //           visible1 = false;
  //           waiting = true
  //           window.setTimeout(function() {
  //             console2_wait = false;
  //             }, 2000) 
  //           window.setTimeout(function() {
  //             waiting = false;
  //             }, 3000)
  //       } else if (waiting === false) {
  //         target1.innerHTML = greeting.substring(0, letterCount1)
  //         letterCount1 += x;
  //       }
  //     } else if (go && console1 && !console2) {
  //     if (letterCount2 === 0 && waiting === false) {
  //         waiting = true;
  //         target2.innerHTML = cat.substring(0, letterCount2)
  //         window.setTimeout(function() {
  //           x = 1;
  //           letterCount2 += x;
  //           waiting = false;
  //         }, 1000)
  //       } else if (letterCount2 === cat.length + 1 && waiting === false) {
  //         console2 = true;
  //           waiting = true
            
  //           window.setTimeout(function() {
  //             console3_wait = false;
  //             }, 2000) 
  //           window.setTimeout(function() {
  //             waiting = false;
  //             }, 3000) 
  //       } else if (waiting === false) {
  //         target2.innerHTML = cat.substring(0, letterCount2)
  //         letterCount2 += x;
  //       }
  //   } else if (go) {
  //     if (letterCount3 === 0 && waiting === false) {
  //       console2 = false
  //       console3 = false;
  //       waiting = true;
  //       target3.innerHTML = word.substring(0, letterCount3)
  //       // window.setTimeout(function() {
  //       //   x = 1;
  //       //   letterCount3 += x;
  //       //   waiting = false;
  //       // }, 1000)
  //     } else if (letterCount3 === word.length + 1 && waiting === false) {
  //       if (console3) {
  //         console.log("Reversing")
  //         waiting = true;
  //         window.setTimeout(function() {
  //         x = -1;
  //         letterCount3 += x;
  //         waiting = false;
  //         }, 1000) 
  //       }
  //       else {
  //         console.log("Hello")
  //         console3 = true;
  //         waiting = true
  //         window.setTimeout(function() {
  //           waiting = false;
  //           }, 3000) 
  //       }
        
  //     } else if (waiting === false) {
  //       target3.innerHTML = word.substring(0, letterCount3)
  //       letterCount3 += x;
  //     }
  //   }
  // }, 120)
  // window.setInterval(function() {
  //   if (visible1 === true) {
  //     con1.className = 'console-underscore hidden'
  //     if (!console1) {
  //       visible1 = false;
  //     }

  //   } else if (visible1 == false){
  //     con1.className = 'console-underscore'

  //     visible1 = true;
      
  //   }
  //   if (visible2 === true) {
  //     con2.className = 'console-underscore hidden'
  //     if (!console2) {
  //       visible2 = false;
  //     }

  //   } else if (console1 && !console2_wait){
  //     con2.className = 'console-underscore'

  //     visible2 = true;
      
  //   }
  //   if (visible3 === true) {
  //     con3.className = 'console-underscore hidden'
  //     if (!console3) {
  //       visible3 = false;
  //     }

  //   } else if (console2 && !console3_wait){
  //     con3.className = 'console-underscore'

  //     visible3 = true;
      
  //   }
  // }, 400)
  
}
