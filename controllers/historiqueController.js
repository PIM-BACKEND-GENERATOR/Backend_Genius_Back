import Historique from '../models/historiqueModel.js'; // Adjust the path as necessary to where your model is located

// POST a new historique entry
export async function addHistorique(req, res) {
    try {
        const { username, historique } = req.body;
        if (!username || !historique) {
            return res.status(400).json({ error: 'Username and historique are required.' });
        }

        const newHistorique = new Historique({
            username,
            historique
        });

        const savedHistorique = await newHistorique.save();
        res.status(201).json(savedHistorique);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// GET historique by username
export async function getHistoriqueByUsername(req, res) {
    try {
        const username = req.params.username;
        // Query the database for historiques by username and sort them by createdAt in descending order
        const historiques = await Historique.find({ username }).sort({ createdAt: -1 });

        if (!historiques || historiques.length === 0) {
            return res.status(404).json({ error: 'No historique found for this username.' });
        }

        res.json(historiques);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

