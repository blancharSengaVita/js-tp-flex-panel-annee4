document.documentElement.classList.add('js-enabled');

const panels = document.querySelectorAll('.panel');


for (const panel of panels) {
  panel.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('open');
  });

  panel.addEventListener('transitionend',(e)=>{
    if(e.propertyName.includes('flex')){
      e.currentTarget.classList.toggle('open-active');
    }
  });
}
