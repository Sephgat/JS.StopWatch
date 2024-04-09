export function generateInitialHTML() {
    let HTML = generateCountDownHTML()
    for(let i = 0; i < methodsnames.length; i++) {
        HTML += generateTimerBtn(methodsnames[i])
    }
    HTML += generatefooter();
    return HTML
}
export function generateHeader(){
    return ` <div class="h1 p-5 mt-4 text-center bg-light rounded">
    <input type="number" id="hours" value="0" style="width: 75px;"> :
    <input type="number" id="minutes" value="0" style="width: 75px;"> : 
    <input type="number" id="seconds" value="0" style="width: 75px;">  
  </div>
  <div id="controls">
    <div class="container text-center">`
}
export function generateTimerBtn(mthd){
    return ` 
    <button class="btn btn-lg btn-success" data-action="${mthd}" id="controls">
    ${mthd}
    </button>`
}
export function generateCountDownHTML(){
    return ` <div class="h1 p-5 mt-4 text-center bg-light rounded" id="Timer">
  </div>
  <div id="controls">
    <div class="container text-center">`
}
export function generatefooter(){
    return`
        </div>
    </div>`
}