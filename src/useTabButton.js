function tabMove($selectedContent){
    const $show = document.querySelector('.show')

    if($show.id !== $selectedContent.id){
        $selectedContent.classList.remove('hide')
        $selectedContent.classList.add('show')
        $show.classList.remove('show')
        $show.classList.add('hide')        
    }
}

export function useTabButton(e){
    let $selectedContent = ''
    if(e.target.id === 'product-add-menu'){
        $selectedContent = document.querySelector('#product-add-content')
        tabMove($selectedContent)
    }
    if(e.target.id === 'vending-machine-manage-menu'){
        $selectedContent = document.querySelector('#vending-machine-manage-content')
        tabMove($selectedContent)
    }
    if(e.target.id === 'product-purchase-menu'){
        $selectedContent = document.querySelector('#product-purchase-content')
        tabMove($selectedContent)
    }
}
