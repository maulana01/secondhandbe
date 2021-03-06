/** @format */

const { notification: Notification, user: User, product: Product, product_images: Product_Images, category: Category } = require('../models');
const moment = require('moment');
require('moment/locale/id');

exports.getNotification = (req, res, next) => {
  Notification.findAll({
    where: {
      user_id: req.userLoggedin.userId,
    },
    include: [
      {
        model: User,
        as: 'user_notification',
        attributes: ['id', 'email', 'name', 'slug', 'address', 'profile_picture', 'phone_number'],
      },
      {
        model: Product,
        as: 'product_notification',
        include: [
          {
            model: Product_Images,
            as: 'product_images',
          },
          {
            model: Category,
            as: 'category_product',
          },
        ],
      },
    ],
    order: [['createdAt', 'DESC']],
  })
    .then((notification) => {
      return res.status(200).json({
        message: 'success',
        result: {
          notification,
          thumbnail: notification.map((notif) => {
            return notif.product_notification.product_images[notif.product_notification.product_images.length - 1].product_images_path;
          }),
          createdAt: notification.map((notif) => {
            const date = moment(notif.createdAt, 'h:mm:ss A').locale('id').format('DD MMM, HH:mm');
            return date;
          }),
        },
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'error',
        data: err.message,
      });
    });
};

exports.getAllNotification = (req, res, next) => {
  Notification.findAll({
    include: [
      {
        model: User,
        as: 'user_notification',
        attributes: ['id', 'email', 'name', 'slug', 'address', 'profile_picture', 'phone_number'],
      },
      {
        model: Product,
        as: 'product_notification',
        include: [
          {
            model: Product_Images,
            as: 'product_images',
          },
          {
            model: Category,
            as: 'category_product',
          },
        ],
      },
    ],
    order: [['createdAt', 'DESC']],
  })
    .then((notification) => {
      return res.status(200).json({
        message: 'success',
        result: {
          notification,
          thumbnail: notification.map((notif) => {
            return notif.product_notification.product_images[notif.product_notification.product_images.length - 1].product_images_path;
          }),
          createdAt: notification.map((notif) => {
            const date = moment(notif.createdAt, 'h:mm:ss A').locale('id').format('DD MMM, HH:mm');
            return date;
          }),
        },
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'error',
        data: err.message,
      });
    });
};

exports.getById = (req, res, next) => {
  Notification.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: 'user_notification',
        attributes: ['id', 'email', 'name', 'slug', 'address', 'profile_picture', 'phone_number'],
      },
      {
        model: Product,
        as: 'product_notification',
        include: [
          {
            model: Product_Images,
            as: 'product_images',
          },
          {
            model: Category,
            as: 'category_product',
          },
        ],
      },
    ],
  })
    .then((notification) => {
      if (notification) {
        return res.status(200).json({
          message: 'success',
          notification,
        });
      } else {
        return res.status(404).json({
          message: 'Notification not found',
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'error',
        data: err.message,
      });
    });
};
