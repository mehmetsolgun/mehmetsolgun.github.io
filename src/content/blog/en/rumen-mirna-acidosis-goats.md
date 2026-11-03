---
pair: rumen-mirna-acidosis-goats
title: "Does a microbe–miRNA signature flag rumen acidosis risk in goats?"
description: "A microbe–miRNA signature from rumen fluid separated acidosis-susceptible dairy goats from tolerant ones; what the study found and where it is fragile."
date: 2026-11-04
tags: [mirna, rumen acidosis, dairy goat, biomarker, microbiota]
draft: false
---

Two goats eat the same feed. One drops its rumen pH and falls ill; the other carries on as if nothing had happened. This familiar picture in intensively fed dairy animals hides a question every veterinarian knows: which animal is susceptible to subacute ruminal acidosis (SARA), and how can we tell before disease begins? A study published in the *Journal of Dairy Science* in August 2026 approaches this question by combining microbial and small regulatory RNA data from rumen fluid (Xu et al., 2026).

The claim is striking: a "microbe–miRNA signature" made of one low-abundance bacterial genus and two microRNAs (miRNAs) can tell healthy, SARA-affected and SARA-tolerant goats apart. In this post I go through what the study did, where the evidence is solid and where it is fragile, and why approaches like this matter for veterinary medicine.

A note up front: I could not access the full text of the paper, so every detail about the study in this post comes from the abstract indexed in PubMed. Where the abstract is silent (for example animal numbers, thresholds or the validation strategy), I say that I do not know and I do not guess.

## Background: what is SARA and why is it hard to diagnose?

In subacute ruminal acidosis, rumen pH is depressed for several hours a day because volatile fatty acids accumulate and rumen buffering is insufficient. Plaizier and colleagues (2008) report surveys suggesting an incidence of SARA between 19% and 26% in early and mid-lactation dairy cows. Causes include excessive non-structural carbohydrates, highly fermentable forages and insufficient coarse fibre. Consequences include depressed feed intake, reduced fibre digestion, milk fat depression, diarrhoea, laminitis, liver abscesses, increased bacterial endotoxin and inflammation marked by rises in acute phase proteins (Plaizier et al., 2008).

This is where the diagnostic difficulty comes from. SARA often appears without dramatic clinical signs, as production loss and secondary problems. Measuring rumen pH reliably requires procedures such as rumenocentesis or continuous pH monitoring, which are often impractical. According to the study's introduction, high-concentrate diets are spreading with intensified animal husbandry, yet no reliable early diagnostic biomarker for susceptibility to SARA exists (Xu et al., 2026).

Another difficulty is individual variation. Animals on the same ration do not respond to the rumen environment in the same way: some develop acidosis, others stay tolerant. Xu and colleagues place this difference at the centre of the study: a diet high in rumen-degradable starch (RDS) was used as a model, and SARA-tolerant (SARA-T) and SARA-susceptible individuals were identified under it (Xu et al., 2026). The comparison therefore concerns not only "healthy versus ill" but also "ill versus not ill on the same diet". That is a sensible design for biomarker discovery, because the effect of the feed can be separated from the individual's susceptibility.

**Why are miRNAs biomarker candidates?**

MicroRNAs are endogenous RNAs of about 22 nucleotides that target messenger RNAs (mRNAs) for cleavage or translational repression in animals and plants. Bartel (2004) emphasises that miRNAs are among the more abundant classes of gene regulatory molecules in multicellular organisms and likely influence the output of many protein-coding genes. Bartel (2009) reviews how animal miRNAs recognise their targets and directs their repression, and discusses the widespread impact of miRNAs on both the expression and evolution of protein-coding genes. This helps explain why a change in miRNA levels can affect a whole pathway rather than a single gene: one miRNA can tune many targets at once.

