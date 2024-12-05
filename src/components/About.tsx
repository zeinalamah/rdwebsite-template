import { AnimatedCard } from './AnimatedCard';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedCard>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <img 
                src="/zein-alamah.webp"
                alt="Zein Alamah"
                className="rounded-2xl shadow-xl w-full aspect-square object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-[#F7F8F8] mb-8">About Me</h2>
              <div className="prose prose-lg text-[#F7F8F8]/80">
              <p className="mb-6">
              With dual master’s degrees in applied economics and finance, I leverage expertise in economics, finance, and data analysis to deliver actionable strategies that resolve critical challenges and drive sustainable growth. My work combines academic rigor with practical application, enabling organizations to make informed decisions in complex environments.
</p>
<p className="mb-6">
In my consulting role, I developed operational strategies for a leading organization in the F&B industry. I designed evaluation methodologies for large-scale social development initiatives, providing frameworks to assess progress and impact. I have authored numerous reports and presentations and created hundreds of data visualizations, simplifying complex information into actionable insights using Python and Stata.
    </p>
<p className="mb-6">
Academically, I served as a Research Assistant at the Lebanese American University, where I published three peer-reviewed articles in prestigious journals such as Computational Economics and Economics Letters. My research spans cryptocurrency pricing, the impact of social media on commodity markets, and international research collaboration. This work earned me the LAU Outstanding Research Award for bridging theoretical research with real-world applications.
    </p>
<p className="mb-6">
I approach problem-solving with curiosity, creativity, and purpose, delivering tailored solutions aligned with organizational goals. My philosophy, "<strong>Generalists rule the world. Keep learning</strong>," reflects my dedication to continuous growth and interdisciplinary exploration, enabling me to push boundaries and develop innovative solutions.
</p>

<p className="mb-6">
By blending a strong academic foundation with hands-on experience, I am committed to helping organizations, particularly in the F&B industry, navigate economic and financial challenges while fostering sustainable growth and long-term success.
</p>

              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};