import { fizzBuzz } from "./fizz-buzz.js";

type Logger = (message: string) => void;

function main(log: Logger) {
  for (let i = 1; i <= 100; i++) {
    log(fizzBuzz(i));
  }
}

main(console.log);
