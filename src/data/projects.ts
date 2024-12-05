import PortfolioOptimizationImage from "./Project_Images/Portfolio Optimization (ETH-USD).webp";
import StataWorkflowImage from "./Project_Images/coding-laptop-coffee.webp";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  date: string;
  content: string;
}

export const projects: Project[] = [

  {
    id: "portfolio-optimization",
    title: "Portfolio Optimization and Performance Analysis",
    description: "Exploring portfolio optimization and risk-return tradeoffs through Python-driven financial modeling and data visualization.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Data Analysis"],
    image: PortfolioOptimizationImage,
    date: "December 15, 2020",
    content: `
    <div class="project-content space-y-6">
      <h2 class="text-2xl font-bold text-text">Portfolio Optimization and Performance Analysis</h2>
      <p class="text-text leading-relaxed">
        This project, developed as part of my Master's thesis in Finance, marked the first time I deeply explored cryptocurrency markets, simulations, and research. It played a fundamental role in shaping and sharpening my skills and interests in data analysis, coding, and research. The work bridges advanced financial theory with practical applications, offering actionable insights into investment strategy design and evaluation.
      </p>
  
      <h3 class="text-xl font-semibold text-text">Key Highlights</h3>
      <ul class="list-disc pl-5 space-y-2 text-text">
        <li><strong>Portfolio Optimization:</strong> Techniques include Monte Carlo simulations, efficient frontier construction, and optimization for maximum Sharpe ratio and minimum variance portfolios.</li>
        <li><strong>Performance Metrics:</strong> Analyzed Sharpe Ratio, Treynor Ratio, Jensen's Alpha, and Beta for risk-adjusted performance.</li>
        <li><strong>Data Visualization:</strong> Created efficient frontier plots, allocation charts, and heatmaps for correlation matrices.</li>
        <li><strong>Statistical Testing:</strong> Conducted robust T-tests to compare portfolio performance against benchmarks.</li>
      </ul>
  
      <h3 class="text-xl font-semibold text-text">Challenges Addressed</h3>
      <p class="text-text leading-relaxed">
        The project overcame significant challenges, including:
      </p>
      <ul class="list-disc pl-5 space-y-2 text-text">
        <li>Managing and processing complex datasets.</li>
        <li>Bridging theoretical finance with practical Python-based applications.</li>
        <li>Conducting statistically valid comparisons of portfolio strategies.</li>
      </ul>
  
      <h3 class="text-xl font-semibold text-text">Practical Applications</h3>
      <ul class="list-disc pl-5 space-y-2 text-text">
        <li><strong>For Investors:</strong> Optimize portfolios and analyze risk-return tradeoffs.</li>
        <li><strong>For Researchers:</strong> A resource for exploring portfolio theory.</li>
        <li><strong>For Learners:</strong> A guide to understanding financial modeling and visualization.</li>
      </ul>
  
      <p class="text-text leading-relaxed">
        Explore the complete code and visualizations:
        <a
          href="https://github.com/zeinalamah/Portfolio-Analysis-Project"
          target="_blank"
          class="text-primary font-semibold hover:underline"
        >
          View on GitHub
        </a>.
      </p>
    </div>
  `
  },

  {
    id: "stata-workflow",
    title: "Stata Workflow and Custom Commands",
    description: "Streamlining econometric research through structured workflows and reusable Stata commands to enhance efficiency, accuracy, and reproducibility.",
    technologies: ["Stata", "Econometric Analysis", "Workflow", "Automation", "Research"],
    image: StataWorkflowImage,
    date: "18 November, 2024",
    content: `
      <div class="project-content space-y-6">
      <h2 class="text-2xl font-bold text-text">Stata Workflow and Custom Commands</h2>
      <p class="text-text leading-relaxed">
        During my work as a research assistant, I developed this workflow to tackle repetitive tasks, standardize outputs, and boost my productivity as a researcher. It served as a practical solution for managing large datasets and ensuring consistent, reproducible results. I hope that by sharing this project, others can benefit from my approach, enabling them to optimize their own research workflows and boost their productivity.
      </p>
      
      <h3 class="text-xl font-semibold text-text">Key Highlights</h3>
      <ul class="list-disc pl-5 space-y-2 text-text">
        <li><strong>Custom Commands:</strong> Automates tasks like variable transformations, regression analysis, and exporting results into Word documents.</li>
        <li><strong>Structured Workflow:</strong> Demonstrates a complete research workflow using the World Bank Enterprise Survey dataset as an example.</li>
        <li><strong>Reproducibility:</strong> Ensures consistency and accuracy by embedding best practices into reusable scripts.</li>
      </ul>

      <h3 class="text-xl font-semibold text-text">Challenges Addressed</h3>
      <p class="text-text leading-relaxed">
        This project tackles key challenges faced by researchers, including:
      </p>
      <ul class="list-disc pl-5 space-y-2 text-text">
        <li>Automating repetitive tasks to save time and reduce errors.</li>
        <li>Standardizing outputs for consistent and reproducible research results.</li>
        <li>Integrating advanced workflows with accessible tools to streamline econometric analysis.</li>
      </ul>

      <p class="text-text leading-relaxed">
        Explore the workflow and custom commands in detail:
        <a
          href="https://github.com/zeinalamah/Stata-Workflow-Custom-Commands"
          target="_blank"
          class="text-primary font-semibold hover:underline"
        >
          View on GitHub
        </a>.
      </p>
    </div>
  `
  }
  
  

];