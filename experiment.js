
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
}
