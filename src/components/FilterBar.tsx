import { AnimatedCard } from './AnimatedCard';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder?: string;
}

export const FilterBar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  placeholder = "Search..."
}: FilterBarProps) => {
  return (
    <div className="mb-12 space-y-6">
      <AnimatedCard>
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-text"
        />
      </AnimatedCard>

      <AnimatedCard>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-text'
                  : 'bg-primary/20 text-text hover:bg-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
};