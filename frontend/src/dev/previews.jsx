import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import ResponsiveAppBar from "../components/navbar";
import Aufgabenstellung from "../routes/aufgabenstellung";
import Root from "../routes/root";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ResponsiveAppBar">
                <ResponsiveAppBar/>
            </ComponentPreview>
            <ComponentPreview path="/Aufgabenstellung">
                <Aufgabenstellung/>
            </ComponentPreview>
            <ComponentPreview path="/Root">
                <Root/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;