import React from 'react';
import { Input } from '../../components';

const Setup = ({ onChange }) => (
  <form onSubmit={e => e.preventDefault()} onChange={onChange}>
    <Input type="number" placeholder="Rounds (8)" name="rounds" />
    <Input type="number" placeholder="Rest (10)" name="rest" />
    <Input type="number" placeholder="Work (20)" name="work" />
  </form>
);

export { Setup };
