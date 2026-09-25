// src/sequencer.ts
import type { SequencerContext } from './types';

type StepResult = number | void; // number = jump to that index, void = next
type Step = (ctx: SequencerContext) => StepResult;

export const sequencer = (steps: Step[]) => {
  return (initial: SequencerContext): SequencerContext => {
    let i = 0;
    while (i < steps.length) {
      const result = steps[i](initial);
      i = typeof result === 'number' ? result : i + 1;
    }
    return initial;
  };
};
