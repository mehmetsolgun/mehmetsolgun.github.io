---
pair: rumen-mirna-acidosis-goats
title: "One bacterium, two microRNAs and the goats that resist acidosis"
description: "In dairy goats, a rumen bacterium and two miRNAs separate animals prone to subacute ruminal acidosis. A promising discovery that has yet to be validated."
date: 2026-11-04
tags: [mirna, ruminal acidosis, dairy goats, biomarkers, microbiota]
draft: false
---

Two goats eat the same ration from the same trough. In one, rumen pH drops, appetite fades and milk fat falls. The other carries on as if nothing has happened. Any vet who works with intensively fed herds has seen this, and has wondered the same thing: could we have known in advance?

A study published in the *Journal of Dairy Science* in August 2026 looks for the answer inside the rumen. Xu and colleagues analysed rumen microbes in dairy goats together with microRNAs (miRNAs), the small regulatory RNAs the animal itself produces. They ended up with a three-part signature: one low-abundance bacterial genus and two miRNAs. According to the authors, it separates goats with subacute ruminal acidosis (SARA) from healthy goats and from goats that stayed healthy on the same diet, with high diagnostic accuracy (Xu et al., 2026).

I should say up front that I could not access the full text. Every detail I give about the study comes from the abstract on PubMed. I do not know the animal numbers, the thresholds or the validation strategy, and I will not guess them. Some of those missing details are exactly what I would most like to know.

## Same feed, different rumens

In SARA, rumen pH sits below normal for several hours a day. Volatile fatty acids accumulate faster than the rumen can buffer them. It is not a rare problem: Plaizier and colleagues (2008) cite surveys in which 19% to 26% of dairy cows in early and mid-lactation had SARA. The triggers are familiar, namely too much non-structural carbohydrate, rapidly fermentable feeds and too little physically effective fibre. The consequences run in a chain: lower feed intake and fibre digestion, milk fat depression, diarrhoea, lameness and liver abscesses, along with inflammation marked by rising bacterial endotoxin and acute-phase proteins.

What makes diagnosis hard is how quiet the disease is. SARA usually shows up as lost production and knock-on problems rather than clear clinical signs, and measuring rumen pH reliably means rumenocentesis or continuous pH monitoring, neither of which fits easily into routine farm work. Xu and colleagues point out that high-concentrate rations are spreading with intensification and that there is still no reliable early biomarker of susceptibility.

The part of the design I like most starts here. The researchers used a ration high in rumen-degradable starch (RDS) as their model. Goats that developed SARA on it and goats that did not (the SARA-tolerant group, SARA-T) were analysed separately and compared with controls (CON). That turns the question from "how do sick animals differ from healthy ones?" into "how do animals that got sick on this diet differ from animals that ate the same diet and stayed well?" It is hard to think of a cleaner way to separate the effect of the feed from the susceptibility of the individual.

## Why microRNAs

MicroRNAs are RNAs about 22 nucleotides long. In animals they bind messenger RNAs (mRNAs) and either cause them to be degraded or stop them from being translated. Bartel (2004) counts miRNAs among the most abundant gene-regulatory molecules in multicellular organisms; his 2009 review explains how animal miRNAs recognise their targets and how pervasively they shape both the expression and the evolution of protein-coding genes. For a biomarker hunter that has a practical consequence. Because one miRNA can tune many targets at once, a change in its level can reflect a whole pathway rather than a single gene.

The second attraction is their durability in body fluids. Mitchell and colleagues (2008) showed that miRNAs circulate stably in human plasma, protected from endogenous RNase activity. Tumour-derived miRNAs entered the circulation and could be measured, and serum levels of miR-141 distinguished patients with prostate cancer from healthy people. The same year, Chen and colleagues (2008) found miRNAs in the serum and plasma not only of humans but also of mice, rats, bovine fetuses, calves and horses. Serum miRNA levels were stable and reproducible between individuals of the same species, and specific diseases could be told apart by their serum miRNA patterns.

Those two papers supply the two ideas most veterinary miRNA biomarker work rests on: miRNAs can be measured in tissues and fluids, and they can carry disease-specific patterns. The same logic applies to milk or rumen fluid. The field has its own problems, though. Rebez and colleagues (2026), who systematically mapped research on extracellular vesicles (EVs) in ruminant milk, found the literature moving steadily towards miRNAs, while major gaps remain in method standardisation, characterisation and clinical validation.

