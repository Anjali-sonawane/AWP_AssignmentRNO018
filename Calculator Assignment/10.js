function compute()
{
    var x=document.getElementById('num1').value;
    var y=document.getElementById('num2').value;
    
    var z=0;
    if(document.getElementById('Add'))
    {
        z=x+y;
    }
    document.getElementById('ans').value=z;

    if(document.getElementById('sub'))
    {
        z=x-y;
    }
    document.getElementById('ans').value=z;


}