Their appeal as biomarkers comes from two features. First, they change in disease at tissue level. Second, they are remarkably stable in blood and other body fluids. Mitchell and colleagues (2008) showed that miRNAs are present in human plasma in a remarkably stable form, protected from endogenous RNase activity, that tumour-derived miRNAs enter the circulation and can be measured, and that serum miR-141 could distinguish prostate cancer patients from healthy controls. Chen and colleagues (2008) showed that miRNAs are present in the serum and plasma of humans and other animals such as mice, rats, bovine fetuses, calves and horses, that serum miRNA levels are stable and consistent among individuals of the same species, and that disease-specific serum patterns exist.

These two studies supply the ideas behind miRNA biomarker research in veterinary science: miRNAs are measurable in tissues and fluids, and they can carry disease-specific patterns. The same logic applies to less invasively sampled fluids such as milk and rumen fluid. In a systematic mapping of ruminant milk extracellular vesicles (EVs), Rebez and colleagues (2026) note that research has skewed toward microRNA, while substantial challenges remain in method standardisation, characterisation, protocols and clinical validation. That warning applies to the limitations discussed below as well.

## What did the study do?

Xu and colleagues combined three kinds of data (Xu et al., 2026):

- **16S rRNA gene sequencing** for the composition of the rumen microbiota (which bacterial genera are present and how abundant),
- **metagenomic binning** to reconstruct microbial functions and genomes,
- **miRNA transcriptome sequencing** for miRNA expression in rumen samples.

Rumen fermentation parameters (volatile fatty acids, ammonia nitrogen) were added to these. Comparisons were made across three groups: control (CON), SARA-affected (SARA) and SARA-tolerant (SARA-T) animals. A random forest algorithm and receiver operating characteristic (ROC) analysis were then combined to find which features best separated the groups.

The design aims to go beyond dependence on a single "omic" layer. There is evidence that host miRNAs can influence the microbiota: Liu and colleagues (2016) showed that faecal miRNAs derive mostly from intestinal epithelial cells, are present in extracellular vesicles, can enter bacteria, regulate bacterial gene transcripts and affect bacterial growth, and that mice lacking intestinal epithelial miRNAs have an uncontrolled gut microbiota. That work was done in mice and does not provide direct evidence for the rumen, but it shows that reading host miRNAs together with the microbiota has a biologically reasonable rationale.

## Findings: what did fermentation, microbiota and miRNAs show?

The findings reported in the abstract can be summarised as follows (Xu et al., 2026).

**Fermentation.** Compared with the control, the SARA group had significantly higher butyrate and total volatile fatty acids (VFA), together with increasing trends in acetate, propionate, isobutyrate and valerate. Ammonia nitrogen concentration was increased in both SARA and SARA-T goats relative to control. This suggests that the diet change affected the rumen environment even in tolerant animals, although tolerant animals did not slide into the acidosis picture.

**Microbiota.** The abundance of microbes such as *Prevotella*, which is involved in cellulose degradation, decreased significantly. Functionally, the SARA group shifted toward energy-acquisition pathways compared with CON and SARA-T.

**miRNA.** Compared with control, miRNAs upregulated in SARA targeted immune-related genes such as IL-12RB. Comparing SARA with SARA-T, differentially expressed miRNAs were enriched in the TNF signalling pathway. The miRNA changes in SARA thus seem to point toward the host's immune and inflammatory response, which tells a biological story consistent with the inflammation that Plaizier and colleagues (2008) associate with SARA. A caution, though: target predictions and pathway enrichment do not prove that a miRNA acts on that gene; they are hypothesis-generating inferences.

**The signature.** When random forest and ROC analyses were integrated, a combined "microbe–miRNA" signature was identified, comprising the low-abundance genus *Ruminobacter*, a miRNA named "7_14677" and chi-miR-361-5p. According to the authors, this signature showed high diagnostic accuracy not only between CON and SARA but also between SARA and SARA-T, and between pooled healthy animals (CON + SARA-T) and SARA (Xu et al., 2026). Because the abstract gives no numerical accuracy values (area under the curve, sensitivity, specificity), I cannot say what "high" means concretely.

