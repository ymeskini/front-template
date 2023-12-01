import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should pass', () => {
    render(<div>Hello world!</div>);

    expect(screen.getByText('Hello world!')).toBeInTheDocument();
  });
});
