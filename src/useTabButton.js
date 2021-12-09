export function useTabButton(targetId){
    if(targetId.target.id === 'product-add-menu'){
        const $productAddContent = document.getElementById('product-add-content')
        const $show = document.querySelector('.show')

        $productAddContent.classList.remove('hide')
        $productAddContent.classList.add('show')
        $show.classList.remove('show')
        $show.classList.add('hide')
    }
    if(targetId.target.id === 'vending-machine-manage-menu'){
        //const $productAddContent = document.querySelector('#vending-machine-manage-content')
        const $productAddContent = document.getElementById('vending-machine-manage-content')
        const $show = document.querySelector('.show')

        $productAddContent.classList.remove('hide')
        $productAddContent.classList.add('show')
        $show.classList.remove('show')
        $show.classList.add('hide')
    }
    if(targetId.target.id === 'product-purchase-menu'){
        //const $productAddContent = document.querySelector('#vending-machine-manage-content')
        const $productAddContent = document.getElementById('product-purchase-content')
        const $show = document.querySelector('.show')

        $productAddContent.classList.remove('hide')
        $productAddContent.classList.add('show')
        $show.classList.remove('show')
        $show.classList.add('hide')
    }
}