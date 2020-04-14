import * as Yup from 'yup';
import Equipments from '../models/Equipments';
import Character from '../models/Character';

class EquipmentsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      armor_class: Yup.number().required(),
      weight: Yup.string().required(),
      observation: Yup.string(),
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
    const equipments = await Equipments.create(req.body);

    return res.json(equipments);
  }

  async index(req, res) {
    const { characterId } = req.params;
    const characterExists = await Character.findByPk(characterId);
    if (!characterExists) {
      return res.status(404).json({
        error: 'Character not found',
      });
    }
    const equipments = await Equipments.findAll({
      where: { character_id: characterId },
    });
    if (!equipments) {
      return res.status(404).json({
        error: 'Equipments not found',
      });
    }
    return res.json(equipments);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      armor_class: Yup.number(),
      weight: Yup.string(),
      observation: Yup.string(),
      character_id: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { id } = req.params;
    const equipments = await Equipments.findByPk(id);

    if (!equipments) {
      return res.status(401).json({
        error: 'Equipments not found',
      });
    }

    const updatedEquipments = await equipments.update(req.body);
    return res.json(updatedEquipments);
  }

  async delete(req, res) {
    const { id } = req.params;

    const equipment = await Equipments.findByPk(id);

    if (!equipment) {
      return res.status(404).json({ error: 'Equipments not found.' });
    }

    await equipment.destroy();

    return res.json({ msg: 'Successful deleted.' });
  }
}

export default new EquipmentsController();
