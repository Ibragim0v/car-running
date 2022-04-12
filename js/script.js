m=0;
var y;
var x = document.querySelector("#car")
function start()
{
    y = setInterval(run, 100);
    
    function run()
    {
        
        if (m==1300) {
            clearInterval(y);
            m=0;
        }else {
            m+=5;
            x.style.marginLeft = m + "px"
        }
    }
}

function stop()
{
    clearInterval(y);
}