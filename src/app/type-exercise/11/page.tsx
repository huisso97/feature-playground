'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  strReverse,
  strToLower,
  strToUpper,
  strRandomize,
  strInvertCase,
} from '@/lib/str-utils';

const nameDecorators = [
  { name: 'Reverse', fn: strReverse },
  { name: 'Lower Case', fn: strToLower },
  { name: 'Upper Case', fn: strToUpper },
  { name: 'Randomize', fn: strRandomize },
  { name: 'Invert Case', fn: strInvertCase },
];

/**
 * @see https://typescript-exercises.github.io/#exercise=11&file=%2Findex.ts
 */
const NameDecoratorComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [decoratedName, setDecoratedName] = useState('');
  const [selectedDecorator, setSelectedDecorator] = useState<string>(
    nameDecorators[0].name,
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const applyDecoration = () => {
    const decorator = nameDecorators.find(
      d => d.name === selectedDecorator,
    )?.fn;
    if (decorator) {
      setDecoratedName(decorator(name));
    }
  };

  return (
    <div className='flex flex-col gap-8'>
      <h1 className='text-lg font-bold'>Name Decorator</h1>
      <div className='flex gap-4 w-[500px]'>
        <Input
          type='text'
          value={name}
          onChange={handleNameChange}
          placeholder='Enter your name'
        />
        <Select value={selectedDecorator} onValueChange={setSelectedDecorator}>
          <SelectTrigger>
            <SelectValue placeholder='Select a decorator' />
          </SelectTrigger>
          <SelectContent>
            {nameDecorators.map(decorator => (
              <SelectItem key={decorator.name} value={decorator.name}>
                {decorator.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button onClick={applyDecoration}>Decorate Name</Button>
      <div className='h-6'>
        {decoratedName && <p>Decorated name: {decoratedName}</p>}
      </div>
    </div>
  );
};

export default NameDecoratorComponent;
