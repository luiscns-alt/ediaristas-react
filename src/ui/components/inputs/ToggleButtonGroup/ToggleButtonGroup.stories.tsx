import { ComponentMeta, ComponentStory } from "@storybook/react";

import ToggleButtonGroup, { ToggleButton } from "./ToggleButtonGroup";

export default {
    title: "inputs/ToggleButtonGroup",
    component: ToggleButtonGroup,
    argTypes: {},
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => (
    <ToggleButtonGroup {...args}>
        <ToggleButton value="1">
            <i className="twf-cleaning-1" /> Limpesa de rotina
        </ToggleButton>
        <ToggleButton value="2">
            <i className="twf-cleaning-2" /> Limpesa pesada
        </ToggleButton>
        <ToggleButton value="3">
            <i className="twf-cleaning-3" /> Limpesa pós obra
        </ToggleButton>
    </ToggleButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
    value: "1",
};
