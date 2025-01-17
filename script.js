const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.main-content');


function pageTransitions(){
     // Button click active class
     for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventlistener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }

    // sections active class
    allsections.addEventlistener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other btn
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
            
           
    })
}

pageTransitions();