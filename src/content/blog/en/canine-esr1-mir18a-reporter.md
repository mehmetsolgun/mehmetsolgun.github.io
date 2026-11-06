---
pair: canine-esr1-mir18a-reporter
title: "miR-18a silences a canine ESR1 reporter, but the cell lines disagree"
description: "In canine mammary tumour cells, miR-18a and miR-19a repressed an ESR1 3'UTR reporter, while their levels in the cell lines did not track endogenous ESR1."
date: 2026-11-06
tags: [dog, mirna, mammary tumour, esr1, qpcr]
draft: false
---

In three of four canine mammary tumour cell lines, ESR1 mRNA sits 9-, 26- and 70-fold below the level in normal mammary epithelial cells. In the fourth line, CMT12, it is 14.9-fold above. Goyal and Bird at the Auburn University College of Veterinary Medicine set out to explain this scatter with microRNAs (Goyal and Bird, 2026, Veterinary Sciences). Specifically, they asked whether miR-18a and miR-19a can silence the 3' untranslated region (3'UTR) of ESR1, the gene that encodes estrogen receptor alpha (ERα).

In a single well of a culture plate the answer is yes. In the cell lines themselves the answer is less clear, and the distance between those two answers is what this post is about.

## Four lines, four different ESR1 pictures

The panel consisted of CMT12 (a poodle adenocarcinoma), CMT27 (a German Shepherd carcinoma), CMT28 (a mixed-breed adenocarcinoma) and CMT47 (a Miniature Schnauzer adenocarcinoma). The normal comparator was a primary culture of canine mammary epithelial cells (CMEC) taken from a single Beagle. That last detail looks incidental now, and it carries more weight than it seems once you reach the statistics.

ESR1 mRNA was measured by RT-qPCR and the two miRNAs with LNA-based assays. The ΔCt values went into a linear mixed model with cell line as a fixed effect and experimental run as a random intercept, and fold changes were derived with the $2^{-\Delta\Delta C_t}$ method. If miR-18a and miR-19a suppress ESR1, they should be highest where ESR1 is lowest.

They were not. miR-18a was significantly raised only in CMT27 (8.49-fold, adjusted p = 0.0172), and so was miR-19a (8.84-fold, adjusted p = 0.0049). In CMT12 both miRNAs were numerically higher than in CMEC (5.10-fold for miR-18a, 3.76-fold for miR-19a) without reaching significance, and ESR1 stayed high there. CMT47, the line with the lowest ESR1, showed no significant rise in either miRNA.

The authors say plainly that these two miRNAs can explain only part of the ESR1 differences and that other regulators probably take part. CMT27 is the one line that follows the expected pattern, with low ESR1 and two raised miRNAs, and I will come back to it, because I think it is the natural place for the next experiment.

The line chosen for the reporter experiment sits at the opposite end. In CMT28, ESR1 is 26-fold below CMEC (adjusted p = 0.0009), yet miR-18a is up only 1.79-fold and miR-19a 1.05-fold, neither significant. So in the very cell where the reporter was tested, these two miRNAs can hardly be what takes ESR1 away. The line was picked because of its low endogenous miRNA levels, which gives a clean background against which to see the effect of added miRNA, and as experimental design that is sensible. The same choice also tells you that the loss of ESR1 in CMT28 comes from somewhere else. CMT47 looks similar, with ESR1 70-fold down, miR-18a 3.60-fold and miR-19a 1.75-fold up, neither significant.

## Repression in a well

For the reporter experiment, the team joined three pieces of the ESR1 3'UTR into one 859-base-pair insert. The pieces contained predicted seed-match sites for miR-18a and miR-19a, and the insert was cloned downstream of a secreted Gaussia luciferase gene. A mutant version, 837 base pairs long, had the three seed sites deleted.

TargetScan positions show how much of the 3'UTR the construct represents. For miR-18a, conserved sites lie at 1817-1824 and 4047-4053, with a poorly conserved site at 650-656. For miR-19a, conserved sites lie at 3585-3591 and 4044-4050. The 3'UTR is therefore at least 4,000 bases long, and the three fragments in the insert (308, 307 and 244 base pairs) cover a small part of it. The third fragment carries overlapping predicted sites for both miRNAs, since the miR-18a and miR-19a sites lie on top of each other around 4044-4053. Because all three sites were deleted together in the mutant, the experiment cannot say which of them carries the effect.

The assay ran in CMT28 cells. Luciferase activity was divided by the activity of co-secreted alkaline phosphatase (SEAP) to correct for transfection efficiency, and the reporter-only condition was set to 1.

