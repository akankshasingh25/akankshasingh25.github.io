---
layout: post
title: Multilingual and Multicultural Evaluation in the Indian Context
date: 2025-09-10 16:40:16
description: 
tags: NLP, LLMs, Multilingual, Multicultural, India
categories: InclusiveAI

---

**India’s linguistic diversity and cultural heterogeneity** present both a significant opportunity and a complex challenge for the evaluation of large language models (LLMs). With 22 constitutionally recognised languages and hundreds of dialects across four major language families, Indian languages exhibit differences in syntax and semantics. Coupled with this are the elements of cultural representation, which span across ideational, linguistic, and social branches [1]. Cultural evaluation is not limited to factual correctness but also includes other quantifiable aspects such as specificity, coherence, and connotation, often evaluated through the intangible lived experiences and situated knowledge of individuals. These actualities emphasise the need for multilingual and multicultural evaluation. This essay explores the current state of such evaluation in the Indian context, identifies methodological and conceptual limitations, and proposes recommendations based on recent developments.

**Multilingual evaluation** examines how well LLMs perform on tasks such as translation, summarisation, and question answering across languages. Current multilingual evaluation benchmarks remain predominantly English-centric and echo Western views. For example, GMMLU [2] found that 28% of questions in MMLU require culturally specific knowledge, with nearly 85% grounded in North American or European contexts. When these benchmarks are translated for multilingual use, cultural nuances are lost and translation artifacts are introduced. “Risks of Cultural Erasure in Large Language Models” [3] argues that such translation-based benchmarks contribute to cultural erasure by either omitting non-Western cultures or oversimplifying them into stereotypes. PARIKSHA [4] also highlights the problem of contamination of many benchmarks in LLM pre-training data. As a result, effective multilingual evaluation demands diverse, original-language datasets, robust metrics tailored to each language’s structural characteristics, and human-involved assessments for validation.

Some **multicultural benchmarks** use language as a proxy for culture. However, the Indian context defies the reductive language-culture mapping often assumed in multicultural evaluations. As “Survey of Cultural Awareness in Language Models” [5] notes, linguistic diversity does not necessarily align with cultural boundaries. Thus, language alone is insufficient as a cultural proxy, necessitating a concurrent focus on multicultural evaluation. Culture can be expressed in two ways, one using thick and thin descriptors as mentioned in “Towards Measuring and Modeling ‘Culture’ in LLMs: A Survey” [6] and the other by classifying culture into ideational, linguistic, and social branches, as highlighted in “Culturally Aware and Adapted NLP” [7]. The first paper explains how Geertz and Bourdieu differentiate between the thin and thick descriptors of culture by assessing not only what is represented, but also how and from whose perspective. A thin description — e.g., “Group X believes Y” — may document external behavior, but misses the actor’s lived experience. Thick descriptions contextualize those beliefs within sociohistorical, emotional, and moral worlds. And the second paper expands on the concepts of Murdock and White, which posits that culture operates ideationally (values, beliefs), linguistically (registers, dialects), and socially (interaction patterns), each branch carrying distinct evaluative imperatives.

**Emerging evaluations and benchmarks** in India reflect these layered complexities. IndicGenBench [8] is a human-curated benchmark spanning 29 Indic languages, 13 scripts, and 5 tasks, including summarization, machine translation, and question answering. BharatBench [9], on the other hand, explicitly incorporates culturally sensitive classification tasks that are text classification, multi-turn comprehension, multi-turn translation, grammar correction, and Indian cultural context. IndicQA [10] and L3Cube-IndicQuest [11] expand this lens to factual and contextual knowledge retrieval in 11–19 Indic languages. These benchmarks collectively help surface structural disparities in model performance across linguistic orders. Recent work has also sought to account for cultural knowledge categories. GMMLU [12] partitions its multilingual benchmark into culturally sensitive and agnostic subsets, capturing cultural knowledge, geographical knowledge, or dialect knowledge. Likewise, NORMAD [13] evaluates social acceptability across gradients of norm specificity, offering a formalization of cultural adaptability. DOSA [14], a dataset capturing regionally grounded social artifacts, exemplifies grounded multicultural evaluation by embedding meaning within place and practice.

