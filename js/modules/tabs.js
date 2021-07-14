const tabItem = document.querySelector('.tab_panel');
let tabContents = document.querySelectorAll('.tab_content');

export default () => {       
    tabItem.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains('tab_item')) return;

        let number = evt.target.dataset.number;

        for (let i = 0; i < tabItem.children.length; i++) {
            tabItem.children[i].classList.remove('tab_item-active');
        }

        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = 'none';
            
        }
        evt.target.classList.add('tab_item-active');  
        
        tabContents[number - 1].style.display = 'block';
    })
   
}