interface inputPassedFunction {
    (index: number, objectName: string, inputValue: string, inputResult: string): string;
  }
  
  const inputPassed: inputPassedFunction = (index, objectName, inputValue, inputResult) => {
    return '<div class="input-container">' + `<div class='prompt-wrapper'><span class='prompt'>[${index}]:</span></div>` + `<div class='input-wrapper'> <span class='variable'>${objectName}</span>(<span class="get-val">${inputValue}</span>)<br><br> <span class='input'>${inputResult}</span></div>` + '</div>';
}
  
  export { inputPassed };