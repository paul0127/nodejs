import {getWebInfo} from './controllers/index.controller'
var router = express.Router();

/* GET home page. */
router.get('/', getWebInfo);

module.exports = router;
