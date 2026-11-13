# ai-happy-01 — Make the AI judge happy

Entry for the make.fun bounty `ai-happy-01`: an image that makes the AI judge
happiest.

`main.ts` (Node 22, standard library only) copies one of the three candidate
images in `candidates/` to `/output/entry.png`. Change the `CANDIDATE`
constant at the top of `main.ts` (1, 2 or 3) to pick which image is submitted.
The copy is deterministic — no network, no randomness, no clock — so two runs
write the same bytes.

## Candidates

1. Baby red panda cub laughing as a butterfly lands on its nose (wildflower meadow).
2. Old fisherman laughing as a dolphin leaps beside his boat at sunrise (watercolor storybook).
3. Tiny white robot reading a glowing storybook to a sleepy kitten under fairy lights.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
