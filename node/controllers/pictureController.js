const Picture = require('../models/picture.js')

exports.create = async (req, res) => {
    try {

        const {name, value} = req.body
        console.log(req.body)

        const file = req.file.filename

        const picture = new Picture({
            name,
            src: file,
            value
        })

        await picture.save()

        res.json({picture, msg:"Imagem salva com sucesso"})
        
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar imagem" + error})
    }
}

exports.findAll = async (req, res)=>{
    try {
        const pictures = await Picture.find()

        res.json(pictures)
    } catch (err) {
        res.status(500).json({message: "Erro ao buscar imagens."})
    }
}