import { drawPage } from './drawPage.js'
import { useTabButton } from './useTabButton.js'

    drawPage()

    function gameStart(){
        document.addEventListener('click',function(e){
            useTabButton(e)
        })
    }


    window.onload = function(){
        gameStart()
    }
