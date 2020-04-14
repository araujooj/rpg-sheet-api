import * as Yup from 'yup';
import Speciality from '../models/Speciality';
import Character from '../models/Character';

class ExpertiseController {
  async store(req, res) {
    const schema = Yup.object().shape({
      acrobacy: Yup.number().required(),
      arcanism: Yup.number().required(),
      atletism: Yup.number().required(),
      acting: Yup.number().required(),
      cheat: Yup.number().required(),
      stealth: Yup.number().required(),
      story: Yup.number().required(),
      intimidation: Yup.number().required(),
      investigation: Yup.number().required(),
      animal_petting: Yup.number().required(),
      medicine: Yup.number().required(),
      nature: Yup.number().required(),
      perception: Yup.number().required(),
      persuasion: Yup.number().required(),
      prestidigitation: Yup.number().required(),
      religion: Yup.number().required(),
      survival: Yup.number().required(),
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
    const CharacterIdExists = await Speciality.findOne({
      where: { character_id },
    });
    if (CharacterIdExists) {
      return res.status(401).json({
        error: 'Character already have a expertise sheet',
      });
    }
    const speciality = await Speciality.create(req.body);

    return res.json(speciality);
  }

  async show(req, res) {
    const { id } = req.params;
    const speciality = await Speciality.findByPk(id);
    if (!speciality) {
      return res.status(404).json({
        error: 'Expertise sheet not found',
      });
    }
    return res.json(speciality);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      acrobacy: Yup.number(),
      arcanism: Yup.number(),
      atletism: Yup.number(),
      acting: Yup.number(),
      cheat: Yup.number(),
      stealth: Yup.number(),
      story: Yup.number(),
      intimidation: Yup.number(),
      investigation: Yup.number(),
      animal_petting: Yup.number(),
      medicine: Yup.number(),
      nature: Yup.number(),
      perception: Yup.number(),
      persuasion: Yup.number(),
      prestidigitation: Yup.number(),
      religion: Yup.number(),
      survival: Yup.number(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation failed' });
    }
    const { id } = req.params;
    const speciality = await Speciality.findByPk(id);

    if (!speciality) {
      return res.status(401).json({
        error: 'Expertise sheet not found',
      });
    }

    const updatedSpeciality = await speciality.update(req.body);
    return res.json(updatedSpeciality);
  }
}

export default new ExpertiseController();
