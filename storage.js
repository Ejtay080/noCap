var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '';

imgArray[1] = new Image();
imgArray[1].src = '';

imgArray[2] = new Image();
imgArray[2].src = '';

imgArray[3] = new Image();
imgArray[3].src = '';

imgArray[4] = new Image();
imgArray[4].src = '';

imgArray[5] = new Image();
imgArray[5].src = '';

imgArray[6] = new Image();
imgArray[6].src = '';

imgArray[7] = new Image();
imgArray[7].src = '';

imgArray[8] = new Image();
imgArray[8].src = '';

imgArray[9] = new Image();
imgArray[9].src = '';

imgArray[10] = new Image();
imgArray[10].src = '';

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src)
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}