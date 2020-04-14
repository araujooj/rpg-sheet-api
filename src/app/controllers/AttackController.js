import * as Yup from 'yup';
import Attacks from '../models/Attacks';
import Character from '../models/Character';

class AttackController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      bonus: Yup.number().required(),
      damage: Yup.string().required(),
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
    const attacks = await Attacks.create(req.body);

    return res.json(attacks);
  }

  async index(req, res) {
    const { characterId } = req.params;
    const characterExists = await Character.findByPk(characterId);
    if (!characterExists) {
      return res.status(404).json({
        error: 'Character not found',
      });
    }
    const attacks = await Attacks.findAll({
      where: { character_id: characterId },
    });
    if (!attacks) {
      return res.status(404).json({
        error: 'Attacks not found',
      });
    }
    return res.json(attacks);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      bonus: Yup.number(),
      damage: Yup.string(),
      character_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { id } = req.params;
    const attacks = await Attacks.findByPk(id);

    if (!attacks) {
      return res.status(401).json({
        error: 'Attack not found',
      });
    }

    const updatedAttacks = await attacks.update(req.body);
    return res.json(updatedAttacks);
  }

  async delete(req, res) {
    const { id } = req.params;

    const attack = await Attacks.findByPk(id);

    if (!attack) {
      return res.status(404).json({ error: 'Attack not found.' });
    }

    await attack.destroy();

    return res.json({ msg: 'Successful deleted.' });
  }
}

export default new AttackController();
