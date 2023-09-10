import * as notificationItem from "../../notifications.json";

export const getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};