With the wild-type insert, miR-18a lowered activity by an average of 0.397 units relative to the control miRNA (95% CI −0.717 to −0.077, p = 0.0334). miR-19a lowered it by 0.428 units (95% CI −0.609 to −0.248, p = 0.0094). With the mutant insert, neither did anything: +0.078 for miR-18a (p = 0.3467) and +0.004 for miR-19a (p = 0.9617). The interaction between construct and miRNA was significant (F(2,4) = 17.89, p = 0.0101). The two tests that compare wild-type against mutant directly stayed at 0.0492 after Holm correction (raw values 0.0391 for miR-18a and 0.0246 for miR-19a). With three independent runs, that is a result sitting just under the threshold, and one run drifting the other way could change the picture. A repeat with more independent runs, ideally on different days with fresh plasmid preparations, would be worth more here than yet another cell line.

Antisense inhibitors (anti-miRs) restored part of the activity, by 0.205 units for anti-miR-18a and 0.279 units for anti-miR-19a. The rescue stayed partial, and a full return to baseline would have made a stronger case.

The mutant control is what carries this paper, and it is worth saying so plainly. If deleting the seed sites erases the effect, the repression depends on those sites, and that is what separates a repression result from a mere prediction of the targeting software. The authors say clearly what is and is not shown. The insert covers selected regions of the 3'UTR, so the "WT" label means unmodified fragments and not the whole native sequence. A reporter assay shows that a construct can be repressed. It does not show that endogenous ESR1 mRNA or ERα protein falls when these miRNAs rise in a tumour cell.

## A reference gene, a missing control and n = 3

Almost every criticism below comes from the authors' own limitations paragraph.

For miRNA qPCR, U6 snRNA served as the endogenous reference, chosen because an earlier canine mammary tumour study had used it. The mRNA reference gene was also taken from earlier cell-line work. Of the mRNA reference gene the authors write:

> we did not formally compare its stability with other reference genes

I think this is the weakest link in the normalisation. Every ΔCt value stands on the stability of its reference, and when stability has not been tested across the cell lines, part of a 70-fold ESR1 difference could be produced by a drifting reference. That is a possibility and not evidence. It is still the uncertainty the MIQE guidelines were written to expose, since their purpose is to make a reader able to judge a qPCR result from the full disclosure of conditions and analysis methods (Bustin et al., 2009). The problem here is not hidden detail. The stability test is missing. Normalisation of miRNA qPCR data is a technical challenge in its own right (Benes and Castoldi, 2010), and U6 is a small nuclear RNA with different biology from a mature miRNA.

Numbers make the risk concrete. A 70-fold difference corresponds to a ΔΔCt of about 6.1 cycles (log₂ 70 ≈ 6.13). A shift of one cycle in the reference across the cell lines would double or halve the calculated fold change. The $2^{-\Delta\Delta C_t}$ calculation also assumes that the product doubles exactly in every cycle, and the authors' own standard curves say otherwise: amplification efficiency was 104.6% and 105.3% for the two mRNA assays and 105.1% for miR-18a, but 90.4% for miR-19a and 91.9% for U6. At 90% efficiency each cycle multiplies the product 1.90-fold, and a difference of three cycles gives about 6.9-fold instead of 8-fold. That is plain arithmetic. It does not invalidate anything, but it moves the size of the miR-19a fold changes a little. I also could not find a value for RNA integrity (a RIN, say) in the methods; purity was screened only by requiring an A260/A280 ratio between 1.8 and 2.0.

A comparison helps here. Chauhan and colleagues, who profiled seminal plasma vesicle miRNAs in Sahiwal bulls, considered miR-23a, miR-26a and U6 as reference candidates and dropped all three after RefFinder ranked them as less stable across biological samples (Chauhan et al., 2024). If U6 failed that test once, it should not be assumed to pass in another tissue and species.

The second gap is the anti-miR experiment, which has no non-targeting control oligonucleotide. Activity rose when the anti-miR was added, but an extra oligonucleotide and transfection step can by themselves shift activity. The authors acknowledge this.

The third is verification of the miRNA vectors. In these vectors the precursor miRNA and a fluorescent protein (eGFP or mCherry) come from the same promoter. Seeing fluorescence gives indirect evidence that the vector works. Mature miR-18a and miR-19a levels were not measured directly, and the efficiency of the inhibitors was not measured either.

The fourth is sample size. The reporter experiments consist of three independent runs, each with two wells per condition and each well read twice, and the statistical unit is the run, so n = 3. That explains the wide intervals: the lower bound for miR-18a, −0.077, almost touches zero. The normal reference is a single dog. Cell line identity was not authenticated in this study, and routine mycoplasma testing was not performed.

None of this invalidates the work. It does move the wording from "evidence" to "first sign".

In fairness, a good deal was done carefully on the bench. No-reverse-transcription and no-template controls were included in every qPCR run, a melt curve was recorded, and the ESR1 amplicon was verified by Sanger sequencing. The tumour lines were used between passages 20 and 50, and the CMEC culture was kept below passage 15. What is missing is that the same care did not reach the choice of reference or the control oligonucleotide, and a reader who sees the controls that were run may overestimate the ones that were not.

## The same axis in human tissue

