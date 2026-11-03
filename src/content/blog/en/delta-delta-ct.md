---
pair: delta-delta-ct
title: "The 2^−ΔΔCt method in RT-qPCR: a short note"
description: "The logic behind relative gene expression, its assumptions and a small example."
date: 2026-11-03
tags: [RT-qPCR, gene expression, methods]
draft: true
---

The most common way to calculate relative gene expression in RT-qPCR is the **2^−ΔΔCt** method of Livak and Schmittgen (2001). The idea is simple: normalise the target gene's Ct first to a reference gene, then to the control group.

## Steps

1. For each sample, normalise the target gene to the reference gene:

$$
\Delta C_t = C_{t,\text{target}} - C_{t,\text{reference}}
$$

2. Normalise the treated group to the control group:

$$
\Delta\Delta C_t = \Delta C_{t,\text{treated}} - \Delta C_{t,\text{control}}
$$

3. Calculate the fold change:

$$
\text{Fold change} = 2^{-\Delta\Delta C_t}
$$

## A small example

| Group | Ct (target) | Ct (reference) | ΔCt |
|---|---|---|---|
| Control | 24.0 | 18.0 | 6.0 |
| Treated | 22.0 | 18.0 | 4.0 |

$\Delta\Delta C_t = 4.0 - 6.0 = -2.0$, so the fold change is $2^{2} = 4$: the target gene is expressed about 4 times higher in the treated group.

## Things to watch

- The method assumes that the amplification efficiencies of the target and reference genes are close to 100% and similar to each other. If they differ, an efficiency-corrected model such as the Pfaffl method is more appropriate.
- Confirm that the reference gene is stably expressed under your experimental conditions; use more than one reference gene where possible.
- The MIQE guidelines are a good checklist for experimental design and reporting.
