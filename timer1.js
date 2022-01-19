let seconds = process.argv.slice(2);

const soundDing = function(time) {
  setTimeout(() => {
    process.stdout.write('\x07' + time + " seconds ding \n");
  }, time * 1000);
};

for (const second of seconds) {
  let sec = Number(second);
  
  if(sec < 0 || isNaN(sec)) {
    continue;
  }
  soundDing(sec);
}
