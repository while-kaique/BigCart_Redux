const Picture = require('../models/picture.js')

exports.create = async (req, res) => {
    try {

        const {name} = req.body

        const file = req.file.filename
        console.log(file.path)

        const picture = new Picture({
            name,
            src: file,
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