alert("距離回到城堡終於只剩最後一段路了!")
function judge(ans)
{
    event.preventDefault();
    if(ans=="左")
    {
        alert("你真機智");
        window.location.href="4.html";
    }
    else
    {
        alert("在踏上錯誤道路的那一刻，勇者感到了一股來自東方的神祕力量，一陣暈眩感襲來，勇者發現他又回到了原點");
        window.location.href="1.html";
    }
}