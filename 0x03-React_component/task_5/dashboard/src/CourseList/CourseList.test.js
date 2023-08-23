import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";
import CourseListRow from './CourseListRow';

describe('Test CourseList.js', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  it('CourseList renders without crashing', () => {
    expect(shallow(<CourseList />).exists());
  });

  it('Renders diferent rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);    
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('Verify that CourseList renders correctly', () => {
    let wrapper = shallow(<CourseList listCourses={[]}/>);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
    // wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });

  it('verify that the component renders it correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow).first().html()).toEqual('<tr><th colSpan="2">Available courses</th></tr>');
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
})