One detail is particularly interesting: the signature contains a low-abundance bacterial genus. Looking for rare but consistently changing components rather than dominant taxa is common in such studies, but measurement of a low-abundance taxon is more exposed to technical noise. It therefore needs confirmation by a separate method, for example target-specific quantitative PCR.

## Critical appraisal

The study tests an interesting idea, but the familiar traps of the biomarker literature apply here too. Some points below rest on what is known from the abstract; others rest on general weaknesses of this kind of design. The second kind are not criticisms specific to this paper but questions a reader should ask.

*Sample size is unknown.* The abstract does not give the number of animals. In sequencing-based studies the number of animals is often limited, and selecting a few features out of thousands raises the risk of capturing chance associations.

*Selection and evaluation on the same data.* If random forest and ROC analysis are run on the same set of samples, diagnostic accuracy tends to look better than it is. Whether an independent validation set or cross-validation was used is unclear from the abstract. This is the most important question for how well the signature generalises.

*Many variables, multiple comparisons.* With three groups, three omic layers and many fermentation measures, the chance that some individually "significant" findings arise by chance rises. The abstract does not say how multiple testing was handled. For a reader with access to the full text, the first places to look are the number of animals, the grouping criteria (which rumen pH threshold defined SARA), sequencing depth, miRNA expression thresholds and the validation strategy. Without them, weighing "high accuracy" is hard.

*Causality and direction are unclear.* Are the different miRNA and microbe profiles in SARA-T goats a cause or a consequence of tolerance? The abstract does not distinguish. The signature may be diagnostically useful, but proposing a causal mechanism would require intervention experiments.

*The model relies on one induction method.* A high-RDS ration may be a well-defined model, but on real farms SARA develops in different ways. Plaizier and colleagues (2008) note that the inflammatory response may not be due to rumen endotoxin alone and that acute phase protein responses vary with the method of SARA induction. A signature that works in one induction model may not work in another.

*Is rumen fluid a practical sample?* Access to rumen fluid is not easy; a field test would need a counterpart in more accessible samples such as blood, milk or saliva. The stability of serum and plasma miRNAs shown by Chen and colleagues (2008) and Mitchell and colleagues (2008) gives a promising basis, but whether rumen miRNAs are reflected in the circulation is a separate question.

*miRNA naming and species specificity.* One of the miRNAs in the signature is reported as a not-yet-named sequence ("7_14677"). Determining the counterpart and function of such a sequence in other species needs further work; before putting such a miRNA into a diagnostic test, its sequence and origin must be firmly established.

## Broader context

This study is an example of the "microbiome plus host RNA" approach. The need for early diagnosis in dairy production is large: SARA is the start of a chain of economic losses that runs from milk fat depression to lameness (Plaizier et al., 2008). Rumen microbiota is usually linked to the ration alone; yet differences in susceptibility on the same ration suggest that host biology contributes. Here, miRNAs are interesting as molecular readouts of the host response.

Methodologically, the study also serves as a reminder. Microbiota data and miRNA data are generated at different scales and with different noise structures; feeding both into one classifier requires careful pre-processing and normalisation for each layer. Using compositional (relative-abundance) data and count data in the same model is a pitfall that is often overlooked in interpretation. The value of a signature should therefore be judged not only by its discriminating power but by the pre-processing chain that produced it.

Two themes stand out in the wider biomarker picture. The first is standardisation: Rebez and colleagues (2026) point to important standardisation problems in isolation, characterisation and protocols for ruminant milk EVs. The same warning applies to rumen-fluid miRNA studies: sample collection, RNA extraction, sequencing library preparation and normalisation methods vary from laboratory to laboratory. The second is validation: a signature must be reproduced in independent groups of animals, on different farms and on different diets.

There is also a One Health angle. Goats matter for milk and meat production and for smallholder livelihoods. For herds moving to high-yield rations, early detection of SARA could benefit animal welfare, food safety and antibiotic use. That benefit depends on the signature being confirmed in the field.

## What comes next?

Sensible next steps after this study could be:

