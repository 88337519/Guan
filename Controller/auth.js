export const GetAuth = (req, res) =>{
    res.render ('auth/auth.ejs');
}

export const GetLogin = (req,res) =>{
    res.render ('auth/login.ejs');
}

export const GetRegister = (req,res) =>{
    res.render ('auth/register.ejs');
}