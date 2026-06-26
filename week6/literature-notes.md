Here is a numbered list of the papers included in this notebook, featuring their publication years, titles, and brief descriptions:

1. **2024** - **A Survey of Deep Learning and Foundation Models for Time Series Forecasting**: This survey provides a comprehensive review of advanced deep learning architectures, such as transformers and graph neural networks, and examines how foundation models can be utilized to improve pandemic preparedness and prediction.
2. **2024** - **Analyzing the Effectiveness of a System of Equation Model in Comparison to Single Equation Models for Predicting General Price Level in Cambodia**: This study evaluates the accuracy of SARIMAX and VAR models in predicting Cambodia's inflation rate, concluding that the single-equation SARIMAX model is more effective at capturing the complex dynamics of the local economy.
3. **2026** - **Beyond Inventory Logic: Social Stress Indicators and Demand Forecasting in Consumer Supply Chains**: This research demonstrates that demand forecasting in consumer supply chains can be significantly improved during turbulent periods by incorporating social stress indicators, such as unemployment and income growth, into a socio-technical SARIMAX model.
4. **2024** - **Comparing Time Series Predictions of COVID-19 Deaths Using SARIMAX, Neural Network, and XGBoost**: This research evaluates three different forecasting models to identify the most accurate method for predicting global COVID-19 mortality trends, finding that XGBoost provides superior accuracy for short-term forecasting.
5. **2025** - **Hybrid Forecasting of University Electricity Demand Using Time Series and Deep Learning**: This study introduces a hybrid SARIMAX-LSTM framework that integrates weather data and academic calendars to accurately forecast electricity consumption for institutional facilities.
6. **[Year not available]** - **SARIMAX-Based Framework for S&P 500 Forecasting with Macroeconomic Indicators**: Although the source material is inaccessible due to a technical error, the title indicates a research project focused on creating a forecasting framework for the S&P 500 index using the SARIMAX model and macroeconomic data.
7. **2023** - **Seasonal Autoregressive Integrated Moving Average for Climate Change Time Series Forecasting**: This study investigates the application of ARIMA and SARIMAX models to analyze and predict the effects of climate change by accounting for trends, seasonality, and exogenous variables.
8. **2025** - **Seasonal Autoregressive Integrated Moving Average with Exogenous Variables Intervention Analysis: Application to the South African Tourism Industry**: This paper applies a SARIMAX intervention model to quantify the negative economic ramifications of the COVID-19 pandemic on South Africa's tourism sector and to forecast its recovery trajectory.

NotebookLM Output:

Based on the papers in this library, here are the three main research themes and the primary open questions in the field of time series forecasting, particularly as it relates to pandemic preparedness and complex systems.

### **Main Research Themes**

1.  **Comparative Analysis and Hybridization of Models**
    A recurring theme is the evaluation of traditional statistical models versus modern machine learning (ML) and deep learning (DL) techniques.
    *   **SARIMAX as a Robust Baseline:** Several papers establish **SARIMAX** as a powerful and competitive model, especially when training data is limited.
    *   **ML/DL for Complex Patterns:** Techniques like **XGBoost**, **Neural Networks**, and **LSTMs** are explored for their ability to capture non-linear relationships and long-term dependencies that traditional models might miss.
    *   **Synergy through Hybridization:** There is a strong focus on **hybrid frameworks**—such as combining SARIMAX with LSTM—to leverage the statistical rigor of seasonal decomposition while utilizing the non-linear pattern recognition of deep learning.

2.  **Integration of Contextual and Exogenous Variables**
    Research across these papers emphasizes that time series data should not be treated as a "purely technical exercise" isolated from external reality.
    *   **Socio-Technical Indicators:** One study demonstrates that incorporating **social stress indicators** (like unemployment and income growth) significantly improves consumer demand forecasting during turbulent periods like the Global Financial Crisis.
    *   **Domain-Specific Inputs:** Other papers successfully integrate **weather variables**, **monetary aggregates**, and **academic calendars** to refine forecasts for electricity demand and economic price levels.
    *   **Intervention Analysis:** Models are increasingly used to quantify the impact of "shocks," such as using **pulse functions** in SARIMAX to measure the precise economic loss and recovery trajectory of the tourism industry following COVID-19 lockdowns.

3.  **Foundation Models and Knowledge Enhancement**
    A major theme, particularly in recent surveys, is the shift toward models that can generalize across different time series domains.
    *   **Repurposed LLMs:** Research is investigating how **Large Language Models (LLMs)** like GPT can be repurposed for time series by converting numerical patches into tokens.
    *   **Knowledge Graphs:** There is a move toward **Knowledge-Enhanced Deep Learning**, where external scientific knowledge (e.g., from the CORD-19 dataset) or **Knowledge Graphs** are injected into models to improve accuracy and check the "reasonableness" of forecasts.

---

### **Main Open Questions in the Area**

*   **Universality of Foundation Models:** While LLMs have revolutionized natural language, it remains an open question whether **universal patterns** exist across disparate time series domains (e.g., whether a model trained on stock market data can meaningfully improve pandemic predictions).
*   **The "Explainability" Gap:** As models become more complex (e.g., multi-layered Transformers), **interpretability** remains a major challenge. Researchers are still looking for the best ways to explain *why* a model reached a specific forecast to increase user confidence during crises.
*   **Effective Knowledge Injection:** While the potential for using Knowledge Graphs is clear, the most effective **injection techniques**—whether to use composite loss functions, factor knowledge into attention mechanisms, or inject it into downstream layers—is an area of ongoing research.
*   **Data Scarcity at the Start of Events:** A critical problem for pandemic preparedness is the **shortness of time series** during the early, most dangerous stages of an outbreak. Research is exploring how **self-supervised learning** and **data augmentation** can mitigate the lack of early-stage training data.
*   **Optimal Fine-Tuning Strategies:** Identifying the most efficient combination of **Parameter Efficient Fine-Tuning (PEFT)** techniques (like LoRA or Sparse Fine-Tuning) specifically for time series foundation models is still a developing field.