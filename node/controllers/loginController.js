const Login = require('../models/login.js')

exports.create = async (req, res) => {
    try {

        const {name, email, password} = req.body
        console.log(req.body)

        const loginUser = new Login({
            name,
            email,
            password
        })

        await loginUser.save()

        res.json({loginUser, msg:"Cadastro realizado com sucesso!"})
        
    } catch (error) {
        res.status(500).json({message: "Erro ao cadastrar usuário" + error})
    }
}

exports.findAll = async (req, res)=>{
    try {
        const users = await Login.find()
        console.log(users)

        res.json(users)
    } catch (err) {
        res.status(500).json({message: "Erro ao buscar dados do usuário."})
    }
}