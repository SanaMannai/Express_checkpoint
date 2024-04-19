const getHome =(req,res)=>{

    res.render("home")
}

const getServices =(req,res)=>{

    res.render("services")
}

const getContact =(req,res)=>{

    res.render("contact")
}

module.exports = {getHome, getServices, getContact}