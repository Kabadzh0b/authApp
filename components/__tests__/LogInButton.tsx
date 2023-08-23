import React from "react";
import renderer from "react-test-renderer";
import LogInButton from "../LogInButton";
import {Provider} from "react-redux";
import {store} from "../../store";
it('default renders correctly', () => {
    const button = renderer
        .create(
            <Provider store={store}>
                <LogInButton email={"dsd"} password={"dsd"} width={200} setValidEmail={()=>{}}
                             setValidPassword={()=>{}}/>
            </Provider>
        )
        .toJSON();
    expect(button).toMatchSnapshot();
})

it('empty renders correctly', () => {
    const button = renderer
        .create(
            <Provider store={store}>
                <LogInButton email={""} password={""} width={200} setValidEmail={()=>{}}
                             setValidPassword={()=>{}}/>
            </Provider>
        )
        .toJSON();
    expect(button).toMatchSnapshot();
})

it('big width renders correctly', () => {
    const button = renderer
        .create(
            <Provider store={store}>
                <LogInButton email={""} password={""} width={1000} setValidEmail={()=>{}}
                             setValidPassword={()=>{}}/>
            </Provider>
        )
        .toJSON();
    expect(button).toMatchSnapshot();
})
