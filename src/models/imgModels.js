const connection = require('./connection');

const fs = require('fs');
const path = require('path');

const uploadImg = async (dados) => {
    const { titulo, descricao, img } = dados;

    try {
        await connection.execute('INSERT into img(titulo, descricao, img) VALUES (?,?,?)', [titulo, descricao, img]);

        return { titulo, descricao, img };

    } catch (error) {
        console.error(error);
        return { msg: 'Erro no servidor' };
    }
}

const getImg = async () => {
    const [dados] = await connection.execute('SELECT * FROM img');
    return [dados];
}

const deleteImg = async (id) => {
    try {
        const [result] = await connection.execute('SELECT img FROM img WHERE id = ?', [id]);

        if (result.length === 0) {
            return { msg: "Imagem não encontrada" };
        }

        const caminhoDoArquivo = path.join(__dirname, '..', '..', 'img_upload', result[0].img);

        if (fs.existsSync(caminhoDoArquivo)) {

            fs.unlinkSync(caminhoDoArquivo);

            await connection.execute('DELETE FROM img WHERE id = ?', [id]);

            return { msg: "Dados excluídos com sucesso" };
        } else {
            return { msg: "Arquivo físico não encontrado" };
        }
    } catch (error) {
        console.error("Erro ao excluir imagem:", error);
        return { msg: "Erro ao excluir imagem" };
    }
};

const updateImg = async (dados, id) => {

    const [result] = await connection.execute('SELECT img FROM img WHERE id = ?', [id]);

    if (result.length === 0) {
        return { msg: "Id não encontrado" };
    }

    try {
        if (dados.titulo !== undefined) {
            await connection.execute('UPDATE img SET titulo = ? WHERE id = ?', [dados.titulo, id]);
        }

        if (dados.descricao !== undefined) {
            await connection.execute('UPDATE img SET descricao = ? WHERE id = ?', [dados.descricao, id]);
        }

        return { msg: "Alteração feita com sucesso" };
    } catch (error) {

        return { msg: "ID inválido" };
    }

}

module.exports = {
    uploadImg,
    getImg,
    deleteImg,
    updateImg
}
