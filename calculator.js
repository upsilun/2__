const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const handleInput = () => {
  rl.question('~ ', (input) => {
    if (['exit', 'quit', 'close', 'end'].includes(input.toLowerCase())) {
      rl.close();
    }
    else {
      try {
        const result = evalInput(input);
        console.log(`${result}`);
        handleInput();
      } catch (error) {
        console.error('Error:', error.message);
        handleInput();
      }
    }
  });
};

const evalInput = (expression) => {
  return eval(expression.replace(/sin/g, 'Math.sin')
                        .replace(/cos/g, 'Math.cos')
                        .replace(/tan/g, 'Math.tan')
                        .replace(/cot/g, '1 / Math.tan')
                        .replace(/csc/g, '1 / Math.sin')
                        .replace(/sec/g, '1 / Math.cos')
                        .replace(/pi/g, 'Math.PI')
                        .replace(/\^/g, '**'));
};

handleInput();
