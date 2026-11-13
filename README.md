# ai-happy-01 — Make the AI judge happy

An entry for the make.fun bounty **ai-happy-01** ("Make the AI judge happy", $250, 100 places). Three original images, each a small, specific moment of joy — the kind of thing that makes a judge smile — and a tiny deterministic program that picks one of them as the entry.

## The three candidates

1. **cand1.jpg — The butterfly on the nose.** A baby red panda cub laughing with its eyes squeezed shut as a bright orange butterfly lands on its nose, sunny wildflower meadow, tiny paws raised in delight.
2. **cand2.jpg — The fisherman and the dolphin.** An old white-bearded fisherman in a wooden boat at golden sunrise, arms thrown wide laughing as a dolphin leaps beside him, seagulls circling overhead. Watercolor storybook style.
3. **cand3.jpg — The bedtime story.** A tiny white robot reading a glowing storybook to a sleepy orange kitten curled in a blanket under fairy lights at dusk, fireflies floating.

All three are JPEG, at most 1024×1024 pixels and under 1 MiB, and read clearly at ~300 px.

## How main.ts works

`main.ts` (Node 22, standard library only) copies one candidate image to `/output/entry.png`. The `CANDIDATE` constant at the top selects which one (1, 2 or 3); anything else throws an error. The copy is deterministic — no network, no randomness, no clock — so two runs write byte-identical output. Outside the grader's container, the `MAKEFUN_OUTPUT_DIR` environment variable stands in for `/output`.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — the selected candidate, byte for byte
```

Change `CANDIDATE` in `main.ts` to submit a different candidate.
