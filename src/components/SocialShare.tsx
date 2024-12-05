import { Linkedin, Link as LinkIcon } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { toast } from 'sonner';

interface SocialShareProps {
  url: string;
  title: string;
  summary?: string;
}

export const SocialShare = ({ url, title, summary = '' }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy link');
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text/60 hover:text-[#000000] transition-colors"
        aria-label="Share on X (Twitter)"
      >
        <FaXTwitter size={18} />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text/60 hover:text-[#0077B5] transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <button
        onClick={copyToClipboard}
        className="text-text/60 hover:text-primary transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
};