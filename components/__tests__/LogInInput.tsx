import React from "react";
import renderer from "react-test-renderer";
import LogInInput from "../LogInInput";

it('default email renders correctly', () => {
    const input = renderer
        .create(<LogInInput valid={true} setValid={() => {
        }} width={200} value={"ESFS"}
                            setValue={() => {
                            }} img={"email"}/>)
        .toJSON();
    expect(input).toMatchSnapshot();
})

it('default password renders correctly', () => {
    const input = renderer
        .create(<LogInInput valid={true} setValid={() => {
        }} width={200} value={"ESFS"}
                            setValue={() => {
                            }} img={"email"}/>)
        .toJSON();
    expect(input).toMatchSnapshot();
})

it('empty renders correctly', () => {
    const input = renderer
        .create(<LogInInput valid={true} setValid={() => {
        }} width={200} value={""}
                            setValue={() => {
                            }} img={"email"}/>)
        .toJSON();
    expect(input).toMatchSnapshot();
})

it('valid false renders correctly', () => {
    const input = renderer
        .create(<LogInInput valid={false} setValid={() => {
        }} width={200} value={""} setValue={() => {}} img={"email"}/>)
        .toJSON();
    expect(input).toMatchSnapshot();
})

it('big width renders correctly', () => {
    const input = renderer
        .create(<LogInInput valid={false} setValid={() => {
        }} width={1000} value={""} setValue={() => {}} img={"email"}/>)
        .toJSON();
    expect(input).toMatchSnapshot();
});
