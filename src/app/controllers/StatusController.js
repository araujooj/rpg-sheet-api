import * as Yup from 'yup';
import Status from '../models/Status';
import Character from '../models/Character';

class StatusController {
  async store(req, res) {
    const schema = Yup.object().shape({
      for: Yup.number().required(),
      dex: Yup.number().required(),
      con: Yup.number().required(),
      int: Yup.number().required(),
      sab: Yup.number().required(),
      mod_for: Yup.number().required(),
      mod_dex: Yup.number().required(),
      mod_con: Yup.number().required(),
      mod_int: Yup.number().required(),
      mod_sab: Yup.number().required(),
      character_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { character_id } = req.body;
    const characterExists = Character.findByPk(character_id);
    if (!characterExists) {
      return res.status(404).json({
        error: 'Character not found',
      });
    }
    const CharacterIdExists = await Status.findOne({
      where: { character_id },
    });
    if (CharacterIdExists) {
      return res.status(401).json({
        error: 'Character already have a status',
      });
    }
    const status = await Status.create(req.body);

    return res.json(status);
  }

  async show(req, res) {
    const { id } = req.params;
    const status = await Status.findByPk(id);
    if (!status) {
      return res.status(404).json({
        error: 'Status not found',
      });
    }
    return res.json(status);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      for: Yup.number(),
      dex: Yup.number(),
      con: Yup.number(),
      int: Yup.number(),
      sab: Yup.number(),
      mod_for: Yup.number(),
      mod_dex: Yup.number(),
      mod_con: Yup.number(),
      mod_int: Yup.number(),
      mod_sab: Yup.number(),
      character_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { id } = req.params;
    const status = await Status.findByPk(id);

    if (!status) {
      return res.status(401).json({
        error: 'Status not found',
      });
    }

    const updatedStatus = await status.update(req.body);
    return res.json(updatedStatus);
  }
}

export default new StatusController();
