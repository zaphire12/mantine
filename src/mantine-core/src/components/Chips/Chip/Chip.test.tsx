import React from 'react';
import { render } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsWrapperProps,
} from '@mantine/tests';
import { Chip, ChipProps } from './Chip';

const defaultProps: ChipProps = {
  value: 'test-value',
  checked: true,
  children: 'test-chip',
};

describe('@mantine/core/Chip', () => {
  checkAccessibility([render(<Chip {...defaultProps} />)]);
  itRendersChildren(Chip, defaultProps);
  itConnectsLabelAndInput(Chip, defaultProps);
  itSupportsWrapperProps(Chip, defaultProps);
  itSupportsSystemProps({
    component: Chip,
    props: defaultProps,
    displayName: '@mantine/core/Chip',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('displays checked icon based on checked prop', () => {
    const { container: checked } = render(<Chip {...defaultProps} checked />);
    const { container: notChecked } = render(<Chip {...defaultProps} checked={false} />);
    expect(checked.querySelectorAll('.mantine-Chip-checkIcon')).toHaveLength(1);
    expect(notChecked.querySelectorAll('.mantine-Chip-checkIcon')).toHaveLength(0);
  });
});
