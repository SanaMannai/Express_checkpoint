// Custom middleware to check working hours
const testDate = (req, res, next)=>{

    let date = new Date();

    let day = date.getDay();
    let hours = date.getHours();

    // Monday to Friday (1 to 5) and between 9 and 17 (5 PM)
    if(day > 5 || hours < 14 || hours > 12){

        res.send('we are closed in this moment')

    }else{
        next()
    }

    console.log(day,hours);

}


module.exports = testDate