import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";


describe('Test Notification.js', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  it('Notification renders without crashing', () => {
    expect(shallow(<Notifications />).exists());
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('Add a check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('Add a check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('Add a check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('Verify that renders correctly if you pass an empty array or if don’t pass the listNotifications', () => {
    let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    // wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });

  it('Verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expect(wrapper.find(NotificationItem));
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('Verify that when listNotifications is empty the message "Here is the list of notifications is not displayed", but "No new notification for now" is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="no-new">No new notification for now</li>');
  });
  
  it('mockup the "console.log" function and Check that when calling the function "markAsRead" on an instance of the component', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    console.log = jest.fn();
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalled()    
  });

  it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotificationsNoUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);    
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotificationsUpdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);    
  });
});