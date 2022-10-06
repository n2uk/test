
var array = [6, 2, 3, 4, 8, 7, 5, 1]
function DrawArray() {
    var html = '';
    for (var i=0; i<array.length; i++){
        html+='<div class="block" id="block-'+array[i]+'">'+array[i]+'</div>';
    }
    document.querySelector('.blocks-wrapper').innerHTML+=html;
    // <div class="block" id="block-6">6</div>
}
function BubbleSort(){
    var orderCheckingFlag=true;
    var i = 0;
    var j = 0;
        while(orderCheckingFlag){
        if(array[i]>array[i+1]){
            var tempVarA=array[i];
            var tempVarB=array[i+1];
            array[i]=tempVarB;
            array[i+1]=tempVarA;
        }
        else{
            j++;
        }
        i++;
        if(j>array.length-1){
            orderCheckingFlag=false;
        }
        if (i>array.length-1){
            i=0;
            j=0;
        }               
    }        
    }

function GnomeSort(){
    var i=0;
        while (i<=8){   
        if (array[i]>array[i+1]){
        var tempVarA = array[i];
        var tempVarB = array[i+1];
        array[i]=tempVarB;
        array[i+1] = tempVarA;
        if (i!=0){
        i--;       
        }
        else i++;
        }
        else i++;      
    
}

}
    GnomeSort();
    //BubbleSort();
window.onload = (function(){DrawArray()});
