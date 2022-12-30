// if else statement

function is_leap_year (year)
{
    if(year % 400 == 0)
    {
        return true
    }else if((year % 4) && (year % 100 !=0))
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log( is_leap_year(2000) );
// statement true;
console.log(is_leap_year(1990));
// statement false;