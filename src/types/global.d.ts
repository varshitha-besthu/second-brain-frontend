declare global {
    interface Window {
      twttr?: {
        widgets: {
          load: (element?: HTMLElement) => void;
          createTweet: (id: string, element: HTMLElement, options?: object) => Promise<any>;
        };
      };
    }
  }