The role of miR-18a in human breast cancer seems to depend on hormone receptor status. Nair and colleagues report low miR-18a in ER-negative tumours, linked to an enrichment of hybrid epithelial/mesenchymal cells, and they describe a dual, subtype-specific role (Nair et al., 2024). So a one-directional "ERα suppressor" role is hard to draw for miR-18a.

In other tissues ESR1 and miR-18a run in opposite directions. In the adipose tissue of obese people, ESR1 mRNA correlated negatively with hsa-miR-18a-5p (rs = −0.444) (Koźniewski et al., 2022). In bladder cancer, miR-18a-5p was up and ESR1 down in tissues from 118 patients, and a dual-luciferase assay showed that miR-18a-5p targets ESR1 directly (Gao et al., 2026). Low miR-18a in ER-negative breast tumours, an inverse relation in fat and bladder, and a messy picture in four dog cell lines: I see little reason for surprise.

A review of miRNAs as diagnostic and prognostic markers in canine mammary tumours stresses the field's limitations and the work needed before findings reach the clinic (Ferreira et al., 2024). Goyal and Bird stay in that lane. They do not claim diagnostic or therapeutic use for these miRNAs and write that it would need further validation. Their group had earlier reported higher circulating miR-18a in dogs with mammary carcinoma in association with lymphatic invasion, which explains the interest in this particular miRNA.

One practical detail deserves a mention. The inhibitors were designed against human miRNAs, but the mature sequences of miR-18a-5p and miR-19a-3p are identical in humans and dogs, so they also pair with the canine miRNAs. Sequence conservation is one of the few conveniences that make cross-species experiments easy.

The next experiment is the one the authors propose: does endogenous ESR1 come back when the miRNAs are inhibited? CMT27 is the natural candidate, with low ESR1 and both miRNAs significantly raised. If an anti-miR lifts endogenous ESR1 there, the reporter result will have moved from the well into a cell. If it does not, the distance between silencing in a well and silencing in a tumour will have been measured again.

## References

1. Goyal D, Bird RC. (2026). MicroRNA regulation of the estrogen receptor alpha 3′UTR in canine mammary tumor (CMT28) cells. *Veterinary Sciences*, 13(10), 1071. [doi:10.3390/vetsci13101071](https://doi.org/10.3390/vetsci13101071) · PMID: 42944166
2. Bustin SA, Benes V, Garson JA, et al. (2009). The MIQE guidelines: minimum information for publication of quantitative real-time PCR experiments. *Clinical Chemistry*, 55(4), 611-622. [doi:10.1373/clinchem.2008.112797](https://doi.org/10.1373/clinchem.2008.112797) · PMID: 19246619
3. Benes V, Castoldi M. (2010). Expression profiling of microRNA using real-time quantitative PCR, how to use it and what is available. *Methods*, 50(4), 244-249. [doi:10.1016/j.ymeth.2010.01.026](https://doi.org/10.1016/j.ymeth.2010.01.026) · PMID: 20109550
4. Ferreira T, Gil da Costa RM, Dias F, et al. (2024). Exploring the role of microRNAs as diagnostic and prognostic biomarkers in canine mammary tumors. *GeroScience*, 46(6), 6641-6657. [doi:10.1007/s11357-024-01260-7](https://doi.org/10.1007/s11357-024-01260-7) · PMID: 38954129
5. Nair MG, Mavatkar AD, Naidu CM, et al. (2024). Elucidating the role of microRNA-18a in propelling a hybrid epithelial-mesenchymal phenotype and driving malignant progression in ER-negative breast cancer. *Cells*, 13(10), 821. [doi:10.3390/cells13100821](https://doi.org/10.3390/cells13100821) · PMID: 38786043
6. Koźniewski K, Wąsowski M, Jonas MI, et al. (2022). Epigenetic regulation of estrogen receptor genes' expressions in adipose tissue in the course of obesity. *International Journal of Molecular Sciences*, 23(11), 5989. [doi:10.3390/ijms23115989](https://doi.org/10.3390/ijms23115989) · PMID: 35682668
7. Gao C, Cao X, Miao L, et al. (2026). lncRNA FENDRR as a prognostic biomarker and regulator of bladder cancer progression via the miR-18a-5p/ESR1 axis. *Journal of Environmental Pathology, Toxicology and Oncology*, 45(1), 1-12. [doi:10.1615/JEnvironPatholToxicolOncol.2025056717](https://doi.org/10.1615/JEnvironPatholToxicolOncol.2025056717) · PMID: 41662675
8. Chauhan V, Kashyap P, Chera JS et al. (2024). Differential abundance of microRNAs in seminal plasma extracellular vesicles (EVs) in Sahiwal cattle bull related to male fertility. *Frontiers in Cell and Developmental Biology*, 12, 1473825. [doi:10.3389/fcell.2024.1473825](https://doi.org/10.3389/fcell.2024.1473825) · PMID: 39411484
