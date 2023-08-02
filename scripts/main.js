let sml = document.querySelector('.small');
let biger = document.querySelector('.big');

sml.addEventListener( 'click', (ev)=> {
    sml.classList.add('open');
});
console.log (sml);

biger.addEventListener( 'mousemove', (ev)=> {
    sml.classList.remove('open');
});

let lft = document.querySelector('.left');
let droEl = document.querySelector('.door');
console.log('lft');
console.log('droEl');

droEl.addEventListener( 'click', (ev)=> {
    lft.classList.add('dropen');
});
 lft.addEventListener( 'mousemove', (ev)=>{
    lft.classList.remove('dropen');
 });