There is also a biological reason to read host miRNAs alongside microbes. Liu and colleagues (2016) showed in mice that faecal miRNAs come from intestinal epithelial cells and travel inside extracellular vesicles. They can enter bacteria, regulate bacterial gene transcripts and affect bacterial growth, and mice whose gut cannot make miRNAs end up with an unregulated microbiota. That is a mouse study and says nothing directly about the rumen. It does show that putting host miRNAs and the microbiota in the same analysis is a reasonable idea.

## Three layers, one signature

Xu and colleagues combined three kinds of data. 16S rRNA gene sequencing showed which bacterial genera were present and in what proportions. Metagenomic binning reconstructed microbial genomes and functions. miRNA transcriptome sequencing measured miRNA expression in the rumen samples. Fermentation measurements such as volatile fatty acids and ammonia nitrogen were added on top (Xu et al., 2026).

The fermentation data went the expected way. Butyrate and total volatile fatty acids were significantly higher in the SARA group than in controls, with acetate, propionate, isobutyrate and valerate trending upwards. The interesting number was ammonia nitrogen, which rose not only in SARA goats but also in the tolerant ones. The ration had changed the rumen of the animals that stayed healthy too. The tolerant goats were not unaffected; they were affected and still did not tip into acidosis. For me, that distinction is the most instructive thing in the study.

In the microbiota, bacteria involved in breaking down cellulose, such as *Prevotella*, declined significantly. Functionally, the SARA microbiota had shifted towards energy-harvesting pathways compared with both the control and tolerant groups.

On the miRNA side, miRNAs that rose in SARA relative to controls were predicted to target immune-related genes such as IL-12RB. When SARA goats were compared with tolerant goats, the differentially expressed miRNAs clustered in the TNF signalling pathway. That fits neatly with the inflammation Plaizier and colleagues associate with SARA, and it makes a plausible biological story. A plausible story is not evidence, though. Target prediction and pathway enrichment do not show that a miRNA actually acts on a given gene. They generate a hypothesis and tell you which experiment to run.

The researchers then combined a random forest algorithm with ROC analysis to find the features that best separated the groups. The resulting signature has three parts: *Ruminobacter*, a low-abundance genus; a miRNA labelled "7_14677"; and chi-miR-361-5p. According to the authors, the signature separated controls from SARA goats, SARA from tolerant goats, and all healthy animals together (CON plus SARA-T) from SARA goats, with high diagnostic accuracy (Xu et al., 2026).

The make-up of the signature is telling. It contains a rare genus rather than a dominant one. That is common in biomarker work: a component that is scarce but changes consistently can discriminate better than an abundant one that fluctuates. Measuring a low-abundance taxon is, however, more vulnerable to technical noise. I would want to see *Ruminobacter* measured by something other than sequencing, such as a targeted quantitative PCR assay, and give the same answer.

## The missing numbers behind "high accuracy"

The abstract gives no numbers for diagnostic performance: no area under the curve (AUC), no sensitivity, no specificity. So I cannot say what "high" means here. That is a reading note more than a criticism, since the full text very likely reports them. Still, there are questions any reader should ask, and some of them are about this kind of design in general rather than about this paper.

The first is sample size. The abstract does not give the number of animals. Sequencing-based animal studies usually have limited numbers per group, and when a model picks three features out of thousands of taxa and miRNAs, small samples make it easier for chance associations to look like a signature.

The second is which data the features were selected on and which data they were tested on. If the random forest and the ROC analysis used the same animals, accuracy will look better than it really is. The abstract does not say whether an independent validation set, or at least cross-validation, was used. That is the question that decides whether the signature would work in another herd.

The third is multiple comparisons. Three groups, three omics layers and many fermentation measures together raise the odds that some individually "significant" findings are flukes, and the abstract does not say how multiple testing was handled. With the full text in hand, I would look first at the number of animals per group, the rumen pH threshold used to define SARA, sequencing depth, the expression threshold applied to miRNAs, and the validation strategy.

The fourth is the model. A high-RDS ration is a well-defined experimental model, but on farms SARA develops by different routes. Plaizier and colleagues note that the inflammatory response may not depend only on rumen endotoxin, and that acute-phase proteins can change depending on how SARA was induced. A signature that works in one induction model may not work in another.

Then there is direction. Are the different microbial and miRNA profiles in tolerant goats a cause of tolerance or a consequence of it? The abstract does not distinguish the two. The signature may still be useful for diagnosis, but proposing a mechanism would take intervention experiments.

Finally, one of the miRNAs, "7_14677", is reported as a sequence without an established name. Working out its counterparts and function in other species is a study in its own right, and its sequence and origin will need to be nailed down before it goes into a diagnostic test.

