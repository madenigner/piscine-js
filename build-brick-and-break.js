function build(num) {
   

    for (let i = 1 ; i <= num; i++) {
     setTimeout( function(){
         let brick = document.createElement("div") 
         // let br = document.getElementsByTagName("div")
         
         brick.id = `brick-${i}`
         if (i % 3 == 2 ) {
         brick.dataset.foundation = true
         }
         // document.body
     document.body.appendChild(brick)
         }, i*100) 
         }
     
  
 
}
function repair(...ids) {
ids.forEach(id => {
 let brick = document.getElementById(id);
 if (brick.getAttribute("foundation")) {
     (brick.dataset.repaired = "In progress")
 }else {
     (brick.dataset.repaired= true)
     }
})
}
function destroy() {
let bricks = document.getElementsByTagName("div")
bricks[bricks.length-1].remove()
}
export{build,repair,destroy}
