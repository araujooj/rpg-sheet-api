import * as Yup from 'yup';
import Status from '../models/Status';

class StatusController {
  async store(req, res) {
    return res.json({
      ok: true,
    });
  }
}

export default new StatusController();
