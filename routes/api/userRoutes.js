const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getAllUsers).post(createUser);

// /api/students/:userId
router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);

// /api/students/:userId/assignments
router.route('/:userId/friends').post(addFriend);

// /api/students/:userId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
