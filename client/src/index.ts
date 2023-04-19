import { Havel, Hakimi } from './havel-hakimi';
import { inputPassed } from "./inputPassed";
import { isNumeric } from "./is-numeric";
import { toggleDarkMode } from './toggle-darkmode';
import { estimateVolume } from './montecarlo-integration';
import { root, poly } from './group-theory';

const button: HTMLElement = document.getElementById('button')!;
const terminal: HTMLElement = document.getElementById('answer')!;
const timestamp: HTMLElement = document.getElementById('time-stamp')!;
const inputElement: HTMLInputElement = document.getElementById('editor') as HTMLInputElement;

toggleDarkMode();

let index = 0;

const today = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekday = weekdays[today.getDay()];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[today.getMonth()];
const dayOfMonth = today.getDate();
const year = today.getFullYear();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
timestamp.innerHTML = `Timestamp: ${weekday} ${monthName} ${dayOfMonth}, ${year} at ${hours}:${minutes}:${seconds}`;

button.addEventListener('click', (e: Event) => {
    index++;
    runCode()
    inputElement.value = '';
    console.log("triggered");
});

function interpret(code: string): any {
    const lines = code.trim().split('\n');
    var line, parts;
    

    for (let i = 0; i < lines.length; i++) {
        line = lines[i].trim();
        parts = line.match(/^(\w+)\((.+)\)$/);
    }

    
    if (parts === null && line === "hypermath -version") {
        terminal.innerHTML += '<div class="input-container">' + `<div class='prompt-wrapper'><span class='prompt'>[${index}]:</span></div>` + `<div class='input-wrapper'> <span class='variable'>hypermath -version</span><br><br> <span class='input'>1.0.0</span></div>` + '</div>';
    }

    else if (parts === null) {
        terminal.innerHTML += '<div class="input-container">' + `<div class='prompt-wrapper'><span class='prompt'>[${index}]:</span></div>` + `<div class='input-wrapper'><span class='input'>${inputElement.value}</span></div>` + '</div>' + '<div class="input-container">' + `<div class='prompt-wrapper'></div>` + `<div class='input-wrapper warningBG'><span class='cell'>Cell </span><span class='line'>ln[${index}], line ${index} </span> <br> <span class="line"> ----> <span class='highlight'>${inputElement.value}</span></span> <br><br> <span class='warning'>NameError:</span> name '${inputElement.value}' is not defined</div>` + '</div>';
    }

    else if (parts && parts.length > 1) {
        const value = parts[2].split(',');

        if (parts[1] === "estimateVolume" && value.length === 2 && isNumeric(value[0]) && isNumeric(value[1])) {
            (async () => {
                try {
                  const response = await fetch(
                    `http://localhost:8081/estimateVolume?radius=${parseInt(value[0])}&dimension=${parseInt(value[1])}`,
                    {
                      method: 'GET',
                    }
                  );
                  const data = await response.json();
                  terminal.innerHTML += inputPassed(index, "estimateVolume", parts[2], data);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              })();
            
        }
        else if (parts[1] === "havelHakimi") {
            try {
              let removeBrackets = "";
              for (let i = 0; i < parts[2].length; i++) {
                if (parts[2][i] !== "[" && parts[2][i] !== "]") {
                  removeBrackets += parts[2][i];
                }
              }

              console.log(removeBrackets);
              
              
                console.log(`http://localhost:8000/hypermath/hakimi_sequence/${removeBrackets}/`);
                (async () => {
                  try {
                    const response = await fetch(
                      `http://localhost:8000/hypermath/hakimi_sequence/${removeBrackets}/`,
                      {
                        method: 'GET',
                      }
                    );
                    const data = await response.text();
                    terminal.innerHTML += inputPassed(index, "estimateVolume", parts[2], data);
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
                })();
            } catch (error) {
                terminal.innerHTML += '<div class="input-container">' + `<div class='prompt-wrapper'><span class='prompt'>[${index}]:</span></div>` + `<div class='input-wrapper'><span class='input'>${inputElement.value}</span></div>` + '</div>' + '<div class="input-container">' + `<div class='prompt-wrapper'></div>` + `<div class='input-wrapper warningBG'><span class='cell'>Cell </span><span class='line'>ln[${index}], line ${index} </span> <br> <span class="line"> ----> <span class='highlight'>${parts[2]}</span></span> <br><br> <span class='warning'>MSPException["VariableError"]</span></div>` + '</div>';
            }
        }
        else if (parts[1] === "polynomialGroup") {
            const splitPolynomial = parts[2].split(",");
            if (splitPolynomial.length > 1) {
                console.log(splitPolynomial[0], splitPolynomial[1].trim());
                let polynomial = JSON.stringify(poly(splitPolynomial[0], parseInt(splitPolynomial[1].trim())));
                terminal.innerHTML += inputPassed(index, "polynomialGroup", parts[2], polynomial);
            }
            else {
                terminal.innerHTML += '<div class="input-container">' + `<div class='prompt-wrapper'><span class='prompt'>[${index}]:</span></div>` + `<div class='input-wrapper'><span class='input'>${inputElement.value}</span></div>` + '</div>' + '<div class="input-container">' + `<div class='prompt-wrapper'></div>` + `<div class='input-wrapper warningBG'><span class='cell'>Cell </span><span class='line'>ln[${index}], line ${index} </span> <br> <span class="line"> ----> <span class='highlight'>${parts[2]}</span></span> <br><br> <span class='warning'>MSPException["VariableError"]</span></div>` + '</div>';
            }
        }

        else {
            terminal.innerHTML += '<div class="input-container">' + `<div class='prompt-wrapper'><span class='prompt'>[${index}]:</span></div>` + `<div class='input-wrapper'><span class='input'>${inputElement.value}</span></div>` + '</div>' + '<div class="input-container">' + `<div class='prompt-wrapper'></div>` + `<div class='input-wrapper warningBG'><span class='cell'>Cell </span><span class='line'>ln[${index}], line ${index} </span> <br> <span class="line"> ----> <span class='highlight'>${parts[2]}</span></span> <br><br> <span class='warning'>MSPException["VariableError"]</span></div>` + '</div>';
        }
    }
}

function runCode(): void {
    const code = (<HTMLInputElement>document.getElementById('editor')).value;
    interpret(code);
}





