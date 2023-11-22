const Statistic = require('./statistics.model');

exports.getStatistics = async function (req, res) {
    const { filtro1, filtro2, filtro3, filtro4 } = req.query;

    try {
        let query = {};
        if (filtro1) query.filtro1 = filtro1;
        if (filtro2) query.filtro2 = filtro2;
        if (filtro3) query.filtro3 = filtro3;
        if (filtro4) query.filtro4 = filtro4;

        const statistics = await Statistic.findAll({
            where: query,
        });

        return res.status(200).json(statistics);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Error al obtener estadísticas', details: error });
    }
};