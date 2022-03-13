$(document).ready(function()
{
    $(".given").click(function()
    {
        // $(this).css({"color":"cyan","cursor":"not-allowed"});
        $(this).focus(function()
        {
            alert(`${(this)}`);
            console.log("hello");
        });
        // console.log(this);
    });
    $(".given").hover(function()
    {
        alert($(this).html());
        console.log();
    });
});
function dis()
{
    document.getElementsByTagName("p").item(0).style.color = "cyan";
}