## From rumen fluid to the herd

There is a practical obstacle too: rumen fluid is not an easy sample to collect. A test usable on farms would need the same signature to show up in something more accessible, such as blood, milk or saliva. The stability of serum and plasma miRNAs shown by Mitchell and Chen makes that a hopeful direction. Whether a miRNA change measured in the rumen is reflected in the circulation is an entirely separate question, and this study does not ask it.

There is a methodological point worth making as well. Microbiota data and miRNA data are generated on different scales with differently structured noise. 16S data are relative abundances, so one taxon's increase means the others shrink proportionally, whereas miRNA sequencing produces counts. Feeding both into one classifier requires careful normalisation of each layer, so a signature's value should be judged together with the preprocessing pipeline that produced it, not only by how well it discriminates. The standardisation problem Rebez and colleagues raise for milk EVs applies here too: sample collection, RNA isolation, library preparation and normalisation all vary from lab to lab.

The steps I would like to see next are fairly clear. The signature should be tested blind, with thresholds fixed in advance, in other goat herds on other rations. *Ruminobacter* and the two miRNAs should be measurable with cheaper methods such as quantitative or digital PCR, where the choice of reference genes and normalisation will decide everything. The predicted links to IL-12RB and the TNF pathway need to be tested experimentally. And perhaps most important, animals should be sampled before they develop acidosis, because the real test of a "susceptibility marker" is whether the signature is there before the disease starts.

That last point also clarifies what the study shows as it stands. The goats were grouped by how they responded to the ration, and the signature captures the difference between those groups. Whether it could become a test that tells you in advance which of the two goats at the trough will get sick, only a longitudinal study can show. The gap between discovery and validation is the biggest hurdle for miRNA biomarkers in veterinary medicine, and this study is a first step across it.

## References

1. Xu G, Sun Y, Liu S et al. (2026). Multi-omics identifies microbial and microRNA biomarkers from rumen fluid for susceptibility to subacute ruminal acidosis in dairy goats. *Journal of Dairy Science*, 109(11), 11885–11901. [doi:10.3168/jds.2025-27860](https://doi.org/10.3168/jds.2025-27860) · PMID: 42617855
2. Plaizier JC, Krause DO, Gozho GN et al. (2008). Subacute ruminal acidosis in dairy cows: the physiological causes, incidence and consequences. *The Veterinary Journal*, 176(1), 21–31. [doi:10.1016/j.tvjl.2007.12.016](https://doi.org/10.1016/j.tvjl.2007.12.016) · PMID: 18329918
3. Bartel DP. (2004). MicroRNAs: genomics, biogenesis, mechanism, and function. *Cell*, 116(2), 281–297. [doi:10.1016/s0092-8674(04)00045-5](https://doi.org/10.1016/s0092-8674(04)00045-5) · PMID: 14744438
4. Bartel DP. (2009). MicroRNAs: target recognition and regulatory functions. *Cell*, 136(2), 215–233. [doi:10.1016/j.cell.2009.01.002](https://doi.org/10.1016/j.cell.2009.01.002) · PMID: 19167326
5. Chen X, Ba Y, Ma L et al. (2008). Characterization of microRNAs in serum: a novel class of biomarkers for diagnosis of cancer and other diseases. *Cell Research*, 18(10), 997–1006. [doi:10.1038/cr.2008.282](https://doi.org/10.1038/cr.2008.282) · PMID: 18766170
6. Mitchell PS, Parkin RK, Kroh EM et al. (2008). Circulating microRNAs as stable blood-based markers for cancer detection. *Proceedings of the National Academy of Sciences*, 105(30), 10513–10518. [doi:10.1073/pnas.0804549105](https://doi.org/10.1073/pnas.0804549105) · PMID: 18663219
7. Liu S, da Cunha AP, Rezende RM et al. (2016). The host shapes the gut microbiota via fecal microRNA. *Cell Host & Microbe*, 19(1), 32–43. [doi:10.1016/j.chom.2015.12.005](https://doi.org/10.1016/j.chom.2015.12.005) · PMID: 26764595
8. Rebez EB, Evangelista C, Basirico L et al. (2026). Systematic mapping of ruminant milk extracellular vesicles using a text mining and topic analysis approach. *Journal of Dairy Science*, 109(10), 10182–10208. [doi:10.3168/jds.2026-28753](https://doi.org/10.3168/jds.2026-28753) · PMID: 42398707
