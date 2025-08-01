// src/components/TwitterEmbedBasic.tsx
import { useEffect } from 'react';

interface TwitterEmbedBasicProps {
  tweetUrl: string;
  className?: string;
}

/**
 * Basic Twitter embed using blockquote method
 * @param tweetUrl - The full URL of the tweet (supports both x.com and twitter.com)
 * @param className - Optional CSS class for the container
 */
const TwitterEmbedBasic = ({ tweetUrl, className }: TwitterEmbedBasicProps) => {
  useEffect(() => {
    // Type-safe check for Twitter's widget loader
    const twttr = (window as typeof window & { twttr?: any }).twttr;
    
    if (twttr?.widgets?.load) {
      twttr.widgets.load();
    } else {
      // Load Twitter widgets script if not already loaded
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }
  }, []);

  // Normalize URL (handle both x.com and twitter.com)
  const normalizedUrl = tweetUrl.replace(/x\.com\//, 'twitter.com/');

  return (
    <div className="my-tweet-embed">
      <blockquote className="twitter-tweet bg-red-400">
        <a href={normalizedUrl}></a>
      </blockquote>
    </div>
  );
};

export default TwitterEmbedBasic;