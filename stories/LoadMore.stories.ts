import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import LoadMore from '@/components/Buttons/LoadMore';
import "/app/globals.css";

const meta = {
    title: 'Buttons/LoadMore',
    component: LoadMore,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof LoadMore>

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Load More',
    increaseAmount: 0,
    increaseFunction: fn(),
  },
};

export const Med: Story = {
  args: {
    size: 'med',
    text: 'Load More',
    increaseAmount: 0,
    increaseFunction: fn(),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Default Text',
    increaseAmount: 0,
    increaseFunction: fn(),
  },
};
