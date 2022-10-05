

// Javascript code
function AddList()
{
		const input=prompt();
    var select=document.getElementById('list');
    var newoption=document.createElement('option');
    newoption.value=input;
    newoption.innerHTML=input;
    select.add(newoption);
}
function Display()
{
	var val=document.getElementById('list');
  var displaylist=document.getElementById('displaylist');
  for(var i=0;i<val.length;i++)
  {
  	var p=document.createElement('p');
  	p.innerText=val.options[i].text;
    displaylist.appendChild(p);
  }
}

function Remove()
{
	var val=document.getElementById('list');
  val.remove(val.selectedIndex);
}
