document.getElementById("text").innerHTML = "Hello Rob"

--------------------

function test()
{
  return 5;
}

var a = test();

alert(a);

-----------------------------------------------------------
function add(x,y)
{
  return x + y;
}

var sumOfVariables = add(1,3);

alert(sumOfVariables);

-------------------------------------------------------------

function divide(x,y)
{
  if (y === 0)
    return "You can't divide by Zero!!!"

    return x / y
}

var result  = divide(10,5);

alert(result);

---------------------------------------------------------------
function test() {

  alert("sample");

}

----------------------------------------------------------------
test();

var x = document.getElementById("programmingCourses").childNodes[0].firstChild;

 alert(x.nodeValue);

----------------------------------------------------------

var programmingCourses = document.getElementById("programmingCourses").getElementByTagName("li");

alert(programmingCourses[0].innerHTML);

--------------------------------------------------

var multiplicationTable = "";

for (var i = 0; i <= 10; i++) {

  for(var j = 1; j <= 2; j==)
  muliplicationTable += i * j + "";

  multiplicationTable += <br>;

}

var result = document.getElementById("result");

  result.innerHTML

---------------------------------------