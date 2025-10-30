import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import { Button } from "../components";

const variants = [
  "primary",
  "primary-outline",
  "primary-tinted",
  "primary-plain",
  "danger",
  "danger-outline",
  "danger-tinted",
  "danger-plain",
  "secondary",
  "secondary-outline",
  "secondary-tinted",
  "secondary-plain",
] as const;
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: variants,
      control: { type: "select" },
    },
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
export const PrimaryOutline: Story = {
  args: {
    variant: "primary-outline",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
export const PrimaryTinted: Story = {
  args: {
    variant: "primary-tinted",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
export const PrimaryPlain: Story = {
  args: {
    variant: "primary-plain",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: "secondary-outline",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
export const SecondaryTinted: Story = {
  args: {
    variant: "secondary-tinted",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
export const SecondaryPlain: Story = {
  args: {
    variant: "secondary-plain",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};


export const Danger: Story = {
  args: {
    variant: "danger",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};

export const DangerOutline: Story = {
  args: {
    variant: "danger-outline",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
export const DangerTinted: Story = {
  args: {
    variant: "danger-tinted",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
export const DangerPlain: Story = {
  args: {
    variant: "danger-plain",
    size: "lg",
    children: (
      <>
        <h1>Hello World</h1>
      </>
    ),
  },
};
