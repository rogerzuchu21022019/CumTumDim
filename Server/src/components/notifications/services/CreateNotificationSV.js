const User = require("../../users/model/User");
const Notification = require("../model/Notification");

const CreateNotificationSV = async (notification) => {
  try {
    const newNotification = await Notification.create({
      title: notification.title,
      content: notification.content,
      data: notification.data,
    });

    const query = {
      _id: notification.userId,
    };
    const updateUser = {
      $push: {
        notifications: {
          $each: [newNotification],
          $position: 0,
        },
      },
    };
    const optionsUpdate = {
      new: true,
      upsert: true,
    };
    const userInfo = await User.findByIdAndUpdate(
      query,
      updateUser,
      optionsUpdate
    );
    // console.log(
    //   "🚀 ~ file: CreateNotificationSV.js:30 ~ CreateNotificationSV ~ userInfo:",
    //   userInfo
    // );

    const queryAdminRole = { role: "admin" };

    const adminInfo = await User.find(queryAdminRole);
    // console.log(
    //   "🚀 ~ file: CreateNotificationSV.js:38 ~ CreateNotificationSV ~ adminInfo:",
    //   adminInfo
    // );

    await User.updateMany(queryAdminRole, updateUser, optionsUpdate);

    return newNotification;
  } catch (error) {
    console.log(
      "🚀 ~ file: CreateNotificationSV.js:12 ~ CreateNotificationSV ~ error:",
      error
    );
  }
};

module.exports = CreateNotificationSV;