While these evaluations account for a better representation of the complexities highlighted previously, **issues** like overreliance on translated datasets from English and widespread hybridism remain underrepresented. For instance, the former, overreliance on translated datasets from English, leads to linguistic and cultural flattening. Studies such as “Better To Ask in English?” [15] show that LLMs like GPT-4o, Gemma, and LLaMA exhibit higher factual accuracy when questions are posed in English versus their Indic equivalents, revealing both training bias and contextual loss in translation. The latter, hybridism, is seen through instances of code-switching, morphological flexibility, and orthographic variation, but remains unaddressed. For instance, the phonological and orthographic opacity present in English is structurally distinct from the transparency of most Indic scripts, a point rarely reflected in evaluation practices. Pragmatic and paralinguistic dimensions such as sarcasm, politeness, and gesture-linked speech are absent in nearly all evaluation pipelines. Indian communicative practices often rely on context, non-verbal cues, and localized metaphors, which are not captured by syntactic correctness or BLEU scores.

This underscores the importance of meta-evaluation initiatives. Efforts like METAL [16] and HERCULE [17] begin to formalize this by assessing LLM evaluators through native speaker judgments and cross-lingual prompt-response pairs. METAL, for instance, utilizes summarization tasks in 10 languages to compare native judgments with LLM-based scores, while HERCULE generates English-language feedback for instructions and responses provided in other languages, thereby bypassing the need for reference translations.

For these efforts to be effective, the **solutions** proposed must be equally multi-layered with clear calls to action. Participatory benchmarking, as seen in BharatBench and DOSA, ensures that evaluation schemes are not externally imposed but contextually constructed. Benchmarks must prioritize original prompts in the target language over translations; if translation is necessary, it must be post-edited and evaluated for faithfulness. At the same time, qualitative, human-in-the-loop evaluations remain essential, particularly for culturally grounded tasks that cannot be adequately captured by automated metrics alone. To fairly assess performance, results must be disaggregated by language and task, enabling use-case-dependent usage of models. Incorporating statistical significance testing and standardizing metrics across tasks helps mitigate distortion caused by outliers, varying scales, and uneven data distributions.

Lastly, evaluation pipelines require version control and open-source collaboration. Releasing artifacts such as prompt templates, annotated outputs, and scoring rubrics supports reproducibility and peer validation. Moreover, establishing a unified, multicultural evaluation framework is essential to consolidate fragmented efforts. This starts with collaboratively defining “culture” in research terms, drawing from social sciences and linguistics, and embedding that definition into evaluation design.

In summary, multilingual and multicultural evaluation in the Indian context is not a case of simple coverage or translation quality. It requires a fundamental reconceptualization of what it means to represent, interpret, and respect linguistic and cultural knowledge. As models become increasingly embedded in real-world applications, ensuring that they perform responsibly across India’s many voices and worldviews is not merely a technical challenge but an ethical imperative.

---

## References
[1] Liu, Gurevych, and Korhonen. Culturally Aware and Adapted NLP.  
[2] Singh et al. Global MMLU.  
[3] Qadri et al. Risks of Cultural Erasure in Large Language Models.  
[4] Watts et al. PARIKSHA.  
[5] Pawar et al. Survey of Cultural Awareness in Language Models.  
[6] Adilazuarda et al. Towards Measuring and Modeling “Culture” in LLMs: A Survey.  
[7] Liu (n 1).  
[8] Singh et al. IndicGenBench.  
[9] Krutrim AI Team. BharatBench: Comprehensive Multilingual Multimodal Evaluations of Foundation AI Models for Indian Languages.  
[10] Singh et al. IndicQA Benchmark.  
[11] Rohera et al. L3Cube-IndicQuest: A Benchmark Question Answering Dataset for Evaluating Knowledge of LLMs in Indic Context.  
[12] Singh (n 2).  
[13] Rao et al. NORMAD: A Framework for Measuring the Cultural Adaptability of Large Language Models.  
[14] Seth et al. DOSA: A Dataset of Social Artifacts from Different Indian Geographical Subcultures.  
[15] Rohera et al. Better To Ask in English?  
[16] Hada et al. METAL: Towards Multilingual Meta-Evaluation.  
[17] Doddapaneni et al. Cross-Lingual Auto Evaluation for Assessing Multilingual LLMs.  


