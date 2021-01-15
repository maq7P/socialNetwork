import TestRenderer from 'react-test-renderer';
import Profile from "./Profile";
import Status from "./ProfileInfo/Status";
import {render} from "@testing-library/react";
import {AppInit} from "../../App";
import React from "react";
test('renders learn react link', () => {
    const { getByText } = render(<Status status={'TEST'}/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
// test('test-1', () => {
//     const component = TestRenderer.create(<Status status={'TEST'}/>)
//     const instanse = component.getInstance()
//     expect(instanse.state.status).toBe('TEST')
// })