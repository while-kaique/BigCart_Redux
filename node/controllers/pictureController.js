const Picture = require('../models/picture.js')

exports.create = async (req, res) => {
    try {

        const {name} = req.body

        const file = req.file

        const picture = new Picture({
            name,
            src: file.path,
        })

        await picture.save()

        res.json({picture, msg:"Imagem salva com sucesso"})
        
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar imagem"})
    }
}