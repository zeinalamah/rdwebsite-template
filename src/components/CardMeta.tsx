import { Calendar, Clock, Tag, BookOpen } from 'lucide-react';

interface CardMetaProps {
  date: string;
  readTime?: string;
  tags: string[];
  journal?: string;
}

export const CardMeta = ({ date, readTime, tags, journal }: CardMetaProps) => {
  return (
    <div className="mt-auto">
      <div className="flex flex-wrap items-center gap-4 text-sm text-text/60 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          {date}
        </div>
        {readTime && (
          <div className="flex items-center gap-1">
            <Clock size={16} />
            {readTime}
          </div>
        )}
        {journal && (
          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            {journal}
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-text/90 transition-colors"
          >
            <Tag size={12} className="mr-1.5" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};