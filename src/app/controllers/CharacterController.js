import * as Yup from 'yup';
import Character from '../models/Character';
import Status from '../models/Status';

class CharacterController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      classe: Yup.string().required(),
      race: Yup.string().required(),
      level: Yup.number().required(),
      antecedent: Yup.string(),
      tendency: Yup.string().required(),
      personality: Yup.string(),
      ideals: Yup.string(),
      entails: Yup.string(),
      weakness: Yup.string(),
      characteristics: Yup.string(),
      languages: Yup.string(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const {
      name,
      classe,
      race,
      level,
      antecedent,
      tendency,
      personality,
      ideals,
      entails,
      weakness,
      characteristics,
      languages,
    } = req.body;

    const player = req.userId;
    const character = await Character.create({
      name,
      classe,
      race,
      level,
      antecedent,
      tendency,
      player,
      personality,
      ideals,
      entails,
      weakness,
      characteristics,
      languages,
    });

    return res.json(character);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const characters = await Character.findAll({
      where: {
        player: req.userId,
      },
      order: ['id'],
      limit: 5,
      offset: (page - 1) * 5,
    });
    if (!characters) {
      return res.status(404).json({
        error: 'Not found any characters',
      });
    }
    const count = await Character.count();
    res.setHeader('X-Total-Count', count);
    return res.json(characters);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      classe: Yup.string(),
      race: Yup.string(),
      level: Yup.number(),
      antecedent: Yup.string(),
      tendency: Yup.string(),
      player: Yup.number(),
      personality: Yup.string(),
      ideals: Yup.string(),
      entails: Yup.string(),
      weakness: Yup.string(),
      characteristics: Yup.string(),
      languages: Yup.string(),
      armor_class: Yup.number(),
      initiative: Yup.number(),
      displacement: Yup.string(),
      status_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { status_id } = req.body;
    const statusExist = await Status.findByPk(status_id);
    if (!statusExist) {
      return res.status(401).json({
        error: 'Status not found',
      });
    }
    const { id } = req.params;
    const character = await Character.findByPk(id);

    if (!character) {
      return res.status(401).json({
        error: 'Character not found',
      });
    }

    const updatedCharacter = await character.update(req.body);
    return res.json(updatedCharacter);
  }

  async delete(req, res) {
    const { id } = req.params;

    const character = await Character.findByPk(id);

    if (!character) {
      return res.status(404).json({ error: 'Character not found.' });
    }

    await character.destroy();

    return res.json({ msg: 'Successful deleted.' });
  }
}

export default new CharacterController();