1. **Independent validation.** Testing the signature blind, with pre-specified thresholds, in different goat herds and under different feeding regimes.
2. **Target-specific measurement.** Measuring *Ruminobacter* and the two miRNAs with cheaper and adaptable methods such as quantitative or digital PCR; reference-gene choice and normalisation will be critical here.
3. **More accessible samples.** Checking whether the signature can also be followed in fluids such as blood or milk.
4. **Functional confirmation.** Testing experimentally the miRNA targets linked to IL-12RB and the TNF pathway.
5. **Longitudinal sampling.** Determining whether the signature is visible before animals develop acidosis; the real test of a "susceptibility marker" claim will be this.

In summary: (1) Under the same high-RDS ration, SARA-susceptible and tolerant goats could be distinguished; (2) in SARA the rumen microbiota shifted functionally toward energy acquisition and *Prevotella* decreased; (3) miRNAs upregulated in SARA appeared to target immune-related genes; (4) a signature of one genus and two miRNAs showed high diagnostic accuracy between groups; (5) these findings still need independent validation, numerical performance measures and field-friendly samples.

For a young researcher, the most instructive aspect of this study is the difference between biomarker discovery and biomarker validation. Discovery finds a few promising candidates among thousands; validation shows that this is not a coincidence. Whether miRNA biomarkers reach the field in veterinary medicine depends on how carefully that second stage is carried out.

## References

1. Xu G, Sun Y, Liu S et al. (2026). Multi-omics identifies microbial and microRNA biomarkers from rumen fluid for susceptibility to subacute ruminal acidosis in dairy goats. *Journal of Dairy Science*, 109(11), 11885–11901. [doi:10.3168/jds.2025-27860](https://doi.org/10.3168/jds.2025-27860) · PMID: 42617855
2. Plaizier JC, Krause DO, Gozho GN et al. (2008). Subacute ruminal acidosis in dairy cows: the physiological causes, incidence and consequences. *The Veterinary Journal*, 176(1), 21–31. [doi:10.1016/j.tvjl.2007.12.016](https://doi.org/10.1016/j.tvjl.2007.12.016) · PMID: 18329918
3. Bartel DP. (2004). MicroRNAs: genomics, biogenesis, mechanism, and function. *Cell*, 116(2), 281–297. [doi:10.1016/s0092-8674(04)00045-5](https://doi.org/10.1016/s0092-8674(04)00045-5) · PMID: 14744438
4. Bartel DP. (2009). MicroRNAs: target recognition and regulatory functions. *Cell*, 136(2), 215–233. [doi:10.1016/j.cell.2009.01.002](https://doi.org/10.1016/j.cell.2009.01.002) · PMID: 19167326
5. Chen X, Ba Y, Ma L et al. (2008). Characterization of microRNAs in serum: a novel class of biomarkers for diagnosis of cancer and other diseases. *Cell Research*, 18(10), 997–1006. [doi:10.1038/cr.2008.282](https://doi.org/10.1038/cr.2008.282) · PMID: 18766170
6. Mitchell PS, Parkin RK, Kroh EM et al. (2008). Circulating microRNAs as stable blood-based markers for cancer detection. *Proceedings of the National Academy of Sciences*, 105(30), 10513–10518. [doi:10.1073/pnas.0804549105](https://doi.org/10.1073/pnas.0804549105) · PMID: 18663219
7. Liu S, da Cunha AP, Rezende RM et al. (2016). The host shapes the gut microbiota via fecal microRNA. *Cell Host & Microbe*, 19(1), 32–43. [doi:10.1016/j.chom.2015.12.005](https://doi.org/10.1016/j.chom.2015.12.005) · PMID: 26764595
8. Rebez EB, Evangelista C, Basirico L et al. (2026). Systematic mapping of ruminant milk extracellular vesicles using a text mining and topic analysis approach. *Journal of Dairy Science*, 109(10), 10182–10208. [doi:10.3168/jds.2026-28753](https://doi.org/10.3168/jds.2026-28753) · PMID: 42398707
