import * as Yup from 'yup';
import Magics from '../models/Magics';
import Character from '../models/Character';

class MagicsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      level: Yup.number().required(),
      character_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { character_id } = req.body;
    const characterExists = await Character.findByPk(character_id);
    if (!characterExists) {
      return res.status(404).json({
        error: 'Character not found',
      });
    }
    const magics = await Magics.create(req.body);

    return res.json(magics);
  }

  async index(req, res) {
    const { characterId } = req.params;
    const characterExists = await Character.findByPk(characterId);
    if (!characterExists) {
      return res.status(404).json({
        error: 'Character not found',
      });
    }
    const magics = await Magics.findAll({
      where: { character_id: characterId },
    });
    if (!magics) {
      return res.status(404).json({
        error: 'magics not found',
      });
    }
    return res.json(magics);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      level: Yup.number(),
      character_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { id } = req.params;
    const magics = await Magics.findByPk(id);

    if (!magics) {
      return res.status(401).json({
        error: 'Magics not found',
      });
    }

    const updatedMagics = await magics.update(req.body);
    return res.json(updatedMagics);
  }

  async delete(req, res) {
    const { id } = req.params;

    const magic = await Magics.findByPk(id);

    if (!magic) {
      return res.status(404).json({ error: 'Magic not found.' });
    }

    await magic.destroy();

    return res.json({ msg: 'Successful deleted.' });
  }
}

export default new MagicsController();
