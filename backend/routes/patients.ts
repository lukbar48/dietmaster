const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'get all patients' });
});

router.get('/:id', (req, res) => {
  res.json({ msg: 'get single patiens' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'add new patient' });
});

router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete single patient' });
});

router.patch('/:id', (req, res) => {
  res.json({ msg: 'update a workout' });
});

module.exports = router;
