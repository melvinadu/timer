let commandLineObject = process.argv.slice(2);

const timer = function (commandLineObject) {

  for (let element of commandLineObject) {
    if (Number(element) >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, element * 1000);
    }
  } 
}
  

timer(commandLineObject);