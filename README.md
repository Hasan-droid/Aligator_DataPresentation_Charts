# Data Visualization Project

This project is designed to visualize data using various chart types such as line graphs, bar charts, and pie charts. It leverages libraries like ECharts and React to create interactive and dynamic data visualizations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)

## Features

- Interactive line graphs, bar charts, and pie charts
- Dynamic data visualization with ECharts
- Responsive design with Chakra UI
- TypeScript for type safety
- Easy configuration and customization

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Hasan-droid/Aligator_DataPresentation_Charts
cd Aligator_DataPresentation_Charts
npm install
```

## Usage

To run the project locally, use the following command:

```
npm run dev
```

This will start the development server and open the project in your default web browser.

## File Structure

The project structure is organized as follows:
data-visualization-project/
├── public
├── src/
│ ├── assets/
│ │ └── images/
│ ├── chartsConfigs/
│ │ ├── horizontalChartConfig.ts //configurations for stacked horizontal chart
│ │ ├── lineGraphConfig.ts //configurations line graph chart
│ │ ├── pieChartConfig.ts //configurations for pie chart
│ │ ├── verticalChartConfig.ts //configurations for vertical stacked chart
│ ├── components/
│ │ ├── ChartContainer.tsx //universal container used to display chart in all components
│ │ ├── HorizontalChart.tsx
│ │ ├── MainLayout.tsx // the main layout of the app contains nav bar
│ │ ├── Pie.tsx
│ │ ├── PieChartsGrid.tsx // displays 3 pie chart each row
│ │ ├── VerticalChart.tsx
│ ├── data/ //visualized data in the charts
│ │ ├── Engagement.json
│ │ ├── EstimatedReach.json
│ │ ├── PostsOverTime.json
│ │ ├── Ranking.json
│ │ ├── ShareOfVoice.json
│ ├── styles/
│ │ │ ├── App.css
│ │ │ ├── index.css
│ ├── theme/ // custom theming
│ │ ├── chakra/ chakra css framework
│ │ │ ├── customTheme.ts // custom main theme of the app
│ │ │ ├── styles.ts // reusable bulks of theming properties
│ ├── types/
│ │ ├── charts/
│ │ │ ├── horizontalChartTypes.ts
│ │ │ ├── lineGraphTypes.ts
│ │ │ ├── pieChartTypes.ts
│ │ │ ├── verticalTypes.ts
│ ├── utils/ //global used functions
│ │ ├── dateUtils.ts
│ ├── App.tsx
│ ├── index.tsx
│ ├── Router.tsx // routes of the app
├── package.json
├── README.md
